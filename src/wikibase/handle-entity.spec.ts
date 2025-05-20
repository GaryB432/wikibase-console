import { afterEach, beforeAll, describe, expect, test, vi } from "vitest";
import type { Entities, EntityId, Item } from "wikibase-sdk";
import * as dataService from "./data-service.js";
import { handlePerson } from "./handle-entity.js";
import { type PersonInfo } from "./types";

const fetchDate = new Date(2094, 3, 20);

const fakey: PersonInfo = {
  id: "Q10",
  name: "Bob",
  birthYear: 0,
  occupations: [],
  schools: [],
  fetchDate: expect.any(Date()),
  sources: [],
};

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

vi.mock("./data-service.js", () => {
  return {
    wikibaseService: {
      fetchLabels: vi.fn((a) =>
        Object.keys(a).reduce((b, c) => {
          b[c] = `LABEL ${c}`;
          return b;
        }, {}),
      ),
      fetchDetailedEntity: vi.fn(() => q01),
    },
  };
});

describe("aliases", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  test("none", async () => {
    vi.spyOn(
      dataService.wikibaseService,
      "fetchDetailedEntity",
    ).mockResolvedValueOnce({ ...q01, aliases: undefined });
    const result = await handlePerson(q01.id, { fetchDate });
    expect(result.aliases).toBeUndefined();
    expect(
      dataService.wikibaseService.fetchDetailedEntity,
    ).toHaveBeenCalledWith(q01.id);
  });
  test("none", async () => {
    vi.spyOn(
      dataService.wikibaseService,
      "fetchDetailedEntity",
    ).mockResolvedValueOnce({ ...q01, aliases: undefined });
    const result = await handlePerson(q01.id, { fetchDate });
    expect(result.aliases).toBeUndefined();
    expect(
      dataService.wikibaseService.fetchDetailedEntity,
    ).toHaveBeenCalledWith(q01.id);
  });
  test("some en", async () => {
    vi.spyOn(
      dataService.wikibaseService,
      "fetchDetailedEntity",
    ).mockResolvedValueOnce({
      ...q01,
      aliases: { en: [{ language: "?", value: "Fakey" }] },
    });
    vi.spyOn(dataService.wikibaseService, "fetchLabels");

    const result = await handlePerson(q01.id, { fetchDate });
    expect(result.aliases).toEqual(["Fakey"]);

    expect(
      dataService.wikibaseService.fetchDetailedEntity,
    ).toHaveBeenCalledWith(q01.id);
    expect(dataService.wikibaseService.fetchLabels).toHaveBeenCalledWith({
      Q11942: expect.any(String),
      Q1876751: expect.any(String),
      Q206702: expect.any(String),
      Q435651: expect.any(String),
    });
  });
  test("coupla en", async () => {
    vi.spyOn(
      dataService.wikibaseService,
      "fetchDetailedEntity",
    ).mockResolvedValueOnce({
      ...q01,
      aliases: {
        en: [
          { language: "?", value: "Fakey" },
          { language: "?", value: "Tester" },
          { language: "?", value: "That Guy" },
        ],
      },
    });
    vi.spyOn(dataService.wikibaseService, "fetchLabels");

    const result = await handlePerson(q01.id, { fetchDate });
    expect(result.aliases).toEqual(["Fakey", "Tester", "That Guy"]);
  });
  test("some fr", async () => {
    vi.spyOn(
      dataService.wikibaseService,
      "fetchDetailedEntity",
    ).mockResolvedValueOnce({
      ...q01,
      aliases: { fr: [{ language: "fr", value: "Merci" }] },
    });
    vi.spyOn(dataService.wikibaseService, "fetchLabels");

    const result = await handlePerson(q01.id, { fetchDate });
    expect(result.aliases).toBeUndefined();
  });
});

describe("handle entity", () => {
  beforeAll(async () => {
    vi.spyOn(
      dataService.wikibaseService,
      "fetchDetailedEntity",
    ).mockResolvedValueOnce({
      ...q01,
      labels: { en: { language: "en", value: "label a" } },
    });

    await handlePerson(fakey.id as EntityId, { fetchDate });
  });
  test("aliases", () => {
    expect(fakey.aliases).toBeUndefined();
  });
  test("awards", () => {
    expect(fakey.awards).toBeUndefined();
  });
  test("children", () => {
    expect(fakey.children).toBeUndefined();
  });
  test("employers", () => {
    expect(fakey.employers).toBeUndefined();
  });
  test.skip("fieldOfWork", () => {
    expect(fakey.fieldOfWork).toEqual(["Anonymity", "Unit Testing"]);
  });
  test("nationality", () => {
    expect(fakey.nationality).toBeUndefined();
  });
  test("notableWorks", () => {
    expect(fakey.notableWorks).toBeUndefined();
  });
  test("occupations", () => {
    expect(fakey.occupations).toEqual([]);
  });
  test("parents", () => {
    expect(fakey.parents).toBeUndefined();
  });
  test("schools", () => {
    expect(fakey.schools).toEqual([]);
  });
  test("sources", () => {
    expect(fakey.sources).toEqual([]);
  });
  test("spouses", () => {
    expect(fakey.spouses).toBeUndefined();
  });
});
