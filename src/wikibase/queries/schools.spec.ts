import { expect, it, vi } from "vitest";
import type { Entities, Item } from "wikibase-sdk";
import * as dataService from "../data-service.js";
import { getSchoolsAttended } from "./schools";

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
      P69: [
        {
          mainsnak: {
            snaktype: "value",
            property: "P69",
            hash: "701a78550a66a751489486b60c9527ee768bcd9b",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 11942,
                id: "Q11942",
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
            property: "P69",
            hash: "1bc1ee11f43f6520cd7d8e8ca82f4ac90914145e",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1876751,
                id: "Q1876751",
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
            property: "P69",
            hash: "8143eb9cc05f32357fc912a4dce4cff0acdb88e0",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 435651,
                id: "Q435651",
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
            property: "P69",
            hash: "b8a57344f9bbe4ea338c511e0167d28084b5fd95",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 206702,
                id: "Q206702",
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
  return { wikibaseService: { fetchLabels: vi.fn(() => ["hard knocks"]) } };
});

it("should mock the imported function", async () => {
  const schools = await getSchoolsAttended(q01);
  expect(schools).toEqual(["hard knocks"]);
  expect(dataService.wikibaseService.fetchLabels).toHaveBeenCalledWith({
    Q11942: "LABEL FOR Q11942",
    Q1876751: "LABEL FOR Q1876751",
    Q206702: "LABEL FOR Q206702",
    Q435651: "LABEL FOR Q435651",
  });
});

it("should return the schools attended by the entity", async () => {
  const schools = await getSchoolsAttended(q01);
  expect(schools).toEqual(["hard knocks"]);
});
