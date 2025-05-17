import axios from "axios";
import { beforeEach, expect, test, vi } from "vitest";
import { DataService } from "./data-service";

vi.mock("axios");

let dataService: DataService;

beforeEach(() => {
  dataService = new DataService({
    instance: "https://www.fakewiki.org",
    sparqlEndpoint: "https://query.fakewiki.org/sparql",
  });
});
test("it exists", () => {
  expect(dataService).toBeDefined();
});

test("fetchLabels", async () => {
  const mockGet = vi.spyOn(axios, "get").mockResolvedValue({
    data: {
      entities: {
        Q1001: {
          id: "Q1001",
          type: "item",
          labels: { en: { language: "en", value: "ENTITY 001" } },
        },
        Q1002: {
          id: "Q1002",
          type: "item",
          labels: { en: { language: "en", value: "ENTITY 002" } },
        },
        Q1003: {
          id: "Q1003",
          type: "item",
          labels: { en: { language: "en", value: "ENTITY 003c" } },
        },
      },
      success: 1,
    },
  });

  const labels = await dataService.fetchLabels(
    {
      Q1001: "DUNNO 001",
      Q1002: "DUNNO 002",
      Q1003: "WHATEVER 003",
    },
    "en",
  );
  expect(labels).toEqual({
    Q1001: "ENTITY 001",
    Q1002: "ENTITY 002",
    Q1003: "ENTITY 003c",
  });

  expect(mockGet).toHaveBeenCalledTimes(1);
});
