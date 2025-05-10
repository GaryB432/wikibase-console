import { describe, expect, test } from "vitest";
import { handlePropertyClaims } from "./handle-claims";
import { type PersonInfo } from "./types";

describe("HandleClaims", () => {
  test.skip("handlePropertyClaims", async () => {
    const fakey: PersonInfo = {
      id: "Q34",
      name: "Bob",
      birthYear: 0,
      occupations: [],
      schools: [],
      fetchDate: expect.any(Date()),
      sources: [],
    };
    await handlePropertyClaims({ type: "item", id: "Q34", claims: {} }, fakey);

    expect(fakey).toBeUndefined();
  });
});
