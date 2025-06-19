import { describe, expect, it } from "bun:test";
import { hello } from "./index";

describe("index", () => {
  it("should say hello world", () => {
    expect(hello).toBe("Hello world!");
  });
});
