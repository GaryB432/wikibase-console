import { beforeAll, describe, expect, test } from "vitest";
import { handlePropertyClaims } from "./handle-claims";
import { type PersonInfo } from "./types";

describe("HandleClaims", async () => {
  const fakey: PersonInfo = {
    id: "Q0",
    name: "Bob",
    birthYear: 0,
    occupations: [],
    schools: [],
    fetchDate: expect.any(Date()),
    sources: [],
  };

  beforeAll(async () => {
    await handlePropertyClaims({ type: "item", id: "Q0", claims: {} }, fakey);
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
  test("fieldOfWork", () => {
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
// import { test, expect, vi } from "vitest";
import axios from "axios";
import {
  simplifyClaims,
  Entity,
  WB_URL,
  Claim,
  PropertyClaims,
  WikibaseEntityId,
} from "wikibase-sdk";

// Mock axios and wikibase-sdk
vi.mock("axios");
vi.mock("wikibase-sdk");

// // Import the function to be tested (adjust the path if needed)
// import { getSchoolsAttended } from "./handle-claims"; // Replace './your-file-path'

// // Override the imported functions with our mock implementations.
// const mockedAxios = axios as vi.Mocked<typeof axios>;
// const mockedSimplifyClaims = simplifyClaims as jest.MockedFunction<
//   typeof simplifyClaims
// >;
// const mockedWB_URL = WB_URL as string;

// test("getSchoolsAttended should return the names of the schools attended by the entity", async () => {
//   // Mock data for Wikidata entities.  This simulates the responses
//   // from the Wikidata API for our test scenario.
//   const mockWikidataEntities = {
//     entities: {
//       Q0001: {
//         // Entity Q0001 (fictional person)
//         pageid: 123,
//         ns: 0,
//         title: "Q0001",
//         lastrevid: 12345,
//         modified: "2024-08-28T12:00:00Z",
//         type: "item",
//         id: "Q0001",
//         claims: {
//           P69: [
//             // Property P69: educated at
//             {
//               mainsnak: {
//                 snaktype: "value",
//                 property: "P69",
//                 datatype: "wikibase-entityid",
//                 datavalue: {
//                   value: { "entity-type": "item", id: "Q1001" }, // School 1
//                   type: "wikibase-entityid",
//                 },
//               },
//               type: "statement",
//               id: "Q0001-P69-1",
//               rank: "normal",
//             },
//             {
//               mainsnak: {
//                 snaktype: "value",
//                 property: "P69",
//                 datatype: "wikibase-entityid",
//                 datavalue: {
//                   value: { "entity-type": "item", id: "Q1002" }, // School 2
//                   type: "wikibase-entityid",
//                 },
//               },
//               type: "statement",
//               id: "Q0001-P69-2",
//               rank: "normal",
//             },
//           ],
//         },
//       },
//       Q1001: {
//         // Entity Q1001 (School 1)
//         pageid: 456,
//         ns: 0,
//         title: "Q1001",
//         lastrevid: 67890,
//         modified: "2024-08-28T13:00:00Z",
//         type: "item",
//         id: "Q1001",
//         labels: {
//           en: { language: "en", value: "Mock School One" },
//         },
//       },
//       Q1002: {
//         // Entity Q1002 (School 2)
//         pageid: 789,
//         ns: 0,
//         title: "Q1002",
//         lastrevid: 98765,
//         modified: "2024-08-28T14:00:00Z",
//         type: "item",
//         id: "Q1002",
//         labels: {
//           en: { language: "en", value: "Mock School Two" },
//         },
//       },
//       Q1003: {
//         // Entity Q1003 (School 3 - not attended by Q0001)
//         pageid: 111,
//         ns: 0,
//         title: "Q1003",
//         lastrevid: 22233,
//         modified: "2024-08-28T15:00:00Z",
//         type: "item",
//         id: "Q1003",
//         labels: {
//           en: { language: "en", value: "Mock School Three" },
//         },
//       },
//     },
//   };

//   // Mock the axios.get function to return our mock data.
//   mockedAxios.get.mockImplementation((url: string) => {
//     if (url.includes("action=wbgetentities&props=claims&ids=Q0001")) {
//       return Promise.resolve({ data: mockWikidataEntities });
//     } else if (
//       url.includes("action=wbgetentities&props=labels&ids=Q1001%7CQ1002")
//     ) {
//       const schoolData = {
//         entities: {
//           Q1001: mockWikidataEntities.entities.Q1001,
//           Q1002: mockWikidataEntities.entities.Q1002,
//         },
//       };
//       return Promise.resolve({ data: schoolData });
//     }
//     // Add a default case to avoid unhandled promise rejections.
//     return Promise.resolve({ data: {} }); // Or reject with an error if that's more appropriate
//   });

//   // Mock the WB_URL.
//   (WB_URL as any) = "https://mock.wikidata.org/w/api.php";

//   // Mock the simplifyClaims function to return a simplified version of the claims.
//   mockedSimplifyClaims.mockImplementation(
//     (claims: PropertyClaims<Claim> | undefined) => {
//       if (!claims) {
//         return [];
//       }
//       return (
//         claims.P69?.map((claim) => {
//           if (
//             claim.mainsnak.snaktype === "value" &&
//             claim.mainsnak.datatype === "wikibase-entityid"
//           ) {
//             return claim.mainsnak.datavalue.value.id;
//           }
//           return null; // Or some other appropriate value to indicate it couldn't be simplified
//         }).filter((value): value is string => value !== null) || []
//       );
//     }
//   );

//   // Call the function with the mock entity ID.
//   const schools = await getSchoolsAttended("Q0001");

//   // Assert that the function returns the expected school names.
//   expect(schools).toEqual(["Mock School One", "Mock School Two"]);

//   // Verify that axios.get was called with the correct URLs.  This ensures
//   // that the function is constructing the API requests as expected.
//   expect(mockedAxios.get).toHaveBeenCalledTimes(2);
//   expect(mockedAxios.get).toHaveBeenCalledWith(
//     "https://mock.wikidata.org/w/api.php?action=wbgetentities&props=claims&ids=Q0001&format=json"
//   );
//   expect(mockedAxios.get).toHaveBeenCalledWith(
//     "https://mock.wikidata.org/w/api.php?action=wbgetentities&props=labels&ids=Q1001%7CQ1002&format=json"
//   );
// });

// test('getSchoolsAttended should return an empty array if the entity has no "educated at" claims', async () => {
//   // Mock data where the entity has no P69 claims.
//   const mockNoP69 = {
//     entities: {
//       Q0002: {
//         // Entity Q0002 (fictional person with no schools)
//         pageid: 234,
//         ns: 0,
//         title: "Q0002",
//         lastrevid: 23456,
//         modified: "2024-08-28T16:00:00Z",
//         type: "item",
//         id: "Q0002",
//         claims: {}, // No claims at all
//       },
//     },
//   };

//   mockedAxios.get.mockResolvedValue({ data: mockNoP69 });
//   (WB_URL as any) = "https://mock.wikidata.org/w/api.php";
//   mockedSimplifyClaims.mockReturnValue([]);

//   const schools = await getSchoolsAttended("Q0002");
//   expect(schools).toEqual([]);
//   expect(mockedAxios.get).toHaveBeenCalledTimes(1);
// });

// test("getSchoolsAttended should handle errors gracefully", async () => {
//   // Mock axios.get to reject with an error.
//   mockedAxios.get.mockRejectedValue(new Error("Failed to fetch"));
//   (WB_URL as any) = "https://mock.wikidata.org/w/api.php";

//   // Use a try-catch block to handle the error within the test.
//   try {
//     await getSchoolsAttended("Q0003");
//   } catch (error) {
//     // Assert that the error is handled as expected (e.g., by re-throwing).
//     expect(error).toBeInstanceOf(Error);
//     expect((error as Error).message).toBe("Failed to fetch");
//   }
// });

// test("getSchoolsAttended should return empty array if entity is not found", async () => {
//   // Mock data where the entity is not found.
//   const mockEntityNotFound = {
//     entities: {}, // Empty entities object
//   };

//   mockedAxios.get.mockResolvedValue({ data: mockEntityNotFound });
//   (WB_URL as any) = "https://mock.wikidata.org/w/api.php";
//   mockedSimplifyClaims.mockReturnValue([]);

//   const schools = await getSchoolsAttended("Q9999"); //Non existing entity
//   expect(schools).toEqual([]);
//   expect(mockedAxios.get).toHaveBeenCalledTimes(1);
// });
