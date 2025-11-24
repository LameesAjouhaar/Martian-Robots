import { useState } from "react";
import { RobotForm } from "./components/RobotForm";
import type { Grid, Robot } from "./models/types";
import { processInstructions } from "./services/robotRunner";

function App() {
  const [output, setOutput] = useState("");

  const runInput = (input: string) => {
    const lines = input.trim().split("\n");
    const [maxX, maxY] = lines[0].split(" ").map(Number);

    const grid: Grid = { maxX, maxY };
    const results: string[] = [];

    for (let i = 1; i < lines.length; i += 2) {
      const [x, y, dir] = lines[i].split(" ");
      const instructions = lines[i + 1];

      let robot: Robot = {
        x: Number(x),
        y: Number(y),
        direction: dir as any,
      };

      const finalState = processInstructions(grid, robot, instructions);

      const line = `${finalState.x} ${finalState.y} ${finalState.direction}${
        finalState.lost ? " LOST" : ""
      }`;

      results.push(line);
    }

    setOutput(results.join("\n"));
  };

  const fillSample = () => {
    const sample = `5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL`;
    setOutput("");
    runInput(sample);
  };

  return (
    <div style={{ padding: 20 }}>
      <RobotForm onRun={runInput} onFillSample={fillSample} />
      {output && (
        <pre
          style={{
            marginTop: 20,
            padding: 10,
            background: "#f4f4f4",
            borderRadius: 4,
          }}
        >
          {output}
        </pre>
      )}
    </div>
  );
}

export default App;
