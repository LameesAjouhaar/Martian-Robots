export type Direction = "N" | "S" | "E" | "W";

export interface Grid {
  maxX: number;
  maxY: number;
}

export interface Robot {
  x: number;
  y: number;
  direction: Direction;
  lost?: boolean;
}
