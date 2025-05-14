import { type EntityId } from "wikibase-sdk";
import { wikibaseService } from "wikibase/data-service.js";
import { handlePerson } from "./wikibase/handle-entity.js";

const EINSTEIN_Q: EntityId = "Q937";
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

const search = "churchill";

wikibaseService.searchForHumans(search).then(
  (q) => {
    const questions = q.map((e) => {
      const { id, label } = e;
      return { id, label };
    });
    if (questions.length === 1) {
      // console.log(JSON.stringify(questions, undefined, 2));

      let subject = questions[0]!.id as EntityId;

      handlePerson(subject).then(
        (p) => {
          console.log(JSON.stringify(p, undefined, 4));
        },
        (e) => {
          console.log("nope", e);
        },
      );
    } else {
      questions.forEach((q) => console.log(q.label, q.id));
      console.error(`${questions.length} ambuguity unhandled for now`);
    }
  },
  () => {},
);
