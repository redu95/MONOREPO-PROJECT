"use client";

import { useState } from "react";

type StudyTask = {
  id: number;
  subject: string;
  task: string;
  priority: "Low" | "Medium" | "High";
  completed: boolean;
};

const initialTasks: StudyTask[] = [
  {
    id: 1,
    subject: "React",
    task: "Review component props and reusable components",
    priority: "High",
    completed: false,
  },
  {
    id: 2,
    subject: "TypeScript",
    task: "Practice interfaces and type aliases",
    priority: "Medium",
    completed: false,
  },
  {
    id: 3,
    subject: "Monorepo",
    task: "Understand packages, apps, and shared utilities",
    priority: "High",
    completed: false,
  },
];

export default function StudyPlannerPage() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <main
      style={{
        maxWidth: "850px",
        margin: "40px auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          padding: "28px",
          borderRadius: "18px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ color: "#111827", marginBottom: "8px" }}>
          Study Planner
        </h1>

        <p style={{ color: "#6b7280", marginBottom: "24px" }}>
          Plan study tasks, track completion, and organize topics by priority.
        </p>

        <div
          style={{
            padding: "16px",
            borderRadius: "12px",
            backgroundColor: "#eff6ff",
            color: "#1d4ed8",
            fontWeight: "bold",
            marginBottom: "24px",
          }}
        >
          Completed Tasks: {completedCount}/{tasks.length}
        </div>

        <div style={{ display: "grid", gap: "16px" }}>
          {tasks.map((task) => (
            <div
              key={task.id}
              style={{
                padding: "18px",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                backgroundColor: task.completed ? "#f0fdf4" : "#f9fafb",
              }}
            >
              <h3 style={{ marginBottom: "6px", color: "#111827" }}>
                {task.subject}
              </h3>

              <p style={{ color: "#4b5563", marginBottom: "12px" }}>
                {task.task}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: "999px",
                    backgroundColor:
                      task.priority === "High"
                        ? "#fee2e2"
                        : task.priority === "Medium"
                        ? "#fef9c3"
                        : "#dcfce7",
                    color:
                      task.priority === "High"
                        ? "#991b1b"
                        : task.priority === "Medium"
                        ? "#854d0e"
                        : "#166534",
                    fontWeight: "bold",
                  }}
                >
                  Priority: {task.priority}
                </span>

                <button
                  onClick={() => toggleTask(task.id)}
                  style={{
                    padding: "8px 14px",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: task.completed ? "#16a34a" : "#2563eb",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  {task.completed ? "Completed" : "Mark Complete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
