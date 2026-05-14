import { useState } from "react";

export default function WeeklyGoalCard() {
  const [goalsCompleted, setGoalsCompleted] = useState(2);

  const totalGoals = 7;

  const handleComplete = () => {
    if (goalsCompleted < totalGoals) {
      setGoalsCompleted(goalsCompleted + 1);
    }
  };

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "40px auto",
        padding: "24px",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Arial",
      }}
    >
      <h2>Weekly Goals</h2>

      <p style={{ marginTop: "10px" }}>
        Completed Goals: {goalsCompleted} / {totalGoals}
      </p>

      <div
        style={{
          width: "100%",
          height: "18px",
          backgroundColor: "#e5e7eb",
          borderRadius: "10px",
          overflow: "hidden",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            width: `${(goalsCompleted / totalGoals) * 100}%`,
            height: "100%",
            backgroundColor: "#10b981",
            transition: "0.3s",
          }}
        />
      </div>

      <button
        onClick={handleComplete}
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
        Complete Goal
      </button>
    </div>
  );
}