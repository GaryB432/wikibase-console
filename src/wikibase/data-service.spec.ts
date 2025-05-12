import { beforeEach, describe, expect, test } from "vitest";
import { DataService } from "./data-service";

describe("DataService", () => {
  let dataService: DataService;

  beforeEach(() => {
    dataService = new DataService(
      {
        instance: "https://www.wikidata.org",
        sparqlEndpoint: "https://query.wikidata.org/sparql",
      },
      2
    );
  });
  test.skip("adds", () => {
    expect(dataService.add(3)).toEqual(5);
  });
  test.skip("greets", () => {
    expect(dataService.greet("world")).toEqual(
      "DataService says: hello to world"
    );
  });
});
