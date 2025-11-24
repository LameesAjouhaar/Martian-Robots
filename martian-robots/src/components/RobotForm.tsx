import { useState } from "react";
import "./RobotForm.css";

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
    <div className="robot-form-container">
      <h2 className="robot-form-title">Martian Robots</h2>

      <form onSubmit={handleSubmit}>
        <label className="robot-form-label">Input Commands</label>

        <textarea
          rows={10}
          className="robot-textarea"
          placeholder="Enter robot instructions..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="robot-button-group">
          <button type="submit" className="robot-btn robot-btn-primary">
            Run
          </button>

          {onFillSample && (
            <button
              type="button"
              className="robot-btn robot-btn-secondary"
              onClick={onFillSample}
            >
              Load Sample
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
