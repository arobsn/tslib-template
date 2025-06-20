import { describe, expect, it } from "vitest";
import { hello } from "./index";

describe("index", () => {
  it("should say hello world", () => {
    expect(hello).toBe("Hello world!");
  });
});
