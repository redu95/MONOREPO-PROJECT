import { useState } from "react";

export default function TaskOverviewCard() {
  const [completed, setCompleted] = useState(3);

  const totalTasks = 5;

  const completeTask = () => {
    if (completed < totalTasks) {
      setCompleted(completed + 1);
    }
  };

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "40px auto",
        padding: "24px",
        borderRadius: "14px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Arial",
      }}
    >
      <h2>Task Overview</h2>

      <div style={{ marginTop: "20px" }}>
        <p>
          Completed Tasks: <strong>{completed}</strong>
        </p>

        <p>
          Remaining Tasks: <strong>{totalTasks - completed}</strong>
        </p>
      </div>

      <div
        style={{
          marginTop: "15px",
          height: "20px",
          backgroundColor: "#e5e7eb",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${(completed / totalTasks) * 100}%`,
            height: "100%",
            backgroundColor: "#3b82f6",
            transition: "0.3s",
          }}
        />
      </div>

      <button
        onClick={completeTask}
        style={{
          marginTop: "20px",
          padding: "10px 18px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
      >
        Complete Task
      </button>
    </div>
  );
}