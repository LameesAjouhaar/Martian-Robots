import { useState } from "react";

interface RobotFormProps {
  onRun: (input: string) => void;
  onFillSample?: () => void;
}

export const RobotForm = ({ onRun, onFillSample }: RobotFormProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRun(input);
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <h2>Martian Robots</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          rows={10}
          style={{ width: "100%" }}
          placeholder="Enter input..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit" style={{ marginTop: 10 }}>
          Run
        </button>

        {onFillSample && (
          <button
            type="button"
            style={{ marginLeft: 10, marginTop: 10 }}
            onClick={onFillSample}
          >
            Load Sample Input
          </button>
        )}
      </form>
    </div>
  );
};
