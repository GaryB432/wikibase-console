import type { EntityId, PropertyClaims, PropertyId } from "wikibase-sdk";
import { propertyNames } from "./constants.js";
import chalk from 'chalk'
import { type TermRecord, wikibaseService } from "./data-service.js";

export function greet(name: string): string {
  return `print-entity says: hello to ${name}`;
}
export function add(a: number, b: number): number {
  return a + b;
}
export const meaning: { life: number } = {
  life: 42,
};

function makeTermRecordFor(
  propClaims: PropertyClaims,
  p: PropertyId,
): TermRecord {
  const terms: TermRecord = {};

  for (const c of propClaims) {
    const { mainsnak } = c;
    if (mainsnak.property !== p) {
      throw new Error("unexpected situation #35");
    }

    if (mainsnak.datavalue && mainsnak.datavalue.type === "wikibase-entityid") {
      const { id } = mainsnak.datavalue.value;
      terms[id] = id;
    } else {
      console.warn(mainsnak.datatype, p, "ignored");
    }
  }
  return terms;
}

export async function report(id: EntityId): Promise<string[]> {
  const subject = await wikibaseService.fetchDetailedEntity(id);

  if (!subject) {
    throw new Error("nope");
  }
  const rpt: string[] = [];

  if (subject.type === "item" && subject.claims) {

    for (const [p, propClaims] of Object.entries(subject.claims)) {
      const pname = propertyNames.get(p as PropertyId);
      if (pname) {
        rpt.push(`${pname} (${propClaims.length})`);

        const terms: TermRecord = makeTermRecordFor(
          propClaims,
          p as PropertyId,
        );

        const labels = await wikibaseService.fetchLabels(terms);
        const parts = Object.values(labels).map(b => chalk.blueBright(b))
        rpt.push(parts.join(', '));
      }
    }
  }
  return rpt;
}
