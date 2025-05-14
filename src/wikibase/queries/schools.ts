import type {
  EntityId,
  Item,
  WikibaseEntityIdSnakDataValue,
} from "wikibase-sdk";
import { type TermRecord, wikibaseService } from "wikibase/data-service.js";

/**
 * Retrieves the schools attended by a given Wikidata entity.
 *
 * @param entity - The Wikidata entity to query.
 * @returns A Promise that resolves to an array of simplified school names, or an empty array if no schools are found.
 */
export async function getSchoolsAttended(entity: Item): Promise<string[]> {
  try {
    const { claims } = entity;

    if (!claims) {
      console.warn(`No claims found for entity ${entity.id}`);
      return [];
    }

    const attendedSchoolClaims = claims.P69; // P69 is the property ID for "educated at"

    if (!attendedSchoolClaims) {
      console.warn(
        `No 'educated at' (P69) claims found for entity ${entity.id}`,
      );
      return [];
    }

    const termRecord = makeTermRecordFrom(
      attendedSchoolClaims
        .map(
          (claim) => claim.mainsnak.datavalue as WikibaseEntityIdSnakDataValue,
        )
        .map((v) => v.value.id),
    );

    const attendedSchoolNameMap = await wikibaseService.fetchLabels(termRecord);

    const schoolNames = Object.values(attendedSchoolNameMap).sort();

    return schoolNames;
  } catch (error) {
    console.error(
      `Error fetching data from Wikidata: ${(error as Error).message}`,
    );
    throw error;
  }
}

function makeTermRecordFrom(ids: Array<EntityId>) {
  return ids.reduce((terms, id) => {
    terms[id as EntityId] = `LABEL FOR ${id}`;
    return terms;
  }, {} as TermRecord);
}
