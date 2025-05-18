import type { Item } from "wikibase-sdk";

export function greet(name: string): string {
  return `fields says: hello to ${name}`;
}
export function add(a: number, b: number): number {
  return a + b;
}
export const meaning: { life: number } = {
  life: 42,
};

export async function getFieldsOfWork(
  subject: Item,
): Promise<string[] | undefined> {
  if (subject.type !== "item") {
    throw new Error(
      "this will never happen. remove it when subject can be not unused",
    );
  }
  return ["Unit Testing", "Lounging", "Napping"];
}
