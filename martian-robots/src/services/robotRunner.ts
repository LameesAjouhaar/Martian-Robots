import type { Grid, Robot } from "../models/types";
import { turnLeft, turnRight } from "./direction";
import { getNextPosition } from "./movement";
import { hasScent, addScent } from "./scents";

// CommandHandler type
export type CommandHandler = (robot: Robot, grid: Grid) => Robot;

// Command registry
export const commandHandlers: Record<string, CommandHandler> = {
  L: (robot) => ({ ...robot, direction: turnLeft(robot.direction) }),
  R: (robot) => ({ ...robot, direction: turnRight(robot.direction) }),
  F: (robot, grid) => {
    const next = getNextPosition(robot);
    const offGrid =
      next.x < 0 || next.y < 0 || next.x > grid.maxX || next.y > grid.maxY;

    if (offGrid) {
      if (!hasScent(robot.x, robot.y)) {
        robot = { ...robot, lost: true };
        addScent(robot.x, robot.y);
      }
      return robot;
    }

    return next;
  },
};

// Main processor
export const processInstructions = (
  robot: Robot,
  grid: Grid,
  instructions: string
): Robot => {
  for (const cmd of instructions) {
    if (robot.lost) break;

    const handler = commandHandlers[cmd];
    if (!handler) {
      throw new Error(`Unknown command: ${cmd}`);
    }

    robot = handler(robot, grid);
  }

  return robot;
};

// Example: Adding a new command in the future
// commandHandlers["B"] = (robot, grid) => moveBackward(robot, grid);
