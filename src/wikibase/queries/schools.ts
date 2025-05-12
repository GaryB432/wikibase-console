import axios from "axios";
import * as process from "process";
import * as wikibaseSDK from "wikibase-sdk";

console.log(JSON.stringify(Object.keys(process), undefined, 1));

const language = "en";
const wbk = wikibaseSDK.WBK({
  instance: "https://www.wikidata.org",
  sparqlEndpoint: "https://query.wikidata.org/sparql",
});

/**
 * Retrieves the schools attended by a given Wikidata entity.
 *
 * @param entityId - The Wikidata entity ID to query.
 * @returns A Promise that resolves to an array of simplified school names, or an empty array if no schools are found.
 */
export async function getSchoolsAttended(
  entityId: wikibaseSDK.EntityId,
): Promise<string[]> {
  try {
    const entityUrl = wbk.getEntities({
      ids: [entityId],
      props: ["claims"],
      format: "json",
    });

    // In a real implementation, you would fetch this URL with axios or fetch
    // For testing, we'll simulate the response directly
    // const entityData = await Promise.resolve({ entities: {} }); // This will be mocked

    // const language = "en";
    // const wbk = wikibaseSDK.WBK({
    //   instance: "https://www.wikidata.org",
    //   sparqlEndpoint: "https://query.wikidata.org/sparql",
    // });

    const { data: entityData } = await axios.get<{
      entities: wikibaseSDK.Entities;
      success: number;
    }>(entityUrl);

    if (!entityData || !entityData.entities || !entityData.entities[entityId]) {
      console.warn(`Entity ${entityId} not found in Wikidata.`);
      return [];
    }

    const entity = entityData.entities[entityId] as wikibaseSDK.Item;

    const claims = entity.claims;

    if (!claims) {
      console.warn(`No claims found for entity ${entityId}`);
      return [];
    }

    const attendedSchoolClaims = claims.P69; // P69 is the property ID for "educated at"

    if (!attendedSchoolClaims) {
      console.warn(
        `No 'educated at' (P69) claims found for entity ${entityId}`,
      );
      return [];
    }

    // console.log(attendedSchoolClaims, "ok now");

    const simplifiedClaims: wikibaseSDK.SimplifiedPropertyClaims =
      wikibaseSDK.simplifyPropertyClaims(attendedSchoolClaims);

    const schoolEntityIds = Array.isArray(simplifiedClaims)
      ? simplifiedClaims.filter(
          (claim): claim is string => typeof claim === "string",
        )
      : [];

    if (schoolEntityIds.length === 0) {
      return [];
    }

    // const schoolEntitiesUrl = mockedGetEntities({
    //   ids: schoolEntityIds.map((c) => c as wikibaseSDK.EntityId),
    //   props: ["labels"],
    //   format: "json",
    // });

    // const entitiesUrl = ''

    const entitiesUrl = wbk.getEntities({
      ids: schoolEntityIds.map<wikibaseSDK.EntityId>(
        (i) => i as wikibaseSDK.EntityId,
      ),
      languages: [language],
      props: ["labels"],
    });

    // In a real implementation, you would fetch this URL with axios or fetch
    // For testing, we'll simulate the response directly
    // const schoolEntitiesData = await Promise.resolve({ entities: {} }); // This will be mocked
    const { data } = await axios.get<{
      entities: wikibaseSDK.Entities;
      success: number;
    }>(entitiesUrl);

    // console.log(data);

    const { entities } = data;

    const schoolNames = Object.values(entities)
      .filter((a) => a.type === "item")
      .map((l) => l.labels)
      .filter((a) => !!a)
      .map((a) => a[language]!)
      .map((a) => a.value);

    // console.log(JSON.stringify(schoolNames, undefined, 8));

    // const aa = Object.values(data.entities)
    //   .filter((g) => g.type === "item")
    //   .map((g) => g.labels);

    // const bb = aa.map((cc) => 5);
    // // const bb = Object.values(aa).map((cc) => 4);

    // console.log(aa);

    // const cc = data.entities;

    // const dd = cc.labels;

    // const schoolNames: string[] = schoolEntityIds.map((schoolEntityId) => {
    //   const entities = data.entities;
    //   const theOne = entities["P22"];
    //   const newLocal = theOne;
    //   const schoolEntity: wikibaseSDK.Entity | undefined = newLocal;
    //   if (schoolEntity?.type === "item") {
    //     return schoolEntity.labels?.en?.value || schoolEntityId;
    //   }
    // });

    return schoolNames;
  } catch (error) {
    console.error(
      `Error fetching data from Wikidata: ${(error as Error).message}`,
    );
    throw error;
  }
}
