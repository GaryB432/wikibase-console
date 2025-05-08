import { type EntityId } from "wikibase-sdk";
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

handlePerson(EINSTEIN_Q).then(
  (p) => {
    console.log(JSON.stringify(p, undefined, 4));
  },
  (e) => {
    console.log("nope", e);
  }
);
