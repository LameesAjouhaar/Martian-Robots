import { describe, it, expect } from "vitest";
import { turnLeft, turnRight } from "./direction";

describe("Direction Turns", () => {
  it("turnLeft rotates correctly", () => {
    expect(turnLeft("N")).toBe("W");
    expect(turnLeft("W")).toBe("S");
    expect(turnLeft("S")).toBe("E");
    expect(turnLeft("E")).toBe("N");
  });

  it("turnRight rotates correctly", () => {
    expect(turnRight("N")).toBe("E");
    expect(turnRight("E")).toBe("S");
    expect(turnRight("S")).toBe("W");
    expect(turnRight("W")).toBe("N");
  });
});
