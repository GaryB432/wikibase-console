/* eslint-disable @typescript-eslint/no-unused-vars */
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
