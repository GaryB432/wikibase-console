import prompts from "prompts";
import { type EntityId } from "wikibase-sdk";
import { wikibaseService } from "wikibase/data-service.js";
import { handlePerson } from "./wikibase/handle-entity.js";
import { argv } from "node:process";

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

// const ps = process.argv;
// const p1 = process.argv0;
// console.log(JSON.stringify({ ps, p1 }));
// const dd = {
//   ps: [
//     "/home/gary/.nvm/versions/node/v22.13.0/bin/node",
//     "/home/gary/repos/wikibase-console/src/main.ts",
//     "marx",
//   ],
//   p1: "/home/gary/.nvm/versions/node/v22.13.0/bin/node",
// };

async function getEntityId(name: string): Promise<EntityId | null> {
  // const h = await wikibaseService.searchForHumans(name);

  // const j = h.map((k) => {
  //   return {
  //     title: k.title,
  //     label: k.label,
  //     id: k.id,
  //     description: k.description,
  //   };
  // });

  // if (j.length === 1) {
  //   return j[0]!.id as EntityId;
  // }

  // prompts({
  //   type: "select",
  //   name: "id",
  //   message: "Who's your guy",
  //   choices: j.map((f) => ({
  //     title: f.description ?? f.title,
  //     value: f.id,
  //   })),
  // });

  // console.log(j);
  throw new Error("Function not implemented.");
}

// if (!search) {
//   questions.push({
//     type: "string",
//   });
// }

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
  let subjectId: EntityId | null = await getEntityId(argv[2]!);
  if (!argv[2]) {
    throw new Error("needs 3 arguments");
  }
  const results = await wikibaseService.searchForHumans(argv[2]);

  // if (results.length > 0) {
  //   if (results.length === 1) {
  //     subjectId = results[0]!.id as EntityId;
  //   } else {
  //     const promptedPerson = await prompts({
  //       type: "select",
  //       name: "id",
  //       message: "Select the appropriate person from Wikidata",
  //       choices: results.map((res) => ({
  //         title: res.description ?? res.label,
  //         value: res.id,
  //       })),
  //     });
  //     subjectId = promptedPerson.id;
  //   }
  // }

  if (subjectId) {
    const p = await handlePerson(subjectId);
    console.log(JSON.stringify(p, undefined, 4));
  }
}

main().then(
  () => {
    console.log("done");
  },
  (e) => {
    console.error(e);
  }
);
