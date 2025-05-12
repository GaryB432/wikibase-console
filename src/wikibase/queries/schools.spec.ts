import { test, expect, vi, beforeEach } from "vitest";

test("temp", () => {
  expect(2 + 2).toEqual(4);
});
// import { WBK } from "wikibase-sdk";
// import * as wikibaseSDK from "wikibase-sdk";

// // Mock wikibase-sdk
// vi.mock("wikibase-sdk", () => {
//   return {
//     WBK: vi.fn().mockImplementation((config = {}) => ({
//       getEntities: vi.fn(),
//     })),
//     simplifyPropertyClaims: vi.fn(),
//     // simplifyClaims: vi.fn(),
//   };
// });

// // Create typed mocks
// const wbk = WBK({
//   instance: "https://www.wikidata.org",
//   sparqlEndpoint: "https://query.wikidata.org/sparql",
// });
// const mockedGetEntities = vi.mocked(wbk.getEntities);
// // const mockedSimplifyClaims = vi.mocked(wikibaseSDK.simplifyClaims);
// const mockedSimplifyPropertyClaims = vi.mocked(wikibaseSDK.simplifyPropertyClaims);

// // Define the Wikidata entity ID for Albert Einstein (if used in actual implementation)
// const einsteinEntityId = "Q937";

// // Define mock data centrally to improve reusability and maintenance
// const createMockWikidataEntities = () => ({
//   entities: {
//     Q0001: {
//       pageid: 123,
//       ns: 0,
//       title: "Q0001",
//       lastrevid: 12345,
//       modified: "2024-08-28T12:00:00Z",
//       type: "item",
//       id: "Q0001",
//       claims: {
//         P69: [
//           {
//             mainsnak: {
//               snaktype: "value",
//               property: "P69",
//               datatype: "wikibase-entityid",
//               datavalue: {
//                 value: { "entity-type": "item", id: "Q1001" },
//                 type: "wikibase-entityid",
//               },
//             },
//             type: "statement",
//             id: "Q0001-P69-1",
//             rank: "normal",
//           },
//           {
//             mainsnak: {
//               snaktype: "value",
//               property: "P69",
//               datatype: "wikibase-entityid",
//               datavalue: {
//                 value: { "entity-type": "item", id: "Q1002" },
//                 type: "wikibase-entityid",
//               },
//             },
//             type: "statement",
//             id: "Q0001-P69-2",
//             rank: "normal",
//           },
//         ],
//       },
//     },
//     Q1001: {
//       pageid: 456,
//       ns: 0,
//       title: "Q1001",
//       lastrevid: 67890,
//       modified: "2024-08-28T13:00:00Z",
//       type: "item",
//       id: "Q1001",
//       labels: {
//         en: { language: "en", value: "Mock School One" },
//       },
//     },
//     Q1002: {
//       pageid: 789,
//       ns: 0,
//       title: "Q1002",
//       lastrevid: 98765,
//       modified: "2024-08-28T14:00:00Z",
//       type: "item",
//       id: "Q1002",
//       labels: {
//         en: { language: "en", value: "Mock School Two" },
//       },
//     },
//   },
// });

// // Reset mocks before each test to ensure isolation
// beforeEach(() => {
//   vi.resetAllMocks();
// });

// test("getSchoolsAttended should return the names of the schools attended by the entity", async () => {
//   const mockEntities = createMockWikidataEntities();

//   // Mock getEntities to return URLs
//   mockedGetEntities
//     .mockReturnValueOnce("https://wikidata.org/api/Q0001") // First call returns entity URL
//     .mockReturnValueOnce("https://wikidata.org/api/schools"); // Second call returns schools URL

//   // Mock the fetch responses using jest.spyOn on the global Promise
//   const originalResolve = global.Promise.resolve;
//   global.Promise.resolve = vi
//     .fn()
//     .mockReturnValueOnce(
//       Promise.resolve({ entities: { Q0001: mockEntities.entities.Q0001 } })
//     ) // First response
//     .mockReturnValueOnce(
//       Promise.resolve({
//         // Second response
//         entities: {
//           Q1001: mockEntities.entities.Q1001,
//           Q1002: mockEntities.entities.Q1002,
//         },
//       })
//     );

//   const newLocalf = ["Q1001", "Q1002"];
//   const newLocal: wikibaseSDK.EntityId[] = newLocalf.map(f=> f as wikibaseSDK.EntityId);
//   // Mock the simplifyClaims function

//   mockedSimplifyPropertyClaims.mockReturnValue(newLocal);

//   try {
//     // Execute the function and assert results
//     const schools = await getSchoolsAttended("Q0001");

//     expect(schools).toEqual(["Mock School One", "Mock School Two"]);
//     expect(mockedGetEntities).toHaveBeenCalledTimes(2);
//     expect(mockedGetEntities).toHaveBeenNthCalledWith(1, {
//       ids: ["Q0001"],
//       props: ["claims"],
//       format: "json",
//     });
//     expect(mockedGetEntities).toHaveBeenNthCalledWith(2, {
//       ids: ["Q1001", "Q1002"],
//       props: ["labels"],
//       format: "json",
//     });
//   } finally {
//     // Restore original Promise.resolve
//     global.Promise.resolve = originalResolve;
//   }
// });

// test('getSchoolsAttended should return an empty array if the entity has no "educated at" claims', async () => {
//   // Mock getEntities to return URL
//   mockedGetEntities.mockReturnValueOnce("https://wikidata.org/api/Q0002");

//   // Mock the fetch response
//   const originalResolve = global.Promise.resolve;
//   global.Promise.resolve = vi.fn().mockReturnValueOnce(
//     Promise.resolve({
//       entities: {
//         Q0002: {
//           id: "Q0002",
//           claims: {}, // No claims at all
//         },
//       },
//     })
//   );

// //   mockedSimplifyClaims.mockReturnValue([]);

//   try {
//     const schools = await getSchoolsAttended("Q0002");

//     expect(schools).toEqual([]);
//     expect(mockedGetEntities).toHaveBeenCalledTimes(1);
//   } finally {
//     // Restore original Promise.resolve
//     global.Promise.resolve = originalResolve;
//   }
// });

// test("getSchoolsAttended should handle errors gracefully", async () => {
//   // Mock getEntities to return URL
//   mockedGetEntities.mockReturnValueOnce("https://wikidata.org/api/Q0003");

//   // Mock the fetch to reject
//   const originalResolve = global.Promise.resolve;
//   global.Promise.resolve = vi
//     .fn()
//     .mockImplementationOnce(() => Promise.reject(new Error("Failed to fetch")));

//   try {
//     await expect(getSchoolsAttended("Q0003")).rejects.toThrow(
//       "Failed to fetch"
//     );
//     expect(mockedGetEntities).toHaveBeenCalledTimes(1);
//   } finally {
//     // Restore original Promise.resolve
//     global.Promise.resolve = originalResolve;
//   }
// });

// test("getSchoolsAttended should return empty array if entity is not found", async () => {
//   // Mock getEntities to return URL
//   mockedGetEntities.mockReturnValueOnce("https://wikidata.org/api/Q9999");

//   // Mock the fetch response for empty entities
//   const originalResolve = global.Promise.resolve;
//   global.Promise.resolve = vi
//     .fn()
//     .mockReturnValueOnce(Promise.resolve({ entities: {} }));

//   try {
//     const schools = await getSchoolsAttended("Q9999");

//     expect(schools).toEqual([]);
//     expect(mockedGetEntities).toHaveBeenCalledTimes(1);
//   } finally {
//     // Restore original Promise.resolve
//     global.Promise.resolve = originalResolve;
//   }
// });
// import { describe, expect, test } from 'vitest';

// import { add, greet, meaning } from './schools';

// describe('Schools', () => {
//   test('adds', () => {
//     expect(add(2, 3)).toEqual(5);
//   });
//   test('greets', () => {
//     expect(greet('world')).toEqual('schools says: hello to world');
//   });
//   test('meaning', () => {
//     expect(meaning.life).toEqual(42);
//   });
// });
