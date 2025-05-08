import { expect, test, vi, type Mock } from "vitest";
import axios from "axios";
import { handlePerson } from "./handle-entity.js";
import { claims } from "./mocks/einstein/claims.js";
import { type Entities } from "wikibase-sdk";

const fetchDate = new Date(2050, 0, 1);

const baseMap = new Map<string, Entities>([
  [
    "https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q9847&format=json&languages=en&props=labels%7Cdescriptions%7Caliases%7Cclaims",
    {
      Q376150: {
        pageid: 357966,
        ns: 0,
        title: "Q376150",
        lastrevid: 2332723365,
        modified: "2055-03-31T04:09:06Z",
        type: "item",
        id: "Q376150",
        labels: {
          en: {
            language: "en",
            value: "International Telecommunication Union",
          },
        },
        claims,
      },
    },
  ],
]);

vi.mock("axios");

test("gets person", async () => {
  // Mock the get method of axios to return a successful response
  const mockGet = axios.get as Mock;

  mockGet.mockImplementation(async (url: string) => {
    const entities = baseMap.get(url);
    if (!entities) {
      console.log(url);
      throw new Error("mock axios 404", { cause: url });
    }
    const data: { entities: Entities; success: 1 } = {
      entities,
      success: 1,
    };
    return {
      data,
      status: 200,
    };
  });

  const person = await handlePerson("Q9847", { fetchDate });
  expect(person).toEqual({
    aliases: [],
    birthYear: 0,
    fetchDate,
    id: "Q376150",
    name: "International Telecommunication Union",
    occupations: [],
    schools: [],
    sources: [],
  });

  // Ensure axios.get was called with the correct URL
  expect(axios.get).toHaveBeenCalledWith(
    "https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q9847&format=json&languages=en&props=labels%7Cdescriptions%7Caliases%7Cclaims"
  );
});

// test("fetchData should return JSON data when the API call is successful and returns JSON", async () => {
//   const mockResponseData = { message: "hello-world", status: "success" };
//   (axios.get as Mock).mockResolvedValue({
//     data: mockResponseData,
//     status: 200,
//     statusText: "OK",
//     headers: { "Content-Type": "application/json" },
//     config: {},
//   });

//   const data = await fetchData("fake-json-url");
//   expect(data).toEqual(mockResponseData);
//   expect(axios.get).toHaveBeenCalledWith("fake-json-url");
// });

// test("fetchData should throw an error when the API call fails", async () => {
//   // Mock the get method of axios to return a rejected promise (an error)
//   const errorMessage = "Request failed";
//   (axios.get as ViMock).mockRejectedValue(new Error(errorMessage));

//   await expect(fetchData("fake-error-url")).rejects.toThrow(errorMessage);
//   expect(axios.get).toHaveBeenCalledWith("fake-error-url");
// });
