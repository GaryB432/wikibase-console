import axios from "axios";
import { expect, test, vi, type Mock } from "vitest";
import { type Entities } from "wikibase-sdk";
import { handlePerson } from "./handle-entity.js";
import { claims } from "./mocks/einstein/claims.js";

const fetchDate = new Date(2050, 0, 1);

const baseMap = new Map<string, Entities>([
  [
    "https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q9847&format=json&languages=en&props=labels%7Cdescriptions%7Caliases%7Cclaims",
    {
      Q9847: {
        pageid: 350001,
        ns: 0,
        title: "Q9847",
        lastrevid: 2332723365,
        modified: "2055-03-31T04:09:06Z",
        type: "item",
        id: "Q9847",
        labels: {
          en: {
            language: "en",
            value: "Fakey F. McFakerson Ⅴ",
          },
          fr: {
            language: "fr",
            value: "Uniquement pour le plaisir",
          },
        },
        claims,
      },
    },
  ],
  [
    "https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q9847&format=json&props=claims", // TODO add languages ?
    {
      Q9847: {
        pageid: 350001,
        ns: 0,
        title: "Q9847",
        lastrevid: 2332723365,
        modified: "2055-03-31T04:09:06Z",
        type: "item",
        id: "Q9847",
        claims,
      },
    },
  ],
  [
    "https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q11942%7CQ206702&format=json&languages=en&props=labels",
    {
      Q11942: {
        type: "item",
        id: "Q11942",
        labels: {
          en: {
            language: "en",
            value: "ETH Zurich",
          },
        },
      },
      Q206702: {
        type: "item",
        id: "Q206702",
        labels: {
          en: {
            language: "en",
            value: "University of Zurich",
          },
        },
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
      console.error(url);
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
    birthYear: 1879,
    deathYear: 1955,
    fetchDate,
    fieldOfWork: ["Anonymity", "Unit Testing"],
    id: "Q9847",
    name: "Fakey F. McFakerson Ⅴ",
    occupations: [],
    schools: ["ETH Zurich", "University of Zurich"],
    sources: [], // TODO assert wikidata
    wikipediaTitle: "Fakey F. McFakerson Ⅴ",
  });

  // Ensure axios.get was called with the correct URL
  expect(axios.get).toHaveBeenCalledWith(
    "https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q9847&format=json&languages=en&props=labels%7Cdescriptions%7Caliases%7Cclaims",
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
