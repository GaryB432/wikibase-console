import axios from "axios";
import {
  
  type Entities,
  type EntityId,
  type Item,
  simplifyClaims,
  wikibaseTimeToDateObject,
} from "wikibase-sdk";
import { WIKIDATA_PERSON_PROPERTIES as P } from "./constants.js";
import { type PersonInfo } from "./types.js";

const CONORID: EntityId = "P1280"; // identifier in the National and University Library, Ljubljana database

function claimName(property: string): string {
  return `[prop [${property}]]`;
}

// import axios from "axios";
// import { WB_URL, simplifyClaims, Entity } from "wikibase-sdk"; // Import from wikibase-sdk

// Define the Wikidata entity ID for Albert Einstein.
const einsteinEntityId = "Q937";

/**
 * Retrieves the schools attended by a given Wikidata entity (Albert Einstein in this case).
 * Uses the Wikidata API and wikibase-sdk to simplify the process.
 *
 * @param entityId - The Wikidata entity ID to query.
 * @returns A Promise that resolves to an array of simplified school names, or an empty array if no schools are found.
 */
const getSchoolsAttended = async (entityId: string): Promise<string[]> => {
  try {
    // Construct the URL to query the Wikidata API for the specified entity.
    // WB_URL is provided by wikibase-sdk for the base URL.
    const url = `${WB_URL}/w/api.php?action=wbgetentities&props=claims&ids=${entityId}&format=json`;

    // Make the API request using axios.
    const response = await axios.get(url);

    // The response.data object contains the raw JSON response from the Wikidata API.
    // It has a complex structure, which wikibase-sdk helps to simplify.
    const data = response.data;

    // Check if the entity was found in the response.
    if (!data.entities || !data.entities[entityId]) {
      console.warn(`Entity ${entityId} not found in Wikidata.`);
      return []; // Return an empty array to indicate no schools found.
    }

    const entity: Entity = data.entities[entityId]; // Type from wikibase-sdk

    // Extract the claims for the entity.  Claims are statements about the entity.
    // For "schools attended", the property is P69.
    const claims = entity.claims;

    if (!claims) {
      console.warn(`No claims found for entity ${entityId}`);
      return [];
    }

    const attendedSchoolClaims = claims.P69; // P69 is the property ID for "educated at"

    if (!attendedSchoolClaims) {
      console.warn(
        `No 'educated at' (P69) claims found for entity ${entityId}`
      );
      return [];
    }

    // Simplify the claims data using wikibase-sdk's simplifyClaims function.
    // This converts the complex claim structure into a more manageable format.
    const simplifiedClaims = simplifyClaims(attendedSchoolClaims);

    // Filter out any claims that don't have a simple value (e.g., if the claim is a complex object).
    const schoolEntityIds: string[] = simplifiedClaims.filter(
      (claim): claim is string => typeof claim === "string"
    );

    if (schoolEntityIds.length === 0) {
      return [];
    }

    // Fetch the entity data for the schools (the values of the P69 claims).
    const schoolEntitiesUrl = `${WB_URL}/w/api.php?action=wbgetentities&props=labels&ids=${schoolEntityIds.join(
      "|"
    )}&format=json`;
    const schoolEntitiesResponse = await axios.get(schoolEntitiesUrl);
    const schoolEntitiesData = schoolEntitiesResponse.data;

    // Extract the school names from the entities data.
    const schoolNames: string[] = schoolEntityIds.map((schoolEntityId) => {
      const schoolEntity: Entity | undefined =
        schoolEntitiesData.entities[schoolEntityId];
      // Get the English label, if available.  If not, return the ID.
      return schoolEntity?.labels?.en?.value || schoolEntityId;
    });

    return schoolNames;
  } catch (error) {
    // Handle errors during the API request or data processing.
    if (axios.isAxiosError(error)) {
      console.error(
        `Error fetching data from Wikidata: ${error.message}`,
        error.response?.data
      );
    } else {
      console.error("An unexpected error occurred:", error);
    }
    throw error; // Re-throw the error to be caught by the caller.
  }
};

// Example usage: Call the function and print the results.
(async () => {
  try {
    const schools = await getSchoolsAttended(einsteinEntityId);
    if (schools.length > 0) {
      console.log(`Schools attended by ${einsteinEntityId} (Albert Einstein):`);
      schools.forEach((school) => console.log(`- ${school}`));
    } else {
      console.log(
        `No schools attended found for ${einsteinEntityId} (Albert Einstein).`
      );
    }
  } catch (error) {
    // Handle any errors that occurred during the process.
    console.error("Failed to get schools attended:", error);
  }
})();

export async function handlePropertyClaims(
  entity: Item,
  personInfo: PersonInfo
): Promise<void> {
  for (const propClaims of Object.values(entity.claims ?? {})) {
    for (const claim of propClaims) {
      const { mainsnak } = claim;

      if (!mainsnak.datavalue) {
        return;
      }

      const entityIdSet: Set<EntityId> = new Set();

      switch (mainsnak.datatype) {
        case "external-id": {
          if (mainsnak.datavalue.type === "string") {
            if (mainsnak.property === CONORID) {
              console.log(
                mainsnak.datavalue.value,
                mainsnak.datavalue.value === "7912035"
              );
            }
          }
          break;
        }
        case "wikibase-item": {
          if (mainsnak.datavalue.type === "wikibase-entityid") {
            // console.log(mainsnak.datavalue, "f85");
            entityIdSet.add(mainsnak.datavalue.value.id);
          }
          break;
        }
        case "time": {
          if (mainsnak.datavalue.type === "time") {
            console.log(claimName(mainsnak.property));
            if (mainsnak.property === P.DATE_OF_BIRTH) {
              personInfo.birthYear = wikibaseTimeToDateObject(
                mainsnak.datavalue.value.time
              ).getFullYear();
            }
            if (mainsnak.property === P.DATE_OF_DEATH) {
              personInfo.deathYear = wikibaseTimeToDateObject(
                mainsnak.datavalue.value.time
              ).getFullYear();
            }
          }
          break;
        }
        case "globe-coordinate":
        case "geo-shape":
        case "string":
        case "url":
        case "monolingualtext":
        case "commonsMedia":
        case "quantity": {
          break;
        }
        default: {
          console.error(mainsnak.datatype, "not handled");
          break;
        }
      }

      // personInfo.fieldOfWork = fieldOfWork;
      //   console.log(entityIdSet, "flsd7865");
      // const moreUrls = wbk.getManyEntities({
      //   ids: [...entityIdSet.values()],
      //   languages: [language],
      //   props: ["labels"],
      // });
      // await whaverThisUsedToBeDoing();
    }
  }
  personInfo.fieldOfWork = ["Anonymity", "Unit Testing"];
  console.log(personInfo.fieldOfWork);

  //   console.log(entity)
}

// TODO enable eslint throughout
// eslint-disable-next-line
async function whaverThisUsedToBeDoing() {
  const moreUrls: string[] = [];
  for (const labelsUrls of moreUrls.slice(0, 4)) {
    const m = await axios.get<{
      entities: Entities;
      success: number;
    }>(labelsUrls);
    const { data } = m;
    if (!data.success) {
      throw new Error("bad stuff maybe rate limit");
    }
    const labelEntities = Object.values(data.entities);
    if (labelEntities.length !== 1) {
      throw new Error("only 1");
    }
    const labelEntity = labelEntities[0];
    if (labelEntity && labelEntity.type === "item" && labelEntity.labels) {
      //   console.log(labelEntity.labels[language]!.value);
      // console.log(labelEntity.descriptions);
      // const answer = {
      //   type: "item",
      //   id: "Q1860",
      //   labels: { en: { language: "en", value: "English" } },
      // };
    }

    //   if (ff.length !== 1) {
    //     const a = ff[0]
    //     console.log(data.entities);
    //   }
    //   const a = {
    //     entities: {
    //       Q376150: {
    //         pageid: 357966,
    //         ns: 0,
    //         title: "Q376150",
    //         lastrevid: 2332723365,
    //         modified: "2025-03-31T04:09:06Z",
    //         type: "item",
    //         id: "Q376150",
    //         labels: {
    //           en: {
    //             language: "en",
    //             value: "International Telecommunication Union",
    //           },
    //         },
    //       },
    //     },
    //     success: 1,
    //   };
  }
}
