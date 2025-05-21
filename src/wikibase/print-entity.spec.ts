import { describe, expect, test } from "vitest";

import { add, greet, meaning } from "./print-entity";

describe("PrintEntity", () => {
  test("adds", () => {
    expect(add(2, 3)).toEqual(5);
  });
  test("greets", () => {
    expect(greet("world")).toEqual("print-entity says: hello to world");
  });
  test("meaning", () => {
    expect(meaning.life).toEqual(42);
  });
});
