import { argv } from "node:process";
import prompts, { type Choice } from "prompts";
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

async function promptChoiceFrom(name: string): Promise<Choice[]> {
  const results = await wikibaseService.searchForHumans(name);
  return results.map<Choice>((h) => {
    return { title: h.description ?? h.label, value: h.id };
  });
}

async function getEntityId(name: string): Promise<EntityId | null> {
  const choices = await promptChoiceFrom(name);

  if (choices.length === 1) {
    return choices[0]!.value;
  }

  const { id } = await prompts({
    type: (term: string) => {
      return term === "" ? null : "select";
    },
    name: "id",
    message: "Choose one",
    choices,
  });

  return id;
}

async function main(): Promise<void> {
  if (!argv[2]) {
    throw new Error("missing argument");
  }

  const subjectId: EntityId | null = await getEntityId(argv[2]);

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
  },
);
