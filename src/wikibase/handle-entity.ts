import axios from "axios";
import type { Entities, EntityId } from "wikibase-sdk";
import { wikibaseTimeToDateObject } from "wikibase-sdk";
import WBK from "wikibase-sdk";
import { type PersonInfo } from "./types.js";
import { WIKIDATA_PERSON_PROPERTIES as P } from "./constants.js";

const language = "en";
const wbk = WBK({
  instance: "https://www.wikidata.org",
  sparqlEndpoint: "https://query.wikidata.org/sparql",
});

export async function handlePerson(
  id: EntityId,
  options?: { fetchDate?: Date }
): Promise<PersonInfo> {
  const personInfo: PersonInfo = {
    // aliases: [],
    // awards: [],
    birthYear: 0,
    // children: [],
    // deathYear: NaN,
    // description: "",
    // employers: [],
    fetchDate: options?.fetchDate ?? new Date(),
    fieldOfWork: [],
    // gender: "",
    id: "",
    // image: "",
    name: "",
    // nationality: [],
    // notableWorks: [],
    occupations: [],
    // parents: [],
    // placeOfBirth: "",
    // placeOfDeath: "",
    schools: [],
    sources: [],
    // spouses: [],
    // wikipediaTitle: "",
  };

  const fieldOfWork = ["Anonymity", "Unit Testing"];

  const entitiesUrl = wbk.getEntities({
    ids: [id],
    languages: [language],
    props: ["labels", "descriptions", "aliases", "claims"],
  });

  const { data } = await axios.get<{ entities: Entities; success: number }>(
    entitiesUrl
  );

  if (data.success && Object.keys(data.entities).length === 1) {
    const entity = Object.values(data.entities)[0]!;
    // console.log(JSON.stringify(entity));

    if (entity.type === "item" && entity.claims) {
      personInfo.id = entity.id;
      if (entity.labels) {
        personInfo.wikipediaTitle = personInfo.name =
          entity.labels[language]?.value || "dunno";
        // console.log(entity.labels[language]?.value);
      }

      const entityClaims = Object.values(entity.claims).slice(0);
      for (const propClaims of entityClaims) {
        for (const claim of propClaims) {
          const { mainsnak } = claim;

          // console.log(mainsnak.datavalue, "9jdl snak propClaim");
          const entityIdSet: Set<EntityId> = new Set();

          // console.log(claim.type, 'is a claim');

          if (mainsnak.datavalue) {
            switch (mainsnak.datatype) {
              case "wikibase-item": {
                if (mainsnak.datavalue.type === "wikibase-entityid") {
                  // console.log(mainsnak.datavalue, "f85");
                  entityIdSet.add(mainsnak.datavalue.value.id);
                }
                break;
              }
              case "globe-coordinate":
              case "geo-shape":
              case "string":
              case "url":
              case "external-id":
              case "monolingualtext":
              case "commonsMedia":
              case "quantity": {
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
              default: {
                console.error(mainsnak.datatype, "not handled");
                break;
              }
            }
          }

          personInfo.fieldOfWork = fieldOfWork;
          //   console.log(entityIdSet, "flsd7865");

          // const moreUrls = wbk.getManyEntities({
          //   ids: [...entityIdSet.values()],
          //   languages: [language],
          //   props: ["labels"],
          // });
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
            if (
              labelEntity &&
              labelEntity.type === "item" &&
              labelEntity.labels
            ) {
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
      }
      //   console.log(entity)
    }
  }
  return personInfo;
}
function claimName(property: string): string {
  return `[prop [${property}]]`;
}
