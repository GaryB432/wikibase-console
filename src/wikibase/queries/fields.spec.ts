import { expect, it, vi } from "vitest";
import type { Entities, Item } from "wikibase-sdk";
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
    claims: {
      P101: [
        {
          mainsnak: {
            snaktype: "value",
            property: "P101",
            hash: "",
            datavalue: {
              value: {
                "entity-type": "item",
                id: "Q10001",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
          type: "statement",

          id: "q937$9297F2A2-FAD7-466F-8B30-79AA41E8793F",
          rank: "normal",
          references: [],
        },
        {
          mainsnak: {
            snaktype: "value",
            property: "P101",
            hash: "",
            datavalue: {
              value: {
                "entity-type": "item",
                id: "Q10002",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
          type: "statement",
          id: "Q937$bdd0de70-44e3-c7c5-8566-0389c0bd14e7",
          rank: "normal",
        },
        {
          mainsnak: {
            snaktype: "value",
            property: "P101",
            hash: "",
            datavalue: {
              value: {
                "entity-type": "item",
                id: "Q10004",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
          type: "statement",
          id: "Q937$b2fb71ab-49ad-df08-7b3b-8bd09a55ae77",
          rank: "normal",
        },
        {
          mainsnak: {
            snaktype: "value",
            property: "P101",
            hash: "",
            datavalue: {
              value: {
                "entity-type": "item",
                id: "Q10003",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
          type: "statement",
          id: "Q937$E90CA760-E20F-4EED-BDB8-F72DCF4B484C",
          rank: "normal",
          references: [],
        },
      ],
    },
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

it.skip("should return the fields fielded by the entity", async () => {
  const fields = await getFieldsOfWork(q01);
  expect(fields).toEqual([
    "Q10001 LABEL",
    "Q10002 LABEL",
    "Q10003 LABEL",
    "Q10004 LABEL",
  ]);
});
