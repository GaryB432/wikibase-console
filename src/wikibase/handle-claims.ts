import axios from "axios";
import WBK, {
  type Claim,
  type EntityId,
  type Item,
  simplifyClaims,
  wikibaseTimeToDateObject,
} from "wikibase-sdk";
import { WIKIDATA_PERSON_PROPERTIES as P } from "./constants.js";
import { type PersonInfo } from "./types.js";

const language = "en";
const wbk = WBK({
  instance: "https://www.wikidata.org",
  sparqlEndpoint: "https://query.wikidata.org/sparql",
});

const CONORID: EntityId = "P1280"; // identifier in the National and University Library, Ljubljana database

function claimName(property: string): string {
  return `[prop [${property}]]`;
}

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
