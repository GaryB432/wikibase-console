import { expect, jest, test } from "@jest/globals";
import { greet } from "../src/greet.js";

test("greet function logs a greeting", () => {
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  greet("Alice");
  expect(logSpy).toHaveBeenCalledWith("Hello, Alice!");
});
