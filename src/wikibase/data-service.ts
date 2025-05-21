import axios from "axios";
import type {
  Entities,
  Entity,
  EntityId,
  InstanceConfig,
  ItemId,
  SearchResult,
  Wbk,
} from "wikibase-sdk";
import WBK, { isItemId } from "wikibase-sdk";

export type TermRecord = Record<EntityId, string>;

const language = "en";

export class DataService {
  private config: InstanceConfig;
  private readonly wbk: Wbk;
  public constructor(config: InstanceConfig) {
    this.config = config;
    this.wbk = WBK(config);
  }

  public async fetchDetailedEntity(id: EntityId): Promise<Entity | undefined> {
    const entityUrl = this.wbk.getEntities({
      ids: [id],
      props: ["labels", "descriptions", "aliases", "claims", "sitelinks"],
      format: "json",
    });
    const { data: entityData } = await axios.get<{
      entities: Entities;
      success: number;
    }>(entityUrl);

    return entityData.entities[id];
  }

  public async fetchEntitiesWithClaims(
    entityId: ItemId,
  ): Promise<Entity | undefined> {
    const entityUrl = this.wbk.getEntities({
      ids: [entityId],
      props: ["claims"],
      format: "json",
    });
    const { data: entityData } = await axios.get<{
      entities: Entities;
      success: number;
    }>(entityUrl);

    return entityData.entities[entityId];
  }

  public async fetchLabels(
    entityLabelRecord: TermRecord,
    language = "en",
  ): Promise<TermRecord> {
    const ids = Object.keys(entityLabelRecord) as EntityId[];
    if (!ids.every(isItemId)) {
      console.error(JSON.stringify(entityLabelRecord))
      throw new Error('Only Items supported')
    }
    if (ids.length === 0) {
      return {};
    }
    const entitiesUrl = this.wbk.getEntities({
      ids,
      languages: [language],
      props: ["labels"],
    });

    const { data } = await axios.get<{
      entities: Entities;
      success: number;
    }>(entitiesUrl);

    return Object.values(data.entities)
      .filter((e) => e.type === "item")
      .reduce((termAccumulator, item) => {
        let text = `missing term for ${item.title ?? item.id}`;

        if (item.labels) {
          text = item.labels[language]?.value ?? `no ${language} value for ${item.id}`;
        }
        termAccumulator[item.id] = text;
        return termAccumulator;
      }, {} as TermRecord);
  }

  public async fetchSimpleEntity(
    entityId: ItemId,
  ): Promise<Entity | undefined> {
    const entityUrl = this.wbk.getEntities({
      ids: [entityId],
      props: ["claims"],
      format: "json",
    });
    const { data: entityData } = await axios.get<{
      entities: Entities;
      success: number;
    }>(entityUrl);

    return entityData.entities[entityId];
  }

  public async searchForHumans(search: string): Promise<SearchResult[]> {
    const { data } = await axios.get<{
      search: SearchResult[];
      success: number;
    }>(this.getSearchUrl(search).href);

    const resultsWithHumanityFlag = await Promise.all(
      data.search.map(async (result) => ({
        ...result,
        isHuman: await isInstanceOfHuman(result.id),
      })),
    );

    // if (resultsWithHumanityFlag.some(result=>!result.isHuman))
    // {
    //   console.log(resultsWithHumanityFlag)
    // }

    return resultsWithHumanityFlag.filter((result) => result.isHuman);
  }

  private getSearchUrl(search: string): URL {
    const u = new URL("w/api.php", this.config.instance);
    u.searchParams.set("action", "wbsearchentities");
    u.searchParams.set("search", search);
    u.searchParams.set("language", language);
    u.searchParams.set("limit", "5");
    u.searchParams.set("continue", "0");
    u.searchParams.set("format", "json");
    u.searchParams.set("uselang", language);
    u.searchParams.set("type", "item");
    return u;
  }
}

const defaultConfig = {
  instance: "https://www.wikidata.org",
  sparqlEndpoint: "https://query.wikidata.org/sparql",
};

async function isInstanceOfHuman(entityQID: string) {
  try {
    const response = await axios.get(`https://www.wikidata.org/w/api.php`, {
      params: {
        action: "wbgetentities",
        ids: entityQID,
        limit: 6,
        format: "json",
        props: "claims",
      },
    });

    const entities = response.data.entities;

    if (entities && entities[entityQID] && entities[entityQID].claims) {
      const claims = entities[entityQID].claims;
      if (claims.P31) {
        // P31 is the property ID for "instance of"
        return claims.P31.some(
          (claim: { mainsnak: { datavalue: { value: { id: string } } } }) =>
            claim.mainsnak.datavalue.value.id === "Q5",
        );
      }
    }

    return false; // Entity not found or no instance of claim
  } catch (error) {
    console.error("Error fetching Wikidata entity:", error);
    return false;
  }
}

export const wikibaseService = new DataService(defaultConfig);
