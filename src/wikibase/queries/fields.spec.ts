import { expect, it, vi } from "vitest";
import type { Entities, Item } from "wikibase-sdk";
import { fieldClaims } from "../mocks/einstein/claims.js";
import { getFieldsOfWork } from "./fields.js";

const entities: Entities = {
  Q0001: {
    pageid: 123,
    ns: 0,
    title: "Q0001",
    lastrevid: 12345,
    modified: "2062-08-28T12:00:00Z",
    type: "item",
    id: "Q0001",
    claims: fieldClaims,
  },
};

const q01 = entities["Q0001"] as Item;

vi.mock("../data-service.js", () => {
  return {
    wikibaseService: {
      fetchLabels: vi.fn((a) =>
        Object.keys(a).reduce((b, c) => {
          b[c] = c.concat(" LABEL");
          return b;
        }, {}),
      ),
    },
  };
});

it("should return the fields fielded by the entity", async () => {
  const fields = await getFieldsOfWork(q01);
  expect(fields).toEqual([
    "Unit Testing",
    "Lounging",
    "Napping",
    // "Q10001 LABEL",
    // "Q10002 LABEL",
    // "Q10003 LABEL",
    // "Q10004 LABEL",
  ]);
});
