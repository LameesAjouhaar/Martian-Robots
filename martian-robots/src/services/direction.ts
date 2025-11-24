import type { Direction } from "../models/types";

const leftTurn: Record<Direction, Direction> = {
  N: "W",
  W: "S",
  S: "E",
  E: "N",
};

const rightTurn: Record<Direction, Direction> = {
  N: "E",
  E: "S",
  S: "W",
  W: "N",
};

export const turnLeft = (d: Direction): Direction => leftTurn[d];
export const turnRight = (d: Direction): Direction => rightTurn[d];
