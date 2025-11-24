import { describe, it, expect } from "vitest";
import { processInstructions, commandHandlers } from "./../services/robotRunner";
import type { Robot, Grid } from "../models/types";

const grid: Grid = { maxX: 5, maxY: 5 };

describe("Robot Command Registry", () => {
  it("throws for unknown commands", () => {
    const robot: Robot = { x: 0, y: 0, direction: "N" };
    expect(() => processInstructions(robot, grid, "X")).toThrow(
      /Unknown command/
    );
  });

  it("can add new commands dynamically", () => {
    const robot: Robot = { x: 0, y: 0, direction: "N" };

    // Add a dummy 'B' command
    commandHandlers["B"] = (r : any) => ({ ...r, y: r.y - 1 });

    const result = processInstructions(robot, grid, "B");
    expect(result.y).toBe(-1);
  });
});
