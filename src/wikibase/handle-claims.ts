import {
  type EntityId,
  type Item,
  type PropertyId,
  wikibaseTimeToDateObject,
} from "wikibase-sdk";
import { WIKIDATA_PERSON_PROPERTIES as P } from "./constants.js";
import { type TermRecord, wikibaseService } from "./data-service.js";
import { type PersonInfo } from "./types.js";

export async function handlePropertyClaims(
  entity: Item,
  personInfo: PersonInfo,
): Promise<void> {
  const propertyEntityIDs = new Map<PropertyId | string, EntityId[]>();

  async function getEntityLabels(pid: PropertyId | string): Promise<string[]> {
    const propEntities = propertyEntityIDs.get(pid);
    if (!propEntities) {
      return [];
    }
    const record = propEntities.reduce((a, eid) => {
      a[eid] = eid;
      return a;
    }, {} as TermRecord);

    return Object.values(await wikibaseService.fetchLabels(record));
  }

  for (const propClaims of Object.values(entity.claims ?? {})) {
    for (const claim of propClaims) {
      const { mainsnak } = claim;

      // console.log("mainsnack", JSON.stringify(mainsnak));

      if (!mainsnak.datavalue) {
        break;
      }

      switch (mainsnak.datatype) {
        case "external-id": {
          if (mainsnak.datavalue.type === "string") {
            // if (mainsnak.property === CONORID) {
            //   console.log(
            //     mainsnak.datavalue.value,
            //     mainsnak.datavalue.value === "7912035",
            //   );
            // }
          }
          break;
        }
        case "wikibase-item": {
          if (mainsnak.datavalue.type === "wikibase-entityid") {
            const referencedId = mainsnak.datavalue.value.id;
            let qids = propertyEntityIDs.get(mainsnak.property);
            if (!qids) {
              qids = [];
              propertyEntityIDs.set(mainsnak.property, qids);
            }
            qids.push(referencedId);
          }
          break;
        }
        case "time": {
          if (mainsnak.datavalue.type === "time") {
            // console.log(claimName(mainsnak.property));
            if (mainsnak.property === P.DATE_OF_BIRTH) {
              personInfo.birthYear = wikibaseTimeToDateObject(
                mainsnak.datavalue.value.time,
              ).getFullYear();
            }
            if (mainsnak.property === P.DATE_OF_DEATH) {
              personInfo.deathYear = wikibaseTimeToDateObject(
                mainsnak.datavalue.value.time,
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
  personInfo.fieldOfWork = await getEntityLabels(P.FIELD_OF_WORK);
  personInfo.schools = await getEntityLabels(P.EDUCATED_AT);
}
