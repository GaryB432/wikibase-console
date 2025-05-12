import type { EntityId, Item } from "wikibase-sdk";
import { wikibaseService } from "./data-service.js";
import { handlePropertyClaims } from "./handle-claims.js";
import { getSchoolsAttended } from "./queries/schools.js";
import { type PersonInfo } from "./types.js";

const language = "en";

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

  const subject = await wikibaseService.fetchDetailedEntity(id);

  if (!subject) {
    throw new Error("nope");
  }

  if (subject.type === "item") {
    personInfo.id = subject.id;
    handleLabels(subject, personInfo);

    await handlePropertyClaims(subject, personInfo);
    personInfo.schools = await getSchoolsAttended(subject);
  }

  return personInfo;
}

function handleLabels(entity: Item, personInfo: PersonInfo) {
  if (entity.labels) {
    personInfo.wikipediaTitle = personInfo.name =
      entity.labels[language]?.value || "dunno";
    // console.log(entity.labels[language]?.value);
  }
}
