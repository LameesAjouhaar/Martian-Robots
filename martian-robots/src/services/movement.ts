import type { Robot } from "../models/types";

export const getNextPosition = (robot: Robot): Robot => {
  const { x, y, direction } = robot;
  switch (direction) {
    case "N": return { ...robot, y: y + 1 };
    case "S": return { ...robot, y: y - 1 };
    case "E": return { ...robot, x: x + 1 };
    case "W": return { ...robot, x: x - 1 };
  }
};
