import axios from "axios";
import type {
  Entities,
  Entity,
  EntityId,
  InstanceConfig,
  ItemId,
  Wbk,
} from "wikibase-sdk";
import WBK from "wikibase-sdk";

export class DataService {
  private readonly wbk: Wbk;
  public constructor(config: InstanceConfig, private counter: number) {
    this.wbk = WBK(config);
  }
  public add(a: number): number {
    this.counter += a;
    return this.counter;
  }
  // public async getEntities() {}

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
    entityId: ItemId
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

  public async fetchSimpleEntity(
    entityId: ItemId
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
  public greet(name: string): string {
    return `DataService says: hello to ${name}`;
  }
}

const defaultConfig = {
  instance: "https://www.wikidata.org",
  sparqlEndpoint: "https://query.wikidata.org/sparql",
};

export const wikibaseService = new DataService(defaultConfig, 2);
