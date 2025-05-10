import axios from "axios";
import type { Entities, EntityId, Item } from "wikibase-sdk";
import WBK from "wikibase-sdk";
import { handlePropertyClaims } from "./handle-claims.js";
import { type PersonInfo } from "./types.js";

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

    if (entity.type === "item") {
      personInfo.id = entity.id;
      handleLabels(entity, personInfo);

      await handlePropertyClaims(entity, personInfo);
    }
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
