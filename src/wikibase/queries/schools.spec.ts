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
    modified: "2024-08-28T12:00:00Z",
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
          qualifiers: {
            P512: [
              {
                snaktype: "value",
                property: "P512",
                hash: "67328753e890584b019e99ca2adbfd6c89f03d6f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 787674,
                    id: "Q787674",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P580: [
              {
                snaktype: "value",
                property: "P580",
                hash: "e808e45fd86c6704471903360cc4e1f4b0afb6c6",
                datavalue: {
                  value: {
                    time: "+1896-00-00T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 9,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
            P582: [
              {
                snaktype: "value",
                property: "P582",
                hash: "7ff7fa6a41098cf9dad92bc8ce9f6ef4cdfb964c",
                datavalue: {
                  value: {
                    time: "+1900-00-00T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 9,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
            P812: [
              {
                snaktype: "value",
                property: "P812",
                hash: "52f8147e0926977b48191583459f17066b3caf71",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 853077,
                    id: "Q853077",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "qualifiers-order": ["P512", "P580", "P582", "P812"],
          id: "q937$9297F2A2-FAD7-466F-8B30-79AA41E8793F",
          rank: "normal",
          references: [
            {
              hash: "6232039e6623c9001eaf5e2b1ed8dabbcdc3eb25",
              snaks: {
                P854: [
                  {
                    snaktype: "value",
                    property: "P854",
                    hash: "d166320e8592653555e6312f9dfb6e66dc35d93e",
                    datavalue: {
                      value: "https://www.ige.ch/de/ueber-uns/einstein.html",
                      type: "string",
                    },
                    datatype: "url",
                  },
                ],
              },
              "snaks-order": ["P854"],
            },
            {
              hash: "21418a30185063737a486029d7faa257069992b3",
              snaks: {
                P854: [
                  {
                    snaktype: "value",
                    property: "P854",
                    hash: "7d17ca097970891fd081a2c0eadf5726fd23fbba",
                    datavalue: {
                      value:
                        "https://www.library.ethz.ch/en/Resources/Digital-library/Einstein-Online/Einstein-s-Studies-at-the-Polytechnic-Institute-in-Zurich-1896-1900",
                      type: "string",
                    },
                    datatype: "url",
                  },
                ],
              },
              "snaks-order": ["P854"],
            },
          ],
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
          qualifiers: {
            P580: [
              {
                snaktype: "value",
                property: "P580",
                hash: "5ef3a2ebb67800e5a77b75f48709dc1790dc4fc2",
                datavalue: {
                  value: {
                    time: "+1888-00-00T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 9,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
            P582: [
              {
                snaktype: "value",
                property: "P582",
                hash: "711ae13c284751750807191d224511e9776c3af0",
                datavalue: {
                  value: {
                    time: "+1894-00-00T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 9,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "qualifiers-order": ["P580", "P582"],
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
          qualifiers: {
            P580: [
              {
                snaktype: "value",
                property: "P580",
                hash: "243076ba9721eb1a55f3fc886104f532066f726b",
                datavalue: {
                  value: {
                    time: "+1895-00-00T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 9,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
            P512: [
              {
                snaktype: "value",
                property: "P512",
                hash: "4e332f9440774b20bd553248b3b2d21c65022120",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 694222,
                    id: "Q694222",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P585: [
              {
                snaktype: "value",
                property: "P585",
                hash: "fbed2b1047f83c9391413308a64f91ac4cb9fea3",
                datavalue: {
                  value: {
                    time: "+1896-10-03T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
            P582: [
              {
                snaktype: "value",
                property: "P582",
                hash: "44f0a4cf36f0ec6bfdcf96bbcd4b6243c1d56840",
                datavalue: {
                  value: {
                    time: "+1896-09-00T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 10,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
          },
          "qualifiers-order": ["P580", "P512", "P585", "P582"],
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
          qualifiers: {
            P812: [
              {
                snaktype: "value",
                property: "P812",
                hash: "73f0c79f2186c63e805191ba14cb93a648658058",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 413,
                    id: "Q413",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P582: [
              {
                snaktype: "value",
                property: "P582",
                hash: "9829c2478acdf50cf5fbd21e29885b23ac5a34fe",
                datavalue: {
                  value: {
                    time: "+1905-04-30T00:00:00Z",
                    timezone: 0,
                    before: 0,
                    after: 0,
                    precision: 11,
                    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
                  },
                  type: "time",
                },
                datatype: "time",
              },
            ],
            P512: [
              {
                snaktype: "value",
                property: "P512",
                hash: "9dd45b5a74969fff7b259606d825ccb22e47310f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 849697,
                    id: "Q849697",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P184: [
              {
                snaktype: "value",
                property: "P184",
                hash: "80d7ba86edd010da772585d341739b5ef62a54ff",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 4175282,
                    id: "Q4175282",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
              {
                snaktype: "value",
                property: "P184",
                hash: "99451824f2a9bd6241c4a276f1649272ea09c3f5",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 97154,
                    id: "Q97154",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1026: [
              {
                snaktype: "value",
                property: "P1026",
                hash: "19696160a1900428c9e3fa11f8a87da626a04cd6",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 51754009,
                    id: "Q51754009",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "qualifiers-order": ["P812", "P582", "P512", "P184", "P1026"],
          id: "Q937$E90CA760-E20F-4EED-BDB8-F72DCF4B484C",
          rank: "normal",
          references: [
            {
              hash: "b473a88bba563f9072e83b051af83ccd8613b2f1",
              snaks: {
                P248: [
                  {
                    snaktype: "value",
                    property: "P248",
                    hash: "becdb26ddc4ab0be2b9923204dea1128f01e9f6a",
                    datavalue: {
                      value: {
                        "entity-type": "item",
                        "numeric-id": 51754009,
                        id: "Q51754009",
                      },
                      type: "wikibase-entityid",
                    },
                    datatype: "wikibase-item",
                  },
                ],
              },
              "snaks-order": ["P248"],
            },
          ],
        },
      ],
    },
  },
  Q1001: {
    pageid: 456,
    ns: 0,
    title: "Q1001",
    lastrevid: 67890,
    modified: "2024-08-28T13:00:00Z",
    type: "item",
    id: "Q1001",
    labels: {
      en: { language: "en", value: "Mock School One" },
    },
  },
  Q1002: {
    pageid: 789,
    ns: 0,
    title: "Q1002",
    lastrevid: 98765,
    modified: "2024-08-28T14:00:00Z",
    type: "item",
    id: "Q1002",
    labels: {
      en: { language: "en", value: "Mock School Two" },
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
