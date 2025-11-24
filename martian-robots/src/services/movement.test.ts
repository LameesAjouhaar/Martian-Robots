import { describe, it, expect } from "vitest";
import { getNextPosition } from "./movement";

describe("Forward Movement", () => {
  it("moves forward in correct direction", () => {
    expect(getNextPosition({ x: 1, y: 1, direction: "N" })).toEqual({
      x: 1,
      y: 2,
      direction: "N",
    });

    expect(getNextPosition({ x: 1, y: 1, direction: "E" })).toEqual({
      x: 2,
      y: 1,
      direction: "E",
    });
  });
});
