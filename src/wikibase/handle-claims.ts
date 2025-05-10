import axios from "axios";
import {
  type Entities,
  type EntityId,
  type Item,
  wikibaseTimeToDateObject,
} from "wikibase-sdk";
import { WIKIDATA_PERSON_PROPERTIES as P } from "./constants.js";
import { type PersonInfo } from "./types.js";

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
              console.log(mainsnak.datavalue.value, "stubbed value");
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
