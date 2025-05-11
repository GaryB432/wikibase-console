/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { expect, Mocked, MockedFunction, test, vi } from "vitest";
import WBK, {
    SimplifiedClaims,
    simplifyClaims,
    
    type Claim,
    type EntityId,
    type Item
} from "wikibase-sdk";

const language = "en";
const wbk = WBK({
  instance: "https://www.wikidata.org",
  sparqlEndpoint: "https://query.wikidata.org/sparql",
});

/**
 * Uses the Wikidata API and wikibase-sdk to simplify the process and leverages type discrimination.
 *
 * @param entityId - The Wikidata entity ID to query.
 * @returns A Promise that resolves to an array of simplified school names, or an empty array if no schools are found.
 */
const getSchoolsAttended = async (entityId: EntityId): Promise<string[]> => {
  try {
    // Construct the URL to query the Wikidata API for the specified entity.
    // WB_URL is provided by wikibase-sdk for the base URL.  NOT IT DOES NOT SEEM TO BE
    // const url = `${WB_URL}/w/api.php?action=wbgetentities&props=claims&ids=${entityId}&format=json`;

    const url = wbk.getEntities({
      ids: [entityId],
      languages: [language],
      // props: ["labels", "descriptions", "aliases", "claims"],
      props: ["claims"],
    });

    // Make the API request using axios.
    const response = await axios.get(url);

    // The response.data object contains the raw JSON response from the Wikidata API.
    const data = response.data;

    // Check if the entity was found in the response.
    if (!data.entities || !data.entities[entityId]) {
      console.warn(`Entity ${entityId} not found in Wikidata.`);
      return []; // Return an empty array to indicate no schools found.
    }

    const entity: Item = data.entities[entityId];

    // Extract the claims for the entity.
    const claims = entity.claims;

    if (!claims) {
      console.warn(`No claims found for entity ${entityId}`);
      return [];
    }

    const attendedSchoolClaims: Claim[] | undefined = claims.P69; // P69 is the property ID for "educated at"

    if (!attendedSchoolClaims) {
      console.warn(
        `No 'educated at' (P69) claims found for entity ${entityId}`
      );
      return [];
    }
    // Simplify the claims data using wikibase-sdk's simplifyClaims function.
    // This converts the complex claim structure into a more manageable format.

    const simplifiedClaims = simplifyClaims(claims);

    // Filter out any claims that don't have a simple value (e.g., if the claim is a complex object).
    const schoolEntityIds = Array.isArray(simplifiedClaims)
      ? simplifiedClaims.filter(
          (claim): claim is EntityId => typeof claim === "string"
        )
      : [];

    if (schoolEntityIds.length === 0) {
      return [];
    }
    // Fetch the entity data for the schools (the values of the P69 claims).
    const schoolEntitiesUrl = wbk.getEntities({
      ids: schoolEntityIds,
      languages: [language],
      props: ["labels"],
    });
    // const schoolEntitiesUrl = `${WB_URL}/w/api.php?action=wbgetentities&props=labels&ids=${schoolEntityIds.join(
    //   "|"
    // )}&format=json`;
    // const schoolEntitiesUrl = '';
    const schoolEntitiesResponse = await axios.get(schoolEntitiesUrl);
    const schoolEntitiesData = schoolEntitiesResponse.data;

    // Extract the school names from the entities data.
    const schoolNames: string[] = schoolEntityIds.map((schoolEntityId) => {
      const schoolEntity: Item | undefined =
        schoolEntitiesData.entities[schoolEntityId];
      return schoolEntity?.labels?.en?.value || schoolEntityId;
    });

    return schoolNames;
  } catch (error) {
    // Handle errors during the API request or data processing.
    if (axios.isAxiosError(error)) {
      console.error(
        `Error fetching data from Wikidata: ${error.message}`,
        error.response?.data
      );
    } else {
      console.error("An unexpected error occurred:", error);
    }
    throw error; // Re-throw the error to be caught by the caller.
  }
};

// // Example usage: Call the function and print the results.
// (async () => {
//   try {
//     const schools = await getSchoolsAttended(einsteinEntityId);
//     if (schools.length > 0) {
//       console.log(`Schools attended by ${einsteinEntityId} (Albert Einstein):`);
//       schools.forEach((school) => console.log(`- ${school}`));
//     } else {
//       console.log(
//         `No schools attended found for ${einsteinEntityId} (Albert Einstein).`
//       );
//     }
//   } catch (error) {
//     // Handle any errors that occurred during the process.
//     console.error("Failed to get schools attended:", error);
//   }
// })();




// import { test, expect, vi } from "vitest";
// import axios from "axios";
// import {
//   simplifyClaims,
//   Entity,
//   WB_URL,
//   Claim,
//   PropertyClaims,
//   WikibaseEntityId,
// } from "wikibase-sdk";

// Mock axios and wikibase-sdk
vi.mock("axios");
vi.mock("wikibase-sdk");

// // Import the function to be tested (adjust the path if needed)
// import { getSchoolsAttended } from "./handle-claims"; // Replace './your-file-path'

// // Override the imported functions with our mock implementations.
const mockedAxios = axios as Mocked<typeof axios>;

const mockedSimplifyClaims = simplifyClaims as MockedFunction<
  typeof simplifyClaims
>;

// const getEntities = getEntities as MockedFunction<tyypeof unknown>
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

test('getSchoolsAttended should return an empty array if the entity has no "educated at" claims', async () => {
  // Mock data where the entity has no P69 claims.
  const mockNoP69 = {
    entities: {
      Q0002: {
        // Entity Q0002 (fictional person with no schools)
        pageid: 234,
        ns: 0,
        title: "Q0002",
        lastrevid: 23456,
        modified: "2024-08-28T16:00:00Z",
        type: "item",
        id: "Q0002",
        claims: {}, // No claims at all
      },
    },
  };

  mockedAxios.get.mockResolvedValue({ data: mockNoP69 });
//   (WB_URL as any) = "https://mock.wikidata.org/w/api.php";
  mockedSimplifyClaims.mockReturnValue([] as unknown as SimplifiedClaims);

  const schools = await getSchoolsAttended("Q0002");
  expect(schools).toEqual([]);
  expect(mockedAxios.get).toHaveBeenCalledTimes(1);
});

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
