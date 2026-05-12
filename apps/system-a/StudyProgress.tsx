import { useState } from "react";

export default function StudyProgress() {
  const [progress, setProgress] = useState(20);

  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "25px",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h2>Study Progress Tracker</h2>

      <div
        style={{
          height: "25px",
          width: "100%",
          backgroundColor: "#e5e7eb",
          borderRadius: "20px",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#22c55e",
            transition: "0.3s",
          }}
        />
      </div>

      <p style={{ marginTop: "15px" }}>{progress}% Completed</p>

      <button
        onClick={increaseProgress}
        style={{
          marginTop: "10px",
          padding: "10px 18px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
      >
        Increase Progress
      </button>
    </div>
  );
}