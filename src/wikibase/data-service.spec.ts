import { beforeEach, describe, expect, test } from "vitest";
import { DataService } from "./data-service";

describe("DataService", () => {
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
});
