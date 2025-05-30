import type { Claims, Reference } from "wikibase-sdk";

const references: Reference[] = [
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
];

export const schoolClaims: Claims = {
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
      // qualifiers,
      // "qualifiers-order": ["P512", "P580", "P582", "P812"],
      id: "q937$9297F2A2-FAD7-466F-8B30-79AA41E8793F",
      rank: "normal",
      references,
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

      "qualifiers-order": ["P812", "P582", "P512", "P184", "P1026"],
      id: "Q937$E90CA760-E20F-4EED-BDB8-F72DCF4B484C",
      rank: "normal",
    },
  ],
};

export const fieldClaims: Claims = {
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
};

export const otherClaims: Claims = {
  P569: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P569",
        hash: "e80d845c8bf6c2e47bdc5f85c11ab21d0f2c9a75",
        datavalue: {
          value: {
            time: "+1879-03-14T00:00:00Z",
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
      type: "statement",
      id: "q937$2ecb21c3-4db1-54e8-27c4-a8a40541930c",
      rank: "normal",
      references: [
        {
          hash: "abc9457dcf728dd069b8ed5b2e1a86035cf2b679",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "019a50b7de741e0068bde41c9d9955b22a5de47b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "7805df7373a5e95763e019b855686d24acee918e",
                datavalue: {
                  value: {
                    time: "+2014-04-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
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
      ],
    },
  ],
  P570: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P570", // DATE_OF_DEATH
        hash: "9c234eae7ea4449f273c9b68e44aaee221e0d0f8",
        datavalue: {
          value: {
            time: "+1955-04-18T00:00:00Z",
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
      type: "statement",
      id: "q937$577aaeb4-4ce9-fdd1-791f-78d893a0e5a8",
      rank: "normal",
      references: [
        {
          hash: "abc9457dcf728dd069b8ed5b2e1a86035cf2b679",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "019a50b7de741e0068bde41c9d9955b22a5de47b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "7805df7373a5e95763e019b855686d24acee918e",
                datavalue: {
                  value: {
                    time: "+2014-04-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          hash: "94ef295c137fa7ade20ac61f06b65ed6fd4d8e36",
          snaks: {
            P958: [
              {
                snaktype: "value",
                property: "P958",
                hash: "7a908714e094c32959cc3edc8271a843c6b192a7",
                datavalue: {
                  value: "Эйнштейн Альберт",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "6ff2cf2f32fe6bf566da4c3c6e2d0ae639ecef93",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 17378135,
                    id: "Q17378135",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "257d05ea12cb52ad821eebdba59a493d541a923f",
                datavalue: {
                  value: {
                    time: "+2015-09-28T00:00:00Z",
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
          },
          "snaks-order": ["P958", "P248", "P813"],
        },
      ],
    },
  ],
  P1280: [
    {
      type: "statement",
      mainsnak: {
        snaktype: "value",
        property: "P1280",
        hash: "3316c978734f35c0f84413b2427ec7ef1cf3b3b3",
        datavalue: {
          value: "7912035",
          type: "string",
        },
        datatype: "external-id",
      },
      qualifiers: {},
      "qualifiers-order": ["P1810"],
      id: "Q937$2271da52-4ee1-6a74-8d99-294bc3f6c7de",
      rank: "normal",
    },
  ],
  P101: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P101", // FIELD_OF_WORK
        hash: "996fbf8c041a60ba898362a7b3b64b5219957d99",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 18362,
            id: "Q18362",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$7267cb07-4fed-ba1d-d28f-bb82e7faf4ad",
      rank: "normal",
      references: [
        {
          hash: "288ab581e7d2d02995a26dfa8b091d96e78457fc",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "6a164248fc96bfa583bbb495cb63ae6401ec203c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 206855,
                    id: "Q206855",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
};

// eslint-disable-next-line
const lottaClaims = {
  P1280: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1280",
        hash: "3316c978734f35c0f84413b2427ec7ef1cf3b3b3",
        datavalue: {
          value: "7912035",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "b7113c27605f676881767266b2473b36853c2a14",
            datavalue: {
              value: "Einstein, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$2271da52-4ee1-6a74-8d99-294bc3f6c7de",
      rank: "normal",
    },
  ],
  P1412: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1412",
        hash: "7056615ebf0fbde82a3ca3bb9b2c481669a46eb1",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1860,
            id: "Q1860",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$fe800b70-414d-3192-59de-94f16ee93233",
      rank: "normal",
      references: [
        {
          hash: "bfdf79706a9780e50c25ec6448eb859e1a2b9541",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "def9f19d84b65167a2a17ce38364d264c16127fc",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 19938912,
                    id: "Q19938912",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P268: [
              {
                snaktype: "value",
                property: "P268",
                hash: "7502b674b3ce130a850c3ff68487516dcbadd7f2",
                datavalue: {
                  value: "119016075",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "d6162a1716489623c6e595e448b17f8dca4fb2e8",
                datavalue: {
                  value: {
                    time: "+2015-10-10T00:00:00Z",
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
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "4a4771f77735199132bf40f31796cdb9c9c5cf38",
                datavalue: {
                  value: {
                    text: "Albert Einstein (1879-1955), data.bnf.",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P248", "P268", "P813", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1412",
        hash: "c92f42a19ff65548d3fc6d4fdca0944a825d8879",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 188,
            id: "Q188",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$9964d33c-4674-aa6a-66d2-a0c261007e7e",
      rank: "preferred",
      references: [
        {
          hash: "466ac90c85caa14cc688764bf0340f7f6dc903cc",
          snaks: {
            P1280: [
              {
                snaktype: "value",
                property: "P1280",
                hash: "3316c978734f35c0f84413b2427ec7ef1cf3b3b3",
                datavalue: {
                  value: "7912035",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "ce2ad38458403bf82a1be374c1e0c4ed312c4d48",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 16744133,
                    id: "Q16744133",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P1280", "P248"],
        },
      ],
    },
  ],
  P1321: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1321",
        hash: "d2abbc60fa0e1fec8b5f2c8e43c4238615a79a44",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 72,
            id: "Q72",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$35460528-4d70-e713-afa7-5494838f3696",
      rank: "normal",
    },
  ],
  P20: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P20",
        hash: "98e42030c737240322b29ba32c93b1abc85912cd",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 138518,
            id: "Q138518",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P17: [
          {
            snaktype: "value",
            property: "P17",
            hash: "be4c6eafa2984964f04be85667263f5642ba1a72",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 30,
                id: "Q30",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P131: [
          {
            snaktype: "value",
            property: "P131",
            hash: "f5df96a665cb50788ee169d9b1d231ee718ee83a",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1408,
                id: "Q1408",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P17", "P131"],
      id: "q937$0C41B0BF-DB5D-49B3-A1BC-974CA2545A23",
      rank: "normal",
      references: [
        {
          hash: "503c8b8879ebe3e0e1614b921627708c0b8228ca",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "019a50b7de741e0068bde41c9d9955b22a5de47b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a5291b537a08b8087ccaaea3d6423b3ced6b8f48",
                datavalue: {
                  value: {
                    time: "+2014-12-30T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          hash: "21b4a554602c31d7c2067a142656bc9311322be7",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "6ebd1cbf5d4ed2a86857b3361ba56917b6d051d8",
                datavalue: {
                  value: "http://www.einstein-bern.ch",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
        {
          hash: "94ef295c137fa7ade20ac61f06b65ed6fd4d8e36",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "6ff2cf2f32fe6bf566da4c3c6e2d0ae639ecef93",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 17378135,
                    id: "Q17378135",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P958: [
              {
                snaktype: "value",
                property: "P958",
                hash: "7a908714e094c32959cc3edc8271a843c6b192a7",
                datavalue: {
                  value: "Эйнштейн Альберт",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "257d05ea12cb52ad821eebdba59a493d541a923f",
                datavalue: {
                  value: {
                    time: "+2015-09-28T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P958", "P813"],
        },
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
  ],
  P19: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P19",
        hash: "0be7910a9f2b3bd8cb78572305e978aed04b9ec0",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 3012,
            id: "Q3012",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P131: [
          {
            snaktype: "value",
            property: "P131",
            hash: "c180ac6823063b90d917d7516848501f1e07f5cf",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 159631,
                id: "Q159631",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P17: [
          {
            snaktype: "value",
            property: "P17",
            hash: "f07e6efb1952c0a8e1aeab32299b781d428cf237",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 43287,
                id: "Q43287",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P131", "P17"],
      id: "q937$B3E7F30F-C43D-435D-9EA3-266983130FB1",
      rank: "normal",
      references: [
        {
          hash: "205eabda4a2cf7d4f8ede558f514fc289fb74afd",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "019a50b7de741e0068bde41c9d9955b22a5de47b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "4be80c9494e2518135e5ba5f4152ea8c0db17bf3",
                datavalue: {
                  value: {
                    time: "+2014-12-10T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
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
          hash: "94ef295c137fa7ade20ac61f06b65ed6fd4d8e36",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "6ff2cf2f32fe6bf566da4c3c6e2d0ae639ecef93",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 17378135,
                    id: "Q17378135",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P958: [
              {
                snaktype: "value",
                property: "P958",
                hash: "7a908714e094c32959cc3edc8271a843c6b192a7",
                datavalue: {
                  value: "Эйнштейн Альберт",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "257d05ea12cb52ad821eebdba59a493d541a923f",
                datavalue: {
                  value: {
                    time: "+2015-09-28T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P958", "P813"],
        },
        {
          hash: "77dbe3f674be0bd22af96ab5d05c4aaf66a73eee",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "cd750ceae398ac6d5dca8100010297d82a58fe13",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 54917921,
                    id: "Q54917921",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P248"],
        },
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
  ],
  P22: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P22",
        hash: "c17717a6e8923a96b14376db7ced134038bcdf52",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 88665,
            id: "Q88665",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q937$35853C93-CDA0-4CFD-BB93-5332E87D1BC2",
      rank: "normal",
      references: [
        {
          hash: "fa278ebfc458360e5aed63d5058cca83c46134f1",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "e4f6d9441d0600513c4533c672b5ab472dc73694",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 328,
                    id: "Q328",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P18: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P18",
        hash: "69db5bc827ac76efb272f582aa4a2e08e416ee76",
        datavalue: {
          value: "Albert Einstein Head.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      qualifiers: {
        P2096: [
          {
            snaktype: "value",
            property: "P2096",
            hash: "2523911e74586b467c3ad6000219a28938727ec3",
            datavalue: {
              value: {
                text: "Albert Einstein en 1947",
                language: "es",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P2096",
            hash: "b3806d684463822914f0c865b1e4a04cc6fb9343",
            datavalue: {
              value: {
                text: "Albert Einstein in 1947.",
                language: "en",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P2096",
            hash: "747daa971bb4107b151b7f8b4d9f21aff4095e65",
            datavalue: {
              value: {
                text: "Albert Einstein i 1947.",
                language: "nb",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P2096",
            hash: "e941fe7266593461596aeed662d6b6244a724a4b",
            datavalue: {
              value: {
                text: "Albert Einstein i 1947.",
                language: "nn",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P2096",
            hash: "0103d8dd5a49f0bf661da9d1e3fd2869a0c9eb60",
            datavalue: {
              value: {
                text: "ألبرت أينشتاين في عام 1947",
                language: "ar",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P2096",
            hash: "ec7e1dabcd5461b37cd8fffe5202c4801a5df960",
            datavalue: {
              value: {
                text: "jan Ape Ansan li lon tenpo sike nanpa 1947.",
                language: "tok",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
        ],
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "ee7176219232132ce21435ff5fb06bef099b6cdb",
            datavalue: {
              value: {
                time: "+1947-00-00T00:00:00Z",
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
      "qualifiers-order": ["P2096", "P585"],
      id: "q937$B471B8E0-E688-4793-8E30-24C8389A8061",
      rank: "preferred",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P18",
        hash: "fb5ddad70bc518684a8bcd3064ae130042ae7055",
        datavalue: {
          value: "Einstein 1921 by F Schmutzer - restoration.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "4206193a071ddd8ffd0acec69f4c3fefd9820e0b",
            datavalue: {
              value: {
                time: "+1921-00-00T00:00:00Z",
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
        P2096: [
          {
            snaktype: "value",
            property: "P2096",
            hash: "5ca59a663dafcdc2ff343b13c8190b3d1d2523cc",
            datavalue: {
              value: {
                text: "Albert Einstein during a lecture in Vienna in 1921.",
                language: "en",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P2096",
            hash: "271015455dd6b1099d512b3c323d1b1afbf70ef8",
            datavalue: {
              value: {
                text: "Albert Einstein under en forelesning i Wien i 1921.",
                language: "nb",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P2096",
            hash: "8492ab1cad484efa0077b6609fe17ed1ecc477ee",
            datavalue: {
              value: {
                text: "Albert Einstein under ei forelesing i Wien i 1921.",
                language: "nn",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
        ],
        P276: [
          {
            snaktype: "value",
            property: "P276",
            hash: "a46995c4fd7a79625660f79c1b0f1ef97673efa8",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1741,
                id: "Q1741",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P585", "P2096", "P276"],
      id: "Q937$88B58F47-3339-46E1-A0AD-478709700441",
      rank: "normal",
      references: [
        {
          hash: "c0893d3c5c8a3b91a276084fc5169af2b3562598",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "5946b91c53409c48f5f1fb0319ed41fc67a764da",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 191168,
                    id: "Q191168",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "60a9d0766bdc15beecccd62d2c16f385649018c8",
                datavalue: {
                  value:
                    "https://cs.wikipedia.org/w/index.php?title=Albert_Einstein&oldid=22994976",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
    },
  ],
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
  P40: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P40",
        hash: "4d42db370f71e6fb2188204e3a4685395b0e4dea",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 123371,
            id: "Q123371",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q937$E06622DC-565F-4DCA-8AAF-FD27B149272A",
      rank: "normal",
      references: [
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P40",
        hash: "415a69633076f653ffe8e85836c0384e4bb57061",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 118253,
            id: "Q118253",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q937$23EEE6B9-9930-44E1-99DF-98FC953F2A9F",
      rank: "normal",
      references: [
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P40",
        hash: "2b2acc51d40fd210ec11e1cfb018eb8d96ba1062",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 468357,
            id: "Q468357",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q937$6F89DFD4-2E96-457E-BF94-7BC98185C8DD",
      rank: "normal",
      references: [
        {
          hash: "fa278ebfc458360e5aed63d5058cca83c46134f1",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "e4f6d9441d0600513c4533c672b5ab472dc73694",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 328,
                    id: "Q328",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P109: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P109",
        hash: "972c6645143c4d9dcf4a18ae4de08470f8d7eb4e",
        datavalue: {
          value: "Albert Einstein signature 1934.svg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "q937$5FA9ECBA-7403-4292-93C7-60119B5E029E",
      rank: "normal",
    },
  ],
  P103: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P103",
        hash: "eeedb26365d535268f5dc9d92a5fafddba00d858",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 188,
            id: "Q188",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q937$AEC9F74F-E740-4E5B-AD61-5E6AE0388C7C",
      rank: "normal",
    },
  ],
  P166: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "460dfa1ca76eabe59685150fb13a2f149d103c76",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 808424,
            id: "Q808424",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "547cb884a63c391385160e69bd69a5883e00fff0",
            datavalue: {
              value: {
                time: "+1920-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "q937$806C056A-5BBC-4BF5-A8E3-8100E68321AE",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "a2c971df9bb2881c39d5f4bdcbaf5b234a683c36",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "4206193a071ddd8ffd0acec69f4c3fefd9820e0b",
            datavalue: {
              value: {
                time: "+1921-00-00T00:00:00Z",
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
        P2121: [
          {
            snaktype: "value",
            property: "P2121",
            hash: "1bf40f7786b1eae243550995aae0003e042ff6e1",
            datavalue: {
              value: {
                amount: "+121573",
                unit: "http://www.wikidata.org/entity/Q122922",
              },
              type: "quantity",
            },
            datatype: "quantity",
          },
        ],
        P6208: [
          {
            snaktype: "value",
            property: "P6208",
            hash: "92370528b7537c6e47930c6a033255f7793efa2a",
            datavalue: {
              value: {
                text: "for his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect",
                language: "en",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
          {
            snaktype: "value",
            property: "P6208",
            hash: "4057fcd3f6b348d2f602c8ea72160bb3487ca91b",
            datavalue: {
              value: {
                text: "för hans förtjänster om den teoretiska fysiken, särskilt hans upptäckt av lagen för den fotoelektriska effekten",
                language: "sv",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
        ],
      },
      "qualifiers-order": ["P585", "P2121", "P6208"],
      id: "q937$67E83EE7-ED3E-44D3-9989-9792CEC63F63",
      rank: "normal",
      references: [
        {
          hash: "d4a2f9868e8fddb2673463386d097cb3efb8230f",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "97b19c37d9659d3c0a36a5a0689e0ff1248a04ce",
                datavalue: {
                  value:
                    "http://www.nobelprize.org/nobel_prizes/physics/laureates/1921/index.html",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "76142c1ac740096f18ea230da7fb62353d1c531f",
                datavalue: {
                  value: {
                    time: "+2015-08-03T00:00:00Z",
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
            P123: [
              {
                snaktype: "value",
                property: "P123",
                hash: "344552674f496034056091cee2ea6a0313f56cf2",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1781959,
                    id: "Q1781959",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P407: [
              {
                snaktype: "value",
                property: "P407",
                hash: "daf1c4fcb58181b02dff9cc89deb084004ddae4b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1860,
                    id: "Q1860",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "b31c5db815b025ab9160d36d306a2a6eeb7877fe",
                datavalue: {
                  value: {
                    text: "The Nobel Prize in Physics 1921",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P813", "P123", "P407", "P1476"],
        },
        {
          hash: "d5bc46ae3298464e188cd7574dc391c2e73fabf5",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "180588e9fe355216442e9c7b08f1eb871670e02e",
                datavalue: {
                  value:
                    "https://www.nobelprize.org/nobel_prizes/about/amounts/",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "3d00632bf2e1bebf231e1f00f2bbe5893ffbf129",
                datavalue: {
                  value: {
                    text: "The Nobel Prize amounts",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "53d448f031633b7c3b85256bf7314b6a00e0e513",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 753072,
            id: "Q753072",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "b07833b6e31a736a6bcceee511ef099a643aee41",
            datavalue: {
              value: {
                time: "+1926-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "q937$734E469F-1D50-4391-A16E-0E9C2F478D6B",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "c98675c1032c50aa37c10e0e7176758205f73992",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1711648,
            id: "Q1711648",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "2ab12e13e35e927b4918282defe7002769bd9830",
            datavalue: {
              value: {
                time: "+1931-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "q937$F95226FF-1F1D-4A08-B320-9D03DBD6293B",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "84f2eb9746c8c1a629f6e2483deac0a81922ca96",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1419938,
            id: "Q1419938",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "4d16e5918c56db6eb8fe36f794d10de6e84241b4",
            datavalue: {
              value: {
                time: "+1921-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "q937$000BA6F7-4B85-47CA-ACF6-89590095E5E4",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "36e2ef28425560e84e5ad513a54cbb9cc0c6a183",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 317038,
            id: "Q317038",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "cf4112413f9eec172d82b6989a884aacb2300f2f",
            datavalue: {
              value: {
                time: "+1929-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "q937$70EC89C2-21BF-486F-A1A1-0EFC53D8F358",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "6295699854cdbd4a30b1bc68e571944abe71d102",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 3141777,
            id: "Q3141777",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "29b0f11fad4f85fab33fb3aed3110c204786a867",
            datavalue: {
              value: {
                time: "+1935-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "q937$4325B997-108F-4715-931E-005AC54CEAFB",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "6f80c7644a9d9108f81228c2d61f21bf36cec1f8",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 28003,
            id: "Q28003",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "048566cb55f3c65caeb14f8a261cc938ff8e95d2",
            datavalue: {
              value: {
                time: "+1925-01-01T00:00:00Z",
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
        P6208: [
          {
            snaktype: "value",
            property: "P6208",
            hash: "413dd51233abec64224d6c1bcf8e09a0631abb1f",
            datavalue: {
              value: {
                text: "For his theory of relativity and his contributions to the quantum theory.",
                language: "en",
              },
              type: "monolingualtext",
            },
            datatype: "monolingualtext",
          },
        ],
      },
      "qualifiers-order": ["P585", "P6208"],
      id: "q937$FDB4C682-E267-4D26-8668-72EC724BCAB4",
      rank: "normal",
      references: [
        {
          hash: "51141e1514645682d6bef19e42d5903d35bb761e",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "1c0caf345744dd49504d9191002a4f250115cb47",
                datavalue: {
                  value:
                    "https://docs.google.com/spreadsheets/d/1dsunM9ukGLgaW3HdG9cvJ_QKd7pWjGI0qi_fCb1ROD4/pubhtml?gid=1336391689&single=true",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "f6b0fce0267495f70423104c2bba5a3a9425ac46",
                datavalue: {
                  value: {
                    text: "Award winners : Copley Medal",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
            P123: [
              {
                snaktype: "value",
                property: "P123",
                hash: "af52478139496d8fb5c89182dfc7e8ca25f3f74d",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 123885,
                    id: "Q123885",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P407: [
              {
                snaktype: "value",
                property: "P407",
                hash: "daf1c4fcb58181b02dff9cc89deb084004ddae4b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1860,
                    id: "Q1860",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e8452edddb869b393f54508f86f3663120f254c1",
                datavalue: {
                  value: {
                    time: "+2018-12-30T00:00:00Z",
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
          },
          "snaks-order": ["P854", "P1476", "P123", "P407", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "59b4268907dd37f35a523be5b6cf3f18d9997b1d",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 15056034,
            id: "Q15056034",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$73C644B6-22F2-4AE9-9C42-0C3AAA545004",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "7d5ffaedae51dae4f1304ee461a35bd85ba8c060",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1522873,
            id: "Q1522873",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "8df42653a2b29f24ca3117c5ad9027b1bbf630a1",
            datavalue: {
              value: {
                time: "+1934-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$F4BB8E43-FF0A-4FD9-8F49-D64E385A0C1C",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "df5d20b1d1a7ba57bddfc37500fda390593a8121",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 25287226,
            id: "Q25287226",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$e9700a38-4bc4-0be6-f494-09494f09bb04",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "f3f7aa2c6018ee1538c433703c985e17a091fe8d",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 28861731,
            id: "Q28861731",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "1860896dc35f131202ffed522978bdfd5f598e60",
            datavalue: {
              value: {
                time: "+1949-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$24c2aaa7-4417-8642-9e39-61d25e275787",
      rank: "normal",
      references: [
        {
          hash: "48ba64edf38f95793be7369e78d044295d0100a2",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "f7e922a21a6a2fba458bb5df8f224ebb33417c0b",
                datavalue: {
                  value:
                    "http://www3.huji.ac.il/htbin/hon_doc/doc_search.pl?search",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "d9504d9c46bd4a20b97d00f6f077d1819e03a4d9",
                datavalue: {
                  value: {
                    time: "+2017-03-06T00:00:00Z",
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
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "03c45f856f165f6ba869248bde6c5ed045752115",
                datavalue: {
                  value: {
                    text: "The Hebrew University awards honorary degrees",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P813", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "d1ece1d9c6311be404e2f2e5c60c9852a5c82d67",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 42309226,
            id: "Q42309226",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$d2dcd59a-4529-1c8c-85b4-8b2ce182f8b2",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "7b3be7f4ec576c7cb7f8611ccbbc1ff4a9d38fc1",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 50621171,
            id: "Q50621171",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "9da869666969078cd371023165717d5fcd4c377a",
            datavalue: {
              value: {
                time: "+1923-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$2323D34A-12CA-41D9-8B48-A6AF21145A5B",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "8a8370b086749247a86a6b664a3e7ea13af8ea8c",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 14906020,
            id: "Q14906020",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "1df5d332526d94c68a7f28a47b64d84f07de096f",
            datavalue: {
              value: {
                time: "+1921-05-05T00:00:00Z",
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
      },
      "qualifiers-order": ["P585"],
      id: "Q937$7D740CE6-4FEC-4C62-9672-F5484E7426B7",
      rank: "normal",
      references: [
        {
          hash: "15d39ebb126a5e5699e4cc1ac23ab81afd44afbe",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "c2a5635af57bfb2c12a8b7ad78e8c7500f6644ee",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 111806251,
                    id: "Q111806251",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P304: [
              {
                snaktype: "value",
                property: "P304",
                hash: "f4f9d9db1565004fe02998fed28884d05e1cc58e",
                datavalue: {
                  value: "110",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P304"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "2d395e455673f618a0a41958e2840469e9ad5ad0",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 63315195,
            id: "Q63315195",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "5af3a256503a886254c0e44864f5cc339adb4f49",
            datavalue: {
              value: {
                time: "+1942-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$2870b88e-4ae5-3ec2-52d0-4d20cc7f10c8",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "5a2fb9bdcba0899e4c956a9c86d1ea68cd730236",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 121359767,
            id: "Q121359767",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "e4ce1ad4d6c6d0289a402c42bf392b7c735cbc30",
            datavalue: {
              value: {
                time: "+2009-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$A307E274-1A71-4231-A723-127A27967F1B",
      rank: "normal",
      references: [
        {
          hash: "1d41d561c3e33ed6a35d66bb256ffc601aa3fab7",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "f5cf9b9d58b8b27ef6512bbb65dd1a5b909391bd",
                datavalue: {
                  value:
                    "https://www.carnegie.org/awards/great-immigrants/2009-great-immigrants/",
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
        property: "P166",
        hash: "cd04693e9d150d89e0df51a431a8ed6937c50933",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 156478,
            id: "Q156478",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$8951b01c-43ef-2921-df1a-35540e924f43",
      rank: "normal",
      references: [
        {
          hash: "0fb16a11abc8cc4d31c8db3bf5e0afa6d23800dd",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "4a713f1b9c73c024784e593b0da93f2244c86d3f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 58251,
                    id: "Q58251",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "e25705a3c9a6f80f031f188ace24dd940aaa05f8",
                datavalue: {
                  value: "https://az.wikipedia.org/?oldid=7441143",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "40d6ec32f535c116caf52509b7e6eaf00faa6bbb",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 125121451,
            id: "Q125121451",
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
            hash: "f102d62e365bd260a19199ae19c3db8e845ba20d",
            datavalue: {
              value: {
                time: "+1924-00-00T00:00:00Z",
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
      "qualifiers-order": ["P580"],
      id: "Q937$1D4DBBB0-E023-4F6C-9B88-4C38DB0CC289",
      rank: "normal",
      references: [
        {
          hash: "ec29d66115ba98643202713d655fb3358cf5b9e8",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "d4124685f833145ddbd29e52ae0b3caab39ab005",
                datavalue: {
                  value:
                    "https://www.royalsociety.org.nz/who-we-are/our-people/our-fellows/all-honorary-fellows/",
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
        property: "P166",
        hash: "978d0565b6929982ae7ecec5e5bd978cc48391aa",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 126418747,
            id: "Q126418747",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "a1484f0990b5df866545964e6acebae98d552322",
            datavalue: {
              value: {
                time: "+1928-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$65aa4447-439c-0e46-3c61-717c07fa290e",
      rank: "normal",
      references: [
        {
          hash: "ad935ceeb5978de9bf2d3ea4a2d9c75a836f62da",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "2bb4cfeb2fab9b2b7635985bc703f4bab9d8ff2c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 105750302,
                    id: "Q105750302",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P577: [
              {
                snaktype: "value",
                property: "P577",
                hash: "3b29d6120101e30ac5467213084ae7b76355b4d4",
                datavalue: {
                  value: {
                    time: "+1934-00-00T00:00:00Z",
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
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "54a43eb4cef0d2dd6ff1ccff76312d5e1b31228e",
                datavalue: {
                  value: {
                    text: "Liste des docteurs honoris causa de l'Université de Paris de 1918 à 1933 inclus",
                    language: "fr",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
            P304: [
              {
                snaktype: "value",
                property: "P304",
                hash: "51908aaa4465971590959b7a0e9af7241bf28cbf",
                datavalue: {
                  value: "90-95",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P478: [
              {
                snaktype: "value",
                property: "P478",
                hash: "f2e2f14b6dd41555d3f3f1087aff72c54b455b66",
                datavalue: {
                  value: "9",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P433: [
              {
                snaktype: "value",
                property: "P433",
                hash: "962ed10012ef254020e2a8c8a6c8ba7647d35a12",
                datavalue: {
                  value: "1",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "21e713a35f12ee2707a0a50848d6e9f52c81d04c",
                datavalue: {
                  value:
                    "https://gallica.bnf.fr/ark:/12148/bpt6k93885z/f95.item",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": [
            "P248",
            "P577",
            "P1476",
            "P304",
            "P478",
            "P433",
            "P854",
          ],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P166",
        hash: "5cbf93536cd38ab91cb1106074a34cad8042523f",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 14705795,
            id: "Q14705795",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "43bdb90ab9b607c864931ed584115ff944210c6b",
            datavalue: {
              value: {
                time: "+2008-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$69c0e08d-46f8-6373-d58d-9b96315999f7",
      rank: "normal",
      references: [
        {
          hash: "d85736f7889bb0bae9d00ebe76c440e73845a4ec",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "e10196ca71f0013d0b8b040598b94339d3e5e415",
                datavalue: {
                  value:
                    "https://njhalloffame.org/hall-of-famers/2008-inductees/albert-einstein/",
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
  ],
  P214: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P214",
        hash: "050765c998be3e14185037fb199a17ab35aebb75",
        datavalue: {
          value: "75121530",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$B7F821E9-5E5C-4D51-A153-4CA8A47B6941",
      rank: "normal",
      references: [
        {
          hash: "fa278ebfc458360e5aed63d5058cca83c46134f1",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "e4f6d9441d0600513c4533c672b5ab472dc73694",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 328,
                    id: "Q328",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          hash: "9a24f7c0208b05d6be97077d855671d1dfdbc0dd",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "d38375ffe6fe142663ff55cd783aa4df4301d83d",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 48183,
                    id: "Q48183",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          hash: "d4bd87b862b12d99d26e86472d44f26858dee639",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "f30cbd35620c4ea6d0633aaf0210a8916130469b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 8447,
                    id: "Q8447",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          hash: "f8a8ba34c0460203a6d7a13721f7bc6ff7ab1e7f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d1e923075a89220a981d8c2511065b97bcf4dc5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",
                hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
                datavalue: {
                  value: "3852",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a2c482c4381b8ce33ae32b3998e8ec614fedebb7",
                datavalue: {
                  value: {
                    time: "+2021-02-13T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
  ],
  P106: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        hash: "3a80428f11b6902a9cd7027c0675eaf26672d7bc",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 19350898,
            id: "Q19350898",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P101: [
          {
            snaktype: "value",
            property: "P101",
            hash: "bfcfa9713d432afd0a4f6e0572ebd9e92b397bba",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 43514,
                id: "Q43514",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
          {
            snaktype: "value",
            property: "P101",
            hash: "c5caf4f7ff0c3278c52831990b23714dbdc27d13",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1144457,
                id: "Q1144457",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P101"],
      id: "q937$6B608722-6D2C-49C5-BF35-52B04756A748",
      rank: "normal",
      references: [
        {
          hash: "fa278ebfc458360e5aed63d5058cca83c46134f1",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "e4f6d9441d0600513c4533c672b5ab472dc73694",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 328,
                    id: "Q328",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        hash: "d941f62ca6116f9f895e32177c38aa5b3cb7618b",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 16389557,
            id: "Q16389557",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$A7B3AD70-40BE-47D2-B39D-1C8A00014F4C",
      rank: "normal",
      references: [
        {
          hash: "45995935afc338d83b11f4f9ef7edfc31adb160d",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "b949f92475f866250da42294babf8ea294fd253f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 48952,
                    id: "Q48952",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        hash: "11b8ccbdc8b55e67ba08ebea16e93a57095c93a4",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 205375,
            id: "Q205375",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$FB7CA2E9-67D5-474B-BF78-FC78DDD78C88",
      rank: "normal",
      references: [
        {
          hash: "45995935afc338d83b11f4f9ef7edfc31adb160d",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "b949f92475f866250da42294babf8ea294fd253f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 48952,
                    id: "Q48952",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        hash: "390b7e421bcd2ef49452606782610b01dd7856b7",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 3745071,
            id: "Q3745071",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$FA010268-D5E2-486D-AEAC-2D1542189E95",
      rank: "normal",
      references: [
        {
          hash: "45995935afc338d83b11f4f9ef7edfc31adb160d",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "b949f92475f866250da42294babf8ea294fd253f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 48952,
                    id: "Q48952",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        hash: "330821417269b3e834fcd97ab9040b5cb84dd2d7",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1231865,
            id: "Q1231865",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$6B2F6BAF-1162-462C-BC46-2EE85484A6DF",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        hash: "a10534963529635b239839e93f896122c96c08ac",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1622272,
            id: "Q1622272",
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
            hash: "b876d0058e391133f630df46b0dcde2ee62a39c0",
            datavalue: {
              value: {
                time: "+1909-00-00T00:00:00Z",
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
      "qualifiers-order": ["P580"],
      id: "Q937$64608042-4792-8de0-2fe1-a3d45d17b6fc",
      rank: "normal",
      references: [
        {
          hash: "60d0de3816e6bc46c68c1724cdc65a5cd711bd34",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "5a6c2e831c50b974de6fddefd4af24e2cb11951f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23667505,
                    id: "Q23667505",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2861: [
              {
                snaktype: "value",
                property: "P2861",
                hash: "dbd892e80eb0e661e46a13fb1f39312888c4944d",
                datavalue: {
                  value: "1215",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "8c7f4a22c0be57fa68b18e01ccf163bc2d2e0e53",
                datavalue: {
                  value: {
                    time: "+2019-06-19T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P2861", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        hash: "f597e55195977881929b683320e717b18aa65ea0",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 169470,
            id: "Q169470",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$CD15AE8D-589B-4A06-B136-D181FE5FCF08",
      rank: "preferred",
      references: [
        {
          hash: "882e20aa6ec8583e887f175409662c481ae5f967",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "aaabf97fd7e7dbcb0129151479a5c9837f762199",
                datavalue: {
                  value:
                    "http://www.nytimes.com/1993/11/25/obituaries/zhou-peiyuan-is-dead-educator-scientist-91.html",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "5d9d526cc3efbfb6486b998140ed418c628dc8f7",
                datavalue: {
                  value: {
                    text: "Zhou Peiyuan Is Dead; Educator-Scientist, 91",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          hash: "4bf52462ff3e53851aff22832d78e07d215e4a78",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "9490f4d0268c67488e9e166814c4746c6bb80556",
                datavalue: {
                  value:
                    "http://www.nytimes.com/1995/10/23/theater/theater-review-a-fantasy-meeting-of-minds.html",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "e0f7f40f3258bc37082f58d9caaf3828325c6d00",
                datavalue: {
                  value: {
                    text: "THEATER REVIEW;A Fantasy Meeting of Minds",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          hash: "f8a8ba34c0460203a6d7a13721f7bc6ff7ab1e7f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d1e923075a89220a981d8c2511065b97bcf4dc5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",
                hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
                datavalue: {
                  value: "3852",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a2c482c4381b8ce33ae32b3998e8ec614fedebb7",
                datavalue: {
                  value: {
                    time: "+2021-02-13T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
        {
          hash: "580d68f834ec5a65f914f22787b95cafbe37da6a",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d090d15da7d9e694e4007fa21232edb621e67ba3",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 107456632,
                    id: "Q107456632",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P6844: [
              {
                snaktype: "value",
                property: "P6844",
                hash: "258524b3a122bcf9fa701429899163a06328cd3f",
                datavalue: {
                  value: "16734",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "6f8f333cebfac92bb111b2fdd9fcbf7697285918",
                datavalue: {
                  value: {
                    time: "+2021-04-01T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P6844", "P813"],
        },
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        hash: "03c4c77883f6374542e7bd29d4f84c79f66d58a4",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 4964182,
            id: "Q4964182",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$62F61C96-F754-4389-A0BC-8BBC37C4242A",
      rank: "normal",
      references: [
        {
          hash: "295583eda445db8c7bfbf1052c31bddd605c2dd3",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "7f06900bda1c49aac4fb58adde027653edd3277d",
                datavalue: {
                  value:
                    "http://www.tandfonline.com/doi/full/10.1080/13528165.2012.728445",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "178f6d8f0cb1c2c70aefdbeae2089bd0b8f5cac9",
                datavalue: {
                  value: {
                    text: "The Speed of Broken Light: A meditation on duration and performance by Ted Hiebert",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          hash: "3c89f2157488abb56932903dc33841d609c349b5",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "f246eb0b9290a1b6fa57e326f8e597883a210466",
                datavalue: {
                  value:
                    "http://www.tandfonline.com/doi/full/10.1080/09515081003690418",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "f8c44a7b00348374fa90fac59152446dcd4688d0",
                datavalue: {
                  value: {
                    text: "Neutral monism reconsidered by Erik C. Banks",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          hash: "f8a8ba34c0460203a6d7a13721f7bc6ff7ab1e7f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d1e923075a89220a981d8c2511065b97bcf4dc5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",
                hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
                datavalue: {
                  value: "3852",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a2c482c4381b8ce33ae32b3998e8ec614fedebb7",
                datavalue: {
                  value: {
                    time: "+2021-02-13T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        hash: "70541c2eb72d85fa5f74008b4ee33b004a1ff7eb",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 36180,
            id: "Q36180",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$57118ACC-3565-418C-A41E-8E040C128A78",
      rank: "normal",
      references: [
        {
          hash: "1ed012aed4209e865903e17c3207a2cecb68ff53",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "19d31578c18dc15d1f56ef1fac37b57f1bdc9346",
                datavalue: {
                  value:
                    "http://www.smh.com.au/news/book-reviews/einstein-his-life-and-universe/2007/06/22/1182019350450.html?page=fullpage",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "2cd5a76b23d5d4f58c65ed3afa0024c5a92b106e",
                datavalue: {
                  value: {
                    text: "Einstein: his life and universe",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          hash: "656f7be310b8472c5eb76157f1ee9a87c3b0af82",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "2ea879016df54cc1e9a162892ebf5fe28ab21436",
                datavalue: {
                  value:
                    "http://bleacherreport.com/articles/2172365-modern-day-einstein-smashes-flaming-golf-ball-sets-pants-on-fire",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "4918c88445c2fc925f48420c6aa18aeded047bf5",
                datavalue: {
                  value: {
                    text: "Modern-Day Einstein Smashes Flaming Golf Ball, Sets Pants on Fire",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        hash: "ee617a6f4d7f1a507a24ee8dfb645b1356cad167",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 901,
            id: "Q901",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$DFEF5489-5E9C-43BD-9A82-C63F9B74C7B2",
      rank: "normal",
      references: [
        {
          hash: "52d2f3bb2853f4238a653668e34598b949a0455a",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "7d3f0c5d12d42d420ba74d54675187a499a17158",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 4834894,
                    id: "Q4834894",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P827: [
              {
                snaktype: "value",
                property: "P827",
                hash: "1dfc1e262b107e7a7b67d76e73ad2c434114d0a7",
                datavalue: {
                  value: "p00kwcp5",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "7ddf991c1f9a7c3f640497b67eba032d8ac822d9",
                datavalue: {
                  value: {
                    text: "Special Relativity and how it all began",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P248", "P827", "P1476"],
        },
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        hash: "d4e326526308355e0b0ca12c3222338d6ba65416",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 170790,
            id: "Q170790",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$F1AF73AB-29CA-43CD-BB66-DFDFEB455A32",
      rank: "normal",
      references: [
        {
          hash: "78decb7c315eace22a050428db522f3e2fd048fa",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "d4f75556c51959cf592206e8c466258d3a4aec1a",
                datavalue: {
                  value:
                    "http://www.bbc.co.uk/programmes/b00srz5b/episodes/player",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "cb34e0de9d0526e086a49cdf942394c97078d57e",
                datavalue: {
                  value: {
                    text: "A brief history of mathematics Episodes",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          hash: "bae9c3191fb74cdd553cf50bfffce63918abb499",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "9a53e6d3259aed43c62f9f1be55fa54c621d2b2f",
                datavalue: {
                  value:
                    "http://www.bbc.co.uk/norfolk/kids/science/az_alberteinstein.shtml",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "b8a0803618c6ad64eb1faf061d93a71f10d28aee",
                datavalue: {
                  value: {
                    text: "A-Z for Norfolk Science, A:Albert Einstein",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
        {
          hash: "f8a8ba34c0460203a6d7a13721f7bc6ff7ab1e7f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d1e923075a89220a981d8c2511065b97bcf4dc5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",
                hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
                datavalue: {
                  value: "3852",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a2c482c4381b8ce33ae32b3998e8ec614fedebb7",
                datavalue: {
                  value: {
                    time: "+2021-02-13T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        hash: "02ea825d31d1f83fb6d355d36b87ae6bd8c9b0b6",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 2896489,
            id: "Q2896489",
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
            hash: "963e83f6767b00a7ddcfd1c6df9a7332812adc01",
            datavalue: {
              value: {
                time: "+1901-00-00T00:00:00Z",
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
            hash: "d58760fff4a4fef6f0b21838043ff8429091ba15",
            datavalue: {
              value: {
                time: "+1906-00-00T00:00:00Z",
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
      id: "Q937$623c4508-4c8d-6ae1-530f-9591770822de",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        hash: "551c564cb64a03da47cba624b0b5e914422c35f9",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 121594,
            id: "Q121594",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P1932: [
          {
            snaktype: "value",
            property: "P1932",
            hash: "aac2e8ccc97a4501cf3c6d17f18b423edc96be40",
            datavalue: {
              value: "Universitäts-Professor",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1932"],
      id: "Q937$075AFDBC-7E85-428C-A407-4B45211B3C28",
      rank: "normal",
      references: [
        {
          hash: "31fe1fb33dbcf2620b8d69e5c35caa95752cc698",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "9b3905d0de11c7cbe9828f8004cc30e139780357",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 104698881,
                    id: "Q104698881",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "8b2a6627f52d3e0cf7ef88aade13ac8351c19f58",
                datavalue: {
                  value:
                    "http://digi.nacr.cz/prihlasky2/index.php?action=link&ref=czarch:CZ-100000010:874&karton=3&folium=290",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "c707868fc0cb79f775f05154cf5744f2cbd9f8bd",
                datavalue: {
                  value: {
                    time: "+2021-01-06T00:00:00Z",
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
            P1932: [
              {
                snaktype: "value",
                property: "P1932",
                hash: "aac2e8ccc97a4501cf3c6d17f18b423edc96be40",
                datavalue: {
                  value: "Universitäts-Professor",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P854", "P813", "P1932"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P106",
        hash: "dc5a1a6e9776f6a359b059bcc3e377736634c95b",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 16003550,
            id: "Q16003550",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$5D381634-7466-4919-A345-CFBA7A2A5F5B",
      rank: "normal",
      references: [
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
  ],
  P269: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P269",
        hash: "ad8f56759520c872b147901a74ded01c50daa51e",
        datavalue: {
          value: "026849186",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$14E9B302-D7A0-488D-BB48-DE1A285827A6",
      rank: "normal",
      references: [
        {
          hash: "d4bd87b862b12d99d26e86472d44f26858dee639",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "f30cbd35620c4ea6d0633aaf0210a8916130469b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 8447,
                    id: "Q8447",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P268: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P268",
        hash: "7502b674b3ce130a850c3ff68487516dcbadd7f2",
        datavalue: {
          value: "119016075",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$D0E13400-F973-43AA-BD39-466EC0C257FF",
      rank: "normal",
      references: [
        {
          hash: "d4bd87b862b12d99d26e86472d44f26858dee639",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "f30cbd35620c4ea6d0633aaf0210a8916130469b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 8447,
                    id: "Q8447",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P373: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P373",
        hash: "be154a8a3dfc826844ceb5a62389857a65ff1e4e",
        datavalue: {
          value: "Albert Einstein",
          type: "string",
        },
        datatype: "string",
      },
      type: "statement",
      id: "q937$2F332903-133D-4CA0-AD24-8B4292C2BF89",
      rank: "normal",
    },
  ],
  P244: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P244",
        hash: "9f93e3c0521c873d0ec0cfce1b537e4ccd989644",
        datavalue: {
          value: "n79022889",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$9BA2796D-01EE-4037-9910-029BA945CABA",
      rank: "normal",
      references: [
        {
          hash: "fa278ebfc458360e5aed63d5058cca83c46134f1",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "e4f6d9441d0600513c4533c672b5ab472dc73694",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 328,
                    id: "Q328",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          hash: "9a24f7c0208b05d6be97077d855671d1dfdbc0dd",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "d38375ffe6fe142663ff55cd783aa4df4301d83d",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 48183,
                    id: "Q48183",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          hash: "f8a8ba34c0460203a6d7a13721f7bc6ff7ab1e7f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d1e923075a89220a981d8c2511065b97bcf4dc5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",
                hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
                datavalue: {
                  value: "3852",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a2c482c4381b8ce33ae32b3998e8ec614fedebb7",
                datavalue: {
                  value: {
                    time: "+2021-02-13T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
  ],
  P463: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "9c669857e8657cbaf5bd64b76f6b7c74199561d6",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 123885,
            id: "Q123885",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q937$642B1EBB-AED3-455E-9A3C-B4D8B2664031",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "5ffd663240fa3ec75cfc2da1957f7ff6cafeeaad",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 329464,
            id: "Q329464",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$7451E5A0-6E6E-4A82-848B-CE55019A96CD",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "28ccb0aab887f4299ecd9676f9a1969ed76b807b",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 543804,
            id: "Q543804",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$882DAFA0-5B20-4620-A4DF-B51A0C556ADF",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "7dbb649c591541922397df8d14e17b96488fcb76",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 338432,
            id: "Q338432",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$552717B0-4610-4F96-A70F-56354F68ED41",
      rank: "normal",
      references: [
        {
          hash: "d5847b9b6032aa8b13dae3c2dfd9ed5d114d21b3",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "5a343e7e758a4282a01316d3e959b6e653b767fc",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 11920,
                    id: "Q11920",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "ff8dca99034c4806cae18b8556d38607c6b74d3a",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 466089,
            id: "Q466089",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$78190F69-14B5-4EF5-86AA-3EE6990850F0",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "16e9d01b8e4b4140b9ed7bbe15a31d66065c9a62",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 684415,
            id: "Q684415",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$023CD9AD-8957-4662-A45F-40D69693D7BA",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "76773cc52b71d345be50db860c7d1033b831d116",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 414188,
            id: "Q414188",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$D3C196C2-1C80-4FDB-BBC1-E3105C9C811F",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "74df7c2ede7afb47020a8dcf3672198742eed4d3",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 2370801,
            id: "Q2370801",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$0C556605-6B7E-4184-83EC-E95289F6D62A",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "4f67f3f79531382391111c120d84496f66e89bb7",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 188771,
            id: "Q188771",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$1E3374B7-2511-4A2B-8791-8088B171C0DC",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "85eb2c2a74c33a3b03d8be2e8d7a1373e8805f5f",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 191583,
            id: "Q191583",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$613DBC15-8BF9-4C25-B5E1-B12F510C4BF3",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "b2c0e62fd35875bae52d80e30b5f41f57834ea99",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 253439,
            id: "Q253439",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$08567CBB-2DE3-4CCD-B10A-72E04E7AA468",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "365155ee3b581b94305dee67714783066bc9fad3",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 463303,
            id: "Q463303",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$74DCC2BF-C874-4BE6-8A6E-5A1A65279ED6",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "9bce4c4da0087a45a4b42b111391f65af3f5f4ad",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 4397938,
            id: "Q4397938",
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
            hash: "f9941dbac03ff4df7ff591c148e75342d73ea24c",
            datavalue: {
              value: {
                time: "+1922-00-00T00:00:00Z",
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
      "qualifiers-order": ["P580"],
      id: "Q937$F1E10DFB-1C54-474A-BB4C-FEC6FD2DFABF",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "201876e516048f8cc8e6dc25baf89360895250e6",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 2095524,
            id: "Q2095524",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$D0DAD5E7-6E01-4F03-928B-8684D26364DA",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "d2a2cd49d46320f441d28184aaf376ce92b8e055",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 3603946,
            id: "Q3603946",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$57ABD98B-0DD1-40D6-9B21-A41B86AC9ABB",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "59f25221357999c910073630984c9d81ca543696",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 2497232,
            id: "Q2497232",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$2a97ea20-4b54-a2f7-b2aa-682efb715bc2",
      rank: "normal",
      references: [
        {
          hash: "d464e419a5ee00253b9661ec7e89452a7d61cacd",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "d88ffed482916dd71e18153005bbb7f7d13a8774",
                datavalue: {
                  value:
                    "http://www.dichistoriasaude.coc.fiocruz.br/iah/pt/verbetes/acadbrci.htm",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
        {
          hash: "04d0f1ad637a49ef5a735fb07e0839c1c0abaa87",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "e393ad52ebad5e023019c49561a4671fba7b5874",
                datavalue: {
                  value: "http://www.abc.org.br/membro/albert-einstein/",
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
        property: "P463",
        hash: "88ba35285d66cb11948b14f77f0e5cac5a7d9eb2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 270794,
            id: "Q270794",
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
            hash: "f9941dbac03ff4df7ff591c148e75342d73ea24c",
            datavalue: {
              value: {
                time: "+1922-00-00T00:00:00Z",
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
        P2868: [
          {
            snaktype: "value",
            property: "P2868",
            hash: "e5937fb3617f90f36ddfad3cb1984770d83536ab",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 61664704,
                id: "Q61664704",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P2868"],
      id: "Q937$d4cf1f6d-4a4b-992e-4d16-e7db8976dc98",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "88ba35285d66cb11948b14f77f0e5cac5a7d9eb2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 270794,
            id: "Q270794",
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
            hash: "01bbb9632e931893d283cd34edc8afd3a207d467",
            datavalue: {
              value: {
                time: "+1942-00-00T00:00:00Z",
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
        P2868: [
          {
            snaktype: "value",
            property: "P2868",
            hash: "526d65f8d31ad7a56da99a78a784e52da063260e",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 63315195,
                id: "Q63315195",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P2868"],
      id: "Q937$b304cb4c-4594-d3dd-6d10-22602a5238c5",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P463",
        hash: "214e3880434519eed7c74645d6e21bf99fbb3746",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 2945826,
            id: "Q2945826",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$fb68e164-4300-788d-b577-2b38bc419789",
      rank: "normal",
      references: [
        {
          hash: "d48f0056c5361b7a073bb652f005f015f0ced203",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "f30cbd35620c4ea6d0633aaf0210a8916130469b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 8447,
                    id: "Q8447",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "8b3dd6b9a964cda31b2ec45c8857686110a135af",
                datavalue: {
                  value:
                    "https://fr.wikipedia.org/w/index.php?title=Centre_international_de_synth%C3%A8se&oldid=159820946",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
    },
  ],
  P434: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P434",
        hash: "6a04e418be3f687c4ba372397850c147d7688a8a",
        datavalue: {
          value: "c98c325e-7277-46e8-8b44-e3517f3e041a",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$E0DFBCB9-E69E-4469-A420-60B33E530DC1",
      rank: "normal",
      references: [
        {
          hash: "706208b3024200fd0a39ad499808dd0d98d74065",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "623cc8f0e2f65afe4d66b91962d354a2f3aa9a27",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 14005,
                    id: "Q14005",
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
  P569: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P569",
        hash: "e80d845c8bf6c2e47bdc5f85c11ab21d0f2c9a75",
        datavalue: {
          value: {
            time: "+1879-03-14T00:00:00Z",
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
      type: "statement",
      id: "q937$2ecb21c3-4db1-54e8-27c4-a8a40541930c",
      rank: "normal",
      references: [
        {
          hash: "abc9457dcf728dd069b8ed5b2e1a86035cf2b679",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "019a50b7de741e0068bde41c9d9955b22a5de47b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "7805df7373a5e95763e019b855686d24acee918e",
                datavalue: {
                  value: {
                    time: "+2014-04-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
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
          hash: "81879642224ecc141500846bdf64e0cc71170210",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "def9f19d84b65167a2a17ce38364d264c16127fc",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 19938912,
                    id: "Q19938912",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P268: [
              {
                snaktype: "value",
                property: "P268",
                hash: "7502b674b3ce130a850c3ff68487516dcbadd7f2",
                datavalue: {
                  value: "119016075",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "d6162a1716489623c6e595e448b17f8dca4fb2e8",
                datavalue: {
                  value: {
                    time: "+2015-10-10T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P268", "P813"],
        },
        {
          hash: "49fdb5fe81b8355b0a67fc010bab1d0476734c67",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "2cb5c0eade17fb0e5e702991e28a2089d4d63c4b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 547473,
                    id: "Q547473",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "ae679278fac1015c6ec3258b161cd544ec2bfad5",
                datavalue: {
                  value: {
                    time: "+2017-08-22T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          hash: "1a65ca93873da6d986c035b406ca44dfa4a93d9d",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "f98ec89708e8eab9511c049702ef59df0721d652",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 29861311,
                    id: "Q29861311",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3430: [
              {
                snaktype: "value",
                property: "P3430",
                hash: "e35db69f9528ea71625a64be0af5cec8a37847a6",
                datavalue: {
                  value: "w69k499r",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P3430", "P1810", "P813"],
        },
        {
          hash: "fe1e5d1fd947b477fc12e16d33d717ea41380da8",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "2cc654324c032b2005270d29bcb82ba8902257e4",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1165538,
                    id: "Q1165538",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3222: [
              {
                snaktype: "value",
                property: "P3222",
                hash: "e3cd0cda97ab51219fc5c568a3ab5fbfc70a4e4f",
                datavalue: {
                  value: "albert-einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P3222", "P1810", "P813"],
        },
        {
          hash: "7b701cb9982d864e6c64211784ada09328d98fd5",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "b62f3fa8bab7eb5e1bfe16d03cda082d25315c85",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 63056,
                    id: "Q63056",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P535: [
              {
                snaktype: "value",
                property: "P535",
                hash: "da15aec810f7bcb1e49ef20d23045675dd6a72fc",
                datavalue: {
                  value: "314",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P535", "P1810", "P813"],
        },
        {
          hash: "434eea328eccf5f0a80e5615cc5195cd509e4b41",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "871891c242389d06b23bf809fdc0301df1ed9c77",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 2629164,
                    id: "Q2629164",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1233: [
              {
                snaktype: "value",
                property: "P1233",
                hash: "7e5955f119210eaf27c9c2465d81d50964dcf35b",
                datavalue: {
                  value: "99141",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P1233", "P1810", "P813"],
        },
        {
          hash: "158383a80aa90f20f52ce945db29aaa48573b76f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "8d47e4ff1432a81ed9918a0b2603e6b1d1af79ce",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 15706812,
                    id: "Q15706812",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2639: [
              {
                snaktype: "value",
                property: "P2639",
                hash: "d603432e459e9d500550dca815af3746148400c9",
                datavalue: {
                  value: "4533e35f16964c939b82033bb6259e32",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P2639", "P1810", "P813"],
        },
        {
          hash: "4116b0e78378028fc67d988a2edf5cdc5a4b9dcf",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "4c0edb53aad8585b50310f3d8bafe5461af9a938",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 2728291,
                    id: "Q2728291",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P6234: [
              {
                snaktype: "value",
                property: "P6234",
                hash: "d814ae8c31a912f2c8a770986417f6562ea38394",
                datavalue: {
                  value: "albert-einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P6234", "P1810", "P813"],
        },
        {
          hash: "72c759433ee697a28d30a9783b12fcc165a64484",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "6f6de580022886484e5ebca7ad69426361962aa4",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 6023365,
                    id: "Q6023365",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P863: [
              {
                snaktype: "value",
                property: "P863",
                hash: "e5251a9b11eda3b59608a861618bbfb1c9b119b9",
                datavalue: {
                  value: "thinker/2958",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P863", "P1810", "P813"],
        },
        {
          hash: "34a39d617ee2c392b43a96b57805ad70ce199afe",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "44f3d237312ec569c8f3bcee613cd7e5b61ba091",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 21491701,
                    id: "Q21491701",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2454: [
              {
                snaktype: "value",
                property: "P2454",
                hash: "82c9443b77489dd41574436858ec74e0f14644f8",
                datavalue: {
                  value: "PE00000116",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P2454", "P1810", "P813"],
        },
        {
          hash: "60d0de3816e6bc46c68c1724cdc65a5cd711bd34",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "5a6c2e831c50b974de6fddefd4af24e2cb11951f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23667505,
                    id: "Q23667505",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2861: [
              {
                snaktype: "value",
                property: "P2861",
                hash: "dbd892e80eb0e661e46a13fb1f39312888c4944d",
                datavalue: {
                  value: "1215",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "8c7f4a22c0be57fa68b18e01ccf163bc2d2e0e53",
                datavalue: {
                  value: {
                    time: "+2019-06-19T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P2861", "P813"],
        },
        {
          hash: "5b46fdbf81acae18b5eee24436899240fd9b5738",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "e2a81dbf2f7dd02b332d6358ef65f622f82e8cc3",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 237227,
                    id: "Q237227",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P5019: [
              {
                snaktype: "value",
                property: "P5019",
                hash: "27bca1889ea60682f5f6628e94b771a203974c90",
                datavalue: {
                  value: "einstein-albert",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P5019", "P1810", "P813"],
        },
        {
          hash: "2460a13623ed9cfd696136b5bfb98f21b5f50a22",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "65bf94067e6255ff8d61c9c9535d98794a309a4c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 746368,
                    id: "Q746368",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4342: [
              {
                snaktype: "value",
                property: "P4342",
                hash: "31cec329720341fe1868f8d4536aab50c5b00b9c",
                datavalue: {
                  value: "Albert_Einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P4342", "P1810"],
        },
        {
          hash: "513f7563e88a21e50cc94eef1912d435e879d04e",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "52c431c41b8a73130ff729f9b7027b9d19fffcd5",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 2664168,
                    id: "Q2664168",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1296: [
              {
                snaktype: "value",
                property: "P1296",
                hash: "b2798085f9a6d92362959d9d75a63d71ae0f347d",
                datavalue: {
                  value: "0023623",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P1296", "P1810"],
        },
        {
          hash: "94924219be731864393435e77611c7055a75b2e0",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "0a32608aa08f3426db7556421893b00049eafc86",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 98769076,
                    id: "Q98769076",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P8094: [
              {
                snaktype: "value",
                property: "P8094",
                hash: "dfaa2bd01bfe91b9325baf1b1d9daa3c86c13391",
                datavalue: {
                  value: "einsteina",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P8094", "P1810"],
        },
        {
          hash: "dfd769037ab53ed69d4879a1dfabeda939ced34b",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "de3c214ce935a04397d58aeb41705a360e984ff8",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 83365652,
                    id: "Q83365652",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7929: [
              {
                snaktype: "value",
                property: "P7929",
                hash: "e53da7881e453ce21af6dcc9e912c734f20e4b57",
                datavalue: {
                  value: "p=albert;n=einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P7929", "P1810"],
        },
        {
          hash: "343148eb4688024dff43df684872dbbcf46509c4",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d0a369e4d8ba7b3c1966586b8103076a199d263c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1307356,
                    id: "Q1307356",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P8854: [
              {
                snaktype: "value",
                property: "P8854",
                hash: "69320234d99ff7bc1236cb44c6bca047fac9c811",
                datavalue: {
                  value: "18467",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P8854", "P1810"],
        },
        {
          hash: "c2d41add3f57424f39bee47c6ca38834c394fc9a",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "46c57705d3d830a83aa228de72dc7c148cd30551",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 3407324,
                    id: "Q3407324",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P8349: [
              {
                snaktype: "value",
                property: "P8349",
                hash: "e9d0b2cab2507ca3a22291651969f9c000923d27",
                datavalue: {
                  value: "56686",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P8349", "P1810"],
        },
        {
          hash: "f8a8ba34c0460203a6d7a13721f7bc6ff7ab1e7f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d1e923075a89220a981d8c2511065b97bcf4dc5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",
                hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
                datavalue: {
                  value: "3852",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a2c482c4381b8ce33ae32b3998e8ec614fedebb7",
                datavalue: {
                  value: {
                    time: "+2021-02-13T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
        {
          hash: "580d68f834ec5a65f914f22787b95cafbe37da6a",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d090d15da7d9e694e4007fa21232edb621e67ba3",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 107456632,
                    id: "Q107456632",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P6844: [
              {
                snaktype: "value",
                property: "P6844",
                hash: "258524b3a122bcf9fa701429899163a06328cd3f",
                datavalue: {
                  value: "16734",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "6f8f333cebfac92bb111b2fdd9fcbf7697285918",
                datavalue: {
                  value: {
                    time: "+2021-04-01T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P6844", "P813"],
        },
        {
          hash: "41bc91953c471e8136e4f23a44f3c5efda1a332c",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "b6eb8176171d8274071befafed585d48486f5862",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 55740543,
                    id: "Q55740543",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2383: [
              {
                snaktype: "value",
                property: "P2383",
                hash: "dfce2ed6be4d834499da945cf31ed65a69f961df",
                datavalue: {
                  value: "117243",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "f99b0df981e6ea85c5e9894f911ff99780bda854",
                datavalue: {
                  value: {
                    text: "Albert Einstein",
                    language: "fr",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P248", "P2383", "P1476"],
        },
        {
          hash: "56ecd76b9a6ddf916c58b193c8c357bf1eb95629",
          snaks: {
            P5375: [
              {
                snaktype: "value",
                property: "P5375",
                hash: "59c882e6dc555253d3a129452d391c6cd1170f86",
                datavalue: {
                  value: "5923",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "0bde68953160e94daaa581d877970796760d2ec8",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 105958830,
                    id: "Q105958830",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P5375", "P1810", "P248"],
        },
        {
          hash: "f0f80dff62ffcf74f6e619e6063bc254e09bb04b",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "055f82ef73ce123450780d681359ac6e9077e315",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 107343683,
                    id: "Q107343683",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1284: [
              {
                snaktype: "value",
                property: "P1284",
                hash: "14873176416f8750417aec470f8f31c5cff7a9b6",
                datavalue: {
                  value: "00000000666",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P1284", "P813", "P1810"],
        },
      ],
    },
  ],
  P570: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P570",
        hash: "9c234eae7ea4449f273c9b68e44aaee221e0d0f8",
        datavalue: {
          value: {
            time: "+1955-04-18T00:00:00Z",
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
      type: "statement",
      id: "q937$577aaeb4-4ce9-fdd1-791f-78d893a0e5a8",
      rank: "normal",
      references: [
        {
          hash: "abc9457dcf728dd069b8ed5b2e1a86035cf2b679",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "019a50b7de741e0068bde41c9d9955b22a5de47b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "7805df7373a5e95763e019b855686d24acee918e",
                datavalue: {
                  value: {
                    time: "+2014-04-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          hash: "94ef295c137fa7ade20ac61f06b65ed6fd4d8e36",
          snaks: {
            P958: [
              {
                snaktype: "value",
                property: "P958",
                hash: "7a908714e094c32959cc3edc8271a843c6b192a7",
                datavalue: {
                  value: "Эйнштейн Альберт",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "6ff2cf2f32fe6bf566da4c3c6e2d0ae639ecef93",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 17378135,
                    id: "Q17378135",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "257d05ea12cb52ad821eebdba59a493d541a923f",
                datavalue: {
                  value: {
                    time: "+2015-09-28T00:00:00Z",
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
          },
          "snaks-order": ["P958", "P248", "P813"],
        },
        {
          hash: "81879642224ecc141500846bdf64e0cc71170210",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "def9f19d84b65167a2a17ce38364d264c16127fc",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 19938912,
                    id: "Q19938912",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P268: [
              {
                snaktype: "value",
                property: "P268",
                hash: "7502b674b3ce130a850c3ff68487516dcbadd7f2",
                datavalue: {
                  value: "119016075",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "d6162a1716489623c6e595e448b17f8dca4fb2e8",
                datavalue: {
                  value: {
                    time: "+2015-10-10T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P268", "P813"],
        },
        {
          hash: "49fdb5fe81b8355b0a67fc010bab1d0476734c67",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "2cb5c0eade17fb0e5e702991e28a2089d4d63c4b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 547473,
                    id: "Q547473",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "ae679278fac1015c6ec3258b161cd544ec2bfad5",
                datavalue: {
                  value: {
                    time: "+2017-08-22T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          hash: "1a65ca93873da6d986c035b406ca44dfa4a93d9d",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "f98ec89708e8eab9511c049702ef59df0721d652",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 29861311,
                    id: "Q29861311",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3430: [
              {
                snaktype: "value",
                property: "P3430",
                hash: "e35db69f9528ea71625a64be0af5cec8a37847a6",
                datavalue: {
                  value: "w69k499r",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P3430", "P1810", "P813"],
        },
        {
          hash: "fe1e5d1fd947b477fc12e16d33d717ea41380da8",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "2cc654324c032b2005270d29bcb82ba8902257e4",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1165538,
                    id: "Q1165538",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3222: [
              {
                snaktype: "value",
                property: "P3222",
                hash: "e3cd0cda97ab51219fc5c568a3ab5fbfc70a4e4f",
                datavalue: {
                  value: "albert-einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P3222", "P1810", "P813"],
        },
        {
          hash: "7b701cb9982d864e6c64211784ada09328d98fd5",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "b62f3fa8bab7eb5e1bfe16d03cda082d25315c85",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 63056,
                    id: "Q63056",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P535: [
              {
                snaktype: "value",
                property: "P535",
                hash: "da15aec810f7bcb1e49ef20d23045675dd6a72fc",
                datavalue: {
                  value: "314",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P535", "P1810", "P813"],
        },
        {
          hash: "434eea328eccf5f0a80e5615cc5195cd509e4b41",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "871891c242389d06b23bf809fdc0301df1ed9c77",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 2629164,
                    id: "Q2629164",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1233: [
              {
                snaktype: "value",
                property: "P1233",
                hash: "7e5955f119210eaf27c9c2465d81d50964dcf35b",
                datavalue: {
                  value: "99141",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P1233", "P1810", "P813"],
        },
        {
          hash: "158383a80aa90f20f52ce945db29aaa48573b76f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "8d47e4ff1432a81ed9918a0b2603e6b1d1af79ce",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 15706812,
                    id: "Q15706812",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2639: [
              {
                snaktype: "value",
                property: "P2639",
                hash: "d603432e459e9d500550dca815af3746148400c9",
                datavalue: {
                  value: "4533e35f16964c939b82033bb6259e32",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P2639", "P1810", "P813"],
        },
        {
          hash: "4116b0e78378028fc67d988a2edf5cdc5a4b9dcf",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "4c0edb53aad8585b50310f3d8bafe5461af9a938",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 2728291,
                    id: "Q2728291",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P6234: [
              {
                snaktype: "value",
                property: "P6234",
                hash: "d814ae8c31a912f2c8a770986417f6562ea38394",
                datavalue: {
                  value: "albert-einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P6234", "P1810", "P813"],
        },
        {
          hash: "72c759433ee697a28d30a9783b12fcc165a64484",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "6f6de580022886484e5ebca7ad69426361962aa4",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 6023365,
                    id: "Q6023365",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P863: [
              {
                snaktype: "value",
                property: "P863",
                hash: "e5251a9b11eda3b59608a861618bbfb1c9b119b9",
                datavalue: {
                  value: "thinker/2958",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P863", "P1810", "P813"],
        },
        {
          hash: "34a39d617ee2c392b43a96b57805ad70ce199afe",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "44f3d237312ec569c8f3bcee613cd7e5b61ba091",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 21491701,
                    id: "Q21491701",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2454: [
              {
                snaktype: "value",
                property: "P2454",
                hash: "82c9443b77489dd41574436858ec74e0f14644f8",
                datavalue: {
                  value: "PE00000116",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P2454", "P1810", "P813"],
        },
        {
          hash: "60d0de3816e6bc46c68c1724cdc65a5cd711bd34",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "5a6c2e831c50b974de6fddefd4af24e2cb11951f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23667505,
                    id: "Q23667505",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2861: [
              {
                snaktype: "value",
                property: "P2861",
                hash: "dbd892e80eb0e661e46a13fb1f39312888c4944d",
                datavalue: {
                  value: "1215",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "8c7f4a22c0be57fa68b18e01ccf163bc2d2e0e53",
                datavalue: {
                  value: {
                    time: "+2019-06-19T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P2861", "P813"],
        },
        {
          hash: "5b46fdbf81acae18b5eee24436899240fd9b5738",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "e2a81dbf2f7dd02b332d6358ef65f622f82e8cc3",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 237227,
                    id: "Q237227",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P5019: [
              {
                snaktype: "value",
                property: "P5019",
                hash: "27bca1889ea60682f5f6628e94b771a203974c90",
                datavalue: {
                  value: "einstein-albert",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P5019", "P1810", "P813"],
        },
        {
          hash: "2460a13623ed9cfd696136b5bfb98f21b5f50a22",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "65bf94067e6255ff8d61c9c9535d98794a309a4c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 746368,
                    id: "Q746368",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4342: [
              {
                snaktype: "value",
                property: "P4342",
                hash: "31cec329720341fe1868f8d4536aab50c5b00b9c",
                datavalue: {
                  value: "Albert_Einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P4342", "P1810"],
        },
        {
          hash: "513f7563e88a21e50cc94eef1912d435e879d04e",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "52c431c41b8a73130ff729f9b7027b9d19fffcd5",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 2664168,
                    id: "Q2664168",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1296: [
              {
                snaktype: "value",
                property: "P1296",
                hash: "b2798085f9a6d92362959d9d75a63d71ae0f347d",
                datavalue: {
                  value: "0023623",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P1296", "P1810"],
        },
        {
          hash: "94924219be731864393435e77611c7055a75b2e0",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "0a32608aa08f3426db7556421893b00049eafc86",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 98769076,
                    id: "Q98769076",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P8094: [
              {
                snaktype: "value",
                property: "P8094",
                hash: "dfaa2bd01bfe91b9325baf1b1d9daa3c86c13391",
                datavalue: {
                  value: "einsteina",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P8094", "P1810"],
        },
        {
          hash: "dfd769037ab53ed69d4879a1dfabeda939ced34b",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "de3c214ce935a04397d58aeb41705a360e984ff8",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 83365652,
                    id: "Q83365652",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7929: [
              {
                snaktype: "value",
                property: "P7929",
                hash: "e53da7881e453ce21af6dcc9e912c734f20e4b57",
                datavalue: {
                  value: "p=albert;n=einstein",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P7929", "P1810"],
        },
        {
          hash: "343148eb4688024dff43df684872dbbcf46509c4",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d0a369e4d8ba7b3c1966586b8103076a199d263c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1307356,
                    id: "Q1307356",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P8854: [
              {
                snaktype: "value",
                property: "P8854",
                hash: "69320234d99ff7bc1236cb44c6bca047fac9c811",
                datavalue: {
                  value: "18467",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P8854", "P1810"],
        },
        {
          hash: "c2d41add3f57424f39bee47c6ca38834c394fc9a",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "46c57705d3d830a83aa228de72dc7c148cd30551",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 3407324,
                    id: "Q3407324",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P8349: [
              {
                snaktype: "value",
                property: "P8349",
                hash: "e9d0b2cab2507ca3a22291651969f9c000923d27",
                datavalue: {
                  value: "56686",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P8349", "P1810"],
        },
        {
          hash: "f8a8ba34c0460203a6d7a13721f7bc6ff7ab1e7f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d1e923075a89220a981d8c2511065b97bcf4dc5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",
                hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
                datavalue: {
                  value: "3852",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a2c482c4381b8ce33ae32b3998e8ec614fedebb7",
                datavalue: {
                  value: {
                    time: "+2021-02-13T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
        {
          hash: "580d68f834ec5a65f914f22787b95cafbe37da6a",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d090d15da7d9e694e4007fa21232edb621e67ba3",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 107456632,
                    id: "Q107456632",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P6844: [
              {
                snaktype: "value",
                property: "P6844",
                hash: "258524b3a122bcf9fa701429899163a06328cd3f",
                datavalue: {
                  value: "16734",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "6f8f333cebfac92bb111b2fdd9fcbf7697285918",
                datavalue: {
                  value: {
                    time: "+2021-04-01T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P6844", "P813"],
        },
        {
          hash: "41bc91953c471e8136e4f23a44f3c5efda1a332c",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "b6eb8176171d8274071befafed585d48486f5862",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 55740543,
                    id: "Q55740543",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2383: [
              {
                snaktype: "value",
                property: "P2383",
                hash: "dfce2ed6be4d834499da945cf31ed65a69f961df",
                datavalue: {
                  value: "117243",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "f99b0df981e6ea85c5e9894f911ff99780bda854",
                datavalue: {
                  value: {
                    text: "Albert Einstein",
                    language: "fr",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P248", "P2383", "P1476"],
        },
        {
          hash: "f0f80dff62ffcf74f6e619e6063bc254e09bb04b",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "055f82ef73ce123450780d681359ac6e9077e315",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 107343683,
                    id: "Q107343683",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1284: [
              {
                snaktype: "value",
                property: "P1284",
                hash: "14873176416f8750417aec470f8f31c5cff7a9b6",
                datavalue: {
                  value: "00000000666",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e5f60ab0b03700bb883efce38f8022d023bc49fb",
                datavalue: {
                  value: {
                    time: "+2017-10-09T00:00:00Z",
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
            P1810: [
              {
                snaktype: "value",
                property: "P1810",
                hash: "38f1530d2785e41affc551297fcbc942306fce4e",
                datavalue: {
                  value: "Albert Einstein",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P248", "P1284", "P813", "P1810"],
        },
      ],
    },
  ],
  P349: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P349",
        hash: "5ce85a13ed0d9ce1bd27ad0126b0fce9e625a444",
        datavalue: {
          value: "00438728",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$F926A784-7C6D-48EB-A49B-E096AEC46FCD",
      rank: "normal",
      references: [
        {
          hash: "9a24f7c0208b05d6be97077d855671d1dfdbc0dd",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "d38375ffe6fe142663ff55cd783aa4df4301d83d",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 48183,
                    id: "Q48183",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P549: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P549",
        hash: "f03c6c1c0ac3523b30432801aa9fe58875e9d058",
        datavalue: {
          value: "53269",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$74D92D81-EE56-4941-AA45-C85494191269",
      rank: "normal",
      references: [
        {
          hash: "d5847b9b6032aa8b13dae3c2dfd9ed5d114d21b3",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "5a343e7e758a4282a01316d3e959b6e653b767fc",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 11920,
                    id: "Q11920",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P485: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P485",
        hash: "0ac47a185367e270c27e5b47b411b25b60a3e031",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 675617,
            id: "Q675617",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "q937$bfa38bb1-4a58-28da-4662-7123ebe46b5e",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P485",
        hash: "e3298b532cfc5b81186c4ca0638e4f20d53ca2b5",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 22095877,
            id: "Q22095877",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P973: [
          {
            snaktype: "value",
            property: "P973",
            hash: "9a0a19faa91c277c7e075c34b427fad488e22fd5",
            datavalue: {
              value: "http://www.albert-einstein.org/.index3.html",
              type: "string",
            },
            datatype: "url",
          },
        ],
      },
      "qualifiers-order": ["P973"],
      id: "Q937$02527dba-46c3-5a8e-076f-102b61f64b7c",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P485",
        hash: "15ab12abb9d76d09b38d715b4a5b2d22e3938978",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 14708020,
            id: "Q14708020",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P973: [
          {
            snaktype: "value",
            property: "P973",
            hash: "00d7e51dc7ce1d662f3b607634856960d716d885",
            datavalue: {
              value: "https://finding-aids.lib.unc.edu/03048/",
              type: "string",
            },
            datatype: "url",
          },
        ],
        P217: [
          {
            snaktype: "value",
            property: "P217",
            hash: "0f6d8301fc604a50620735e968f5ecd169d70b24",
            datavalue: {
              value: "3048-z",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "d624e4c5662f97e54f9a3b1ba7b0f26330b7209f",
            datavalue: {
              value: "Albert Einstein Letter, undated.",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P973", "P217", "P1810"],
      id: "Q937$2891A7AE-59CC-4516-B92B-8D2BB8CFA6F3",
      rank: "normal",
      references: [
        {
          hash: "4dd8605e804950c9dc7ecb0659c86b1b7bdf6859",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "fe4c05cf3ab3a63c1063a92aa4e032658ae624db",
                datavalue: {
                  value: "https://finding-aids.lib.unc.edu/03048/",
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
        property: "P485",
        hash: "32b4a53bb24903c63c302fd41c5167104de12a2c",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 39934978,
            id: "Q39934978",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P217: [
          {
            snaktype: "value",
            property: "P217",
            hash: "7ca971fc83d0a8ae3a12ff872c5ee66a2d80d175",
            datavalue: {
              value: "Sammelbestand_Einstein_Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P217"],
      id: "Q937$F3A2D721-A412-416F-8307-9B04F5D0EFCA",
      rank: "normal",
      references: [
        {
          hash: "7d6693e84bf080a79c33bd57a88237cf568874e8",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "4dfd1f7a8736cfc97200f16e817d4fde9bf709c2",
                datavalue: {
                  value:
                    "https://vls.hsa.ethz.ch/client/link/de/archiv/einheit/b9b4178f95254672b981174aaee8f06b",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "7788b05a74998a48235293c45ee9ea39753c80b1",
                datavalue: {
                  value: {
                    time: "+2025-01-15T00:00:00Z",
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
          },
          "snaks-order": ["P854", "P813"],
        },
      ],
    },
  ],
  P910: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P910",
        hash: "7c12caaaa7a9e19865022b4de8656d8768323405",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 7213562,
            id: "Q7213562",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$d415d195-405e-41b3-18e0-7222736f0659",
      rank: "normal",
    },
  ],
  P31: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P31",
        hash: "ad7d38a03cdd40cdc373de0dc4e7b7fcbccb31d9",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 5,
            id: "Q5",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$ED5C61AE-EA02-4E78-932B-FF21A34714EB",
      rank: "normal",
      references: [
        {
          hash: "81879642224ecc141500846bdf64e0cc71170210",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "def9f19d84b65167a2a17ce38364d264c16127fc",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 19938912,
                    id: "Q19938912",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P268: [
              {
                snaktype: "value",
                property: "P268",
                hash: "7502b674b3ce130a850c3ff68487516dcbadd7f2",
                datavalue: {
                  value: "119016075",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "d6162a1716489623c6e595e448b17f8dca4fb2e8",
                datavalue: {
                  value: {
                    time: "+2015-10-10T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P268", "P813"],
        },
        {
          hash: "f8a8ba34c0460203a6d7a13721f7bc6ff7ab1e7f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d1e923075a89220a981d8c2511065b97bcf4dc5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",
                hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
                datavalue: {
                  value: "3852",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a2c482c4381b8ce33ae32b3998e8ec614fedebb7",
                datavalue: {
                  value: {
                    time: "+2021-02-13T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
  ],
  P691: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P691",
        hash: "4bd47192f5767ac051523bdb876ed08138953b30",
        datavalue: {
          value: "jn19990002019",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$677E4BC8-3AC3-4FE7-996F-86F794F6A9E6",
      rank: "normal",
    },
  ],
  P409: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P409",
        hash: "239e41cb394521ebb5a21e085cb8877d64ea0320",
        datavalue: {
          value: "36582360",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$A42E665D-E820-42D7-BEF1-7E06A8F4F7AA",
      rank: "normal",
      references: [
        {
          hash: "fa278ebfc458360e5aed63d5058cca83c46134f1",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "e4f6d9441d0600513c4533c672b5ab472dc73694",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 328,
                    id: "Q328",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P906: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P906",
        hash: "eba00749d0139761bf8cfc0ce728d83ce956772f",
        datavalue: {
          value: "184709",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$8DEE4AFA-8D09-4431-A651-1E48CCF61F9C",
      rank: "normal",
      references: [
        {
          hash: "7ff7e09a1fc4fa8024101709a0d36efbcc535e13",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "f9cbb65397877e9341028d020ffc100b73ffe419",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 877583,
                    id: "Q877583",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P245: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P245",
        hash: "5e871f3bf8f85e26d84f7535df369e82e7e3ceb2",
        datavalue: {
          value: "500240971",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$F735494D-7107-40C3-B9DE-75F9595E70BB",
      rank: "normal",
      references: [
        {
          hash: "fa278ebfc458360e5aed63d5058cca83c46134f1",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "e4f6d9441d0600513c4533c672b5ab472dc73694",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 328,
                    id: "Q328",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P1005: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1005",
        hash: "67664d119208e23df51e02fbe4a9cc2100579924",
        datavalue: {
          value: "26339",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$BABC7A6D-354E-49D9-9D6F-B575794A0546",
      rank: "normal",
    },
  ],
  P1006: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1006",
        hash: "36991527a8c4d852172b8682ece3f2250011ff97",
        datavalue: {
          value: "068350767",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$356672EF-41CD-4BBA-8010-A4D704268DAB",
      rank: "normal",
    },
  ],
  P646: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P646",
        hash: "0a76d7a54e075bff2a1ae869549f55d5207ac015",
        datavalue: {
          value: "/m/0jcx",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E34CCE18-850C-4A3F-88D4-B62FB5BD3E0B",
      rank: "normal",
      references: [
        {
          hash: "2b00cb481cddcac7623114367489b5c194901c4a",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "a94b740202b097dd33355e0e6c00e54b9395e5e0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 15241312,
                    id: "Q15241312",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P577: [
              {
                snaktype: "value",
                property: "P577",
                hash: "fde79ecb015112d2f29229ccc1ec514ed3e71fa2",
                datavalue: {
                  value: {
                    time: "+2013-10-28T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P577"],
        },
      ],
    },
  ],
  P184: [
    {
      mainsnak: {
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
      type: "statement",
      qualifiers: {
        P3831: [
          {
            snaktype: "value",
            property: "P3831",
            hash: "82ed99c9c459d1e68362d5863ea6a0fcd1076787",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 26236695,
                id: "Q26236695",
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
            hash: "fbc0615cab71af98c9c3f700b3404c7bba35f6d6",
            datavalue: {
              value: {
                time: "+1905-00-00T00:00:00Z",
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
      "qualifiers-order": ["P3831", "P585"],
      id: "Q937$99734d53-47c3-cc4b-580e-784486517d39",
      rank: "normal",
      references: [
        {
          hash: "f2ac4166e3ca9c42aee5964afc55a53569e8f770",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "a0d05bdb53068de9806540e67fb95451a6525c73",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 829984,
                    id: "Q829984",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P549: [
              {
                snaktype: "value",
                property: "P549",
                hash: "f03c6c1c0ac3523b30432801aa9fe58875e9d058",
                datavalue: {
                  value: "53269",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "fedddfe1921828c144fb17b47a2790cfd7b81c1d",
                datavalue: {
                  value: {
                    time: "+2019-12-15T00:00:00Z",
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
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "d288cb707ba40af9ddc9b7952212f63171a659b8",
                datavalue: {
                  value: {
                    text: "Eine neue Bestimmung der MoleküldimensionenMathematics Subject Classification: 70—Mechanics of particles and systems",
                    language: "de",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P248", "P549", "P813", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
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
      type: "statement",
      qualifiers: {
        P3831: [
          {
            snaktype: "value",
            property: "P3831",
            hash: "93baab4744eae32d132ffd773d068b153841903f",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 26236691,
                id: "Q26236691",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P3831"],
      id: "Q937$e3d28962-43ab-c2d8-e4d6-8284b893dff9",
      rank: "normal",
      references: [
        {
          hash: "f2ac4166e3ca9c42aee5964afc55a53569e8f770",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "a0d05bdb53068de9806540e67fb95451a6525c73",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 829984,
                    id: "Q829984",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P549: [
              {
                snaktype: "value",
                property: "P549",
                hash: "f03c6c1c0ac3523b30432801aa9fe58875e9d058",
                datavalue: {
                  value: "53269",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "fedddfe1921828c144fb17b47a2790cfd7b81c1d",
                datavalue: {
                  value: {
                    time: "+2019-12-15T00:00:00Z",
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
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "d288cb707ba40af9ddc9b7952212f63171a659b8",
                datavalue: {
                  value: {
                    text: "Eine neue Bestimmung der MoleküldimensionenMathematics Subject Classification: 70—Mechanics of particles and systems",
                    language: "de",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P248", "P549", "P813", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P184",
        hash: "4e22b7d8483b44bdc307b9010cb25d78118d8dc3",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 116635,
            id: "Q116635",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$61A00029-3304-45D0-AF63-38B5696AAAF5",
      rank: "normal",
      references: [
        {
          hash: "79d6dc980c5b77b0c501b087ef0ef6a48e555ae3",
          snaks: {
            P3452: [
              {
                snaktype: "value",
                property: "P3452",
                hash: "7ae5c3a4e42681d9f76a1f385e0d1b0f20fb6472",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 116635,
                    id: "Q116635",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P3452"],
        },
      ],
    },
  ],
  P1066: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1066",
        hash: "af79f48719e6075b24c0c8aa8cd23e626c0446b4",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 116635,
            id: "Q116635",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$670c8276-4457-cb31-a7ed-94749ac6b86a",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1066",
        hash: "58611b41cdd421011c436d7b9307f39f8eff2e9c",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 57246,
            id: "Q57246",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$1af7745f-44d9-46e2-672e-49e04b5132f3",
      rank: "normal",
    },
  ],
  P1017: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1017",
        hash: "9b401d1389ac083163c32322c149df940d6beaec",
        datavalue: {
          value: "ADV10181679",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$DFEE8D9A-C5F7-4A1C-B6EB-76754C1CF3B5",
      rank: "normal",
      references: [
        {
          hash: "f8a8ba34c0460203a6d7a13721f7bc6ff7ab1e7f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d1e923075a89220a981d8c2511065b97bcf4dc5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",
                hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
                datavalue: {
                  value: "3852",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a2c482c4381b8ce33ae32b3998e8ec614fedebb7",
                datavalue: {
                  value: {
                    time: "+2021-02-13T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
  ],
  P396: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P396",
        hash: "ce58d113a62b627dd0e1fe9f1587cb9efcab3567",
        datavalue: {
          value: "CFIV035853",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "b7113c27605f676881767266b2473b36853c2a14",
            datavalue: {
              value: "Einstein, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$A6CF3E97-B780-449A-92D9-7550A687AFD4",
      rank: "normal",
      references: [
        {
          hash: "f8a8ba34c0460203a6d7a13721f7bc6ff7ab1e7f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d1e923075a89220a981d8c2511065b97bcf4dc5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",
                hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
                datavalue: {
                  value: "3852",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a2c482c4381b8ce33ae32b3998e8ec614fedebb7",
                datavalue: {
                  value: {
                    time: "+2021-02-13T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
  ],
  P1015: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1015",
        hash: "a4fea8fd19f2ccc5e01423ab42a61a9036f7e039",
        datavalue: {
          value: "90053072",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$02C20F8E-58BD-4CD1-95A1-C45BF8D3B3A0",
      rank: "normal",
    },
  ],
  P950: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P950",
        hash: "f710330b963a9f5b621837a2540880fdd19336f3",
        datavalue: {
          value: "XX834035",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$8E2AC50E-695D-43E4-80EB-96BD2B5A5CF5",
      rank: "normal",
    },
  ],
  P1207: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1207",
        hash: "27b050b6ad5e9deb5c3254ecdbc6f213ff5e1eb1",
        datavalue: {
          value: "n95300836",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$BBCB193F-56B9-450A-AC4F-99072EDBDE8B",
      rank: "normal",
    },
  ],
  P735: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P735",
        hash: "b070bd5fdb5d5a38468c700c15223f2e1fce0053",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 577011,
            id: "Q577011",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P1545: [
          {
            snaktype: "value",
            property: "P1545",
            hash: "2a1ced1dca90648ea7e306acbadd74fc81a10722",
            datavalue: {
              value: "1",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1545"],
      id: "Q937$AED4F087-0294-4FD7-9507-A6171EAA3F27",
      rank: "normal",
      references: [
        {
          hash: "60d0de3816e6bc46c68c1724cdc65a5cd711bd34",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "5a6c2e831c50b974de6fddefd4af24e2cb11951f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23667505,
                    id: "Q23667505",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2861: [
              {
                snaktype: "value",
                property: "P2861",
                hash: "dbd892e80eb0e661e46a13fb1f39312888c4944d",
                datavalue: {
                  value: "1215",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "8c7f4a22c0be57fa68b18e01ccf163bc2d2e0e53",
                datavalue: {
                  value: {
                    time: "+2019-06-19T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P2861", "P813"],
        },
        {
          hash: "f8a8ba34c0460203a6d7a13721f7bc6ff7ab1e7f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d1e923075a89220a981d8c2511065b97bcf4dc5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",
                hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
                datavalue: {
                  value: "3852",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a2c482c4381b8ce33ae32b3998e8ec614fedebb7",
                datavalue: {
                  value: {
                    time: "+2021-02-13T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
        {
          hash: "5c741c42215322a43337762a1109bd27ce9c6b34",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "9b3905d0de11c7cbe9828f8004cc30e139780357",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 104698881,
                    id: "Q104698881",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "8b2a6627f52d3e0cf7ef88aade13ac8351c19f58",
                datavalue: {
                  value:
                    "http://digi.nacr.cz/prihlasky2/index.php?action=link&ref=czarch:CZ-100000010:874&karton=3&folium=290",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "c707868fc0cb79f775f05154cf5744f2cbd9f8bd",
                datavalue: {
                  value: {
                    time: "+2021-01-06T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P854", "P813"],
        },
      ],
    },
  ],
  P1273: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1273",
        hash: "373bcab93345ab713fbfe326b05f3fbbbef69e67",
        datavalue: {
          value: "a10077078",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E4036E0D-45C7-4D62-908D-2AABC971099B",
      rank: "normal",
      references: [
        {
          hash: "5f9ae84f2f9f0a04a56815dbe3c8f1e7628c9de4",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "6b7d4330c4aac4caec4ede9de0311ce273f88ecd",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 54919,
                    id: "Q54919",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P214: [
              {
                snaktype: "value",
                property: "P214",
                hash: "050765c998be3e14185037fb199a17ab35aebb75",
                datavalue: {
                  value: "75121530",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P214"],
        },
      ],
    },
  ],
  P998: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P998",
        hash: "50d5368dc41f599c8283c49029e66bec710d282a",
        datavalue: {
          value: "Science/Physics/History/People/Einstein,_Albert/",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "daf1c4fcb58181b02dff9cc89deb084004ddae4b",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1860,
                id: "Q1860",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$22A8DE0D-649A-4F71-B6EC-80C767F50CDC",
      rank: "preferred",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P998",
        hash: "c88be0fb92fae5fb12dda65fee510b460d871c7a",
        datavalue: {
          value:
            "World/Français/Sciences/Physique/Histoire/Personnages_historiques/Einstein,_Albert/",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "d197d0a5efa4b4c23a302a829dd3ef43684fe002",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 150,
                id: "Q150",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$1C3C9040-A752-47F6-9382-2F9557682E78",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P998",
        hash: "22dd7731fb8376eab47b5ca2e1a1c31c77139a0f",
        datavalue: {
          value:
            "World/Deutsch/Wissenschaft/Naturwissenschaften/Physik/Personen/Einstein,_Albert/",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "46bfd327b830f66f7061ea92d1be430c135fa91f",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$A8F18655-B3A0-4EC9-AA0B-8597A4AC8D1E",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P998",
        hash: "818ee779d378157eb3656926e8c405965c15a20a",
        datavalue: {
          value:
            "World/Español/Ciencia_y_tecnología/Física/Historia/Biografías/Einstein,_Albert/",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "ffe70325d10cfc55f0dca807ed80ca0b5b97c472",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1321,
                id: "Q1321",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$48BB41BA-D982-4E6D-9E78-96DDBB73A5D8",
      rank: "normal",
    },
  ],
  P1368: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1368",
        hash: "d8f1cb44cec5c2c232b6d95b11f35f5f636bdba4",
        datavalue: {
          value: "000027126",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$11AE3A27-3175-442B-8FA3-3E88930EE59E",
      rank: "normal",
    },
  ],
  P1375: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1375",
        hash: "819d792860588dd7a402d495087f014966c1164d",
        datavalue: {
          value: "000012537",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4E346517-ABD7-49CC-8DF3-F4E6A469888A",
      rank: "normal",
    },
  ],
  P1343: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        hash: "557ea78c0f1e93e22acdefeb44542b0c3c8014d4",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 17329836,
            id: "Q17329836",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P958: [
          {
            snaktype: "value",
            property: "P958",
            hash: "967c1e9b48a8acb3b66b0e6e4c195fe5c9683ee4",
            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P2699: [
          {
            snaktype: "value",
            property: "P2699",
            hash: "0375bde916f5c23719f17a6c81a6584afe37d9f2",
            datavalue: {
              value:
                "http://www.larousse.fr/encyclopedie/personnage/Albert_Einstein/117783",
              type: "string",
            },
            datatype: "url",
          },
        ],
      },
      "qualifiers-order": ["P958", "P2699"],
      id: "Q937$0AD0FBFC-0D40-45D6-B4DE-06B4F3662737",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        hash: "3e1145ed6a6ae37009850bfb9558a1e68d3ebcf4",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 17378135,
            id: "Q17378135",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P478: [
          {
            snaktype: "value",
            property: "P478",
            hash: "dfb379fff59e3cbf52ea972940fa85829de5ce0c",
            datavalue: {
              value: "29 : Чаган — Экс-ле-Бен",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P577: [
          {
            snaktype: "value",
            property: "P577",
            hash: "30acf3f5e021ae65e70b1bb6f8d14d5dd06513f5",
            datavalue: {
              value: {
                time: "+1978-00-00T00:00:00Z",
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
        P958: [
          {
            snaktype: "value",
            property: "P958",
            hash: "7a908714e094c32959cc3edc8271a843c6b192a7",
            datavalue: {
              value: "Эйнштейн Альберт",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P304: [
          {
            snaktype: "value",
            property: "P304",
            hash: "71003ba8c11ceaaa58e7d0eb11d8d14eea9d00e5",
            datavalue: {
              value: "578-579",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P478", "P577", "P958", "P304"],
      id: "Q937$589BB4AF-5A39-461E-B548-683810223683",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        hash: "00e47bc468fe34f0838dbe9af5c11130ff742409",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 51955019,
            id: "Q51955019",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$17D1B970-3D2D-415A-B6DC-3CEE7CAF42BF",
      rank: "normal",
      references: [
        {
          hash: "a4dcf14fb7f2c51a54d6e1c916c1f376ab395a20",
          snaks: {
            P958: [
              {
                snaktype: "value",
                property: "P958",
                hash: "e033362408d8b5368f442e24f7886530a95eea53",
                datavalue: {
                  value: "Einstein, Albert 1879-1955",
                  type: "string",
                },
                datatype: "string",
              },
            ],
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "69a1e5c7acf4a5a60879b2ee4e43da02329548c3",
                datavalue: {
                  value:
                    "http://digitale.beic.it/primo_library/libweb/action/search.do?fn=search&vid=BEIC&vl%283134987UI0%29=creator&vl%28freeText0%29=Einstein%20Albert",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P958", "P854"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        hash: "0d5652504d25c7e82ccab455e6a39aa951dc836c",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 67311526,
            id: "Q67311526",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P2699: [
          {
            snaktype: "value",
            property: "P2699",
            hash: "c6978f862a77ecb65680eec306376028762a09cd",
            datavalue: {
              value:
                "https://www.obalkyknih.cz/view_auth?auth_id=jn19990002019",
              type: "string",
            },
            datatype: "url",
          },
        ],
      },
      "qualifiers-order": ["P2699"],
      id: "Q937$545DCA7E-43A7-4A0B-A134-46F57FDCEAB4",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        hash: "5454f91cb93f2f90d1dacba853173f742717bb16",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 15987490,
            id: "Q15987490",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P805: [
          {
            snaktype: "value",
            property: "P805",
            hash: "9a32fd460ae90b88fdba5720afdab9f2548af3b1",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 83471893,
                id: "Q83471893",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P805"],
      id: "Q937$845e3868-46dc-9343-5403-82766ca1189d",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        hash: "0077aba5b13e17ad1e522366a7382e31ed1ee572",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 99413897,
            id: "Q99413897",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "73c0d7053bd0c0df77c7c3d0d20d31459ce71807",
            datavalue: {
              value: "Einstein, Albert, 1879-1955",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P2699: [
          {
            snaktype: "value",
            property: "P2699",
            hash: "78a8176dccfbb341045514c6b0039dcb29a066ad",
            datavalue: {
              value: "https://www.medvik.cz/link/jn19990002019",
              type: "string",
            },
            datatype: "url",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P2699"],
      id: "Q937$F4EBD78B-B56C-47C0-BCB6-64D7744A5CAE",
      rank: "normal",
      references: [
        {
          hash: "7e4e71a8da5c1d9a2bafe6ecfd965b97e347045b",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "f6801f462b999d631ca1a5c83037e6134977a99b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 99413897,
                    id: "Q99413897",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "93160c47cdcbc2d4727bb581a7753f6eeea02dda",
                datavalue: {
                  value: {
                    time: "+2020-10-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        hash: "a935f5858791a378f1e915602e26f11318df3421",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 104698881,
            id: "Q104698881",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$E1D45EE3-8151-4678-9AC1-78270248436B",
      rank: "normal",
      references: [
        {
          hash: "8928eeb3bf5523b3b52eadb8c66d78f0af0ab9ef",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "8b2a6627f52d3e0cf7ef88aade13ac8351c19f58",
                datavalue: {
                  value:
                    "http://digi.nacr.cz/prihlasky2/index.php?action=link&ref=czarch:CZ-100000010:874&karton=3&folium=290",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1932: [
              {
                snaktype: "value",
                property: "P1932",
                hash: "33b449fa9e3bc9b851f92c2af66b8c77e1209a46",
                datavalue: {
                  value: "Einstein Albert (1879)",
                  type: "string",
                },
                datatype: "string",
              },
            ],
          },
          "snaks-order": ["P854", "P1932"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        hash: "4785ce0832fbe2b1fb5934e207de6287aab2dab3",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 642074,
            id: "Q642074",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P2699: [
          {
            snaktype: "value",
            property: "P2699",
            hash: "adc3cebbbd420e900016a8f4a2649b92d703585b",
            datavalue: {
              value: "https://hls-dhs-dss.ch/de/articles/028814",
              type: "string",
            },
            datatype: "url",
          },
        ],
      },
      "qualifiers-order": ["P2699"],
      id: "Q937$eee7f584-4e64-e65f-3f00-643dc6e88bc7",
      rank: "preferred",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        hash: "108cf6c8b367e807f49b5394330121eb212625a5",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 19047539,
            id: "Q19047539",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P805: [
          {
            snaktype: "value",
            property: "P805",
            hash: "25391fe815f5587cc9b342e0ef3590146c52976e",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 123946574,
                id: "Q123946574",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P805"],
      id: "Q937$D3C9CA0E-6DC7-4494-BA5C-D0CEEB23607A",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        hash: "1917ad7680e6cecda2c45495d01fbf9842d0bab6",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 20968284,
            id: "Q20968284",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P478: [
          {
            snaktype: "value",
            property: "P478",
            hash: "cfc6eff10faa6cdf1425aae3ed155dece3867b80",
            datavalue: {
              value: "48",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P304: [
          {
            snaktype: "value",
            property: "P304",
            hash: "241742ffe22572474015bf6085fbfeba8bd95dea",
            datavalue: {
              value: "341-344",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P478", "P304"],
      id: "Q937$8A454B4F-BCFE-4D9F-B9B2-DDA2F12B9177",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        hash: "23f0de05565fabb072261af042ae9df7469d3ea4",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 126178049,
            id: "Q126178049",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P304: [
          {
            snaktype: "value",
            property: "P304",
            hash: "702fc9dd6f9e01d2f648bfcceae3430ea6587467",
            datavalue: {
              value: "308",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P304"],
      id: "Q937$4B613577-6015-4420-9B89-8A548043769F",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1343",
        hash: "db2b33ed3cf7aa9b97f27b8389ebe771a7b8b07a",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 126740695,
            id: "Q126740695",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$B7BC8CA1-2862-492B-8DC1-6594D2E3B557",
      rank: "normal",
    },
  ],
  P1430: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1430",
        hash: "129e04b53f14a59c7ff3d694e04de319a2e3b7cd",
        datavalue: {
          value: "3242",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$FA86602E-794B-4A4D-BBB1-16A709340B1A",
      rank: "normal",
    },
  ],
  P1472: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1472",
        hash: "ef4e172377897f25c019755eb4e3f9f26e33c446",
        datavalue: {
          value: "Albert Einstein",
          type: "string",
        },
        datatype: "string",
      },
      type: "statement",
      id: "Q937$09962D5F-3198-4288-A956-38A7F1FE002F",
      rank: "normal",
    },
  ],
  P1563: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1563",
        hash: "72267ea35da37dc5c60060c72a2c59980615848e",
        datavalue: {
          value: "Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$75E589D7-EC23-4180-B465-BFFBC5E9BA1E",
      rank: "normal",
      references: [
        {
          hash: "9424852ca7d9d48269148c57acbefacca1899882",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "b7f8bea3bb10c237323eb448dc4798948923bd5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 11921,
                    id: "Q11921",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P345: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P345",
        hash: "245cdda8b2db171d27e6acefc037051fb43c45aa",
        datavalue: {
          value: "nm0251868",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$aca1fb0d-4a60-93ee-95d9-f59f0f376b19",
      rank: "normal",
    },
  ],
  P108: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "56895509467830ad3f40a6618982655c49c728b7",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 685539,
            id: "Q685539",
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
            hash: "7a2dd20a6a54280df831b79d77b058aae62c6fb6",
            datavalue: {
              value: {
                time: "+1902-06-16T00:00:00Z",
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
            hash: "21f75b2c9bcb5005591111dae294b4afabc86295",
            datavalue: {
              value: {
                time: "+1909-00-00T00:00:00Z",
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
      id: "Q937$681079d2-4cea-399f-f9aa-132bf91bfe53",
      rank: "normal",
      references: [
        {
          hash: "bd1a03d5d59c36b0b3651d1e65a35f89c16c415b",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "100a9f984e4e6f223db725dcc70b1d3100d150a5",
                datavalue: {
                  value:
                    "https://www.ige.ch/de/ueber-uns/einstein/einstein-beim-amt.html",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "cd7e743f7fdef3f3e6f2dcb2f99cc9418a49b87d",
                datavalue: {
                  value: {
                    text: "Sieben Jahre «Schusterhandwerk»",
                    language: "de",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "4a8dc6c95bdf4de54c0edb3ff056726deb45c65f",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 31519,
            id: "Q31519",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$01cdae6a-47ca-930b-e6ed-63cca4af0b22",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "e0929dd6df35fee3c0abf028ed56f664006ef2b6",
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
        P580: [
          {
            snaktype: "value",
            property: "P580",
            hash: "b876d0058e391133f630df46b0dcde2ee62a39c0",
            datavalue: {
              value: {
                time: "+1909-00-00T00:00:00Z",
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
            hash: "881e8b412f728f5fcb837006c7236d641880861b",
            datavalue: {
              value: {
                time: "+1911-00-00T00:00:00Z",
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
        P39: [
          {
            snaktype: "value",
            property: "P39",
            hash: "1111ed198e5e91342be008b0ca08f3d5d5f559fd",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 121594,
                id: "Q121594",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      id: "Q937$43226229-45b1-8629-863d-327885eaf9ef",
      rank: "normal",
      references: [
        {
          hash: "8e186c84f5fbc9ec8f89431eedf3d805c3008696",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "100a9f984e4e6f223db725dcc70b1d3100d150a5",
                datavalue: {
                  value:
                    "https://www.ige.ch/de/ueber-uns/einstein/einstein-beim-amt.html",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "b5c60f3c8f77134ad4efd5b1edaed101fbc0a948",
                datavalue: {
                  value: {
                    text: "Sieben Jahre «Schusterhandwerk»",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "cab749543dc0b67e9357741a0f5f9b5068951364",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1729754,
            id: "Q1729754",
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
            hash: "8b3a2e7f8352b0101d6c1ae55b7ed42f6ccaa146",
            datavalue: {
              value: {
                time: "+1911-01-00T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",
            hash: "939639f0278b6fc315ff8c4d8da3e70d25dbf3b5",
            datavalue: {
              value: {
                time: "+1912-10-00T00:00:00Z",
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
        P39: [
          {
            snaktype: "value",
            property: "P39",
            hash: "1111ed198e5e91342be008b0ca08f3d5d5f559fd",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 121594,
                id: "Q121594",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      id: "Q937$d2b77642-4d2f-9c44-de71-7557d470d11e",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "4dd775da927bc5a65107b6e7e90ce81f2a8743c4",
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
        P580: [
          {
            snaktype: "value",
            property: "P580",
            hash: "e03255c854979cd3fd368d5342e8db5c1bbb0a44",
            datavalue: {
              value: {
                time: "+1912-10-00T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",
            hash: "08fd6f8c1064a006e1177cb80c2941f081c4c441",
            datavalue: {
              value: {
                time: "+1914-00-00T00:00:00Z",
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
        P39: [
          {
            snaktype: "value",
            property: "P39",
            hash: "1111ed198e5e91342be008b0ca08f3d5d5f559fd",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 121594,
                id: "Q121594",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      id: "Q937$204dda8b-4ec7-8928-ca7c-901dbb243068",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "d39cfe2963be2fd8699cf30221754cc8980a3eb6",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 708038,
            id: "Q708038",
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
            hash: "bcecdc49b05260261ec6291688de5a564399c174",
            datavalue: {
              value: {
                time: "+1917-00-00T00:00:00Z",
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
            hash: "ca463ba5d0edbc4151c7f6d3246ab3b14989b5a0",
            datavalue: {
              value: {
                time: "+1933-00-00T00:00:00Z",
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
        P39: [
          {
            snaktype: "value",
            property: "P39",
            hash: "c37d1a3f35ef05b6ada4355f2bc989df4701e3de",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1162163,
                id: "Q1162163",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      id: "Q937$35baeeb5-4bc3-4e0e-5bed-fbdafbb89183",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "0903172dde0f05c5a17a57251b682f380551edf8",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 21578,
            id: "Q21578",
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
            hash: "3b1366f42c463bf3d2e6f97db5835ac8b4ff940f",
            datavalue: {
              value: {
                time: "+1933-00-00T00:00:00Z",
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
            hash: "7fe8cd40da1309e70fd66e4d56098f1be3c9ea11",
            datavalue: {
              value: {
                time: "+1955-00-00T00:00:00Z",
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
      id: "Q937$79c11d97-4915-3e26-830c-4c99be4e4b7f",
      rank: "normal",
      references: [
        {
          hash: "b7de12cd2ce930988fe405de439496b12b495e44",
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
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "7b8bd9162037c37f571d2d91ab747b84c9c6fe80",
                datavalue: {
                  value: {
                    text: "Albert Einstein und das IGE",
                    language: "de",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "2a24d642b9d09da4a007819fc782e31de33c67f0",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 156598,
            id: "Q156598",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$83E63163-A6DE-4579-BB7F-B80E7DC196B8",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "5c3d527fab4d376b90b13f4e3e39823e2154f083",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 659080,
            id: "Q659080",
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
            hash: "f60ca77877d504d275267a78ddde67ad79c61384",
            datavalue: {
              value: {
                time: "+1908-00-00T00:00:00Z",
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
            hash: "21f75b2c9bcb5005591111dae294b4afabc86295",
            datavalue: {
              value: {
                time: "+1909-00-00T00:00:00Z",
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
        P39: [
          {
            snaktype: "value",
            property: "P39",
            hash: "710434b10b3a26e836c58d7ddf44c1fe53204f5a",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 37226,
                id: "Q37226",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      id: "Q937$33ce60f7-4629-0ab4-38d9-701633f118da",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "afdb3a73b500afba27dfb7ae66edcf7e72a42030",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 819187,
            id: "Q819187",
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
            hash: "d6457214fbdab8c0c92327c89c5f81850ac67446",
            datavalue: {
              value: {
                time: "+1916-00-00T00:00:00Z",
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
            hash: "93ac21226f54574fc2f9f074273226acf3b0705e",
            datavalue: {
              value: {
                time: "+1918-00-00T00:00:00Z",
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
        P39: [
          {
            snaktype: "value",
            property: "P39",
            hash: "9432bf5ca7590e0ec4e42bf1bacb4a02c7dc2f54",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 30461,
                id: "Q30461",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      id: "Q937$48e2be89-4926-b28f-cbfa-f7a70c2409cd",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "0b3a68f6750ce5b2d8b86ed583b6ec5989251497",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 152087,
            id: "Q152087",
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
            hash: "a20d91968b82c05db2c6d1ce3cf846cb29b7b016",
            datavalue: {
              value: {
                time: "+1914-00-00T00:00:00Z",
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
            hash: "ca463ba5d0edbc4151c7f6d3246ab3b14989b5a0",
            datavalue: {
              value: {
                time: "+1933-00-00T00:00:00Z",
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
        P39: [
          {
            snaktype: "value",
            property: "P39",
            hash: "1111ed198e5e91342be008b0ca08f3d5d5f559fd",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 121594,
                id: "Q121594",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39"],
      id: "Q937$d622ea39-43bd-b60c-0d60-23069d205a79",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "98cdbcf3a5b1b147d6bcc75f9247b25217094b5d",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 329464,
            id: "Q329464",
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
            hash: "a20d91968b82c05db2c6d1ce3cf846cb29b7b016",
            datavalue: {
              value: {
                time: "+1914-00-00T00:00:00Z",
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
            hash: "ca463ba5d0edbc4151c7f6d3246ab3b14989b5a0",
            datavalue: {
              value: {
                time: "+1933-00-00T00:00:00Z",
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
      id: "Q937$dd224d46-4f2e-76a3-1646-d0786a513ff3",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "890df849b3ac9e8e6a2ebae16647c9bdcc08a28b",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 635642,
            id: "Q635642",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$2cb650b8-497c-aebc-c6cf-8703dd24b3f2",
      rank: "normal",
      references: [
        {
          hash: "288ab581e7d2d02995a26dfa8b091d96e78457fc",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "6a164248fc96bfa583bbb495cb63ae6401ec203c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 206855,
                    id: "Q206855",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "2a24d642b9d09da4a007819fc782e31de33c67f0",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 156598,
            id: "Q156598",
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
            hash: "f732adb1c94ebd379d6f2ed309134aa696000cfc",
            datavalue: {
              value: {
                time: "+1920-09-21T00:00:00Z",
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
            hash: "81c903ecd92188c527d7f840b161c1ce4bf60f6a",
            datavalue: {
              value: {
                time: "+1946-07-13T00:00:00Z",
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
        P39: [
          {
            snaktype: "value",
            property: "P39",
            hash: "08981f4f78a35348b035eb8ff5293ad79e12242e",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 875424,
                id: "Q875424",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P361: [
          {
            snaktype: "value",
            property: "P361",
            hash: "3da2e38f0d98109dcabb0585d25149e021d2b9a6",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 61666665,
                id: "Q61666665",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P39", "P361"],
      id: "Q937$12315011-4D00-4857-933A-9BC6DF949F86",
      rank: "normal",
      references: [
        {
          hash: "60d0de3816e6bc46c68c1724cdc65a5cd711bd34",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "5a6c2e831c50b974de6fddefd4af24e2cb11951f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23667505,
                    id: "Q23667505",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2861: [
              {
                snaktype: "value",
                property: "P2861",
                hash: "dbd892e80eb0e661e46a13fb1f39312888c4944d",
                datavalue: {
                  value: "1215",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "8c7f4a22c0be57fa68b18e01ccf163bc2d2e0e53",
                datavalue: {
                  value: {
                    time: "+2019-06-19T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P2861", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "6753f3de03a622dea02e2f37c407e1344c50a1e0",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 70,
            id: "Q70",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$d0dc2648-441c-24b2-6f89-3eccd9a85643",
      rank: "normal",
      references: [
        {
          hash: "288ab581e7d2d02995a26dfa8b091d96e78457fc",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "6a164248fc96bfa583bbb495cb63ae6401ec203c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 206855,
                    id: "Q206855",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P108",
        hash: "b67a2394aafc98f5fff62fdc388c061bac918bc2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 168756,
            id: "Q168756",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$FE32FC62-32EB-49E2-ABB2-37E0EC99C054",
      rank: "normal",
      references: [
        {
          hash: "02ccfc667945a32dd2964e65e38b7fca84b241a2",
          snaks: {
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "9da2a1964ef6491ce373e9e83d71cdbc7aeee931",
                datavalue: {
                  value: {
                    time: "+2019-07-03T00:00:00Z",
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
            P3452: [
              {
                snaktype: "value",
                property: "P3452",
                hash: "23740fa1d633e9fd2b693da1407b2c05f27f2311",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 6375970,
                    id: "Q6375970",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "5a343e7e758a4282a01316d3e959b6e653b767fc",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 11920,
                    id: "Q11920",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P813", "P3452", "P143"],
        },
      ],
    },
  ],
  P1284: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1284",
        hash: "14873176416f8750417aec470f8f31c5cff7a9b6",
        datavalue: {
          value: "00000000666",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$F95587F0-3E98-4777-BE3A-9D26AF0B002F",
      rank: "normal",
    },
  ],
  P723: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P723",
        hash: "8555c4ac29298ae5afef43953f8c4b369025d94d",
        datavalue: {
          value: "eins001",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7E75EF73-C1D0-4660-9C74-1CCCA07B55EB",
      rank: "normal",
    },
  ],
  P1711: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1711",
        hash: "6bdeb380caaab040a72a0f3a89f68a22679ffaa0",
        datavalue: {
          value: "9689",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$801D4FA4-741A-4620-B0C0-AEFCEE6FF4E9",
      rank: "normal",
    },
  ],
  P1741: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1741",
        hash: "9a7697fbd40981ddc875a348ebaa55cb331d0807",
        datavalue: {
          value: "96461",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$0E73A074-C7FE-4667-AE6A-8C9262C59AED",
      rank: "normal",
    },
  ],
  P1263: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1263",
        hash: "486236bf3457211e8f57719bc4851d9dda3bfe4b",
        datavalue: {
          value: "302/000022236",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$04B517EF-5DC1-4E45-96F1-3212AC9AB13D",
      rank: "normal",
    },
  ],
  P1801: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",
        hash: "d57ac4f23f41f8fbb0f6f661b3d4fa07d24fd1cd",
        datavalue: {
          value: "Einstein deska.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$BB6B6F48-0DF8-42ED-A5DD-FA520DD03694",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",
        hash: "4bea1da102457ac6846fb3647b2dec9ade8838c5",
        datavalue: {
          value:
            "8839 - Milano - Via Bigli - Palazzo Olivazzi - Lapide Albert Einstein - Foto Giovanni Dall'Orto - 14-Apr-2007.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$AA2939E2-DC6C-4780-ABF4-F29F92A5342C",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",
        hash: "e210fe5194f94a30ee6faa0a1dbbe1405c482085",
        datavalue: {
          value: "Home Albert Einstein 1895 Memorial.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$39A5B7FD-C35E-471E-B0FB-2CB9467C2D45",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",
        hash: "7fbc2c2bd986f43db3a2e6f96bb175d658f8cbd8",
        datavalue: {
          value: "Einstein-barrakka.JPG",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$02B500D6-8628-4BEE-8EFB-796598225D26",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",
        hash: "28ae8e4777a68ccba614f80ae64946f113f76593",
        datavalue: {
          value: "Albert Einstein - Andräschule Salzburg.PNG",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$BB5EEB7D-9E0C-4515-89A4-3474642CA8CA",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",
        hash: "f9cde1f274fe9fe56dd7945989007204924e3e99",
        datavalue: {
          value: "05w Denkmal Albert Einstein.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$F1EB94E4-EBF0-40BD-A704-BCE87BDB4CB7",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",
        hash: "3b7cb4fe28248cd6ff0ac67528d5381f6600a119",
        datavalue: {
          value: "Einstein Plaque.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$8FE38029-D7F3-4DEC-99D5-B5D9F1E7EB79",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1801",
        hash: "3a26f4caa1b4c203e5348d140b26e4d5980a294c",
        datavalue: {
          value: "Archenhold-Sternwarte, 642-748.jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$1726bd73-414f-742e-d831-0550b3ac3b99",
      rank: "normal",
    },
  ],
  P937: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P937",
        hash: "06aafea7bcb7587c582d9791c4fdb1b31e99303d",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 70,
            id: "Q70",
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
            hash: "7a2dd20a6a54280df831b79d77b058aae62c6fb6",
            datavalue: {
              value: {
                time: "+1902-06-16T00:00:00Z",
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
            hash: "21f75b2c9bcb5005591111dae294b4afabc86295",
            datavalue: {
              value: {
                time: "+1909-00-00T00:00:00Z",
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
      id: "Q937$862B872E-0986-4E1F-BCB5-67EA892B0E21",
      rank: "normal",
      references: [
        {
          hash: "d1c7b3142dd9c0e7c6e3c7eff5a1dcc645f422c1",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "019a50b7de741e0068bde41c9d9955b22a5de47b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "adc3b46e3ff36d035ee412c5be72a7580ae5a6e1",
                datavalue: {
                  value: {
                    time: "+2015-04-02T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P937",
        hash: "460551ecc94c3c1ea9b92a780663923c738fb794",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1085,
            id: "Q1085",
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
            hash: "8b3a2e7f8352b0101d6c1ae55b7ed42f6ccaa146",
            datavalue: {
              value: {
                time: "+1911-01-00T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",
            hash: "939639f0278b6fc315ff8c4d8da3e70d25dbf3b5",
            datavalue: {
              value: {
                time: "+1912-10-00T00:00:00Z",
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
      "qualifiers-order": ["P580", "P582"],
      id: "Q937$B42B39CD-B046-4D84-AF15-C6FC03B1CBFF",
      rank: "normal",
      references: [
        {
          hash: "d1c7b3142dd9c0e7c6e3c7eff5a1dcc645f422c1",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "019a50b7de741e0068bde41c9d9955b22a5de47b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "adc3b46e3ff36d035ee412c5be72a7580ae5a6e1",
                datavalue: {
                  value: {
                    time: "+2015-04-02T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P937",
        hash: "c4070be4518f3e5fdab1aca8d880316bab489172",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 72,
            id: "Q72",
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
            hash: "b876d0058e391133f630df46b0dcde2ee62a39c0",
            datavalue: {
              value: {
                time: "+1909-00-00T00:00:00Z",
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
            hash: "881e8b412f728f5fcb837006c7236d641880861b",
            datavalue: {
              value: {
                time: "+1911-00-00T00:00:00Z",
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
      id: "Q937$1DBF6E45-7D71-496F-AADE-ABB4FB5F074F",
      rank: "normal",
      references: [
        {
          hash: "d1c7b3142dd9c0e7c6e3c7eff5a1dcc645f422c1",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "019a50b7de741e0068bde41c9d9955b22a5de47b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "adc3b46e3ff36d035ee412c5be72a7580ae5a6e1",
                datavalue: {
                  value: {
                    time: "+2015-04-02T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P937",
        hash: "64a17c7162b2507a387dc3617c2308d8488f3e07",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 64,
            id: "Q64",
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
            hash: "d0bf43af80e71b4c1d0756aabab685d55b7b8917",
            datavalue: {
              value: {
                time: "+1914-04-00T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",
            hash: "ca463ba5d0edbc4151c7f6d3246ab3b14989b5a0",
            datavalue: {
              value: {
                time: "+1933-00-00T00:00:00Z",
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
      id: "Q937$5FEDB28F-5810-490E-9258-301C36E95BB6",
      rank: "normal",
      references: [
        {
          hash: "d1c7b3142dd9c0e7c6e3c7eff5a1dcc645f422c1",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "019a50b7de741e0068bde41c9d9955b22a5de47b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "adc3b46e3ff36d035ee412c5be72a7580ae5a6e1",
                datavalue: {
                  value: {
                    time: "+2015-04-02T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P937",
        hash: "81062eb1e38cba3f3fcb92dfbfd2cc31e2d92f17",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 464344,
            id: "Q464344",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$af167d49-49ce-e4e5-7167-5a6ce897952e",
      rank: "normal",
      references: [
        {
          hash: "f5552057b31b7bc30f4e4f4774d89898b7e68dd3",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "3a711331c8e3af47d1834efec488d91fd302cb89",
                datavalue: {
                  value:
                    "http://www.einsteinsommerhaus.de/index.php?id=539&no_cache=1",
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
        property: "P937",
        hash: "0aab827b8e526ea902d12f4d98e57341fb146e14",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 138518,
            id: "Q138518",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$280ea2e9-4613-29a2-9eaf-b5150af990c0",
      rank: "normal",
      references: [
        {
          hash: "3a374c84533b456e6e66208ad002e7d00e57d3cf",
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "8d8ba3bf37cb53977822495f02002cf4fb2a23e4",
                datavalue: {
                  value:
                    "https://en.wikipedia.org/wiki/Institute_for_Advanced_Study",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P937",
        hash: "c4070be4518f3e5fdab1aca8d880316bab489172",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 72,
            id: "Q72",
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
            hash: "92722f218379f83377d083458900e9b7f1da0f99",
            datavalue: {
              value: {
                time: "+1912-10-01T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",
            hash: "08fd6f8c1064a006e1177cb80c2941f081c4c441",
            datavalue: {
              value: {
                time: "+1914-00-00T00:00:00Z",
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
      id: "Q937$26125040-4339-417b-cd07-1f0722f2f35d",
      rank: "normal",
      references: [
        {
          hash: "d1c7b3142dd9c0e7c6e3c7eff5a1dcc645f422c1",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "019a50b7de741e0068bde41c9d9955b22a5de47b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "adc3b46e3ff36d035ee412c5be72a7580ae5a6e1",
                datavalue: {
                  value: {
                    time: "+2015-04-02T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
  ],
  P1816: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1816",
        hash: "fbf4960fc27a5957e3389a46d85f9c24b8270822",
        datavalue: {
          value: "mp73025",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6DF10E5B-DCB2-4EA4-90E3-0A66A3463134",
      rank: "normal",
    },
  ],
  P1819: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1819",
        hash: "988155d01cb8559b4388ad47ad33669507f9d547",
        datavalue: {
          value: "I00482340",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D18EC269-EBC8-4E29-91B3-E0FFA0F42756",
      rank: "normal",
    },
  ],
  P1938: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1938",
        hash: "38b7e2e6c48f57a03ccc3f770d33ebe981377ad7",
        datavalue: {
          value: "1630",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D0978887-68BE-473F-B3E6-A9FCF3C896C8",
      rank: "normal",
    },
  ],
  P973: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P973",
        hash: "582733e185f4d9281158c8de9dd65abd21df35ef",
        datavalue: {
          value: "http://www.einsteinsommerhaus.de/index.php?id=539&no_cache=1",
          type: "string",
        },
        datatype: "url",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "46bfd327b830f66f7061ea92d1be430c135fa91f",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$11b5e7a8-4c1e-f48a-ced0-c1707226db35",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P973",
        hash: "57866f4b51632297444d13ad68d5c3e42f36d5a8",
        datavalue: {
          value: "https://www.ige.ch/de/ueber-uns/einstein.html",
          type: "string",
        },
        datatype: "url",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "46bfd327b830f66f7061ea92d1be430c135fa91f",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$37f0d024-415d-a0e6-d9b9-28a0e963191f",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P973",
        hash: "e73fa4f7095350c9f7fb82889aedcfb3e323f24e",
        datavalue: {
          value: "http://www.digiporta.net/index.php?id=553550365",
          type: "string",
        },
        datatype: "url",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "46bfd327b830f66f7061ea92d1be430c135fa91f",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$63DAA43E-48B6-4654-B493-928738178FBE",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P973",
        hash: "726562234e7842df92e2f6008ee8874236660d00",
        datavalue: {
          value: "http://www.digiporta.net/index.php?id=568612883",
          type: "string",
        },
        datatype: "url",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "46bfd327b830f66f7061ea92d1be430c135fa91f",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$EC12FBB9-05FE-4987-9BEE-6C82F2B4412F",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P973",
        hash: "6c9a6b7a4bd2c8f205e0f292b02011f78172d0dd",
        datavalue: {
          value: "http://www.digiporta.net/index.php?id=707892219",
          type: "string",
        },
        datatype: "url",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "46bfd327b830f66f7061ea92d1be430c135fa91f",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$9F63BB27-5275-4FDC-AD23-456899EEF925",
      rank: "normal",
    },
  ],
  P551: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P551",
        hash: "46fef792b719d3aada80234d4884edb7423889b5",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1309294,
            id: "Q1309294",
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
            hash: "d2af5317489973849115c82ad2ac57ebdafec19e",
            datavalue: {
              value: {
                time: "+1929-00-00T00:00:00Z",
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
            hash: "d22639281d506d7c4dbfca313be5527a5ba3df50",
            datavalue: {
              value: {
                time: "+1932-00-00T00:00:00Z",
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
        P131: [
          {
            snaktype: "value",
            property: "P131",
            hash: "752a8fcb0fbb4535e23d8481f2e2d9b1529fe57b",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 625403,
                id: "Q625403",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P131"],
      id: "Q937$2bcc3000-4b64-0562-be8c-ad8225e41752",
      rank: "normal",
      references: [
        {
          hash: "d4bd87b862b12d99d26e86472d44f26858dee639",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "f30cbd35620c4ea6d0633aaf0210a8916130469b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 8447,
                    id: "Q8447",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P551",
        hash: "04eef934cf0e13f2a0199e2801e2698781edbb56",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 390003,
            id: "Q390003",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P131: [
          {
            snaktype: "value",
            property: "P131",
            hash: "eef90f9c59e343b479d251c58e8a61b6dcc04dba",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 70,
                id: "Q70",
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
            hash: "c23c0762c32999efa22ff88e9835ffb43d23075f",
            datavalue: {
              value: {
                time: "+1903-10-00T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",
            hash: "319a037360e0160ea846e07ddd4aaa1e1c56c537",
            datavalue: {
              value: {
                time: "+1905-05-00T00:00:00Z",
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
        P669: [
          {
            snaktype: "value",
            property: "P669",
            hash: "1f00504b592f05b28d9c9d5d8211ff5a7b0f990f",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 680298,
                id: "Q680298",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P670: [
          {
            snaktype: "value",
            property: "P670",
            hash: "7dec98d578306ea2e0a877616b5d617de63da7bb",
            datavalue: {
              value: "49",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P131", "P580", "P582", "P669", "P670"],
      id: "Q937$576078b8-437c-7b9e-ad1b-4ac16439d20a",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P551",
        hash: "a70ffed939e2404a17302abea1f5d844c983f7f2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1726,
            id: "Q1726",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$3B8DA1A3-81A3-4A42-AA52-B83DE77FF254",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P551",
        hash: "f8bfae87d32b274acfcde440de075395f25549d2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 138518,
            id: "Q138518",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$68B67BB3-2268-4CE5-B968-0F2AAC9272A7",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P551",
        hash: "3b7c7441a9cb780e4f578243b5a35e9c3cc4f012",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 942842,
            id: "Q942842",
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
            hash: "1966bd3536b2306b74406482ec670549d188b001",
            datavalue: {
              value: {
                time: "+1911-01-01T00:00:00Z",
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
      "qualifiers-order": ["P580"],
      id: "Q937$891EA76A-93E7-49FC-A9D1-2784E999DA72",
      rank: "normal",
      references: [
        {
          hash: "5c741c42215322a43337762a1109bd27ce9c6b34",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "9b3905d0de11c7cbe9828f8004cc30e139780357",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 104698881,
                    id: "Q104698881",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "8b2a6627f52d3e0cf7ef88aade13ac8351c19f58",
                datavalue: {
                  value:
                    "http://digi.nacr.cz/prihlasky2/index.php?action=link&ref=czarch:CZ-100000010:874&karton=3&folium=290",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "c707868fc0cb79f775f05154cf5744f2cbd9f8bd",
                datavalue: {
                  value: {
                    time: "+2021-01-06T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P854", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P551",
        hash: "19598fc82fe0a52f1bdf78fb85cbc6b04021fec3",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 9009,
            id: "Q9009",
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
            hash: "2a86c8a7188f4e3b46e8b431260e59e10f69a62d",
            datavalue: {
              value: {
                time: "+1901-09-00T00:00:00Z",
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
        P582: [
          {
            snaktype: "value",
            property: "P582",
            hash: "f5c7bf33f1dc0d88f538f79180b44db5b1efc477",
            datavalue: {
              value: {
                time: "+1902-01-00T00:00:00Z",
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
      "qualifiers-order": ["P580", "P582"],
      id: "Q937$61f1859b-4722-e623-53dd-8ad8b58836d8",
      rank: "normal",
    },
  ],
  P227: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P227",
        hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
        datavalue: {
          value: "118529579",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5780ABCF-2F30-4613-B043-1FB2C8482C7D",
      rank: "normal",
      references: [
        {
          hash: "ec9d6c051e63c366db711b35fcaeec2a43b4b735",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "8a84156252d6404256df99d97c74a6f76c1014d7",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 15156406,
                    id: "Q15156406",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
        {
          hash: "f8a8ba34c0460203a6d7a13721f7bc6ff7ab1e7f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d1e923075a89220a981d8c2511065b97bcf4dc5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",
                hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
                datavalue: {
                  value: "3852",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a2c482c4381b8ce33ae32b3998e8ec614fedebb7",
                datavalue: {
                  value: {
                    time: "+2021-02-13T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
  ],
  P2021: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2021",
        hash: "cd2ea88413681f907f4b5e856ab4ae418060ad16",
        datavalue: {
          value: {
            amount: "+2",
            unit: "1",
          },
          type: "quantity",
        },
        datatype: "quantity",
      },
      type: "statement",
      id: "Q937$DA60BC41-F680-461A-A3A7-9D675CEEF2B8",
      rank: "normal",
    },
  ],
  P1953: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1953",
        hash: "ca8701d090a771edbcab390d07b6ec065987d10a",
        datavalue: {
          value: "430935",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$78067182-14BA-4B6A-AC4D-B9748388D10C",
      rank: "normal",
      references: [
        {
          hash: "e04b692332431ddc6806b23a0e494c1937988340",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "623cc8f0e2f65afe4d66b91962d354a2f3aa9a27",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 14005,
                    id: "Q14005",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a00cc299e508357647636e29593b8ca3e534077d",
                datavalue: {
                  value: {
                    time: "+2015-08-06T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
      ],
    },
  ],
  P734: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P734",
        hash: "04e9bc36dbeebaf0998b4bd8819f5298ddebd92c",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 16834800,
            id: "Q16834800",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$148f07c2-4670-5dda-0c03-151cbd56e4c2",
      rank: "normal",
      references: [
        {
          hash: "5a2b5fc2d3b246f9fb1643ac66d567267c72d1aa",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "a376d605be64acdd4ac7934925ba96e276de7eac",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 423048,
                    id: "Q423048",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P213: [
              {
                snaktype: "value",
                property: "P213",
                hash: "f39a58cd36e84d626d5f35dff219f16f95353e6a",
                datavalue: {
                  value: "0000000077040933",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "f6bca98bb1580bfcb4860b86f216eebaec063d9c",
                datavalue: {
                  value: {
                    time: "+2015-10-16T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P213", "P813"],
        },
        {
          hash: "60d0de3816e6bc46c68c1724cdc65a5cd711bd34",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "5a6c2e831c50b974de6fddefd4af24e2cb11951f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23667505,
                    id: "Q23667505",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2861: [
              {
                snaktype: "value",
                property: "P2861",
                hash: "dbd892e80eb0e661e46a13fb1f39312888c4944d",
                datavalue: {
                  value: "1215",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "8c7f4a22c0be57fa68b18e01ccf163bc2d2e0e53",
                datavalue: {
                  value: {
                    time: "+2019-06-19T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P2861", "P813"],
        },
        {
          hash: "5c741c42215322a43337762a1109bd27ce9c6b34",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "9b3905d0de11c7cbe9828f8004cc30e139780357",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 104698881,
                    id: "Q104698881",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "8b2a6627f52d3e0cf7ef88aade13ac8351c19f58",
                datavalue: {
                  value:
                    "http://digi.nacr.cz/prihlasky2/index.php?action=link&ref=czarch:CZ-100000010:874&karton=3&folium=290",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "c707868fc0cb79f775f05154cf5744f2cbd9f8bd",
                datavalue: {
                  value: {
                    time: "+2021-01-06T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P854", "P813"],
        },
        {
          hash: "f8a8ba34c0460203a6d7a13721f7bc6ff7ab1e7f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d1e923075a89220a981d8c2511065b97bcf4dc5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",
                hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
                datavalue: {
                  value: "3852",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a2c482c4381b8ce33ae32b3998e8ec614fedebb7",
                datavalue: {
                  value: {
                    time: "+2021-02-13T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
  ],
  P270: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P270",
        hash: "e36c1ca917fade30b93d2d443f50dc83cdd1e689",
        datavalue: {
          value: "n2004370668",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$EC244A6E-7F96-46D3-A0A1-0010EB63DDF7",
      rank: "normal",
      references: [
        {
          hash: "0ee3b3ba1c958f4c3dcba7ed8091fe4b57311348",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "cb49f6fa327b245e4a5aaf48c44b3f503bcd4265",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 30239,
                    id: "Q30239",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P1048: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1048",
        hash: "8dd71e46c296eca8c7fe2f8bf63ed773eec72b27",
        datavalue: {
          value: "369710",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3B48841C-6CC9-4213-90B2-74532E90D1B9",
      rank: "normal",
      references: [
        {
          hash: "0ee3b3ba1c958f4c3dcba7ed8091fe4b57311348",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "cb49f6fa327b245e4a5aaf48c44b3f503bcd4265",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 30239,
                    id: "Q30239",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P1213: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1213",
        hash: "daef3087f42c199e4aaf972910a5a48da2d6a2ee",
        datavalue: {
          value: "000124193",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1F5EE4D6-597D-4B1C-A59D-0FF3954D378E",
      rank: "normal",
      references: [
        {
          hash: "0ee3b3ba1c958f4c3dcba7ed8091fe4b57311348",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "cb49f6fa327b245e4a5aaf48c44b3f503bcd4265",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 30239,
                    id: "Q30239",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P535: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P535",
        hash: "da15aec810f7bcb1e49ef20d23045675dd6a72fc",
        datavalue: {
          value: "314",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$21ffa00d-486e-5d1a-43bf-afcb604a6057",
      rank: "normal",
    },
  ],
  P1233: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1233",
        hash: "7e5955f119210eaf27c9c2465d81d50964dcf35b",
        datavalue: {
          value: "99141",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$84234072-22E0-4D22-8639-CEF328126AA0",
      rank: "normal",
    },
  ],
  P648: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P648",
        hash: "7cff63716cbd8ec84f61595891dafbcfa694f2bf",
        datavalue: {
          value: "OL3175986A",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$ae858c3b-4935-e68a-f3d6-89608a55d451",
      rank: "normal",
    },
  ],
  P802: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P802",
        hash: "8bce08edb44822f0b434e9b3eac122d2171097e2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 87554,
            id: "Q87554",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$72DE4D46-3D7E-49F3-9787-BA064C56C343",
      rank: "normal",
    },
  ],
  P2163: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2163",
        hash: "a55bcc0c047b467d1f1bfb75f0b24d1c27ece6b4",
        datavalue: {
          value: "32023",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$69e5db09-44d7-fa1e-5a07-4c29e593cdda",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P2163",
        hash: "5e95dbd817054095dca85217c9c62058eacc6b06",
        datavalue: {
          value: "460651",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9362F75B-0695-4160-963E-79B22A633C4D",
      rank: "normal",
    },
  ],
  P2188: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2188",
        hash: "54a54be061e18f82000394ebd5df4baa843d1be1",
        datavalue: {
          value: "157",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7d2bb948-46f5-07cb-f9de-1388d92eeb23",
      rank: "normal",
    },
  ],
  P1556: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1556",
        hash: "4cc797b64b9219f3c787275ab539eed97a534a3c",
        datavalue: {
          value: "einstein.albert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3D777AF1-C32C-42A9-97E0-44C4AB87873D",
      rank: "normal",
    },
  ],
  P1315: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1315",
        hash: "f043ad17202eeeb21b8d35d0604dccf4f405a2c5",
        datavalue: {
          value: "382451",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C1166544-7625-4021-97FF-1102833C1CEB",
      rank: "normal",
    },
  ],
  P935: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P935",
        hash: "f452b3b5367470364ae2e71ef906451125ede387",
        datavalue: {
          value: "Albert Einstein",
          type: "string",
        },
        datatype: "string",
      },
      type: "statement",
      id: "Q937$4182BA1C-DA1E-4B66-B6B4-37DEBDA09457",
      rank: "normal",
    },
  ],
  P443: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P443",
        hash: "86b8982aa4ae3249b851a3bdfc07fa0f0b0eb939",
        datavalue: {
          value: "De-Albert Einstein-Pronuciation.ogg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "46bfd327b830f66f7061ea92d1be430c135fa91f",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$0aeda9f5-4815-84b9-3711-37cbc130e726",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P443",
        hash: "5154420112be4598c8dfc7e7de963a6cd2eec552",
        datavalue: {
          value: "LL-Q34239 (kok)-Fredericknoronha-Albert Einstein.wav",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "71a2907788a7054df38d29e6c851f732540a5b60",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 34239,
                id: "Q34239",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$a7c5b8f0-a9e4-410b-adb4-d901b227a203",
      rank: "normal",
      references: [
        {
          hash: "531550e0184f0ceba495bc3bde30799363de8a58",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "b3c62442a690bef0258a0cb603f6e103631dff2b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 60024037,
                    id: "Q60024037",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P10369: [
              {
                snaktype: "value",
                property: "P10369",
                hash: "d1adfa8e49cc30e2b7d2f0b226a775798768b840",
                datavalue: {
                  value: "Q700784",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P10369"],
        },
      ],
    },
  ],
  P172: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P172",
        hash: "5359ebe078f82a89959a089da7287e14b0d23689",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 7325,
            id: "Q7325",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$4AC1D270-BB85-42E6-9F2C-AF1A0A283399",
      rank: "normal",
      references: [
        {
          hash: "ee63837773daae96f37031487721a9f357e629ec",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "6a164248fc96bfa583bbb495cb63ae6401ec203c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 206855,
                    id: "Q206855",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "3756277ea3db3c5c7ee5523dd3aae9aa81b396b6",
                datavalue: {
                  value: {
                    time: "+2018-12-20T00:00:00Z",
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
          },
          "snaks-order": ["P143", "P813"],
        },
      ],
    },
  ],
  P2383: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2383",
        hash: "dfce2ed6be4d834499da945cf31ed65a69f961df",
        datavalue: {
          value: "117243",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3BAF146F-9543-4C23-9B5F-CE14ECC9980C",
      rank: "normal",
    },
  ],
  P119: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P119",
        hash: "44e3394eb9357bf9c953e04003b8f03c73a911d3",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 902624,
            id: "Q902624",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P518: [
          {
            snaktype: "value",
            property: "P518",
            hash: "baeab00e9a835e05be2f6d4ddd0af62d03d0f770",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 2464312,
                id: "Q2464312",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P518"],
      id: "Q937$0fba0628-4ed9-f8bf-9088-1e2c53edd4fd",
      rank: "normal",
    },
  ],
  P1417: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1417",
        hash: "7e824dfc49076fc318848909b68628a8036a4b8c",
        datavalue: {
          value: "biography/Albert-Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "38f1530d2785e41affc551297fcbc942306fce4e",
            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P2093: [
          {
            snaktype: "value",
            property: "P2093",
            hash: "ec4656881f8840ed5d231bd4152726dd9114bad3",
            datavalue: {
              value: "Michio Kaku",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P2093"],
      id: "Q937$008FDB12-84E2-41DB-AF21-81A2F79B59F4",
      rank: "normal",
    },
  ],
  P2600: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2600",
        hash: "27910f5b44b1f2e0eaad536439f04f83b795b1e5",
        datavalue: {
          value: "4481345450320047133",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$8a5deb97-4595-eafb-8409-69b6f1508d75",
      rank: "normal",
    },
  ],
  P2639: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2639",
        hash: "d603432e459e9d500550dca815af3746148400c9",
        datavalue: {
          value: "4533e35f16964c939b82033bb6259e32",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4F6B79EC-D4B1-42E9-80AD-E35ADDD26022",
      rank: "normal",
      references: [
        {
          hash: "d06b899ff1d5474d21fb3a59dc8c5e0b945226c3",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "019a50b7de741e0068bde41c9d9955b22a5de47b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "d4f3d264b7badd664450b52ec0157875b216257f",
                datavalue: {
                  value: {
                    time: "+2016-04-01T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
      ],
    },
  ],
  P1871: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1871",
        hash: "89081d840df256e589490066caf292afe2c26e79",
        datavalue: {
          value: "cnp01496856",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P2241: [
          {
            snaktype: "value",
            property: "P2241",
            hash: "827b85d92fcdf7a4f6a3dddaa2fdcaf1ca2389d7",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 41755623,
                id: "Q41755623",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P2241"],
      id: "Q937$80E4F5AC-092F-4881-9B9F-522FCFDF2A25",
      rank: "deprecated",
    },
  ],
  P1003: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1003",
        hash: "a839485c79aba30e0b27f9cbeab131d31203eac8",
        datavalue: {
          value: "000074139",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$807FF339-0105-4263-8A7A-75A6FFC26533",
      rank: "normal",
    },
  ],
  P2930: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2930",
        hash: "3914df877ea7c4dfde74e29423c4dbacb317148c",
        datavalue: {
          value: "A.Einstein.1",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$81839751-F897-4276-88EC-1051CD7CB0BF",
      rank: "normal",
    },
  ],
  P2435: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2435",
        hash: "a18d9e84a540a55f3df0f2d2c12939818bc4af92",
        datavalue: {
          value: "184328",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6015a64d-4eb4-53c9-b26d-0c4357fbf171",
      rank: "normal",
    },
  ],
  P1899: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1899",
        hash: "3b9935526fe4802b2e5aaae0e09b54629ca9b3ec",
        datavalue: {
          value: "1035",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9FF11DBB-5751-4C5A-8407-2A7C85434699",
      rank: "normal",
      references: [
        {
          hash: "fa278ebfc458360e5aed63d5058cca83c46134f1",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "e4f6d9441d0600513c4533c672b5ab472dc73694",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 328,
                    id: "Q328",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P2959: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2959",
        hash: "3c66e12546d55a83a4e416a103c6fdb1b96ac1be",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 21200226,
            id: "Q21200226",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$12409B26-3B9E-4B59-8FA0-145A0250C4B0",
      rank: "normal",
      references: [
        {
          hash: "8bc722e6797143f2ba971ee5fedaeb0a331268e6",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "4b9ead388e47f64ea2ecb2b82c5d4f516003a8d5",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1975217,
                    id: "Q1975217",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P2959",
        hash: "bc4e21eef2ffd1871b14428833a8bf69b1e7677a",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 25696257,
            id: "Q25696257",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$2ac0f5fb-45f9-00b4-9fa6-fd857911f10d",
      rank: "normal",
    },
  ],
  P1296: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1296",
        hash: "b2798085f9a6d92362959d9d75a63d71ae0f347d",
        datavalue: {
          value: "0023623",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C63834A2-D913-49E0-84EC-8E08261E0E6E",
      rank: "normal",
    },
  ],
  P863: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P863",
        hash: "e5251a9b11eda3b59608a861618bbfb1c9b119b9",
        datavalue: {
          value: "thinker/2958",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1AA4B8FE-DFE3-45ED-93FB-3E6106EE9520",
      rank: "normal",
    },
  ],
  P3221: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3221",
        hash: "21a6c184c3d590bfa5a242fb0c1d5f6c76ee95fe",
        datavalue: {
          value: "person/albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D95DCAE0-C2AE-400C-85A1-2C7AC889B1EB",
      rank: "normal",
    },
  ],
  P989: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P989",
        hash: "6c155e612876f0ada653996d236c6ac424d2357d",
        datavalue: {
          value: "Hy-Ալբերտ Այնշտայն (Albert Einstein).ogg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "4e83896a9e8ed91888aba5c2b20a4f180f722494",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 8785,
                id: "Q8785",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$8b5a15c8-47cb-7529-df61-298660957813",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P989",
        hash: "21dce6d95288dd34cf69d026e72426ef6bd3f3c5",
        datavalue: {
          value: "De-Albert Einstein.ogg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "46bfd327b830f66f7061ea92d1be430c135fa91f",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
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
            hash: "841ee72f3bd9f9e6ac71f854c1b90afb60d5e2c5",
            datavalue: {
              value: {
                time: "+2005-06-19T00:00:00Z",
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
        P2047: [
          {
            snaktype: "value",
            property: "P2047",
            hash: "66b36d9921e3f8078c7dd1f4f346fbf8aac2ad03",
            datavalue: {
              value: {
                amount: "+37.5",
                unit: "http://www.wikidata.org/entity/Q7727",
              },
              type: "quantity",
            },
            datatype: "quantity",
          },
        ],
      },
      "qualifiers-order": ["P407", "P585", "P2047"],
      id: "Q937$ebd8e6e1-4966-ab2a-c10f-fceeea0a3c14",
      rank: "normal",
    },
  ],
  P1411: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",
        hash: "dabf8a8db2f1c52c40de9d4186c5db2749854af2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "c89bb9c11f1ac318ea64c2600bb94a302192a516",
            datavalue: {
              value: {
                time: "+1910-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$833F4AB8-5DB6-4C8E-A2B0-E9C41B45F459",
      rank: "normal",
      references: [
        {
          hash: "d3a3b9892672322ffaabfb906d80b49354fb6614",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "cc03ea8b758fc1317a4091445e5384a46d0d00d8",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",
                hash: "2d8d7feb14dd6d595a8292b417c2b8a07e384d86",
                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",
        hash: "dabf8a8db2f1c52c40de9d4186c5db2749854af2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "0899237346d886edea15f85bab4cb47864b0cfbd",
            datavalue: {
              value: {
                time: "+1912-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$10C6F278-B75A-41CE-89D5-BF73F1B467F2",
      rank: "normal",
      references: [
        {
          hash: "d3a3b9892672322ffaabfb906d80b49354fb6614",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "cc03ea8b758fc1317a4091445e5384a46d0d00d8",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",
                hash: "2d8d7feb14dd6d595a8292b417c2b8a07e384d86",
                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",
        hash: "dabf8a8db2f1c52c40de9d4186c5db2749854af2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "b7ed4d5d555bff06f6172a871ca53e9203d8eff9",
            datavalue: {
              value: {
                time: "+1913-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$089C39EF-EB95-49B8-B93A-89EB7188C6C7",
      rank: "normal",
      references: [
        {
          hash: "d3a3b9892672322ffaabfb906d80b49354fb6614",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "cc03ea8b758fc1317a4091445e5384a46d0d00d8",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",
                hash: "2d8d7feb14dd6d595a8292b417c2b8a07e384d86",
                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",
        hash: "dabf8a8db2f1c52c40de9d4186c5db2749854af2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "069d89ec73aa33be63849e29d697b66fd32b1b5e",
            datavalue: {
              value: {
                time: "+1914-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$814F8262-A8B2-45AE-B864-665CB88775CA",
      rank: "normal",
      references: [
        {
          hash: "d3a3b9892672322ffaabfb906d80b49354fb6614",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "cc03ea8b758fc1317a4091445e5384a46d0d00d8",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",
                hash: "2d8d7feb14dd6d595a8292b417c2b8a07e384d86",
                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",
        hash: "dabf8a8db2f1c52c40de9d4186c5db2749854af2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "6926a0badcc529fd6d6e0000002894b956b52487",
            datavalue: {
              value: {
                time: "+1916-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$04A00051-217B-4EF2-871B-E683A50F7D77",
      rank: "normal",
      references: [
        {
          hash: "d3a3b9892672322ffaabfb906d80b49354fb6614",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "cc03ea8b758fc1317a4091445e5384a46d0d00d8",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",
                hash: "2d8d7feb14dd6d595a8292b417c2b8a07e384d86",
                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",
        hash: "dabf8a8db2f1c52c40de9d4186c5db2749854af2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "50e1481ea0daa7636d3b976597a36f7df9479953",
            datavalue: {
              value: {
                time: "+1917-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$09AB59F9-6D58-4243-A79B-F23D9E0C2991",
      rank: "normal",
      references: [
        {
          hash: "d3a3b9892672322ffaabfb906d80b49354fb6614",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "cc03ea8b758fc1317a4091445e5384a46d0d00d8",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",
                hash: "2d8d7feb14dd6d595a8292b417c2b8a07e384d86",
                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",
        hash: "dabf8a8db2f1c52c40de9d4186c5db2749854af2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "5df54440d812019cfcf0cdfedd28759754798e65",
            datavalue: {
              value: {
                time: "+1918-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$BC8F6218-9064-4CEC-AFE3-4B7EE9F8167D",
      rank: "normal",
      references: [
        {
          hash: "d3a3b9892672322ffaabfb906d80b49354fb6614",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "cc03ea8b758fc1317a4091445e5384a46d0d00d8",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",
                hash: "2d8d7feb14dd6d595a8292b417c2b8a07e384d86",
                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",
        hash: "dabf8a8db2f1c52c40de9d4186c5db2749854af2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "ab57c209ff15b4c8345fdfb8aa65b5aba4955c7a",
            datavalue: {
              value: {
                time: "+1919-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$C92E9866-8ACD-4515-B5CA-A84373A7D9E6",
      rank: "normal",
      references: [
        {
          hash: "d3a3b9892672322ffaabfb906d80b49354fb6614",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "cc03ea8b758fc1317a4091445e5384a46d0d00d8",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",
                hash: "2d8d7feb14dd6d595a8292b417c2b8a07e384d86",
                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",
        hash: "dabf8a8db2f1c52c40de9d4186c5db2749854af2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "18d27ac59bd33713c2276eb7d5f3eb9a045fb079",
            datavalue: {
              value: {
                time: "+1920-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$A2287F64-F005-477F-A66B-AC3E744EDCFB",
      rank: "normal",
      references: [
        {
          hash: "d3a3b9892672322ffaabfb906d80b49354fb6614",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "cc03ea8b758fc1317a4091445e5384a46d0d00d8",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",
                hash: "2d8d7feb14dd6d595a8292b417c2b8a07e384d86",
                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",
        hash: "dabf8a8db2f1c52c40de9d4186c5db2749854af2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "4d16e5918c56db6eb8fe36f794d10de6e84241b4",
            datavalue: {
              value: {
                time: "+1921-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$E79C45D8-C10C-49A4-AAE4-1066FDE0F86E",
      rank: "normal",
      references: [
        {
          hash: "d3a3b9892672322ffaabfb906d80b49354fb6614",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "cc03ea8b758fc1317a4091445e5384a46d0d00d8",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",
                hash: "2d8d7feb14dd6d595a8292b417c2b8a07e384d86",
                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1411",
        hash: "dabf8a8db2f1c52c40de9d4186c5db2749854af2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38104,
            id: "Q38104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "d39c798deb940ab6e319f67df09e692e863ec5ab",
            datavalue: {
              value: {
                time: "+1922-01-01T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$24981E15-A007-4F8D-A2FC-99BAB12EF1D7",
      rank: "normal",
      references: [
        {
          hash: "d3a3b9892672322ffaabfb906d80b49354fb6614",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "cc03ea8b758fc1317a4091445e5384a46d0d00d8",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23684016,
                    id: "Q23684016",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P3360: [
              {
                snaktype: "value",
                property: "P3360",
                hash: "2d8d7feb14dd6d595a8292b417c2b8a07e384d86",
                datavalue: {
                  value: "2728",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P3360"],
        },
      ],
    },
  ],
  P3348: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3348",
        hash: "1301079bdf747f2f87b9a99f2eb0f816f36b7459",
        datavalue: {
          value: "76370",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$ab650001-4dec-9156-3b6a-74a182370a16",
      rank: "normal",
    },
  ],
  P3373: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3373",
        hash: "bfafb824fd603ae2312fca35e4678f4298d3afaf",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 216738,
            id: "Q216738",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$3f80df56-48c3-ac02-3336-da112aa4a7a5",
      rank: "normal",
    },
  ],
  P3430: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3430",
        hash: "8964a0642e3513d622107f346cd577f7e22523c6",
        datavalue: {
          value: "w63c6p77",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "73c0d7053bd0c0df77c7c3d0d20d31459ce71807",
            datavalue: {
              value: "Einstein, Albert, 1879-1955",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$D2E2EBCC-543C-40A4-B801-30DE95E705B6",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P3430",
        hash: "e35db69f9528ea71625a64be0af5cec8a37847a6",
        datavalue: {
          value: "w69k499r",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$F587C328-3A96-4A33-B9C0-29FA98B53607",
      rank: "normal",
    },
  ],
  P101: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P101",
        hash: "996fbf8c041a60ba898362a7b3b64b5219957d99",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 18362,
            id: "Q18362",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$7267cb07-4fed-ba1d-d28f-bb82e7faf4ad",
      rank: "normal",
      references: [
        {
          hash: "288ab581e7d2d02995a26dfa8b091d96e78457fc",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "6a164248fc96bfa583bbb495cb63ae6401ec203c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 206855,
                    id: "Q206855",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P2454: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2454",
        hash: "82c9443b77489dd41574436858ec74e0f14644f8",
        datavalue: {
          value: "PE00000116",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$32E97C2E-E7CF-4DCD-883C-668FC609B6DA",
      rank: "normal",
    },
  ],
  P3417: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3417",
        hash: "e1fd118878f082bf524f38a75b5b473b6d9381fc",
        datavalue: {
          value: "Albert-Einstein-physicist",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7D2FC670-D645-4590-8330-A4603D17743B",
      rank: "normal",
      references: [
        {
          hash: "3b0a5bb3c1f955edce73740124f7d935698092ad",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "3ac9682e789a3a3791d4fd088b265ea03abef101",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 51711,
                    id: "Q51711",
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
  P949: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P949",
        hash: "286ea8408ea64a87e4bdc7560fd43005941ff20f",
        datavalue: {
          value: "000042773",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$91097cfd-420f-24b0-e767-c41bfcea85dd",
      rank: "normal",
    },
  ],
  P800: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",
        hash: "bd3a7be48be65e8d7e59c3a21d5ed3331ee54b4a",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 11455,
            id: "Q11455",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$f09b6157-49b5-d3b7-f638-6c38e461680c",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",
        hash: "d3e6979a51463f0d1c5344e95b32008815e97618",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 11452,
            id: "Q11452",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$2d7d09a6-470d-307c-b4d8-11f94cc737f1",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",
        hash: "44c8fbcb4fad12f8c6dc88109c59f228e1c2ada4",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 83213,
            id: "Q83213",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$3f710f06-4d66-4cdf-59b0-b57faed28cc9",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",
        hash: "2649b4c6a28b1db81212d068d0d490e2e764da38",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 43514,
            id: "Q43514",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$91bab259-4bcb-82f7-095a-fd310314ae41",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",
        hash: "4bf205e17f9b9cde781befc12701ecc56ada7587",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 56100717,
            id: "Q56100717",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$c3b59239-449d-8473-2f9e-dbc3a46c8971",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",
        hash: "12ff115d90bfaf5243292a7c6c1123a04d659dcc",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 35875,
            id: "Q35875",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$1f3e9c3f-4a10-bcc1-840b-106489f92702",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",
        hash: "aeec94d822a63c5033649eb955e6aa7dc1834233",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 122894,
            id: "Q122894",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$3d0b3a84-4bbb-7909-c87e-010fd0716d03",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",
        hash: "4db68cb3c236e9f59e462a900fead7ea485e85dd",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 273711,
            id: "Q273711",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$b60d007c-4247-e360-fd0f-c463fc89c70e",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",
        hash: "e081cc2e17a1fdddd1fbc5371f83d782132b4d06",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 944,
            id: "Q944",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$27f4cff0-4ba8-7f23-d09d-30b24dd095a6",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",
        hash: "1cf18cc311f101f60ae997042387e43e04311e33",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1080745,
            id: "Q1080745",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$5d6988b2-494d-032b-5daa-bcb43830d503",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P800",
        hash: "2d6f323100d2a3ff73ea8f15f589f0ad3ea02d0a",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 853656,
            id: "Q853656",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$360bbb34-467d-ca45-e877-1a94f134a616",
      rank: "normal",
    },
  ],
  P3762: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3762",
        hash: "71515c28acea2b63036619d78a5aa74031ed9bb8",
        datavalue: {
          value: "22128",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4E114584-DAB6-4098-81F3-A540519CFE3F",
      rank: "normal",
    },
  ],
  P2381: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2381",
        hash: "92d7a5f13c162e7c60775ae0dee2cb9392fe43be",
        datavalue: {
          value: "3611",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$904ad087-403d-f047-b8dd-51e108dd8a69",
      rank: "normal",
    },
  ],
  P509: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P509",
        hash: "f6b1eadc9311e2b6d5ed3036986e71b74e69ed6f",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 2256736,
            id: "Q2256736",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$9550FD9C-92DF-4276-9194-471D4CF613A5",
      rank: "normal",
      references: [
        {
          hash: "fa278ebfc458360e5aed63d5058cca83c46134f1",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "e4f6d9441d0600513c4533c672b5ab472dc73694",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 328,
                    id: "Q328",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P3965: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3965",
        hash: "5758ae83302a8b266d8cd208561265fc3ad8cf85",
        datavalue: {
          value: "41865",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$47C7DD6F-77FD-4105-9041-2814BE6D9F6D",
      rank: "normal",
    },
  ],
  P3987: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3987",
        hash: "58c139820680da38039e377f2d9dc7c0d8e9724e",
        datavalue: {
          value: "690",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C59B62B9-E533-4828-AAE2-BFF7FED417EF",
      rank: "normal",
    },
  ],
  P3360: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3360",
        hash: "2d8d7feb14dd6d595a8292b417c2b8a07e384d86",
        datavalue: {
          value: "2728",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$52ff5483-4c36-2dbe-0fcb-9073db31a470",
      rank: "normal",
    },
  ],
  P3413: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3413",
        hash: "b9685494aafe400293fadc72858ecdffda5ddb09",
        datavalue: {
          value: "3232",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$74409430-0C27-43F0-ACF3-B9FCA15AC9BD",
      rank: "normal",
    },
  ],
  P3222: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3222",
        hash: "e3cd0cda97ab51219fc5c568a3ab5fbfc70a4e4f",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5A3F0CF9-0196-424B-9021-93A51B3D2D89",
      rank: "normal",
    },
  ],
  P1153: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1153",
        hash: "5c714d884c245081df69927a0e5c0021a23f1a4a",
        datavalue: {
          value: "22988279600",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$b95d23c2-4002-b6c9-def1-1af0448ef2be",
      rank: "normal",
    },
  ],
  P4116: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4116",
        hash: "4c256f84188322d64bb3ff39d6d30a0f0793e911",
        datavalue: {
          value: "P0520433729",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$e89a9a41-435e-1bc8-4fb2-ccf469f1b53a",
      rank: "normal",
    },
  ],
  P2889: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2889",
        hash: "e7b97fb8cc400eff4b781fd0d8e79bac22f5f74b",
        datavalue: {
          value: "LZNC-TDG",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$c70f45fa-4a44-0ac9-2891-a3f1127afdd1",
      rank: "normal",
    },
  ],
  P4159: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4159",
        hash: "ae5739cf97288a36565b943a31690f190ebb8784",
        datavalue: {
          value: "Albert_Einstein_(1)",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$01f12da8-4a0e-5f45-fbc4-6e50e1c1c56a",
      rank: "normal",
    },
  ],
  P4193: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4193",
        hash: "b258f0403a2edd677960bae098fa6d515b6befab",
        datavalue: {
          value: "Albert_Einstein_(1879-1955)",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$72f435dd-479c-998c-423a-16cd2d1242e9",
      rank: "normal",
    },
  ],
  P1607: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1607",
        hash: "fd3ec1a011be93487d9797f5e77bef4ebd1930e0",
        datavalue: {
          value: "278727",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$489B6E8A-C84E-41DD-BBE2-DB438B7A8A49",
      rank: "normal",
    },
  ],
  P4228: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4228",
        hash: "aa60a33dbf30af197775650e31e3e4860b41d124",
        datavalue: {
          value: "P000386b",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7A8C06F9-83B7-491D-ABD4-BCD7751143E6",
      rank: "normal",
    },
  ],
  P4293: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4293",
        hash: "a77ad0f67e8bd9242218c16c74ba19c6ad26711a",
        datavalue: {
          value: "pe/004590",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P3740: [
          {
            snaktype: "value",
            property: "P3740",
            hash: "a569095cc5a9dcd46c521419f047eaf0e2c1eb97",
            datavalue: {
              value: {
                amount: "+404",
                unit: "1",
              },
              type: "quantity",
            },
            datatype: "quantity",
          },
        ],
        P5592: [
          {
            snaktype: "value",
            property: "P5592",
            hash: "7a2a93da606c46ff421a14d6fa2524f367abc88b",
            datavalue: {
              value: {
                amount: "+184",
                unit: "1",
              },
              type: "quantity",
            },
            datatype: "quantity",
          },
        ],
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "b7113c27605f676881767266b2473b36853c2a14",
            datavalue: {
              value: "Einstein, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P3740", "P5592", "P1810"],
      id: "Q937$C0F91968-3C63-4EA2-B99F-C148A16A6BEE",
      rank: "normal",
    },
  ],
  P4389: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4389",
        hash: "48303db2c1f7c9ffb547fbbae07279171326d715",
        datavalue: {
          value: "cp37054",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$af88e3d6-477f-d534-4e84-be8426e2556e",
      rank: "normal",
    },
  ],
  P3630: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3630",
        hash: "3277277c15cbccc6aca4c135b84c560d50469367",
        datavalue: {
          value: "2827",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$BBA18DA8-A1FC-4F8B-BC95-21A8AE533D38",
      rank: "normal",
    },
  ],
  P4431: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4431",
        hash: "480f9b180ea6b78c5de3346c7f5f361ea89cdac2",
        datavalue: {
          value: "albert-einsteins-124th-birthday",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$b7633923-4b7c-258e-54a5-aa56b797167e",
      rank: "normal",
    },
  ],
  P3029: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3029",
        hash: "ae7d65f01e52caad56fbc5fe305a05a76ccf62d9",
        datavalue: {
          value: "F51776",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$47C7DC9A-641A-4A7D-96CC-F25E422F6211",
      rank: "normal",
    },
  ],
  P3569: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3569",
        hash: "275297d3129ed1f1af8b67b0d6d834315068a179",
        datavalue: {
          value: "natuurkunde-scheikunde-en-sterrenkunde/albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$712A7500-1C0F-40AE-AF07-017B524A0838",
      rank: "normal",
    },
  ],
  P4200: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4200",
        hash: "45a95a3fba6a0a443edb0a4a8f485b48136ce1ee",
        datavalue: {
          value: "54914",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9F83DB47-06FB-4319-8EB3-F8752CDA4169",
      rank: "normal",
    },
  ],
  P1977: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1977",
        hash: "b92b07b74c1367ca58ce5d33aeef5a792a75cb54",
        datavalue: {
          value: "145134",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6530A781-2B28-482A-BB82-03EF307BDB0D",
      rank: "normal",
    },
  ],
  P4553: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4553",
        hash: "8b856bb41d84318231591ac1022b77f6eb679262",
        datavalue: {
          value: "22021",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$92C291C6-60D3-4F59-A9B4-DDD457D3FC4D",
      rank: "normal",
      references: [
        {
          hash: "154031fdff9fbadaa5f15c8b7e4ae46ca13db45a",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "a3bacfb56d9e630c9b0b2f1c5e906b4b26f7c49a",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 28054658,
                    id: "Q28054658",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P1960: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1960",
        hash: "c98e0869ab981d3bccf9afc2eb3c8ebcfaf4a726",
        datavalue: {
          value: "qc6CJjYAAAAJ",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4836fee8-41e0-495a-6e21-3405e9340e2d",
      rank: "normal",
    },
  ],
  P4590: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4590",
        hash: "7d96ae1a6446405e172bb0f4cc271c96cffa4c90",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3F1776CA-D1FE-433D-997F-C27598DBDFCE",
      rank: "normal",
    },
  ],
  P3219: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3219",
        hash: "fde3dc0d8931bf40083c0dd34ea31b525a1bb4ce",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3D38C3E4-6A71-45E5-A848-8704C0664932",
      rank: "normal",
    },
  ],
  P4629: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4629",
        hash: "8faba0fa21ed39ac79a6680fe8c045801c163dbb",
        datavalue: {
          value: "Einstein, Albert, 1879-1955",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3D84A7A3-CE81-4F95-A2D0-5D4DA76F9487",
      rank: "normal",
    },
  ],
  P990: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P990",
        hash: "feab03a0095d276101c97782f91c81397c933541",
        datavalue: {
          value: "03 ALBERT EINSTEIN.ogg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "7363c5dc5f0d3fa723358566dcaee97b2b5620e5",
            datavalue: {
              value: {
                time: "+1943-00-00T00:00:00Z",
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
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "daf1c4fcb58181b02dff9cc89deb084004ddae4b",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1860,
                id: "Q1860",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P585", "P407"],
      id: "Q937$d28dfcfb-4df9-39b0-68df-db41dc8f363e",
      rank: "normal",
    },
  ],
  P2924: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2924",
        hash: "f752579926b2c17fb62317ee565f2a54f561a6a5",
        datavalue: {
          value: "4940471",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "21c0d0176218261fdf8f7d1b483e821fec008c46",
            datavalue: {
              value: "ЭЙНШТЕЙН",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P2241: [
          {
            snaktype: "value",
            property: "P2241",
            hash: "ab73ca934336656292af069f2278599cecf5770f",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 123562959,
                id: "Q123562959",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P2241"],
      id: "Q937$0dc81f47-4407-a5f0-e6e0-13efd7acba86",
      rank: "deprecated",
    },
  ],
  P1225: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1225",
        hash: "981d6b5c8efd8e047e6ccf9434fc3d1e3c34927b",
        datavalue: {
          value: "10582637",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$04A90133-EA44-45AC-A728-4A1C08ABB9F6",
      rank: "normal",
    },
  ],
  P1807: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1807",
        hash: "58b9a2edcbb3080a3a1bbb7580fd506f95ea32a2",
        datavalue: {
          value: "4887",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E93A0E8E-3BAF-407E-A3C3-29F698D57A87",
      rank: "normal",
    },
  ],
  P3154: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3154",
        hash: "8587a8cbb8019fbce3c31ff766a64d9e3b64cc9c",
        datavalue: {
          value: "einstalb",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$DE361415-6DD3-4221-AE82-35739977F729",
      rank: "normal",
    },
  ],
  P4862: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4862",
        hash: "460b711f569638c16959ff383b0144e8bc38c241",
        datavalue: {
          value: "B000AP7JOU",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$AD7A82A0-111D-41F2-B039-2DED52DB4844",
      rank: "normal",
    },
  ],
  P512: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P512",
        hash: "b9d4a3199955b116a733260875067c670c61be05",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 19693354,
            id: "Q19693354",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "c8b8fed7d5bf5c25b1ba51cc08c760fc95798ac6",
            datavalue: {
              value: {
                time: "+1906-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$e400e96b-4501-7967-8e75-bf98d25b8daf",
      rank: "normal",
      references: [
        {
          hash: "288ab581e7d2d02995a26dfa8b091d96e78457fc",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "6a164248fc96bfa583bbb495cb63ae6401ec203c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 206855,
                    id: "Q206855",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P737: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "3dcc7bd84757313a301aa39e9e7e35791b9c0704",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 991,
            id: "Q991",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$3C1C425C-62DD-4233-B5F1-D2498C003D09",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "497ea0a857cbcd7247fc7ae1c4ddfdd1a4fb749f",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 57246,
            id: "Q57246",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$84ED556F-B8FA-460D-93A0-90D5024B158A",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "56f7786da10f9715ad84b9d811e458c85f44114f",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 35802,
            id: "Q35802",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$EE46A452-C11E-4AE7-963A-8FF7FB6F6D5C",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "e7bfe7dc4b8c42ad0521e991bd6358edc66ae4d3",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1001,
            id: "Q1001",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$19EF14C2-681A-433D-8A75-3A2EEA8F8EF5",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "4734f848338bd0990e770ec1755dc255de892c98",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 38193,
            id: "Q38193",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$C6E7234B-92BC-4592-BA74-8F03870FE891",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "f7fc55406de4a65bb5357508e2ae00a89ddc2af3",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 41688,
            id: "Q41688",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$43BC7AAD-82D2-4948-962C-52FAE1EFB24F",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "ff23d464f272c6008794c7e13cd507c6999eaaf8",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 19185,
            id: "Q19185",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$9E49F68A-83BB-4442-9486-8E4F40593D6F",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "035af40b3e165a99d041cbf936ddcab691fd823b",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 935,
            id: "Q935",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$E4607642-194C-4331-BB6F-BBE8A4CE2710",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "6fe9db20c6c60c2f8dfd52a0d0807c1bf7af9aca",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 7322195,
            id: "Q7322195",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$FABE514E-23CC-4C6C-8D82-BF3E2F64C7F3",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "a3dc2dc483c1ff245eb0208f7b94a04e3aa0babc",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 37160,
            id: "Q37160",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$4C978955-7004-4A30-8761-95A4572597D0",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "b80a2416c32f003b1804a566a45207b5ed4dcaf7",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 25820,
            id: "Q25820",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$79A1E4A3-E4FA-4EDA-A94D-DFCAC70A10A2",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "ba66ad0b8858ec0b184988ab81da6fe9f5320991",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 42299,
            id: "Q42299",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$059F1D35-CB89-490B-B3F9-44E25FC91BB4",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "b87b6637745c5cebd215c9e1f77c8d54ddfea979",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 57193,
            id: "Q57193",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$54302CD2-5FC0-4B2C-A1E4-8F1D76F949F7",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "db9a29f8142797725d17ab84dd125c9da99e3a88",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 9095,
            id: "Q9095",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$BE15FFD8-6E89-45B2-8713-68FA1436BA78",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "e0871b8eb66081e8d3a925adbc1d72f287352093",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 200639,
            id: "Q200639",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$FEB22D24-5E00-4E88-BF6C-4572C2AE5957",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "2ec2cebed9acbc4d18113bf0017d7de56153dd67",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 310794,
            id: "Q310794",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$390CEB92-E676-4123-9ECD-4C06D20A72AF",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "205b0f3e87715accd95fc8ae03af656b72e79ee7",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 355245,
            id: "Q355245",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$60C51596-943C-4A87-89CF-7C91EC4DA189",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P737",
        hash: "ba782f1e5db151d0455ded0aa111f44d7309db97",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 93996,
            id: "Q93996",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$7D6F2F4A-8A25-475F-B29F-A489707ACCC1",
      rank: "normal",
    },
  ],
  P4823: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4823",
        hash: "0fddfe4b6c9d55d110d316568de64c8ab6bef81a",
        datavalue: {
          value: "1300477",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$376DA0ED-B241-4786-B793-8875CBECFA14",
      rank: "normal",
    },
  ],
  P5008: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5008",
        hash: "d8037e40c3d12c404489a97a78937213939ff1cd",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 5460604,
            id: "Q5460604",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$8A9B623F-5BD4-4D2F-BA1B-ADF17EDEB839",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P5008",
        hash: "8cfab72fde6b6e32be3902543c9510ade973a68b",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 103505599,
            id: "Q103505599",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$5be9c404-4a23-875a-bd7a-85e295c46960",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P5008",
        hash: "136e3fbe19158e73e4bfebf3f2d98a9df8638b7e",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 6173448,
            id: "Q6173448",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "7661f66dd5b82a1ea92515ddb16c09ce3088edea",
            datavalue: {
              value: {
                time: "+2022-10-31T00:00:00Z",
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
      },
      "qualifiers-order": ["P585"],
      id: "Q937$255D1010-AEBD-4545-97B7-5AC8D0542D04",
      rank: "normal",
    },
  ],
  P5068: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5068",
        hash: "9aba298ea77f3e21f37e6e2bd13450593f4106ac",
        datavalue: {
          value: "1916687",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$19853111-80CE-4E5A-86B0-D25E9FC6B60F",
      rank: "normal",
    },
  ],
  P1187: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1187",
        hash: "311427c4153e7dff42cf828bb5c6491bf92bf278",
        datavalue: {
          value: "A028454",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$B427CBB4-7940-4FB6-9A3F-A724845C8DB7",
      rank: "normal",
    },
  ],
  P5125: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5125",
        hash: "297367852a89ba831608a2b71676929ecbaa937d",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 48835067,
            id: "Q48835067",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$241D2F15-A24A-44A3-9DF0-0E432AEACAD9",
      rank: "normal",
    },
  ],
  P4789: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4789",
        hash: "28a42d26d933bcbb3af301da5cad624805090b1c",
        datavalue: {
          value: "U236915",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$ffdd77cc-47ba-c22a-6d42-11e2eec07284",
      rank: "normal",
    },
  ],
  P4955: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4955",
        hash: "d00c58e3460900974816721eb22e2dc416371232",
        datavalue: {
          value: "62280",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5bec5aab-487a-0b48-1d07-13a73084d657",
      rank: "normal",
    },
  ],
  P5019: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5019",
        hash: "27bca1889ea60682f5f6628e94b771a203974c90",
        datavalue: {
          value: "einstein-albert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$a39f6585-4bb7-ba15-4a25-40538ac061c7",
      rank: "normal",
    },
  ],
  P5370: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5370",
        hash: "cdaefaf2807b65b8efd35cce073dd252f35b0882",
        datavalue: {
          value: "48276",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$150F4760-0F90-463C-A487-1F5B1C084C09",
      rank: "normal",
      references: [
        {
          hash: "154031fdff9fbadaa5f15c8b7e4ae46ca13db45a",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "a3bacfb56d9e630c9b0b2f1c5e906b4b26f7c49a",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 28054658,
                    id: "Q28054658",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P2605: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2605",
        hash: "692481efa10cd2853043f8a0bcc826fe5eb260ad",
        datavalue: {
          value: "52943",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$86E40C3F-9175-447E-9C9A-1B878EB68A3D",
      rank: "normal",
    },
  ],
  P271: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P271",
        hash: "bf9cf3af3bed196d2531eff1377853e060f2fe3e",
        datavalue: {
          value: "DA00708434",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D1CF45C9-1A07-4B0A-B76D-D730D5CBD3D6",
      rank: "normal",
      references: [
        {
          hash: "c90018a49c1137af9ffa87f5079fa6e494bf7ce0",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "b09baac32eb0d06cecfd287182405f4371d8c4a2",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 115920372,
                    id: "Q115920372",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P11496: [
              {
                snaktype: "value",
                property: "P11496",
                hash: "2aee6533b4c7e3cef56993398a1d7e35da08ea3c",
                datavalue: {
                  value: "1140563741718602752",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "2d8ed19d4d5d6b1c50ae084152ee243ba7bb1026",
                datavalue: {
                  value: {
                    time: "+2023-02-17T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P11496", "P813"],
        },
      ],
    },
  ],
  P2734: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2734",
        hash: "a6144ac670e24168d94edd9e3a4ee63e55a7de82",
        datavalue: {
          value: "EinsteinAlbert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$0F039528-3A31-411C-A26C-4735CFA46A92",
      rank: "normal",
    },
  ],
  P5375: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5375",
        hash: "59c882e6dc555253d3a129452d391c6cd1170f86",
        datavalue: {
          value: "5923",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$FB23247D-8139-4EED-B6FC-03BE051E319A",
      rank: "normal",
    },
  ],
  P5441: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5441",
        hash: "6778ce2d8ee3756083262dd617dbd1642eb6b937",
        datavalue: {
          value: "Einstein,_Albert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E7A1995D-D92D-4D82-A1B9-8B96C12C6E0D",
      rank: "normal",
      references: [
        {
          hash: "154031fdff9fbadaa5f15c8b7e4ae46ca13db45a",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "a3bacfb56d9e630c9b0b2f1c5e906b4b26f7c49a",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 28054658,
                    id: "Q28054658",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P140: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P140",
        hash: "62a2f67bc4780266b21d302c5114355254aaa72d",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 7066,
            id: "Q7066",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P805: [
          {
            snaktype: "value",
            property: "P805",
            hash: "0b09a955d808fe3e6b5b6de853274f41ef570630",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 7311409,
                id: "Q7311409",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P1310: [
          {
            snaktype: "value",
            property: "P1310",
            hash: "c448e79218936268138171dbaf6a7aca76e9201e",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 937,
                id: "Q937",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P805", "P1310"],
      id: "Q937$a7471c5f-03f0-4342-87a4-4c532f8db1ce",
      rank: "deprecated",
      references: [
        {
          hash: "ee63837773daae96f37031487721a9f357e629ec",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "6a164248fc96bfa583bbb495cb63ae6401ec203c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 206855,
                    id: "Q206855",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "3756277ea3db3c5c7ee5523dd3aae9aa81b396b6",
                datavalue: {
                  value: {
                    time: "+2018-12-20T00:00:00Z",
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
          },
          "snaks-order": ["P143", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P140",
        hash: "03826990652da6fa9e65a57035971bd8dd5e29d5",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 288928,
            id: "Q288928",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P3680: [
          {
            snaktype: "value",
            property: "P3680",
            hash: "23badd4502a70433a9b8af16147099679f099b42",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 937,
                id: "Q937",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P3680"],
      id: "Q937$0624c045-4731-1792-d116-ade653e359e3",
      rank: "normal",
      references: [
        {
          hash: "e6a3c01d4e6df82981f48935637103c7bb63cc22",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "701eff1f4db8b90a734b7d70c46c935093d412f7",
                datavalue: {
                  value:
                    "http://farm3.static.flickr.com/2687/4496554935_0b573db853_o.jpg",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "7b46d13d4529628dbef8a0a24b49aa5c26464141",
                datavalue: {
                  value: {
                    text: "Letter to M. Berkowitz, 25 October 1950",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
            P50: [
              {
                snaktype: "value",
                property: "P50",
                hash: "fb18b2cbe639025f80a6480157ebd0f5e412346a",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 937,
                    id: "Q937",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P854", "P1476", "P50"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P140",
        hash: "da60885175be05178bbafe20f1ea5400ed3469fa",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 9268,
            id: "Q9268",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P582: [
          {
            snaktype: "value",
            property: "P582",
            hash: "24730c1f02fa9d487a94034a71b1a453271d0266",
            datavalue: {
              value: {
                time: "+1891-00-00T00:00:00Z",
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
      "qualifiers-order": ["P582"],
      id: "Q937$3dfedb25-4d1a-954c-3b1e-e2ce2f5c08a3",
      rank: "normal",
      references: [
        {
          hash: "6561ed01ac311c44a53b67b353feeca5d81108f1",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "5859abc749ac54ce0870df8517779a11cf30d7fc",
                datavalue: {
                  value:
                    "https://archive.org/details/EinsteinAutobiography/page/n1",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P50: [
              {
                snaktype: "value",
                property: "P50",
                hash: "fb18b2cbe639025f80a6480157ebd0f5e412346a",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 937,
                    id: "Q937",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "a652ad9e2632d2d6fc209a2df16f567c74ec6240",
                datavalue: {
                  value: {
                    text: "Albert Einstein: Notes for an Autobiography",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
            P577: [
              {
                snaktype: "value",
                property: "P577",
                hash: "27546553ee6d79cbacfa942ad68d888d55a1fbd8",
                datavalue: {
                  value: {
                    time: "+1949-00-00T00:00:00Z",
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
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "166712aa38ea5febc4b5d4d0c0d615ca17b9e598",
                datavalue: {
                  value: {
                    time: "+2019-03-07T00:00:00Z",
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
          },
          "snaks-order": ["P854", "P50", "P1476", "P577", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P140",
        hash: "86e8e76499b8cc331390c4471ffbbeb381621832",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 728455,
            id: "Q728455",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$41e48a33-49ad-5d99-b8ac-eb093e1778b0",
      rank: "preferred",
      references: [
        {
          hash: "82db66e7f028d41984e94122f86469f639efaf8e",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "9438f77cc1aec4e52e7013daa24477eefaa49bcd",
                datavalue: {
                  value:
                    "https://he.wikipedia.org/wiki/%D7%90%D7%9C%D7%91%D7%A8%D7%98_%D7%90%D7%99%D7%99%D7%A0%D7%A9%D7%98%D7%99%D7%99%D7%9F",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "925128d55df99adad9fa16f5b5cc88f86caaeaa3",
                datavalue: {
                  value: {
                    text: "Brian, Dennis (1996), Einstein: A Life, New York: John Wiley & Sons, p. 127, ISBN 0-471-11459-6",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
          },
          "snaks-order": ["P854", "P1476"],
        },
      ],
    },
  ],
  P1580: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1580",
        hash: "d01e3462d92fcc46a9bef5ca7f818330e5f23270",
        datavalue: {
          value: "a1279550",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$855CFEFF-77AF-4670-B7D8-F94D0FCCCB59",
      rank: "normal",
    },
  ],
  P5731: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5731",
        hash: "0b5adc653c91dbf0a235628e1260fc76deebb496",
        datavalue: {
          value: "86877",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$965E36F3-192E-4B3A-85BF-84D638EA5110",
      rank: "normal",
    },
  ],
  P5587: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5587",
        hash: "b5126fda5f1154344da5cab65f668c476b2af1b3",
        datavalue: {
          value: "fcrtts5z33mrjqc",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$A92CD88A-2244-409D-938F-5A21C9A7F5B4",
      rank: "normal",
      references: [
        {
          hash: "bfb9d874f3117f2044865982fccfad957a3bef35",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "f487c993a88b7e91732ae6e2ad2910710a462ad8",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1798125,
                    id: "Q1798125",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P577: [
              {
                snaktype: "value",
                property: "P577",
                hash: "0e399d3b76f1dd42d1d750c3cf3cc81a2006aa96",
                datavalue: {
                  value: {
                    time: "+2018-03-26T00:00:00Z",
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
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a11d62bd1cf10c4155401fd7884e6013285efeaa",
                datavalue: {
                  value: {
                    time: "+2018-08-24T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P577", "P813"],
        },
      ],
    },
  ],
  P5776: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5776",
        hash: "005edb1e0ae7bd054b40747766ae2b21a1cf3707",
        datavalue: {
          value: "53f5b414dabfae472ef80501",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C9969499-43F7-4EA4-A75D-E106A7C9E6D1",
      rank: "normal",
      references: [
        {
          hash: "f5fbb9af916b711ccb92e707f5e7fedead2a5103",
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "359812a4b98df9c4eab4de4604c793adbec552be",
                datavalue: {
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Arnet_Miner_author_ID&oldid=739822897",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
  ],
  P5021: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5021",
        hash: "06843c114f80da6b584b66481b4f21874b70a362",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1051792,
            id: "Q1051792",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P5022: [
          {
            snaktype: "value",
            property: "P5022",
            hash: "46ddfd809f9e00266fd99ff2889445f839d113ea",
            datavalue: {
              value: {
                amount: "+160",
                unit: "1",
              },
              type: "quantity",
            },
            datatype: "quantity",
          },
        ],
      },
      "qualifiers-order": ["P5022"],
      id: "Q937$e5c2c22e-45ce-915d-900b-9466dbaa22be",
      rank: "normal",
    },
  ],
  P1150: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1150",
        hash: "296acffa616184f61378a01c4defbc591ec65653",
        datavalue: {
          value: "BF 5620",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$48935E07-C567-4839-BF88-39C8734FAAFD",
      rank: "normal",
    },
  ],
  P2963: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2963",
        hash: "5d7d9ee9ecfb18ee602231ac740c1880ec5ebdb5",
        datavalue: {
          value: "9810",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "4742bd7d64eb60cd35c3e6f7f5fdafaf5fef1b30",
            datavalue: {
              value: {
                time: "+2020-09-28T00:00:00Z",
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
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "38f1530d2785e41affc551297fcbc942306fce4e",
            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P3744: [
          {
            snaktype: "value",
            property: "P3744",
            hash: "966f27cdeeb065f972eaa02101516f29a452ed68",
            datavalue: {
              value: {
                amount: "+8457",
                unit: "1",
              },
              type: "quantity",
            },
            datatype: "quantity",
          },
        ],
      },
      "qualifiers-order": ["P585", "P1810", "P3744"],
      id: "Q937$f657504a-4114-3037-35c2-9176d72639c4",
      rank: "normal",
    },
  ],
  P4342: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4342",
        hash: "31cec329720341fe1868f8d4536aab50c5b00b9c",
        datavalue: {
          value: "Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P4390: [
          {
            snaktype: "value",
            property: "P4390",
            hash: "1a4df62914ea9afca349bd5fb5d8efd5832d83fa",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 39893449,
                id: "Q39893449",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P4390"],
      id: "Q937$A81C7B19-9CE3-4A73-AFD0-E81F5F93E542",
      rank: "normal",
    },
  ],
  P5882: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5882",
        hash: "0c90b8cfeaa852e3be753c83cea536eef2a407e4",
        datavalue: {
          value: "M00000061906",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C475904E-6F9D-4FC4-B593-F6012D2D331F",
      rank: "normal",
    },
  ],
  P21: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P21",
        hash: "85ad4b1c7348f7a5aac521135040d74e91fb5939",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 6581097,
            id: "Q6581097",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$BA154D92-7A34-4E9F-A2CD-F7B750D24EFA",
      rank: "normal",
      references: [
        {
          hash: "81879642224ecc141500846bdf64e0cc71170210",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "def9f19d84b65167a2a17ce38364d264c16127fc",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 19938912,
                    id: "Q19938912",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P268: [
              {
                snaktype: "value",
                property: "P268",
                hash: "7502b674b3ce130a850c3ff68487516dcbadd7f2",
                datavalue: {
                  value: "119016075",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "d6162a1716489623c6e595e448b17f8dca4fb2e8",
                datavalue: {
                  value: {
                    time: "+2015-10-10T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P268", "P813"],
        },
        {
          hash: "60d0de3816e6bc46c68c1724cdc65a5cd711bd34",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "5a6c2e831c50b974de6fddefd4af24e2cb11951f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23667505,
                    id: "Q23667505",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P2861: [
              {
                snaktype: "value",
                property: "P2861",
                hash: "dbd892e80eb0e661e46a13fb1f39312888c4944d",
                datavalue: {
                  value: "1215",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "8c7f4a22c0be57fa68b18e01ccf163bc2d2e0e53",
                datavalue: {
                  value: {
                    time: "+2019-06-19T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P2861", "P813"],
        },
        {
          hash: "f8a8ba34c0460203a6d7a13721f7bc6ff7ab1e7f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d1e923075a89220a981d8c2511065b97bcf4dc5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",
                hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
                datavalue: {
                  value: "3852",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a2c482c4381b8ce33ae32b3998e8ec614fedebb7",
                datavalue: {
                  value: {
                    time: "+2021-02-13T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
        {
          hash: "8ce43cfaadd669702bc59aeba5926a7ab1045fd1",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "019a50b7de741e0068bde41c9d9955b22a5de47b",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 36578,
                    id: "Q36578",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5318109769a42d27c68dde5d7e6182d628f4737d",
                datavalue: {
                  value: {
                    time: "+2024-07-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P227", "P813"],
        },
      ],
    },
  ],
  P6173: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6173",
        hash: "881cc45d5eb8a688e596df2b47ca7915cee708dd",
        datavalue: {
          value: "4450",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9792B121-2E20-4F62-8C6C-27A6EF9BC74E",
      rank: "normal",
    },
  ],
  P1441: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1441",
        hash: "ddacada77648dd3f0b45474c3fa94f4534656730",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 26963166,
            id: "Q26963166",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$C41A7482-FAFC-420D-BB22-C0A4AC175404",
      rank: "normal",
    },
  ],
  P6234: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6234",
        hash: "d814ae8c31a912f2c8a770986417f6562ea38394",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D6BCE945-D473-4B85-B95F-81ACB7BBD38D",
      rank: "normal",
    },
  ],
  P803: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P803",
        hash: "50006fccc1b06a046cf9bac5c1d0c9f9331f4a93",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 25339110,
            id: "Q25339110",
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
            hash: "b876d0058e391133f630df46b0dcde2ee62a39c0",
            datavalue: {
              value: {
                time: "+1909-00-00T00:00:00Z",
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
      "qualifiers-order": ["P580"],
      id: "Q937$dc7412cb-4045-1e15-9e33-b1aad4381b02",
      rank: "normal",
      references: [
        {
          hash: "b4abeccfceced41e28a2214c45bbb87000ddcb64",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "6a164248fc96bfa583bbb495cb63ae6401ec203c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 206855,
                    id: "Q206855",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "6569757a02b06f55a5c106a8d28b4fdd32dee86d",
                datavalue: {
                  value: "https://ru.wikipedia.org/?oldid=96910806",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "3756277ea3db3c5c7ee5523dd3aae9aa81b396b6",
                datavalue: {
                  value: {
                    time: "+2018-12-20T00:00:00Z",
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
          },
          "snaks-order": ["P143", "P4656", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P803",
        hash: "a0d3fc4ae31d9b2895b1ad505a9202aa5e4636b9",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 414528,
            id: "Q414528",
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
            hash: "938769cc9a3712dd761e8302716efe470b0b01f2",
            datavalue: {
              value: {
                time: "+1913-00-00T00:00:00Z",
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
      "qualifiers-order": ["P580"],
      id: "Q937$2aa71e9e-48de-f589-acb2-293861e69c0a",
      rank: "normal",
      references: [
        {
          hash: "b4abeccfceced41e28a2214c45bbb87000ddcb64",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "6a164248fc96bfa583bbb495cb63ae6401ec203c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 206855,
                    id: "Q206855",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "6569757a02b06f55a5c106a8d28b4fdd32dee86d",
                datavalue: {
                  value: "https://ru.wikipedia.org/?oldid=96910806",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "3756277ea3db3c5c7ee5523dd3aae9aa81b396b6",
                datavalue: {
                  value: {
                    time: "+2018-12-20T00:00:00Z",
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
          },
          "snaks-order": ["P143", "P4656", "P813"],
        },
      ],
    },
  ],
  P6231: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6231",
        hash: "13931fc6aae7e8f244b5c49ff312f0754c0e0943",
        datavalue: {
          value: "80919",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4D273B23-4084-462A-A802-D6ADB1373FF0",
      rank: "normal",
    },
  ],
  P5905: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5905",
        hash: "9bb01b94f01e0440307bb618e4c44e08d1b933e3",
        datavalue: {
          value: "4005-49115",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$AA392540-5FCC-4F1C-B0EA-982F8F7AAC94",
      rank: "normal",
    },
  ],
  P5247: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5247",
        hash: "8593622b4fe0417ae1f48c08aa21c0c7da27dfab",
        datavalue: {
          value: "3005-791",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C17B03A0-1D77-40EB-BF55-A80ABB79B411",
      rank: "normal",
    },
  ],
  P5508: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5508",
        hash: "6e0e9da5be7fd2714a73a6d66e78d37ba6b07895",
        datavalue: {
          value: "56488",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$042BC0B3-6A40-4AF2-BB53-3E9EA16C6313",
      rank: "normal",
      references: [
        {
          hash: "ab51d6291e5df5fe804cb594a6b931b8f265b098",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "be520ea59cd63933d39a5a86f7b6866ff8f479b7",
                datavalue: {
                  value: "https://www.archinform.net/service/wd_aiarch.php",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "c619cc6e0e5fe3733a8c4a47939343e5970e0e9d",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 265049,
                    id: "Q265049",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "583ec7d0c510afa510651259598d7c6fbd0c20fc",
                datavalue: {
                  value: {
                    time: "+2019-02-28T00:00:00Z",
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
          },
          "snaks-order": ["P854", "P248", "P813"],
        },
      ],
    },
  ],
  P6551: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6551",
        hash: "8392c536a4b4fbc17f211f8ee6118360fac1c71d",
        datavalue: {
          value: "11507030",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$DE2C26E2-A97E-4826-B668-CF4B3F83398F",
      rank: "normal",
      references: [
        {
          hash: "c4f294020e8a161a9c5113690867ca58c2fdf4f6",
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "06bd8c58b2de2ca16d4731643d768a511176e9b3",
                datavalue: {
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Physics_History_Network_ID&oldid=870387729",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
  ],
  P6573: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6573",
        hash: "d2e527d4800ebe9e3ef51308b7293bbe1cef8901",
        datavalue: {
          value: "Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3B4790D4-7F3A-44FB-8CAB-6DEB414C3488",
      rank: "normal",
    },
  ],
  P6564: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6564",
        hash: "043d62e1aa00ee9550f6e34610c1886ac190a30d",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$e28f7508-4f6b-d487-6e35-b0691a419508",
      rank: "normal",
    },
  ],
  P102: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P102",
        hash: "d49df630921360668334359b243cd5bddd261744",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 328195,
            id: "Q328195",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P582: [
          {
            snaktype: "value",
            property: "P582",
            hash: "ca463ba5d0edbc4151c7f6d3246ab3b14989b5a0",
            datavalue: {
              value: {
                time: "+1933-00-00T00:00:00Z",
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
      "qualifiers-order": ["P582"],
      id: "Q937$ca224046-4efe-9975-ca45-59c9618cbc14",
      rank: "normal",
    },
  ],
  P6578: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6578",
        hash: "1095fd73076386c97ecf66f04f21b04c5ccf1a88",
        datavalue: {
          value: "65B24EFADE9787FD",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$39544CAA-A410-4E78-9165-53C9187977DD",
      rank: "normal",
    },
  ],
  P1344: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1344",
        hash: "d6035d57586c3495527c51a5b24ce49e3c934796",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 63430342,
            id: "Q63430342",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$568678a8-49ea-2e5c-d8a6-fe848fefbb00",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1344",
        hash: "41d28bd1ec05d13cc3bb6e557d2c2afd2412e119",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 63430346,
            id: "Q63430346",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$dbfdf1ba-4664-7995-c8e9-031fa478cccc",
      rank: "normal",
    },
  ],
  P6363: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6363",
        hash: "ee447f0fa2c930bbd1c3623cd87a473e5a33b9a2",
        datavalue: {
          value: "http://data.thenextweb.com/tnw/entity/albert_einstein",
          type: "string",
        },
        datatype: "url",
      },
      type: "statement",
      id: "Q937$b614b508-4fb2-543f-13b6-54860f700c55",
      rank: "normal",
      references: [
        {
          hash: "c61d39b2255a69a21bc5eca35edeab2c1b38f213",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "ce4cf62b7dbd462d748655e416c31a4770a3634b",
                datavalue: {
                  value: "https://thenextweb.com/vocabulary/albert-einstein/",
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
  ],
  P6770: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6770",
        hash: "0154f2caf60999a7f14f4d47aebafc38079b42d5",
        datavalue: {
          value: "68115.011",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$f580b9e9-4b05-84ad-b70c-b749908b7e52",
      rank: "normal",
    },
  ],
  P5739: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5739",
        hash: "b4a145ce5c22ebd73fcaf788c122f3bcdc6c781e",
        datavalue: {
          value: "25090",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$F21985DE-EF54-4B06-8C78-ED463C0E34B1",
      rank: "normal",
    },
  ],
  P6844: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6844",
        hash: "258524b3a122bcf9fa701429899163a06328cd3f",
        datavalue: {
          value: "16734",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$99AF1BEE-F7AE-4FF3-AA9A-C049F23EF7DE",
      rank: "normal",
    },
  ],
  P5421: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5421",
        hash: "4399a690716c56ed6a0ab9fe1ee6a8950c32319f",
        datavalue: {
          value: "66492",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$21F243E5-98DC-416F-9A41-09E9BFEF06BF",
      rank: "normal",
    },
  ],
  P6984: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6984",
        hash: "6e267a5f6b2139e5d8bf1a41b9631541685c1a4a",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$370EE5A9-4CC7-4A5C-9859-264FD090FC30",
      rank: "normal",
    },
  ],
  P7031: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7031",
        hash: "13262d98d1053e6e64ac8551b17c55a24173b617",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1065: [
          {
            snaktype: "value",
            property: "P1065",
            hash: "bda5ad90b681e183f84d2bc271d420cc33959791",
            datavalue: {
              value:
                "http://web.archive.org/web/20190707180834/https://penguin.co.in/author/albert-einstein/",
              type: "string",
            },
            datatype: "url",
          },
        ],
      },
      "qualifiers-order": ["P1065"],
      id: "Q937$57164D10-E675-4731-AC46-99B93405E884",
      rank: "normal",
      references: [
        {
          hash: "b4e829b2781b828de41e826311e8c67219c7ebb4",
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "b867045468cf42618bf94d430b5c6b9b5720c760",
                datavalue: {
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Penguin_India_author_ID&oldid=980750962",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
  ],
  P6886: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6886",
        hash: "5ba8b48f714e1f7318e9d48ed1deb5ec28b207ca",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 1860,
            id: "Q1860",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$9CB89033-CCEB-475F-871C-F6A87637BCCC",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P6886",
        hash: "df40b508b038ae93b88b6fb445e67730eeaf490d",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 188,
            id: "Q188",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$3bd38978-44b4-7cde-ea6e-cb9181b107a6",
      rank: "preferred",
    },
  ],
  P7142: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7142",
        hash: "3d3093c97d3ff81b62001b3f0b3b8d8e22201282",
        datavalue: {
          value: "15296",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$2E941FA2-3FEB-47DB-8113-6DAE8B2AA600",
      rank: "normal",
      references: [
        {
          hash: "bb609ff919199394072d6413cba7ad6cc0e70b30",
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "5bb561e964c12b7d5c7a21f93ce3f72ccc4901bb",
                datavalue: {
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Poincaré_Papers_person_ID&oldid=992642893",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
  ],
  P25: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P25",
        hash: "1bf0e6aa61f17c1f1c8887e886c38821ce6a3f24",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 4357787,
            id: "Q4357787",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$7c2193c0-4c6d-8884-4bf9-9d86dfdc7db6",
      rank: "normal",
      references: [
        {
          hash: "fa278ebfc458360e5aed63d5058cca83c46134f1",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "e4f6d9441d0600513c4533c672b5ab472dc73694",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 328,
                    id: "Q328",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P7029: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7029",
        hash: "1f5c165115506924b6f12606195a76bac7fed2b7",
        datavalue: {
          value: "770128355",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6B8DBA50-B148-49FF-96B9-27165F49B67E",
      rank: "normal",
    },
  ],
  P1196: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1196",
        hash: "95c96aff195f7cfc9cd0c684f46ebed97ae1c5f4",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 3739104,
            id: "Q3739104",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$14c593c6-45e4-be23-d902-13247421bf0a",
      rank: "normal",
      references: [
        {
          hash: "ad98cae4bc569d93fc1932a8ef8482607924a231",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "dff5d8da6f94e04fc339ee15a4eba73d559e443b",
                datavalue: {
                  value:
                    "https://www.history.com/news/9-things-you-may-not-know-about-albert-einstein",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e06f240a792471969e6581cc45995e17426bc7a9",
                datavalue: {
                  value: {
                    time: "+2019-01-04T00:00:00Z",
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
          },
          "snaks-order": ["P854", "P813"],
        },
      ],
    },
  ],
  P1258: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1258",
        hash: "1f4e586135791eeb0ae42126f93a034bde6c67cc",
        datavalue: {
          value: "celebrity/albert_einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$83607b46-4f7a-7788-a6e7-d25d20ab9985",
      rank: "normal",
    },
  ],
  P2604: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2604",
        hash: "e9069d7157cb4d7cb9aa30bdead1fd7efba26e40",
        datavalue: {
          value: "231298",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$98e7e569-402c-74e7-1dff-bde11bd88644",
      rank: "normal",
    },
  ],
  P5033: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5033",
        hash: "0b5493eff5111773b9aa056cf3b0de34232de389",
        datavalue: {
          value: "308021",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$b34bc648-4b47-0af6-f481-7fdc1e14a28e",
      rank: "normal",
    },
  ],
  P1266: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1266",
        hash: "5ab240d06a98dce131e6d59470f554a9db725d76",
        datavalue: {
          value: "36179",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$97c563a5-43aa-af0f-74d8-31bf52a6614b",
      rank: "normal",
    },
  ],
  P5534: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5534",
        hash: "799599630ede22abbc6289b8c72c2bb45543ec5a",
        datavalue: {
          value: "243732",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$c3e98470-44af-4b0c-c90e-164e51cc76b0",
      rank: "normal",
    },
  ],
  P4515: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4515",
        hash: "3e30fe0db83e65ea007901f73e3441ea0a260628",
        datavalue: {
          value: "10287261",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7c632375-4dc8-7071-90ce-b35f0d4577a3",
      rank: "normal",
    },
  ],
  P3845: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3845",
        hash: "6774773f5a156bfb72790274af6c7ff0025c6396",
        datavalue: {
          value: "218603",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$b5eb905c-45a3-775b-c7b6-5fd9ac8e33eb",
      rank: "normal",
    },
  ],
  P2638: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2638",
        hash: "a83dc36ffd4356272d988443af9af8bc3085f535",
        datavalue: {
          value: "people/albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5a6bf0f5-420f-b900-13bd-fd07d6923a7a",
      rank: "normal",
    },
  ],
  P4985: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4985",
        hash: "3113734ce959b049c3638f42a06c618cce319fb3",
        datavalue: {
          value: "1317625",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$d1239124-403c-36d6-aadf-1a5b0a386ffa",
      rank: "normal",
      references: [
        {
          hash: "a9863808a0bc3f14745b9840562a9a76f5d0b9cc",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "01c5ccdb20291acf36831371f5891341513dc666",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 20828898,
                    id: "Q20828898",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P345: [
              {
                snaktype: "value",
                property: "P345",
                hash: "245cdda8b2db171d27e6acefc037051fb43c45aa",
                datavalue: {
                  value: "nm0251868",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "f794e0939e62568f014684eaf8b328fd49ddd187",
                datavalue: {
                  value: {
                    time: "+2021-05-28T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P345", "P813"],
        },
      ],
    },
  ],
  P4438: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4438",
        hash: "ad0f7df7fc89b365f3d2a2352e9928ed6cb4146d",
        datavalue: {
          value: "4ce2bb404fc06",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1bd3734d-4650-c00b-058f-5d883a4d10ec",
      rank: "normal",
    },
  ],
  P6119: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6119",
        hash: "2b77eed54be24dc71cd8d4a38e2337c1ee989f40",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$0c7aa06c-4a57-3016-b94f-a7cae8bef68d",
      rank: "normal",
    },
  ],
  P5284: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5284",
        hash: "8c4eae86be7a0b178e84462fb94b421df1a71599",
        datavalue: {
          value: "1032566",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$e936b18b-477c-220b-4f80-2ab71e170d9c",
      rank: "normal",
    },
  ],
  P6441: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6441",
        hash: "e68d49049d05fd9047f445a596766ff346fa9b5f",
        datavalue: {
          value: "4559238",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$91c72921-4120-5fae-c5d6-faab73381f99",
      rank: "normal",
    },
  ],
  P5340: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5340",
        hash: "c4e554cff941afdd27e50ab80d5498d15aa4251f",
        datavalue: {
          value: "9130",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$e8a48e91-4d70-19c5-0304-00e35058d33b",
      rank: "normal",
    },
  ],
  P5254: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5254",
        hash: "2ed702537332cfcbd7280db64d5f5ef2850b68c7",
        datavalue: {
          value: "184106",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$35233a3e-4a0d-7bca-16b1-280a43c806ed",
      rank: "normal",
    },
  ],
  P2168: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2168",
        hash: "136f9bb0070cd1e1a809c603ec3d955060f69955",
        datavalue: {
          value: "404958",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$e0c7b540-40d5-e514-8c55-fee743664c97",
      rank: "normal",
    },
  ],
  P7311: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7311",
        hash: "56a407d4a1a466f82333ac8d38a9bb53565cf4c7",
        datavalue: {
          value: "1428",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4DE960BC-2BA5-4544-9904-9AD82C68703D",
      rank: "normal",
      references: [
        {
          hash: "8fc7dafb7cd490eeffc4c5cb8c9aaa9b83838273",
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "03dc639b5a34898ed05fd85b2b102c4077917ba8",
                datavalue: {
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Aozora_Bunko_author_ID&oldid=1014305535",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
  ],
  P4839: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4839",
        hash: "36b00199417a21474b076a224bbda2d986b1b5b7",
        datavalue: {
          value: 'Entity["Person", "AlbertEinstein::6tb7g"]',
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$a8214f92-42e5-7821-64b1-7f6394da21df",
      rank: "normal",
    },
  ],
  P1038: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1038",
        hash: "56b314ba0b0cbd573b5e2c59c3b85e5ae3742acc",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 55594631,
            id: "Q55594631",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P1039: [
          {
            snaktype: "value",
            property: "P1039",
            hash: "6065b041dedf0b905ddbe47e1fa2f287e77ce9ff",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 12051531,
                id: "Q12051531",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P1039"],
      id: "Q937$7ac1a440-4882-073c-f966-036bda6cd821",
      rank: "normal",
      references: [
        {
          hash: "6330245b83c90859233bf604f497a5538edba7db",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "483f0437fb7ead2234143a4336f756401c2d7526",
                datavalue: {
                  value:
                    "http://stolpersteine-fuer-ulm.de/familie/lina-einstein/",
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
        property: "P1038",
        hash: "fcf959c2577a1c1e5c050ff9213d0d0e22a5b919",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 68761,
            id: "Q68761",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P1039: [
          {
            snaktype: "value",
            property: "P1039",
            hash: "6065b041dedf0b905ddbe47e1fa2f287e77ce9ff",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 12051531,
                id: "Q12051531",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P1039"],
      id: "Q937$5d09ed7c-4c6a-5bbb-9106-6653fd49269e",
      rank: "normal",
      references: [
        {
          hash: "9a24f7c0208b05d6be97077d855671d1dfdbc0dd",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "d38375ffe6fe142663ff55cd783aa4df4301d83d",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 48183,
                    id: "Q48183",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P5306: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5306",
        hash: "5ccd91e93aafc058887efea230823eb82ecdd628",
        datavalue: {
          value: "2504",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D22B2137-D8DB-4748-8757-DBB84063F410",
      rank: "normal",
    },
  ],
  P5380: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5380",
        hash: "f630afe9cf64d8a2ff4e9c1656dd3068627a2652",
        datavalue: {
          value: "20001817",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$756c73f0-4bfb-ce8b-cda5-cd74dfb9a947",
      rank: "normal",
    },
  ],
  P5034: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5034",
        hash: "90b879a8c16fce80b490c1df3aaa75e4d72a9b3a",
        datavalue: {
          value: "KAC200103196",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$eda6548c-5e83-498c-b9f7-4498eff87da2",
      rank: "normal",
    },
  ],
  P1559: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1559",
        hash: "56c5e16e325a4ada6ae53042d0c6462ab95a82b0",
        datavalue: {
          value: {
            text: "Albert Einstein",
            language: "de",
          },
          type: "monolingualtext",
        },
        datatype: "monolingualtext",
      },
      type: "statement",
      id: "Q937$8d177df5-4c89-0773-a9da-69d6f20e7073",
      rank: "normal",
      references: [
        {
          hash: "288ab581e7d2d02995a26dfa8b091d96e78457fc",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "6a164248fc96bfa583bbb495cb63ae6401ec203c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 206855,
                    id: "Q206855",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P902: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P902",
        hash: "d95ea7d2d49d9e92167937e14e2afc09118aa888",
        datavalue: {
          value: "028814",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C454C727-7E87-4322-8BCD-3E020B5D0667",
      rank: "normal",
    },
  ],
  P7400: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7400",
        hash: "57371b7d58d1501387f2fe8e3a8ab218ee0a9a49",
        datavalue: {
          value: "einsteinalbert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$d9a7e636-4aa4-7df8-c950-7f2d690878e5",
      rank: "normal",
    },
  ],
  P7671: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7671",
        hash: "23a740d2ea2af40f6b2870ea02b1047eea3a5b0f",
        datavalue: {
          value: "2975999",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$AF617748-484A-4C6B-83C6-A10A8DC04BC3",
      rank: "normal",
      references: [
        {
          hash: "c5ad1d5ee0348cdd37b5628ddc491c2dc196a375",
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "9930ef36c529a38ae55953b54af4811f376f4cc8",
                datavalue: {
                  value:
                    "https://www.wikidata.org/w/index.php?title=Wikidata:Property_proposal/Semion_author_ID&oldid=1069382242",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
  ],
  P5390: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5390",
        hash: "6031f3cb51006ef40285bcc01e60bd2b9c5998a0",
        datavalue: {
          value: "classiques/einstein_albert/einstein_albert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$851FB34C-BD6E-45FF-9777-807977CC9C5A",
      rank: "normal",
    },
  ],
  P7709: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7709",
        hash: "5d51276dbdcc399c018c1cf756ac986b83dac2cc",
        datavalue: {
          value: "712a47ec-8348-4530-88cc-ce7fca822027",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$c3e5ab2f-4ecc-3001-a085-8834ffc35ae2",
      rank: "normal",
    },
  ],
  P7775: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7775",
        hash: "974e10a6ba36454a6005e065be5a814139dce043",
        datavalue: {
          value: "Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$79CE2C54-3B8E-44F9-9D35-793AD704A580",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P7775",
        hash: "474532edc0a9120ad58764b7fee10e8d61a4ed4e",
        datavalue: {
          value: "Albert Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$76A198B2-2957-4E39-9A2C-7EF0CD95CFA9",
      rank: "normal",
    },
  ],
  P7902: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7902",
        hash: "fe035e29e30ab3d0838fbaae13ad7ef3801803c4",
        datavalue: {
          value: "118529579",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7C2DF352-91AA-47A6-B24A-C6F88176CB38",
      rank: "normal",
    },
  ],
  P4104: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4104",
        hash: "ccbe521e40965523ddceb10662e7181e5e601265",
        datavalue: {
          value: "58992",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$27a6fb2f-44d7-fc7e-bfb1-7eb14d7be835",
      rank: "normal",
    },
  ],
  P7993: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7993",
        hash: "b9ec6e2ede04236c36c72b85f300ab87256e7875",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "b7113c27605f676881767266b2473b36853c2a14",
            datavalue: {
              value: "Einstein, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P577: [
          {
            snaktype: "value",
            property: "P577",
            hash: "0a7a83a4bf3aeb8d136cc85ef3c23538c4654940",
            datavalue: {
              value: {
                time: "+2009-01-01T00:00:00Z",
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
      "qualifiers-order": ["P1810", "P577"],
      id: "Q937$807FED95-54CF-4FBF-811F-B60B01D966E4",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P7993",
        hash: "eb7274d0253f50e226a219999ca5ab86b51b4fae",
        datavalue: {
          value: "albert-einstein_res-fdb8f22c-a041-11e1-9b2f-d5ce3506d72e",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "b7113c27605f676881767266b2473b36853c2a14",
            datavalue: {
              value: "Einstein, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P577: [
          {
            snaktype: "value",
            property: "P577",
            hash: "0a7a83a4bf3aeb8d136cc85ef3c23538c4654940",
            datavalue: {
              value: {
                time: "+2009-01-01T00:00:00Z",
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
      "qualifiers-order": ["P1810", "P577"],
      id: "Q937$4DB4315A-E220-4044-9F00-AE157D8D51C2",
      rank: "normal",
    },
  ],
  P8024: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8024",
        hash: "5b14e2bfb63c5d3fd6dc25c64998e42e0d2109e4",
        datavalue: {
          value: "26",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$CBA2C6AB-2E4E-4BB2-BA5C-5FD1CB449C8E",
      rank: "normal",
    },
  ],
  P6900: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6900",
        hash: "0adccb584841bcb1512ecd97adcb57542b92704f",
        datavalue: {
          value: "アルバート・アインシュタイン",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$0baaed97-4638-a17a-7ed1-bddc70cc344a",
      rank: "normal",
    },
  ],
  P3365: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3365",
        hash: "482958ad12d4a2405e453cade48c1956113dfcde",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "b7113c27605f676881767266b2473b36853c2a14",
            datavalue: {
              value: "Einstein, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$28cfab3f-44ba-be5e-f459-97557c198e25",
      rank: "normal",
      references: [
        {
          hash: "f8a8ba34c0460203a6d7a13721f7bc6ff7ab1e7f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "d1e923075a89220a981d8c2511065b97bcf4dc5c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 77541206,
                    id: "Q77541206",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P7796: [
              {
                snaktype: "value",
                property: "P7796",
                hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
                datavalue: {
                  value: "3852",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "a2c482c4381b8ce33ae32b3998e8ec614fedebb7",
                datavalue: {
                  value: {
                    time: "+2021-02-13T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P7796", "P813"],
        },
      ],
    },
  ],
  P4223: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4223",
        hash: "3087f198cca7156944f113e011cf95f9a6e54fbe",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "3c5dc272682782ad540e326f9bdbb3a35cb6ba08",
            datavalue: {
              value: "EINSTEIN, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P2093: [
          {
            snaktype: "value",
            property: "P2093",
            hash: "d876a7d0771a4ad44bca7d588c85ba8d2648e2c3",
            datavalue: {
              value: "Roberto Marcolongo",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P577: [
          {
            snaktype: "value",
            property: "P577",
            hash: "bc61f6f80f347571e76e6427a376da17ad63826d",
            datavalue: {
              value: {
                time: "+1932-01-01T00:00:00Z",
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
      "qualifiers-order": ["P1810", "P2093", "P577"],
      id: "Q937$600820ce-42de-be10-1b3e-3fc4787624b4",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P4223",
        hash: "fb841a9b090b1441ecc72d6db15da296b9c412f8",
        datavalue: {
          value: "albert-einstein_res-b649b13f-87e7-11dc-8e9d-0016357eee51",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "3c5dc272682782ad540e326f9bdbb3a35cb6ba08",
            datavalue: {
              value: "EINSTEIN, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P577: [
          {
            snaktype: "value",
            property: "P577",
            hash: "563fe4865e753138af7f89835433469c8ded3527",
            datavalue: {
              value: {
                time: "+1961-01-01T00:00:00Z",
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
        P478: [
          {
            snaktype: "value",
            property: "P478",
            hash: "c988809310b2a1a84afc33487c565718b21896e4",
            datavalue: {
              value: "III Appendice",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P577", "P478"],
      id: "Q937$4c06f85d-4ff4-41cf-e406-4c6455b7095d",
      rank: "normal",
    },
  ],
  P7865: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7865",
        hash: "ddb34f52f30f571b348a0a639dc1fee514fef1e5",
        datavalue: {
          value: "95a5yja38danygu695b5yc1k6mw3acr",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E2076805-F94F-463F-8623-E71BE6E7502F",
      rank: "normal",
      references: [
        {
          hash: "619dbd1199b3345b56574a5e0eccaacd898a7803",
          snaks: {
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "6429dbff10b1feee9fe7d73887228e06d5f8d0fb",
                datavalue: {
                  value: {
                    time: "+2020-04-09T00:00:00Z",
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
          },
          "snaks-order": ["P813"],
        },
      ],
    },
  ],
  P4666: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4666",
        hash: "fb623dcccffab219c8bbc48a2a4dc9669b6407cf",
        datavalue: {
          value: "441757",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7595FB9E-2B77-4533-BFAD-63F127634CD5",
      rank: "normal",
    },
  ],
  P3280: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3280",
        hash: "f0aa007b00f2d08f745f850ed941103a8a5bf88f",
        datavalue: {
          value: "0000007639",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$86E32CD2-D9CF-404E-AAC7-955AB7E6AA48",
      rank: "normal",
    },
  ],
  P3846: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3846",
        hash: "d8af7db8391972df75ed60624b1e9e42d8abe5b8",
        datavalue: {
          value: "87097968275423",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$B773B3CA-FAA6-49E5-8162-6BBBC54F9A05",
      rank: "normal",
    },
  ],
  P7369: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7369",
        hash: "f520b9f1d9b4b5f4fb9c9c69a3bc28b1ff428586",
        datavalue: {
          value: "000007200",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$B25E67BE-D08C-42FF-AAE5-5D94B4EC6DD8",
      rank: "normal",
    },
  ],
  P6394: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6394",
        hash: "d81bb4f3e5ff62434857f2498a81926a5417eefe",
        datavalue: {
          value: "a11159522",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1AED4BED-B64B-4670-AF23-7923C649B862",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P6394",
        hash: "bd410875112dd33cb82d22dc92b19c21824151c1",
        datavalue: {
          value: "a11206068",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6BEF8D2E-B88F-4547-9413-73EAE793AD33",
      rank: "normal",
    },
  ],
  P4619: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4619",
        hash: "84b9236555b4ca4917ecae69556dc95b6a7c28df",
        datavalue: {
          value: "000584933",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$472291AE-DA08-41EE-88E0-CC49B41F42BF",
      rank: "normal",
    },
  ],
  P8179: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8179",
        hash: "56ca7d8c375a077e7d82905302b9c0700cf5fcad",
        datavalue: {
          value: "ncf10161360",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$EB363600-D012-45D0-85FC-4E5B1459776B",
      rank: "normal",
    },
  ],
  P3065: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3065",
        hash: "cfc0ea255573802c17b9ca140cd637c3fd555f16",
        datavalue: {
          value: "02-A003212458",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D84B5B5C-0504-48F4-A231-D41149A1EC72",
      rank: "normal",
    },
  ],
  P7293: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7293",
        hash: "6fb8755db3a0b7169adfec88adf6cfbaec388e52",
        datavalue: {
          value: "9810646540205606",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$B8F74728-F158-4092-9C57-B4EC0723C7DF",
      rank: "normal",
    },
  ],
  P8189: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8189",
        hash: "6857ea14bbb55f55d44c1d469cf93777ab55bf9d",
        datavalue: {
          value: "987007260607605171",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$744D8D46-1EB3-4787-BC7F-D942DD29C082",
      rank: "normal",
    },
  ],
  P1670: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1670",
        hash: "636e539fe3d088bdce9e89a2cbec38cb93ec0699",
        datavalue: {
          value: "0053C3375",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1fbbf23d-412e-528a-fb55-400e25b1cddc",
      rank: "normal",
    },
  ],
  P1695: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1695",
        hash: "dd1f73f936509a15e6ad5a4b394c54338f5c36f0",
        datavalue: {
          value: "a0000001178767",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$df7a80c8-4e99-96c2-c3d1-ccda76c0c23e",
      rank: "normal",
    },
  ],
  P1890: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1890",
        hash: "d2a1e9fe86927bfcc8a97b4bee2d21617d81da6c",
        datavalue: {
          value: "000034649",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$c6da5575-4272-9d9e-8f71-38f641be7e38",
      rank: "normal",
    },
  ],
  P1424: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1424",
        hash: "2c67d9460db3fbf35e484726477bdb43f050e2af",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 8092556,
            id: "Q8092556",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$1f07106e-4edd-0321-48f6-872bde3b4445",
      rank: "normal",
    },
  ],
  P1309: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1309",
        hash: "bf237208378f1d5710621538a3843b33dac4208c",
        datavalue: {
          value: "vtls000837931",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$867FFAEA-6AEE-4D34-AC06-41DD78A795FC",
      rank: "normal",
      references: [
        {
          hash: "63309730314f4c20bf6b1008fe8ffd2b155272b3",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "6b7d4330c4aac4caec4ede9de0311ce273f88ecd",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 54919,
                    id: "Q54919",
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
  P6683: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6683",
        hash: "61959579cfc672a07da8ce36de19a044975a6973",
        datavalue: {
          value: "120272",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3CDAA0C0-229C-4F61-95E1-AE43E909D5BD",
      rank: "normal",
    },
  ],
  P8234: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8234",
        hash: "6adb1c27423ba5f35b2784f234794008b77bebf6",
        datavalue: {
          value: "28026",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$8724DB70-40E5-41D2-8261-CCDE0BB14936",
      rank: "normal",
    },
  ],
  P7699: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7699",
        hash: "8137d392c6529485dcb079c683a3fd8afdeb0ad7",
        datavalue: {
          value: "LNB:V*13679;=BM",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$DAB3B3EB-AC81-4A6F-BC18-8B1D8C1B4F12",
      rank: "normal",
    },
  ],
  P6262: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6262",
        hash: "5cc676ac037169064b677fa221221c0c8cee351c",
        datavalue: {
          value: "cardguide:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "38f1530d2785e41affc551297fcbc942306fce4e",
            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "daf1c4fcb58181b02dff9cc89deb084004ddae4b",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1860,
                id: "Q1860",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P9675: [
          {
            snaktype: "value",
            property: "P9675",
            hash: "13450ebc11af9843a85fd8868058f5dc454dadcd",
            datavalue: {
              value: "5995",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P407", "P9675"],
      id: "Q937$DAAE4BB5-B2E0-4C1F-8FCE-F606D694B4DB",
      rank: "normal",
      references: [
        {
          hash: "a1026f90ae87a7eae9de099eecdff52a4bcedc4e",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "081bf8d1899267385eb7722e655bf06f4560dea6",
                datavalue: {
                  value: "https://cardguide.fandom.com/wiki/Albert_Einstein",
                  type: "string",
                },
                datatype: "url",
              },
            ],
            P1476: [
              {
                snaktype: "value",
                property: "P1476",
                hash: "d8ec0e48c45bc116eb37e9c1b3aebeac32466466",
                datavalue: {
                  value: {
                    text: "Albert Einstein | CardGuide Wiki | Fandom",
                    language: "en",
                  },
                  type: "monolingualtext",
                },
                datatype: "monolingualtext",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "8107daf06a4066c83dc0db1fc6d3034d1774f97a",
                datavalue: {
                  value: {
                    time: "+2020-06-08T00:00:00Z",
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
          },
          "snaks-order": ["P854", "P1476", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P6262",
        hash: "acc85ec79b466c2fd604e276d64f2335bfdc808e",
        datavalue: {
          value: "disney:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "38f1530d2785e41affc551297fcbc942306fce4e",
            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "daf1c4fcb58181b02dff9cc89deb084004ddae4b",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1860,
                id: "Q1860",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
        P9675: [
          {
            snaktype: "value",
            property: "P9675",
            hash: "52d7c704b2de3c736ac8baaa246cb62a413e4d0a",
            datavalue: {
              value: "114971",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810", "P407", "P9675"],
      id: "Q937$E80756D8-02BF-44D3-B525-7AD30A3F5513",
      rank: "normal",
    },
  ],
  P5504: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5504",
        hash: "ff3b919bd358c415c7b83c70d726e1eb78d4f8a9",
        datavalue: {
          value: "people/41024053",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$f430141c-4f89-75fb-766a-b573b010f483",
      rank: "normal",
      references: [
        {
          hash: "3aeb5b23e883e689d5a69105180f1be8eb2b73d1",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "6b7d4330c4aac4caec4ede9de0311ce273f88ecd",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 54919,
                    id: "Q54919",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P214: [
              {
                snaktype: "value",
                property: "P214",
                hash: "050765c998be3e14185037fb199a17ab35aebb75",
                datavalue: {
                  value: "75121530",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "e8d57e647c5bed000c86c300ee914ccd5d948b3f",
                datavalue: {
                  value: {
                    time: "+2020-06-26T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P214", "P813"],
        },
      ],
    },
  ],
  P39: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P39",
        hash: "1111ed198e5e91342be008b0ca08f3d5d5f559fd",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 121594,
            id: "Q121594",
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
            hash: "ae15219554c2915cd95acae7422d3a6bcc510e2f",
            datavalue: {
              value: {
                time: "+1911-00-00T00:00:00Z",
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
      "qualifiers-order": ["P580"],
      id: "Q937$ba274185-377e-4c3d-8bb3-a2d513791797",
      rank: "normal",
      references: [
        {
          hash: "f20be15903adba954c926bb718dd1324ecea88ce",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "dd56ad2862a901ee6f44e0266bde6d18056b7d0d",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 181163,
                    id: "Q181163",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P143"],
        },
      ],
    },
  ],
  P8408: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8408",
        hash: "093d37ec7ef75aa7690c8a601569bc26c19bbcd0",
        datavalue: {
          value: "AlbertEinstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4ADDBC48-37FC-442E-AABC-DD9B8FDE7AA4",
      rank: "normal",
      references: [
        {
          hash: "9a681f9dd95c90224547c404e11295f4f7dcf54e",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "9d5780dddffa8746637a9929a936ab6b0f601e24",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 64139102,
                    id: "Q64139102",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "622a5a27fa5b25e7e7984974e9db494cf8460990",
                datavalue: {
                  value: {
                    time: "+2020-07-09T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
      ],
    },
  ],
  P8034: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8034",
        hash: "19ae2b580ec3fc4fa21cbda477a270d23946e836",
        datavalue: {
          value: "495/91752",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$FF54D31D-3687-48FF-91B9-06CEC42B492E",
      rank: "normal",
      references: [
        {
          hash: "18f551f06aab3dbd7fcd750e9214785f044536a3",
          snaks: {
            P214: [
              {
                snaktype: "value",
                property: "P214",
                hash: "050765c998be3e14185037fb199a17ab35aebb75",
                datavalue: {
                  value: "75121530",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "6b7d4330c4aac4caec4ede9de0311ce273f88ecd",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 54919,
                    id: "Q54919",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "7a831359297f79929234eb1417fbb59cb7622f07",
                datavalue: {
                  value: {
                    time: "+2020-07-16T00:00:00Z",
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
          },
          "snaks-order": ["P214", "P248", "P813"],
        },
      ],
    },
  ],
  P2013: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2013",
        hash: "3794e17c35e2dbb2afe2fb9763546f8713977cae",
        datavalue: {
          value: "AlbertEinstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "daf1c4fcb58181b02dff9cc89deb084004ddae4b",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 1860,
                id: "Q1860",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$3D398342-180C-4F67-9FF9-D49C5BE452FC",
      rank: "normal",
      references: [
        {
          hash: "c2756e0344499ab884942d23751159e7f245de17",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "2ce37078fb0b73b39acff0a04fa4f988d1762233",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 200180,
                    id: "Q200180",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "2cf7b1aed53b3f65b706c6ff099178ef00764af0",
                datavalue: {
                  value:
                    "https://vi.wikipedia.org/w/index.php?title=Albert_Einstein&oldid=63192473",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
    },
  ],
  P8496: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8496",
        hash: "987f2bdf1921b4fb0a463f44c678bbec436e1dfd",
        datavalue: {
          value: "einstein-albert-1879-1955-physicist",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6719B0DA-9474-4C3E-8E27-0C8DE8C24505",
      rank: "normal",
    },
  ],
  P4215: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4215",
        hash: "8dc71a7f54c4f3d702f65e051b04d0ea0bb0d340",
        datavalue: {
          value: "Albert Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$F37C4D5A-9664-411D-A9E5-2F6B90793598",
      rank: "normal",
    },
  ],
  P6821: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6821",
        hash: "609f9e36070e03fbe4a22e6a862cfcf13f18826c",
        datavalue: {
          value: "alvin-person:12189",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7FC9D5FB-D866-4E63-B15C-F97BC2DD1F77",
      rank: "normal",
    },
  ],
  P7700: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7700",
        hash: "2c53b2c552f286ba12a694e2fe62d865f597d0c0",
        datavalue: {
          value: "vtls005532100",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$37febba9-4c6c-4e10-6d43-eddc57689409",
      rank: "normal",
    },
  ],
  P5063: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5063",
        hash: "c4b8df3dfe1a74a12cb298e0b77260f700985165",
        datavalue: {
          value: "i95022",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7DD29328-1548-4831-9A94-149D499248E2",
      rank: "normal",
    },
  ],
  P8094: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8094",
        hash: "dfaa2bd01bfe91b9325baf1b1d9daa3c86c13391",
        datavalue: {
          value: "einsteina",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$44BE11AF-DB85-4252-8144-5C66C514ABFC",
      rank: "normal",
    },
  ],
  P7929: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7929",
        hash: "e53da7881e453ce21af6dcc9e912c734f20e4b57",
        datavalue: {
          value: "p=albert;n=einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$B7D44895-C4F7-491B-B4F5-E3BBD7C82E34",
      rank: "normal",
    },
  ],
  P4613: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4613",
        hash: "33230bada849362a2c84041eb7af0e2eac529351",
        datavalue: {
          value: "42829",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$BF45D317-C93D-4563-9F34-1C6E56F8E4AF",
      rank: "normal",
    },
  ],
  P8750: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8750",
        hash: "f12c98a61bf062c1e7ccc6b57ebbd060f6e41feb",
        datavalue: {
          value: "45533",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5900A0C2-F977-47C8-A5DB-5DBB2E6B850D",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P8750",
        hash: "b46dda5bba6830f0626e63cc616cbd75d93ea008",
        datavalue: {
          value: "88532",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C8CA01AC-AA39-4EB8-9A3A-D8B9E485442F",
      rank: "normal",
    },
  ],
  P8795: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8795",
        hash: "66555f9bef74a3ed6ef0acbe2d925423a2c8ac94",
        datavalue: {
          value: "26519",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D5BBC800-DEEB-4D16-ADBB-DB2DB55D261D",
      rank: "normal",
    },
  ],
  P8854: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8854",
        hash: "69320234d99ff7bc1236cb44c6bca047fac9c811",
        datavalue: {
          value: "18467",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$8F0C16BA-D304-497D-8480-B80F40830074",
      rank: "normal",
    },
  ],
  P8849: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8849",
        hash: "b8a8fdbb257925c9d03bce80e45bbf836c871d20",
        datavalue: {
          value: "6024037",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$43D6E755-BFFE-4608-AFE1-FD5C41632FF9",
      rank: "normal",
    },
  ],
  P8851: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8851",
        hash: "b726f69428c560ce2c3a7647e6b9f9d680ef1fe6",
        datavalue: {
          value: "487527",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$06F18BE5-F960-4584-B061-ED1A6237ED59",
      rank: "normal",
    },
  ],
  P8899: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8899",
        hash: "7fca8a67a00b3c68b7b4c070255f159ebb8c26c8",
        datavalue: {
          value: "Einstein,-Albert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7D4F29B8-F7B0-45C3-9D5F-510917BEAD33",
      rank: "normal",
    },
  ],
  P8349: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8349",
        hash: "e9d0b2cab2507ca3a22291651969f9c000923d27",
        datavalue: {
          value: "56686",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$ED67FC70-DDC8-44A0-B3DE-D7A473CE2DA3",
      rank: "normal",
    },
  ],
  P8914: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8914",
        hash: "11bef516bb86385c00d8156e7e4c68904777a839",
        datavalue: {
          value: "19535",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$BEE69EBB-3194-474D-B051-A8889BA3ABDC",
      rank: "normal",
    },
  ],
  P8947: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8947",
        hash: "59d9df29835f9e4558597953b8d4f2f2c6a86c41",
        datavalue: {
          value: "189487",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D628BCCB-E1D9-4F9C-9167-0AF176BF865A",
      rank: "normal",
    },
  ],
  P8852: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8852",
        hash: "701673f8197b94648dbb1a1acf94b433b17b86ff",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 7963760,
            id: "Q7963760",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$EBD005CA-FDCB-4CEF-97BB-A27D8EBFA8DE",
      rank: "normal",
      references: [
        {
          hash: "5da700e91d4a1ae5cb945f2ef35431e887b7f204",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "9123b0de1cc9c3954366ba797d598e4e1ea4146f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 10000,
                    id: "Q10000",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "05666d1ced904a076bc17ad13c0ef94028e75cff",
                datavalue: {
                  value:
                    "https://nl.wikipedia.org/w/index.php?title=Walrussnor&oldid=57409503",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
    },
  ],
  P6706: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6706",
        hash: "bf5dde2764d85d270076e368c3974ca9fc88f90a",
        datavalue: {
          value: "Einstein,+Albert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "b7113c27605f676881767266b2473b36853c2a14",
            datavalue: {
              value: "Einstein, Albert",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$F97A8BAA-FE33-4057-B29A-FC18EC625202",
      rank: "normal",
    },
  ],
  P9037: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9037",
        hash: "c5ff9482facdac6463beb2253b53f116dc819384",
        datavalue: {
          value: "a2e7439f-8156-46d8-b580-28659c42d6aa",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$44883DD8-9DF1-41A8-9953-E3E33DFC0196",
      rank: "normal",
      references: [
        {
          hash: "e024b9d31010f5491bfa5c2e1a0f6f34fc8e6a41",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "36652acb3b591d852e55294ce860131f9cd71787",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 63411600,
                    id: "Q63411600",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P9037: [
              {
                snaktype: "value",
                property: "P9037",
                hash: "c5ff9482facdac6463beb2253b53f116dc819384",
                datavalue: {
                  value: "a2e7439f-8156-46d8-b580-28659c42d6aa",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P691: [
              {
                snaktype: "value",
                property: "P691",
                hash: "4bd47192f5767ac051523bdb876ed08138953b30",
                datavalue: {
                  value: "jn19990002019",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "d99ce66406ac00ee48c86201063135f62c6be7c4",
                datavalue: {
                  value: {
                    time: "+2020-12-22T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P9037", "P691", "P813"],
        },
      ],
    },
  ],
  P1438: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1438",
        hash: "c34bf7e9b8c28febbe870c17c529ed7ff0dd8361",
        datavalue: {
          value: "15027",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$e12b279c-460f-ebd6-4f89-11b95064a9f6",
      rank: "normal",
    },
  ],
  P3388: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3388",
        hash: "a70f8b81477ba8d486e8f1664e42d5a89686ae76",
        datavalue: {
          value: "47850",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$819DC0C6-0222-4C1F-8E3F-425182A2C1A1",
      rank: "normal",
    },
  ],
  P7842: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7842",
        hash: "7a7d904bb43dbd100cc34317faf0796a9fa76a01",
        datavalue: {
          value: "11782",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "38f1530d2785e41affc551297fcbc942306fce4e",
            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$7E70202A-FB93-4DA1-BB9A-6124C6C0518A",
      rank: "normal",
      references: [
        {
          hash: "e87213bae7a4a4421a3898cc70b7608867cbab9b",
          snaks: {
            P5508: [
              {
                snaktype: "value",
                property: "P5508",
                hash: "6e0e9da5be7fd2714a73a6d66e78d37ba6b07895",
                datavalue: {
                  value: "56488",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "c619cc6e0e5fe3733a8c4a47939343e5970e0e9d",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 265049,
                    id: "Q265049",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "2130a7deeaac1c7ca0ab78022ee9db50c927154c",
                datavalue: {
                  value: {
                    time: "+2024-01-25T00:00:00Z",
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
          },
          "snaks-order": ["P5508", "P248", "P813"],
        },
      ],
    },
  ],
  P8814: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8814",
        hash: "f59ad527e067d626f55e44f0444f5941b6e83833",
        datavalue: {
          value: "10974490-n",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C0FF6744-2083-47DA-93FC-A7B5B69613F7",
      rank: "normal",
    },
  ],
  P7796: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7796",
        hash: "5fefdf51c39eaca5df049f427664bc8332e7a18e",
        datavalue: {
          value: "3852",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$CEEF7B2A-E90F-4C31-B87E-365E0021B27B",
      rank: "normal",
    },
  ],
  P9160: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9160",
        hash: "96e2fe45889ef7d063dc87a0d84c6731f553baa7",
        datavalue: {
          value: "46208",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$2C959AF8-FC1C-46FE-A6F2-8CF1D5AA6E20",
      rank: "normal",
    },
  ],
  P8885: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8885",
        hash: "d2682aedf43e503e8d4b14931bd5810534265410",
        datavalue: {
          value: "알베르트 아인슈타인",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4d7c1fcb-428f-fb92-6f70-23de7ef59d40",
      rank: "normal",
    },
  ],
  P9178: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9178",
        hash: "cde947fe697e497e5b2412296072c32b640658c1",
        datavalue: {
          value: "5803",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D89DB3CD-A83B-4C20-BB2F-1E891841A971",
      rank: "normal",
    },
  ],
  P9251: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9251",
        hash: "aa21e55a65d119d11d308ba18c7b1bf1e23e9bb7",
        datavalue: {
          value: "87094",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$027005A2-93BD-48B8-98AA-674379E67FA2",
      rank: "normal",
    },
  ],
  P8902: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8902",
        hash: "d308af1a8639341caa4ea9bdd3331c78a35a0a51",
        datavalue: {
          value: "people/75109",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$85AB27FC-A542-4376-9A76-A9D89EDA5F0F",
      rank: "normal",
    },
  ],
  P9287: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9287",
        hash: "abda4ed85d222172a37a9a25da5bd827d224c1dc",
        datavalue: {
          value: "3914",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1BF6177F-17B3-422A-B720-7F99872D8CB1",
      rank: "normal",
    },
  ],
  P9044: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9044",
        hash: "1980624888f23a7e4d6fac75dd95f649a47c68af",
        datavalue: {
          value: "5140127",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$07DC86C5-CA50-4990-AE48-2C08BE1636E8",
      rank: "normal",
    },
  ],
  P9141: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9141",
        hash: "13bdf6c37b9cc040f6044ac55ecf3ef65b16fa19",
        datavalue: {
          value: "1986",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$15BC47E0-1963-4626-AD51-79324310FE6D",
      rank: "normal",
    },
  ],
  P5617: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5617",
        hash: "bca6024d0b32f97435a7c52fd521508b1a9ac270",
        datavalue: {
          value: "albert-einstein-307",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$F13F3BDB-5A77-4459-87C6-744846159E8B",
      rank: "normal",
    },
  ],
  P7666: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7666",
        hash: "2fca627ab06764e1614f760cb9d0baa7be24cde4",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$445E4546-99B3-457B-835C-C0CF7C9B7D4C",
      rank: "normal",
    },
  ],
  P9482: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9482",
        hash: "98b5fb64745b5286b5a745923f1ed0eee1e83db1",
        datavalue: {
          value: "einstein-albert",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$90F90B63-EB05-467E-B9E3-CC68887BAFCF",
      rank: "normal",
    },
  ],
  P9352: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9352",
        hash: "c5a6e739352fab9ddb1775a197b1d533a122f6a7",
        datavalue: {
          value: "239143",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7FFC1FF7-BA07-4831-B89A-D10244262623",
      rank: "normal",
    },
  ],
  P9522: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9522",
        hash: "2138848b1f3793aaa544a5d7ff65937baccd6f7b",
        datavalue: {
          value: "4619",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5995B68F-510F-49B8-B4EB-3E9A63405967",
      rank: "normal",
    },
  ],
  P9171: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9171",
        hash: "716684e3fb032c22f04261e520f0f505844eee11",
        datavalue: {
          value: "107626",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$4f8d35a4-4e99-caff-1f72-e1dfc1b494df",
      rank: "normal",
      references: [
        {
          hash: "c2bff4159efaa1f5629b7572113e14ccae3027fa",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "6b7d4330c4aac4caec4ede9de0311ce273f88ecd",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 54919,
                    id: "Q54919",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P214: [
              {
                snaktype: "value",
                property: "P214",
                hash: "050765c998be3e14185037fb199a17ab35aebb75",
                datavalue: {
                  value: "75121530",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "954248259f8a319ea90a127e4d84868cc2c37760",
                datavalue: {
                  value: {
                    time: "+2021-05-23T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P214", "P813"],
        },
      ],
    },
  ],
  P9626: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9626",
        hash: "2ddd715bb4cebf27d56af8995653f7123c5e3763",
        datavalue: {
          value: "404",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$779C4E13-058F-4F52-B25D-CECABBB395B0",
      rank: "normal",
    },
  ],
  P8313: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8313",
        hash: "9b8759a9b0043a846827eb74aa3a981542860246",
        datavalue: {
          value: "Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "38f1530d2785e41affc551297fcbc942306fce4e",
            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$EEBCB244-81E2-47B8-B35B-EE350F16061D",
      rank: "normal",
    },
  ],
  P2477: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2477",
        hash: "c24fcf8de091a481014d57e556a8f3bfabb59f8e",
        datavalue: {
          value: "P1KG24319",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$89cf7fdc-4d5c-d628-1f13-a327af57d40d",
      rank: "normal",
    },
  ],
  P947: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P947",
        hash: "07668903e611a171e0661babc1cd545304977d54",
        datavalue: {
          value: "000021094",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$54f115b8-4e47-d4a5-091c-b9c5bea91faa",
      rank: "normal",
    },
  ],
  P5361: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P5361",
        hash: "b0b53f3bfe5b0c93296db430bf0713f03272ce6c",
        datavalue: {
          value: "EinsteinAlbert1879-1955",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9316e0f8-4a2b-c1a8-aa39-503ef3dba99b",
      rank: "normal",
    },
  ],
  P7305: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7305",
        hash: "ebdb5ec0e5d0df4c9c31899e7629d50f463f667e",
        datavalue: {
          value: "3896872",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$27C79EBC-F9B1-491A-8B2B-EB270163DF44",
      rank: "normal",
    },
  ],
  P7512: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7512",
        hash: "e05f57db8a9dcf72f080c8c1a1c34b5105298f4c",
        datavalue: {
          value: "database_article/einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$133000B6-81B0-47B4-9B36-9D3D14B8D0B1",
      rank: "normal",
    },
  ],
  P9807: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9807",
        hash: "9d7138c61fcf3189dff46297d1a65ee335e68a3a",
        datavalue: {
          value: "163490",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$12C12F18-54B7-4B96-B7D8-A913A58B05DF",
      rank: "normal",
    },
  ],
  P8168: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8168",
        hash: "c1cce6296d0f437695064ab232c8d84a352f99c3",
        datavalue: {
          value: "Q224273",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C8FAB0D9-5988-4263-90D5-46A47F723E81",
      rank: "normal",
    },
  ],
  P9918: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9918",
        hash: "702870ad44a00000b213cfc17519bb697c24ed0a",
        datavalue: {
          value: "PE00004870",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$EE3FCBD6-275F-4B2E-8BF2-4D251CB5051C",
      rank: "normal",
    },
  ],
  P9984: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9984",
        hash: "629f749501dc6b6ef22df5f9e68a7784e205f9d7",
        datavalue: {
          value: "981058511756306706",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$25DA9494-3E3C-4F53-BC1B-E0821F2AC05A",
      rank: "normal",
    },
  ],
  P10069: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10069",
        hash: "a69f5137b125865237195cea309b3b49b6220bb3",
        datavalue: {
          value: "49324",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$614F5C33-8249-436B-ADCC-4CCA5D1F1445",
      rank: "normal",
    },
  ],
  P10242: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10242",
        hash: "dd2ce7376ab6926bdd1c647824eb395757b349ce",
        datavalue: {
          value: "01682/eu_e_0736/e0736",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1932: [
          {
            snaktype: "value",
            property: "P1932",
            hash: "09919a5f7fd686cef11ca9e9afa9ba495572f26b",
            datavalue: {
              value: "Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1932"],
      id: "Q937$B1341B66-13D3-43A4-8D3A-AEFB93F49981",
      rank: "normal",
    },
  ],
  P7982: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7982",
        hash: "c7a7df3b57eacf0dafec1094d008cdc3bac7b246",
        datavalue: {
          value: "17257",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$39387E5B-4A4D-4B38-A1DD-7C1B3A9978A9",
      rank: "normal",
    },
  ],
  P9863: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9863",
        hash: "9fa32f2856946431b2e86223ec82df7b81a2ebc9",
        datavalue: {
          value: "આઇન્સ્ટાઇન-આલ્બર્ટ",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$88f3c591-4a71-ea2d-277f-b4177b6f6fd4",
      rank: "normal",
    },
  ],
  P10297: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10297",
        hash: "398119e5fbde385a23cb8eddc3c85b00e78444f0",
        datavalue: {
          value: "m0jcx",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7c5a2eff-4378-d934-f4d4-b7fce1a75171",
      rank: "normal",
    },
  ],
  P6698: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6698",
        hash: "dfaa46956595554aa5559c994047ba1273b903f4",
        datavalue: {
          value: "アルベルト・アインシュタイン",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$A645911A-A6C1-4B36-87C4-75F14FBCD9C9",
      rank: "normal",
    },
  ],
  P9247: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9247",
        hash: "54391484a86c5e516d674eb912ca1a0f332e4e14",
        datavalue: {
          value: "8399",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$A48AE670-0012-4524-828C-35B7B9916FF7",
      rank: "normal",
    },
  ],
  P10227: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10227",
        hash: "f7c11348e44953487fb1d5134c8e577fe12ba800",
        datavalue: {
          value: "vtls000086385",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "q937$901ac528-4e29-9c58-156a-6b792417f2dd",
      rank: "normal",
      references: [
        {
          hash: "22a2d0d31d0d61794a40db7fbd3818c31069252e",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "6b7d4330c4aac4caec4ede9de0311ce273f88ecd",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 54919,
                    id: "Q54919",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P214: [
              {
                snaktype: "value",
                property: "P214",
                hash: "050765c998be3e14185037fb199a17ab35aebb75",
                datavalue: {
                  value: "75121530",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "c674985f2ad97dc8b13c28613976cd6ee782c067",
                datavalue: {
                  value: {
                    time: "+2022-03-05T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P214", "P813"],
        },
      ],
    },
  ],
  P701: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P701",
        hash: "f1b1095caf99cb053ee2ef5b3a4778bd2384c4ce",
        datavalue: {
          value: "P20204",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$118400BE-4662-4F54-B90E-909A41749C54",
      rank: "normal",
    },
  ],
  P8238: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8238",
        hash: "acbb5e4b792f43a58f60caa1e1bb06a2396eef60",
        datavalue: {
          value: "7901",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E2EF0D5A-559E-4BC3-AA7E-AF3568CF3793",
      rank: "normal",
    },
  ],
  P10553: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10553",
        hash: "9f563e1f7dfce849947e29bfa8137d6c196b7c90",
        datavalue: {
          value: "142045950",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$DC5C0034-8B57-4289-AE2C-C5D9B0190B95",
      rank: "normal",
    },
  ],
  P10757: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10757",
        hash: "7c07845822515aa6532486dc11eff6ef78017976",
        datavalue: {
          value: "395",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$65b22a89-4cce-1421-62e5-389b629dbf26",
      rank: "normal",
    },
  ],
  P10565: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10565",
        hash: "aca262b23cb303325594c4333e30eacfc2006844",
        datavalue: {
          value: "123649",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "5a09438c01189c363478c814b803265a1a729fbf",
            datavalue: {
              value: "爱因斯坦，A.",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$7dc4b696-4246-5d4d-a056-e269be655515",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P10565",
        hash: "ed5eabd7cb0a32692cf6e9c7bde96432d4113120",
        datavalue: {
          value: "520858",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9456DEBA-00A4-4F2A-89C4-735AA8277A1F",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P10565",
        hash: "caab5493aadeb1db662f53022a2c6c90ccad0357",
        datavalue: {
          value: "633756",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D9095A5E-8027-46D7-8047-C6E01B683531",
      rank: "normal",
    },
  ],
  P9594: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9594",
        hash: "a82fb1657a80847250ce5f38358c1ac22abe00a0",
        datavalue: {
          value: "6437",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$08FF31BD-5BA4-4E65-8CAE-C3C1FCAF4A9C",
      rank: "normal",
    },
  ],
  P8980: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8980",
        hash: "b536e38300c70672917f0412d89546ae1faceced",
        datavalue: {
          value: "000215897",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$03715100-4655-6c49-741b-ac89961d809a",
      rank: "normal",
    },
  ],
  P10299: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10299",
        hash: "16e2ce8beda6faa63dec7603211455f930f4458f",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5715b495-4bfa-27ac-08f8-9f78ebd90082",
      rank: "normal",
    },
  ],
  P3390: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3390",
        hash: "b7467fa8a0a4479be585955a3e100e3497976168",
        datavalue: {
          value: "NLB-ar101917",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$b06a9af6-41b2-550f-baf1-74270088cb87",
      rank: "normal",
    },
  ],
  P10861: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10861",
        hash: "cb4bccc02d0d975160780a3db9d64c9b99327738",
        datavalue: {
          value: "013217540103.39",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$86f35674-4459-8de2-d7a3-b1ac6de8ae8a",
      rank: "normal",
    },
  ],
  P10899: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10899",
        hash: "7a00b0a1987a8a96c3aa887b073018e1a4150dcb",
        datavalue: {
          value: "882211",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6a2b7d78-430c-1ed7-79b0-73293af31b58",
      rank: "normal",
    },
  ],
  P4012: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4012",
        hash: "d852c6d74c6db54048958c3bf1a08f9621c7a544",
        datavalue: {
          value: "50702974",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$4cfba186-48f1-155d-fbb6-0a5acf2f7dbe",
      rank: "normal",
    },
  ],
  P6385: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6385",
        hash: "653b425cefd88d3b56987d58f24156a0bdad2237",
        datavalue: {
          value: "nauka_i_tehnika/fizika/ENSHTEN_ALBERT.html",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1af447c5-42ab-afdb-0359-c7809beaea15",
      rank: "normal",
    },
  ],
  P7502: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7502",
        hash: "67268e4506c1c65e32d9b81984fff942e33d1113",
        datavalue: {
          value: "Albert_Einstein-N6Y",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$98754DCC-2DEF-4986-B91F-D3537227E367",
      rank: "normal",
      references: [
        {
          hash: "817ead1b2c1316112fa42ef5232cbb0a1cd8e8cc",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "9540bac826b9295a2844346aaa9fc513d86b3a77",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 71016606,
                    id: "Q71016606",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "849bf31a75ee81eef52deceed6ee34b2f429e12c",
                datavalue: {
                  value: {
                    time: "+2022-09-10T00:00:00Z",
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
          },
          "snaks-order": ["P248", "P813"],
        },
      ],
    },
  ],
  P3909: [
    {
      mainsnak: {
        snaktype: "somevalue",
        property: "P3909",
        hash: "58cd08639869b0aed416bbd00a121f2742ace303",
        datatype: "monolingualtext",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "46bfd327b830f66f7061ea92d1be430c135fa91f",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 188,
                id: "Q188",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$d42de8c6-41af-4967-8792-4a6686c6461d",
      rank: "normal",
      references: [
        {
          hash: "a70522f4f814ddccbea9632beb227c1399f22122",
          snaks: {
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "9b348186e264f1a3a653825ff28df3b64d6118fa",
                datavalue: {
                  value: {
                    time: "+2022-10-01T00:00:00Z",
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
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "1802780da1d3655dfd8485111b711f11a27458fc",
                datavalue: {
                  value:
                    "https://historyanswers.com/what-were-albert-einsteins-last-words/",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P813", "P854"],
        },
      ],
    },
  ],
  P9212: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9212",
        hash: "1a06aab359c042ef0828ec68f74561e8ce383467",
        datavalue: {
          value: "401",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7247C4EA-0B24-4EAC-A471-0783E55662DD",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P9212",
        hash: "a512df5799fa22618243bc05e0b54e89a6324ceb",
        datavalue: {
          value: "6443",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E48A075F-5C69-4454-9D54-0B12A949CEAC",
      rank: "normal",
    },
  ],
  P10141: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10141",
        hash: "15989adad5120a7e7dc5d57c1cbc67f79b9206b2",
        datavalue: {
          value: "156358",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$18d12b8d-4bda-bc95-5310-ef1eb8fc1f5e",
      rank: "normal",
    },
  ],
  P11120: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11120",
        hash: "a31067d94a1c00556df7b45dc578a6ab53273f11",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$67929d93-4c92-0edd-65eb-e4a730ba190a",
      rank: "normal",
    },
  ],
  P6921: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6921",
        hash: "a75b398d14b94561a9efe5e9628029703a7b8441",
        datavalue: {
          value: "12767",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3AF2C788-CC51-4FB1-980E-1F6B002DD30D",
      rank: "normal",
    },
  ],
  P11155: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11155",
        hash: "d2fa65109031d30a25a16ac739e129ef718c3b81",
        datavalue: {
          value: "81943",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$709A0C9B-9E40-4C8D-8C42-73EACC67A06F",
      rank: "normal",
    },
  ],
  P11194: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11194",
        hash: "3048543e3f23747e47166cd764d952f56ab39898",
        datavalue: {
          value: "people/albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$2DDF78BD-28E7-4C08-B3E7-F57A01116229",
      rank: "normal",
    },
  ],
  P11249: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11249",
        hash: "dedb79b04eae5f5bfdaa887cf7abf01af90af83d",
        datavalue: {
          value: "14115549",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$0C404BCD-9CA7-4A27-98A3-59991DEA5B05",
      rank: "normal",
      references: [
        {
          hash: "95fc4756357534071a100ced1fa2e98fe8218a3a",
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "860a2a68c879abdf35315c32caada21d29357da6",
                datavalue: {
                  value:
                    "https://www.wikidata.org/wiki/Wikidata:Property_proposal/KBR_Catalogue_ID_for_writers",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
  ],
  P11239: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11239",
        hash: "199a6f0a637d08966020374652c10de647cd7d63",
        datavalue: {
          value: "0008824347",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$EE6BF046-A28B-4FA4-8900-F9E9F31D22FB",
      rank: "normal",
    },
  ],
  P10302: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10302",
        hash: "57f5a2f3f310eab466786f2bf8b71a2c26d0564c",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6ad5ded0-e941-42f0-8e44-bfe11baa4c81",
      rank: "normal",
    },
  ],
  P1185: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1185",
        hash: "3528b94efb0d7db673c1de2268cb9d9c7211b8f7",
        datavalue: {
          value: "303260",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$f291e938-8bad-404d-a99b-5bc6d6828566",
      rank: "normal",
    },
  ],
  P1026: [
    {
      mainsnak: {
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
      type: "statement",
      qualifiers: {
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "fbc0615cab71af98c9c3f700b3404c7bba35f6d6",
            datavalue: {
              value: {
                time: "+1905-00-00T00:00:00Z",
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
      "qualifiers-order": ["P585"],
      id: "Q937$c7c208b8-41b5-6617-14b8-f09f03ca8123",
      rank: "normal",
    },
  ],
  P11496: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11496",
        hash: "2aee6533b4c7e3cef56993398a1d7e35da08ea3c",
        datavalue: {
          value: "1140563741718602752",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9C7521F8-F6BB-44A9-A38B-D4B63CF7F44E",
      rank: "normal",
    },
  ],
  P2607: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2607",
        hash: "61bc5baa076ac29c238f983ee2febb4fe417017b",
        datavalue: {
          value: "43021f4f-4fda-4b32-bbf0-f2601181e32d",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$840BA23E-C0D8-4F58-A718-3730C7328AC1",
      rank: "normal",
    },
  ],
  P11686: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11686",
        hash: "20881e4349cf17e6ce404c109e551f77d2120be8",
        datavalue: {
          value: "981058511756306706",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$599A7A02-8D71-47BC-9D6C-AD100862BA58",
      rank: "normal",
    },
  ],
  P11683: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11683",
        hash: "422ae4bf5b7cdb4ac15bf635ec2a7d1ce6dd6583",
        datavalue: {
          value: "albert-ejnshtejn",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$51B7CB8E-74B8-47E9-9398-CB403560FD90",
      rank: "normal",
    },
  ],
  P11196: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11196",
        hash: "c8e4fcb0842442188dabe77d756b9adb54796ed2",
        datavalue: {
          value: "爱因斯坦",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P3740: [
          {
            snaktype: "value",
            property: "P3740",
            hash: "8e62870398eee5cb163ece33baec8b14bb645fa1",
            datavalue: {
              value: {
                amount: "+247103",
                unit: "1",
              },
              type: "quantity",
            },
            datatype: "quantity",
          },
        ],
        P585: [
          {
            snaktype: "value",
            property: "P585",
            hash: "858f4610364c7e54756f1d5fef4161736b5d4ebb",
            datavalue: {
              value: {
                time: "+2023-03-20T00:00:00Z",
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
      },
      "qualifiers-order": ["P3740", "P585"],
      id: "Q937$372FC8C7-27B2-45B8-96E1-5E6F2F5171D6",
      rank: "normal",
    },
  ],
  P11514: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11514",
        hash: "153c341159054a94c811bd52b4c7f23f51d1a97d",
        datavalue: {
          value: "einshtein-al-bert-3ec899",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E39D6BE6-F743-4F62-88D1-DA76461A3A25",
      rank: "normal",
    },
  ],
  P8568: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P8568",
        hash: "8da27fb809a8a90dd27af0b7aa18bc555ea451d1",
        datavalue: {
          value: "albert-einstein-table-of-contents",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$ED91F6E6-8AAC-4732-B3F4-0EACA83EC898",
      rank: "normal",
    },
  ],
  P4272: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4272",
        hash: "d18e93a6023ba62a2cc8e6621f3b2706cda921fe",
        datavalue: {
          value: "Einstein, Albert, 1879-1955",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$c89e4b67-4f3b-5ba7-bbf1-aafe7cf34e4a",
      rank: "normal",
    },
  ],
  P10832: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10832",
        hash: "52025a6bae69f6ccbbb8d93becf6851dd1c84eff",
        datavalue: {
          value: "E39PBJkhFRgHDtmhvmC6JdfXh3",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5a751d54-44ae-b82e-5416-c290a328bbaa",
      rank: "normal",
    },
  ],
  P213: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P213",
        hash: "b91210a325985c14f237813b844d9c063181cd06",
        datavalue: {
          value: "000000012281955X",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$013D02A7-5EDB-4F4F-B73E-CA4DC7BD4C78",
      rank: "normal",
      references: [
        {
          hash: "a56b01255d567ac062a0cb3d0481dcfcc1777d5f",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "6b7d4330c4aac4caec4ede9de0311ce273f88ecd",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 54919,
                    id: "Q54919",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P214: [
              {
                snaktype: "value",
                property: "P214",
                hash: "050765c998be3e14185037fb199a17ab35aebb75",
                datavalue: {
                  value: "75121530",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "6a5a7e89ebe72f503b9087dfca5e5f392992022d",
                datavalue: {
                  value: "https://viaf.org/hosted/xa/2367/",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P248", "P214", "P854"],
        },
      ],
    },
  ],
  P1617: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1617",
        hash: "075233f4f4b6109f8df7e93916c613eaf95bb90a",
        datavalue: {
          value: "4cca21c2-6416-4207-922c-b32de7400474",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$0E087876-C35D-4A88-888B-A604E210827F",
      rank: "normal",
      references: [
        {
          hash: "8582d8416671f1f2567247201bac753552435ca5",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "ea55dc6ac5c3ab77c77d4ae7979e3276d0d4cd20",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 18336371,
                    id: "Q18336371",
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
  P27: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P27",
        hash: "2e8eadd93a25748be49c5b665c38d36bba0fcc3d",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 159631,
            id: "Q159631",
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
            hash: "72cf81359df9406d6993fce77b58020a264290d6",
            datavalue: {
              value: {
                time: "+1879-03-14T00:00:00Z",
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
            hash: "b4b5e2f440bd3e16baeaeb37060e0305573d4338",
            datavalue: {
              value: {
                time: "+1896-01-28T00:00:00Z",
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
        P1545: [
          {
            snaktype: "value",
            property: "P1545",
            hash: "2a1ced1dca90648ea7e306acbadd74fc81a10722",
            datavalue: {
              value: "1",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P1545"],
      id: "q937$1D589815-A913-4559-94B0-7751C8D4E5FC",
      rank: "normal",
      references: [
        {
          hash: "b86d4170f539036cb60b1835c3f38b475bd8d7ba",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "5f303e19b3508477f19c5b711bd9b4c4de63628b",
                datavalue: {
                  value:
                    "https://www.einstein-website.de/z_information/verschiedenes.html",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
        {
          hash: "1bd2dc607f0c583b4e871003965fae77a16eec0a",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "71000ade3e2d3e332c52d5e596bcb34c3efeef6f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 1420342,
                    id: "Q1420342",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P888: [
              {
                snaktype: "value",
                property: "P888",
                hash: "597b72075dbd5e0e62a72fe1ac3dc8220d529025",
                datavalue: {
                  value: "795378",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
          },
          "snaks-order": ["P248", "P888"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P27",
        hash: "56c5a5c507ac3c24ce83eb5f73c548f2050f1f60",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 223050,
            id: "Q223050",
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
            hash: "db93023b3d077f39e38f51c27e4f3c8b94ed0aa0",
            datavalue: {
              value: {
                time: "+1896-01-28T00:00:00Z",
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
            hash: "ab0b435fbcc3664c71214bc00c56b2fa4535582c",
            datavalue: {
              value: {
                time: "+1901-02-21T00:00:00Z",
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
        P1545: [
          {
            snaktype: "value",
            property: "P1545",
            hash: "7241753c62a310cf84895620ea82250dcea65835",
            datavalue: {
              value: "2",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P1545"],
      id: "Q937$08f8c47d-4967-1f71-d553-c520c754bb67",
      rank: "normal",
      references: [
        {
          hash: "f5552057b31b7bc30f4e4f4774d89898b7e68dd3",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "3a711331c8e3af47d1834efec488d91fd302cb89",
                datavalue: {
                  value:
                    "http://www.einsteinsommerhaus.de/index.php?id=539&no_cache=1",
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
        property: "P27",
        hash: "9b760ff67a497bb6392f74786c64450d68c460ed",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 39,
            id: "Q39",
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
            hash: "e4b5b0482d5fa15198fbb347e85337b58c644e32",
            datavalue: {
              value: {
                time: "+1901-02-21T00:00:00Z",
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
        P1545: [
          {
            snaktype: "value",
            property: "P1545",
            hash: "0e979f28bf306fefdcd352b4eb8dee5da2153a6d",
            datavalue: {
              value: "3",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P580", "P1545"],
      id: "Q937$448fdca3-47f1-606c-a42a-f0282cd42a35",
      rank: "normal",
      references: [
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P27",
        hash: "dae35f1ccf34f7f1de98ed805c8dda0d6e28749d",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 533534,
            id: "Q533534",
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
            hash: "786587fccfc1edee883af8273d1889a5ec3e4b32",
            datavalue: {
              value: {
                time: "+1911-04-01T00:00:00Z",
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
            hash: "c10f72ff9f7cab1584e14fe2b9f91e1f5782bce4",
            datavalue: {
              value: {
                time: "+1912-09-30T00:00:00Z",
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
        P1545: [
          {
            snaktype: "value",
            property: "P1545",
            hash: "cbff8d4b3b7b35f905ef3147a7a6cb88845a774f",
            datavalue: {
              value: "4",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P1545"],
      id: "Q937$432f73a4-47a0-0126-1e69-7fa1d3a4a464",
      rank: "normal",
      references: [
        {
          hash: "b86d4170f539036cb60b1835c3f38b475bd8d7ba",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "5f303e19b3508477f19c5b711bd9b4c4de63628b",
                datavalue: {
                  value:
                    "https://www.einstein-website.de/z_information/verschiedenes.html",
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
        property: "P27",
        hash: "eb3292d90416b09ff32f83905fddcbad2a4deda2",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 41304,
            id: "Q41304",
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
            hash: "10a2dfc96e157e37793f5012a6e0f534220ac075",
            datavalue: {
              value: {
                time: "+1918-00-00T00:00:00Z",
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
            hash: "ca463ba5d0edbc4151c7f6d3246ab3b14989b5a0",
            datavalue: {
              value: {
                time: "+1933-00-00T00:00:00Z",
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
        P1545: [
          {
            snaktype: "value",
            property: "P1545",
            hash: "ea4583c18f699186700d21642b477a2dc1d345c8",
            datavalue: {
              value: "5",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P1545"],
      id: "Q937$0f8b506b-4d1d-e6df-9d86-59cd38512251",
      rank: "normal",
      references: [
        {
          hash: "e6308510267869c571676cbd08d07976beb5044d",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "96f1746fc572ab1ed4ac0ff725759e61b3015ab7",
                datavalue: {
                  value: "http://www.einsteinsommerhaus.de/index.php?id=539",
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
        property: "P27",
        hash: "9c05984f35ee8b2bbef4845da73ae7032d7dc7e3",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 183,
            id: "Q183",
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
            hash: "9af8f84c7b3f41c93290514bce1944b4f4df9747",
            datavalue: {
              value: {
                time: "+1933-01-30T00:00:00Z",
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
            hash: "fa004554e1550887f005153dd0c001eaf7327541",
            datavalue: {
              value: {
                time: "+1933-03-28T00:00:00Z",
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
        P1545: [
          {
            snaktype: "value",
            property: "P1545",
            hash: "32387bd293902a2430b5bb680033d36ecea00dd0",
            datavalue: {
              value: "6",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P1545"],
      id: "Q937$6b477f22-4d7d-2931-c80a-fb99ebda87ca",
      rank: "normal",
      references: [
        {
          hash: "872965c7e4406c9cca24add88f37330100592f1b",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "c24f6e17b28338649c9b6a96f33156a8c5f50e00",
                datavalue: {
                  value:
                    "https://newspapers.ushmm.org/events/albert-einstein-quits-germany-renounces-citizenship",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P854"],
        },
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P27",
        hash: "52d0408c7915122e0519a22577f0cbdcb28f749b",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 30,
            id: "Q30",
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
            hash: "d4e0acee0c209dd97cee3e52bf8065944ccdd5da",
            datavalue: {
              value: {
                time: "+1940-10-01T00:00:00Z",
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
        P1545: [
          {
            snaktype: "value",
            property: "P1545",
            hash: "9a4403310d2d27312d0a93830981a1e51b735843",
            datavalue: {
              value: "7",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P580", "P1545"],
      id: "Q937$a3f8227b-43bb-9766-6fb0-80aabaaf0eb2",
      rank: "normal",
      references: [
        {
          hash: "b86d4170f539036cb60b1835c3f38b475bd8d7ba",
          snaks: {
            P854: [
              {
                snaktype: "value",
                property: "P854",
                hash: "5f303e19b3508477f19c5b711bd9b4c4de63628b",
                datavalue: {
                  value:
                    "https://www.einstein-website.de/z_information/verschiedenes.html",
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
  ],
  P11870: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11870",
        hash: "2389d2ac41dc9457e99f4c2a8ca045793c304cbb",
        datavalue: {
          value: "1404",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C6EA136F-9608-49C2-8119-FCB0EE7AAA1A",
      rank: "normal",
    },
  ],
  P11180: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11180",
        hash: "97f884694aa900ca8d2323a3d6fd35586c09c1ad",
        datavalue: {
          value: "10590",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6927D2FF-2E73-4595-8903-03037104504C",
      rank: "normal",
    },
  ],
  P9371: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9371",
        hash: "e648318b5ae4d9a1589b145694363ac1a136d48c",
        datavalue: {
          value: "166026621",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D1D726DB-7EBF-41CC-8B8A-168DA5C478EE",
      rank: "normal",
    },
  ],
  P10780: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10780",
        hash: "ef085fe7699bd7cd8d90e516185a8bad4739f2de",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P407: [
          {
            snaktype: "value",
            property: "P407",
            hash: "d197d0a5efa4b4c23a302a829dd3ef43684fe002",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 150,
                id: "Q150",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P407"],
      id: "Q937$1EB8E30E-E656-4F1B-9ADB-67FF9579A5D6",
      rank: "normal",
    },
  ],
  P3847: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P3847",
        hash: "18ddc9db8f0e4f4bf73052acff8116550a452109",
        datavalue: {
          value: "person:albert_einstein_(1879-1955)",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$73BE7AD2-5E1B-4A62-99A3-5D837284A570",
      rank: "normal",
    },
  ],
  P6327: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6327",
        hash: "7a9572e3183a7bbd14e5a0e24bcb01f721c54ddd",
        datavalue: {
          value: "1024300",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$E6E064A3-BE21-41D6-98D0-31C28BBA605F",
      rank: "normal",
    },
  ],
  P10916: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10916",
        hash: "7bdabea6cdcaa072e9b9d88f85d8d6fb3d759078",
        datavalue: {
          value: "Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$de37924c-469d-5607-2ecf-458f0f97fa3f",
      rank: "normal",
    },
  ],
  P10234: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10234",
        hash: "90106a1014bc5109ea725daac09f6ea86a77c5c3",
        datavalue: {
          value: "albert_einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$469367a5-4595-f4d4-1f0d-938d3f7e95b6",
      rank: "normal",
    },
  ],
  P7763: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7763",
        hash: "670802caae082ed6e6ec9edbce73ad7a1faf80eb",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 71887839,
            id: "Q71887839",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      qualifiers: {
        P1001: [
          {
            snaktype: "value",
            property: "P1001",
            hash: "a73081dd7deda63d063e454b3f458d24a470f835",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 29870196,
                id: "Q29870196",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P1001"],
      id: "Q937$c8356648-4f54-beb2-d251-72848bfd8a46",
      rank: "normal",
    },
  ],
  P7356: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7356",
        hash: "4f7a40fd5d9e437331e9bbd5f0ea4890abd57ae6",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7DCBC3E1-2E13-4749-9502-717DAB6C12DF",
      rank: "normal",
    },
  ],
  P2949: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2949",
        hash: "240726726c682f91d2eaa17b907d06e82cd40994",
        datavalue: {
          value: "Einstein-1",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "bb1fc2d5fa453085cc198a89ba834ef375066771",
            datavalue: {
              value: "Prof. Dr. Albert Einstein (14 Mar 1879 - 18 Apr 1955)",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$BF398634-1AB2-438B-A66B-A9ED13F5C9B0",
      rank: "normal",
    },
  ],
  P12098: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12098",
        hash: "cc1349c59670e6b65359bb8bc4df112740fcb704",
        datavalue: {
          value: "855374",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$AD4C743A-6BF8-4B60-8EE2-DEA685000158",
      rank: "normal",
    },
  ],
  P1050: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1050",
        hash: "4e6677ff4329b89b4c543ce6d0da9a9e1cf52b62",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 132971,
            id: "Q132971",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$BB5824E0-B74F-4F93-A14C-CE802E0F9CB5",
      rank: "normal",
      references: [
        {
          hash: "1edd58539d74c5d322ea64467a227b299b10a662",
          snaks: {
            P143: [
              {
                snaktype: "value",
                property: "P143",
                hash: "e4f6d9441d0600513c4533c672b5ab472dc73694",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 328,
                    id: "Q328",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "f3e7ba757f46053542173f3cdac420476b16bbe6",
                datavalue: {
                  value:
                    "https://en.wikipedia.org/w/index.php?title=List_of_people_with_dyslexia&oldid=1189241542",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P143", "P4656"],
        },
      ],
    },
  ],
  P6058: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6058",
        hash: "d6d75abcf555e37a3d90730325d64e352b1a1b3a",
        datavalue: {
          value: "personnage/Albert_Einstein/117783",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7d6c691b-4251-b154-c181-aed334d67fdf",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P6058",
        hash: "4d50ae0ee23111df35b0006c68c567422a7bdee5",
        datavalue: {
          value: "images/Albert_Einstein/1005145",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$f41b47fb-4ca8-9ad8-ee7b-03cba9337a8c",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P6058",
        hash: "11cfca43f7d08bb366529c3217a523c7f6816fb7",
        datavalue: {
          value: "images/Albert_Einstein/1314172",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$f1dd3449-495e-4e13-6a74-6c5b6291bb55",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P6058",
        hash: "c362e8ec8a5ab727ff450827824fcbe4c6a55c1f",
        datavalue: {
          value: "sons/Albert_Einstein_février_1950/1102228",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$1a9c9931-47c1-b991-64ce-e8cb000d420e",
      rank: "normal",
    },
  ],
  P12086: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12086",
        hash: "4e98c7c678efe052784b5749fb00a68898cb4249",
        datavalue: {
          value: "Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$B937678D-E069-4973-83A8-DCD557715D05",
      rank: "normal",
    },
  ],
  P11394: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11394",
        hash: "f6e70cd130f6a980e7f83521e53a4418211ba72b",
        datavalue: {
          value: "aor/einstein/index",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7f9996bd-418b-a088-d1ce-cc9b57be0351",
      rank: "normal",
    },
  ],
  P6104: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6104",
        hash: "a27c5fdb35b42381f12b2a603711e56d98dd77fd",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 8487137,
            id: "Q8487137",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$3C788EB3-919A-4F3B-994C-1743A563FECE",
      rank: "normal",
    },
  ],
  P12385: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12385",
        hash: "94caac8f0bac8c15b5b594a8fa30937db2012eda",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$70b72fa7-3aa0-42db-ab27-5721962aa70e",
      rank: "normal",
    },
  ],
  P7726: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P7726",
        hash: "26bf6f696027fa05808d0797e6d05534a13532de",
        datavalue: {
          value: "AlbertEinstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$40983654-4ee6-04aa-40e2-1de052ebd20c",
      rank: "normal",
    },
  ],
  P11386: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11386",
        hash: "6dcfd57ffdacf66ba482515d7b411fde1ed41314",
        datavalue: {
          value: "albert-einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$750C57A8-C600-4166-8FA3-593DE87E2245",
      rank: "normal",
    },
  ],
  P1889: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P1889",
        hash: "14b05558193a1b71ed96d7e9d1926ee5fbca388b",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 124606656,
            id: "Q124606656",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$62187850-586F-4C97-84B5-C0FE9765A060",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P1889",
        hash: "a158efbed1157f29c31e26f844bda1e7ec450ebc",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 124500735,
            id: "Q124500735",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$2684A3AA-2CA9-4BAE-87BB-5AB870B6D8D5",
      rank: "normal",
    },
  ],
  P12458: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12458",
        hash: "e75ee10b5741e7c20c87798b5af48cfcefcb5a66",
        datavalue: {
          value: "264639",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "db27c85e6db34187666d955a03b45dcd2d692d91",
            datavalue: {
              value: "Einstein, Albert, 1879-1955.",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$E9FD5427-2D42-4CB1-8714-59F404F2275A",
      rank: "normal",
      references: [
        {
          hash: "1bf65f698a26693551a7008bd7a46381a841ee57",
          snaks: {
            P3452: [
              {
                snaktype: "value",
                property: "P3452",
                hash: "e7c802c17dbe401566608096149b9f4a3d17b1b0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 124605379,
                    id: "Q124605379",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P3452"],
        },
      ],
    },
  ],
  P12483: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12483",
        hash: "db9122c812a5aa948c5b8251437ce59710fc29b1",
        datavalue: {
          value: "11237",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3E99B226-D3B6-4819-9D24-62151AB73ACA",
      rank: "normal",
    },
  ],
  P4359: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P4359",
        hash: "61be20be1729008aecdfda80ffc58bef4de3c826",
        datavalue: {
          value: "alberteinstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$a3eb602f-4dd7-2e0a-1943-ecbe87f738fc",
      rank: "normal",
    },
  ],
  P12153: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12153",
        hash: "ff6a6c58245aac575a8c6e5c890d31f6ae0e10fc",
        datavalue: {
          value: "650988260",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$5f4db2e5-42cf-e474-c43a-1e2a15ef3990",
      rank: "normal",
    },
  ],
  P496: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P496",
        hash: "b3beffc81d1d168e004122dbbe240d1c06f250a7",
        datavalue: {
          value: "0000-0001-9183-9538",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$749b20a0-45f3-363d-fb0b-29356b9b6da8",
      rank: "normal",
    },
  ],
  P2732: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2732",
        hash: "c00acdf44ae1544342a7dbe11a3214f806577ae8",
        datavalue: {
          value: "1638902",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$6577f3d6-444d-b869-4cb1-fad569b5bf7a",
      rank: "normal",
    },
  ],
  P185: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P185",
        hash: "b30c938a6e7e092e345c55d42a67d03bd9d3ee2d",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 153238,
            id: "Q153238",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$69D2AFE4-D430-4B01-8138-E38CF21B928D",
      rank: "normal",
    },
  ],
  P12582: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12582",
        hash: "bc29149c11711282311e4c417344ae25457bd73a",
        datavalue: {
          value: "20110803095744712",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$63E112EF-7936-4F50-8F66-C28DA4CE293C",
      rank: "normal",
    },
  ],
  P12597: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12597",
        hash: "8dfcdf74461d922caa2aab4fad972a46c926763c",
        datavalue: {
          value: "14634",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$F941CD61-9078-47F5-837E-B2CF0236C2F2",
      rank: "normal",
    },
  ],
  P26: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P26",
        hash: "511a4e5bee09f5fe9788e6782128aedeb2a444d5",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 76346,
            id: "Q76346",
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
            hash: "e5f6f841d762c3037e220ac54fc2e774c26e0d82",
            datavalue: {
              value: {
                time: "+1903-01-16T00:00:00Z",
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
            hash: "9055b7a53cfe67a6a17b651e07bce6e75edb3565",
            datavalue: {
              value: {
                time: "+1919-02-14T00:00:00Z",
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
        P2842: [
          {
            snaktype: "value",
            property: "P2842",
            hash: "c4344095574a3cfd61617efa0c98267657a4144f",
            datavalue: {
              value: {
                "entity-type": "item",
                "numeric-id": 70,
                id: "Q70",
              },
              type: "wikibase-entityid",
            },
            datatype: "wikibase-item",
          },
        ],
      },
      "qualifiers-order": ["P580", "P582", "P2842"],
      id: "q937$C6422D5D-6B13-4626-AEE3-60A30E0C2C85",
      rank: "normal",
      references: [
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P26",
        hash: "d8205856d0912fb5c416457316925d22186902dd",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 68761,
            id: "Q68761",
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
            hash: "d8150d79b45bd2c7591586583210548efe45d012",
            datavalue: {
              value: {
                time: "+1919-01-01T00:00:00Z",
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
            hash: "2da356ea2af6f3169dd0a495b8d0a069951d59e9",
            datavalue: {
              value: {
                time: "+1936-12-20T00:00:00Z",
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
      },
      "qualifiers-order": ["P580", "P582"],
      id: "q937$881C4FA7-075C-4D48-8182-77D69CA6309C",
      rank: "normal",
      references: [
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
  ],
  P793: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P793",
        hash: "a93cbe234337e018e7988106e47a3910da715f68",
        datavalue: {
          value: {
            "entity-type": "item",
            "numeric-id": 115784320,
            id: "Q115784320",
          },
          type: "wikibase-entityid",
        },
        datatype: "wikibase-item",
      },
      type: "statement",
      id: "Q937$0908221D-AE75-4794-97C9-10CA1E858129",
      rank: "normal",
      references: [
        {
          hash: "f3a9490b3d9475ae69597013485656e9b7db1076",
          snaks: {
            P227: [
              {
                snaktype: "value",
                property: "P227",
                hash: "27ded07d8633b55573ca0c6bde49abccd2ec48c4",
                datavalue: {
                  value: "118529579",
                  type: "string",
                },
                datatype: "external-id",
              },
            ],
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "61cfaea163998911779c4b634aba7f200ab3e0d0",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23833686,
                    id: "Q23833686",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
            P813: [
              {
                snaktype: "value",
                property: "P813",
                hash: "5907b88f77e0d92443251a704778c8facc10b894",
                datavalue: {
                  value: {
                    time: "+2024-05-03T00:00:00Z",
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
          },
          "snaks-order": ["P227", "P248", "P813"],
        },
      ],
    },
  ],
  P12674: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12674",
        hash: "4ecc7029aacad4679fe49014eb420a0b94621e8c",
        datavalue: {
          value: "Q95055",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$85A23411-4ADE-4334-B962-CAE8AA2D4149",
      rank: "normal",
    },
  ],
  P6214: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6214",
        hash: "7c0e74282f756d26e6ca13366a3b3e186cd1fecb",
        datavalue: {
          value: "jmb-pers-118058",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$66B7287B-FBB9-4F14-8235-25EEEEEAAA64",
      rank: "normal",
    },
  ],
  P12800: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12800",
        hash: "30d17e3061213bb3937e596eac98725913893cdc",
        datavalue: {
          value: "en:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$3445205E-0782-4CF6-9D75-145D7BE7166C",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P12800",
        hash: "084ee648614d09c10d9e14f242fdb9ac69aa4796",
        datavalue: {
          value: "it:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9B057674-A2D6-48C0-9781-AB464C9EBD5B",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P12800",
        hash: "e9b3a8d1ab30df2036fe0360d72ca3d21c3d4563",
        datavalue: {
          value: "es:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$ADC97A7F-19CA-41BA-AFF1-2BD00C4FFA64",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P12800",
        hash: "849895555c7b78228c862d7460da0579c7b0f435",
        datavalue: {
          value: "eu:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$441AAC37-A617-4DB8-8C9E-EB24D2C53E98",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P12800",
        hash: "ff15bcb8dbc2b041af92677854c1c74051437a55",
        datavalue: {
          value: "ca:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$174A978F-C237-4F40-8DEF-6F98E749B12C",
      rank: "normal",
    },
    {
      mainsnak: {
        snaktype: "value",
        property: "P12800",
        hash: "5fe4991a06e1bf050507ddb463a8614e2af0c38b",
        datavalue: {
          value: "fr:Albert_Einstein",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$CFE21E78-4B32-4611-AB3E-E91B2F7CA981",
      rank: "normal",
    },
  ],
  P12836: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12836",
        hash: "66a888bd716495360f846b3bc6cbe6c7c220c8fe",
        datavalue: {
          value: "27238306",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      qualifiers: {
        P1810: [
          {
            snaktype: "value",
            property: "P1810",
            hash: "f26ddf733f17244e865719849afd0493a5494641",
            datavalue: {
              value: "阿尔伯特·爱因斯坦 Albert Einstein",
              type: "string",
            },
            datatype: "string",
          },
        ],
      },
      "qualifiers-order": ["P1810"],
      id: "Q937$732C5E98-200F-4944-8978-5110BFBECCFE",
      rank: "normal",
    },
  ],
  P12871: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12871",
        hash: "116781e1aca95b77fb693c107abacefac2a7b196",
        datavalue: {
          value: "0jcx",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$f18cf655-4231-9e57-7105-91e8d52baad5",
      rank: "normal",
    },
  ],
  P12502: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12502",
        hash: "1b23a015934b39c840834d912c2ff71cccef6c2a",
        datavalue: {
          value: "14611",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$454CB7FB-E3E0-4FCD-B53A-85212C60722D",
      rank: "normal",
    },
  ],
  P2861: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P2861",
        hash: "dbd892e80eb0e661e46a13fb1f39312888c4944d",
        datavalue: {
          value: "1215",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$BC2EAF7E-879B-4BCD-A364-1F57BCDD5646",
      rank: "normal",
      references: [
        {
          hash: "bffda49aed1821fe987a07e5548517659a845032",
          snaks: {
            P248: [
              {
                snaktype: "value",
                property: "P248",
                hash: "5a6c2e831c50b974de6fddefd4af24e2cb11951f",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 23667505,
                    id: "Q23667505",
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
  P12975: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P12975",
        hash: "109b826ba8afdc9190657cd14d10e03e6423f78b",
        datavalue: {
          value: "2607",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$7349c362-ac2a-46e6-b9ba-8e55dcc520c0",
      rank: "normal",
      references: [
        {
          hash: "edc2139e948bce058be182443c2867ca5f5db988",
          snaks: {
            P4656: [
              {
                snaktype: "value",
                property: "P4656",
                hash: "5b8d56ff5244d22f2856ddc63edccaf3796a399f",
                datavalue: {
                  value:
                    "https://www.wikidata.org/wiki/Wikidata:Property_proposal/Lexikon_der_Mathematik_entry_ID",
                  type: "string",
                },
                datatype: "url",
              },
            ],
          },
          "snaks-order": ["P4656"],
        },
      ],
    },
  ],
  P13030: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13030",
        hash: "f03bb543598269f3ca9a0690349a08e2229e73d5",
        datavalue: {
          value: "person/2493",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$2583B1EF-2FC2-4F7A-891D-7B4668E83FB2",
      rank: "normal",
    },
  ],
  P9964: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P9964",
        hash: "7fd119e433bc761716304c89c564d3b1fecc6294",
        datavalue: {
          value: "118529579",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$838df6a2-433f-61d9-442f-e86e33203112",
      rank: "normal",
    },
  ],
  P13049: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13049",
        hash: "7557829a4587dae75ec02a1a5f9813b5d0fda89f",
        datavalue: {
          value: "118529579",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$8BE290EF-BA0E-4795-B38A-C1963B157611",
      rank: "normal",
    },
  ],
  P10704: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10704",
        hash: "9571c13e6b7817c13332ee951bfa5f9653750c60",
        datavalue: {
          value: "1955.0005",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D7F44115-3E07-4991-9481-9DD97634555A",
      rank: "normal",
    },
  ],
  P13146: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13146",
        hash: "19d1b399810edd9cd9204fef5c6b8e4a09396b32",
        datavalue: {
          value:
            "Albert Einstein writing on a blackboard in Pasadena (1931).jpg",
          type: "string",
        },
        datatype: "commonsMedia",
      },
      type: "statement",
      id: "Q937$f363a24c-46e1-3712-66b6-e455ff8e1053",
      rank: "normal",
    },
  ],
  P13022: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13022",
        hash: "4c36b286f87870addcfbf803440d265ead49beaf",
        datavalue: {
          value: "19857",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$A3B8B824-35FA-401A-A7F4-69B2CD27F15D",
      rank: "normal",
    },
  ],
  P13153: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13153",
        hash: "73650fbf9b637240722777c34de34a4affe24271",
        datavalue: {
          value: "5698",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$82a82f75-4bec-3e40-3538-424efa2918ab",
      rank: "normal",
    },
  ],
  P13019: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13019",
        hash: "be8b3722a241e70f6f72ac15458b40cb95495d43",
        datavalue: {
          value: "87761",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$D909F5C2-4686-4D3E-BE02-2709AA4C976B",
      rank: "normal",
    },
  ],
  P10608: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10608",
        hash: "2748bc2b238f1eb7b0d439d6071f7e5183b1c6bf",
        datavalue: {
          value: "agent/gnd_118529579",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$081B24E1-6DFC-42AD-8991-CE992F602DB9",
      rank: "normal",
    },
  ],
  P13051: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13051",
        hash: "80736bfe2f780653262798d4b8da67be529bb3dd",
        datavalue: {
          value: "34419",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$380F1F6D-03C1-4998-8B94-7721C28348F6",
      rank: "normal",
    },
  ],
  P13166: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13166",
        hash: "028cb2cea9484b731d34f6b3dcc8061489bbfa86",
        datavalue: {
          value: "144964",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$8DA39E16-4D5B-4E6E-BAE2-715ADC9BFF2D",
      rank: "normal",
    },
  ],
  P13183: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P13183",
        hash: "0d699d3163a302e73abfa009d4e3f79792f0790b",
        datavalue: {
          value: "118529579",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$C3AA622F-BE01-4CC6-9877-77908BD2E6F9",
      rank: "normal",
    },
  ],
  P10387: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P10387",
        hash: "530a7a044819878aff6da536a0bd28f3cb7fe293",
        datavalue: {
          value: "8278",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$2F8EE879-4C25-4F37-91E3-BFE4CD3D8CCC",
      rank: "normal",
    },
  ],
  P11818: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P11818",
        hash: "6e4a11edfe9fa7415e5598d65b49b1bcb40e91d3",
        datavalue: {
          value: "esjiljveqvqreqe",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$157844C7-8B05-4D2A-946A-A37C30274CAA",
      rank: "normal",
    },
  ],
  P6640: [
    {
      mainsnak: {
        snaktype: "value",
        property: "P6640",
        hash: "49ecc459248263f31dae9dcb44ca7efc00f728a5",
        datavalue: {
          value: "92811",
          type: "string",
        },
        datatype: "external-id",
      },
      type: "statement",
      id: "Q937$9DC95600-8D86-42D7-83F2-38B2B9595FD5",
      rank: "normal",
      references: [
        {
          hash: "b2c0b6186c95f0507e29fc80741e26f4cc853e2b",
          snaks: {
            P11797: [
              {
                snaktype: "value",
                property: "P11797",
                hash: "77ad371e61b85d3ec3d0de7ffae0fc3f6457c12c",
                datavalue: {
                  value: {
                    "entity-type": "item",
                    "numeric-id": 465,
                    id: "Q465",
                  },
                  type: "wikibase-entityid",
                },
                datatype: "wikibase-item",
              },
            ],
          },
          "snaks-order": ["P11797"],
        },
      ],
    },
  ],
};
