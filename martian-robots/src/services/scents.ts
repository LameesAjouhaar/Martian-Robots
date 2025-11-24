const scents = new Set<string>();

export const hasScent = (x: number, y: number) => scents.has(`${x},${y}`);
export const addScent = (x: number, y: number) => scents.add(`${x},${y}`);
