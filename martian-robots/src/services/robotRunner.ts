import type { Grid, Robot } from "../models/types";
import { turnLeft, turnRight } from "./direction";
import { getNextPosition } from "./movement";
import { hasScent, addScent } from "./scents";

export const processInstructions = (
  grid: Grid,
  robot: Robot,
  instructions: string
): Robot => {

  for (const cmd of instructions) {
    if (robot.lost) break;

    if (cmd === "L") robot.direction = turnLeft(robot.direction);
    else if (cmd === "R") robot.direction = turnRight(robot.direction);
    else if (cmd === "F") {
      const next = getNextPosition(robot);

      const offGrid =
        next.x < 0 || next.y < 0 ||
        next.x > grid.maxX || next.y > grid.maxY;

      if (offGrid) {
        if (!hasScent(robot.x, robot.y)) {
          robot.lost = true;
          addScent(robot.x, robot.y);
        }
      } else {
        robot = next;
      }
    }
  }

  return robot;
};
