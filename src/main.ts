import { type EntityId } from "wikibase-sdk";
import { wikibaseService } from "wikibase/data-service.js";
import { handlePerson } from "./wikibase/handle-entity.js";

// const others: string[] = [
//   P.DATE_OF_BIRTH,
//   P.DATE_OF_DEATH,
//   P.OCCUPATION,
//   P.EDUCATED_AT,
//   P.COUNTRY_OF_CITIZENSHIP,
//   P.AWARD_RECEIVED,
//   P.FIELD_OF_WORK,
//   P.NOTABLE_WORK,
// ];

import prompts from "prompts";

const search = "ludwig beethoven";

// wikibaseService.searchForHumans(search).then(
//   (found) => {
//     let id: EntityId | null = null;
//     // const qs = found.map((e) => {
//     //   const { id, label, description } = e;
//     //   return { id, label, description };
//     // });

//     // const questions = qs.map(q=> ({...q, type:'select', message: 'Pick a Human', choices: []}));

//     if (found.length > 0) {
//       if (found.length === 1) {
//         id = found[0]!.id as EntityId;
//       } else {
//         prompts({
//           type: "select",
//           name: "id",
//           message: "Who's your guy",
//           choices: found.map((f) => ({
//             title: f.description ?? "hmm",
//             value: f.id,
//           })),
//         }).then(
//           (r) => {
//             console.log(r.id, "is your guy");
//             id = r.id;
//           },
//           (e) => {
//             console.error("bad things", e);
//           }
//         );
//         if (id) {
//           handlePerson(id).then(
//             (p) => {
//               console.log(JSON.stringify(p, undefined, 4));
//             },
//             (e) => {
//               console.log("nope", e);
//             }
//           );
//         }
//       }

//       // // TODO handle
//       // // questionsForFake.forEach((q) => console.log(q.label, q.description, q.id));
//       // console.error(`${questionsForFake.length} ambiguity unhandled for now`);
//     }
//   },
//   () => {}
// );

async function main(): Promise<void> {
  let subjectId: EntityId | null = null;
  const results = await wikibaseService.searchForHumans(search);

  if (results.length > 0) {
    if (results.length === 1) {
      subjectId = results[0]!.id as EntityId;
    } else {
      const promptedPerson = await prompts({
        type: "select",
        name: "id",
        message: "Select the appropriate person from Wikidata",
        choices: results.map((res) => ({
          title: res.description ?? res.label,
          value: res.id,
        })),
      });
      subjectId = promptedPerson.id;
    }
  }

  if (subjectId) {
    const p = await handlePerson(subjectId);
    console.log(JSON.stringify(p, undefined, 4));
  }
}

main().then(
  () => {},
  () => {},
);
