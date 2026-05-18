"use client";

import { useMemo } from "react";

type StreakDay = {
  day: string;
  studied: boolean;
};

const weeklyData: StreakDay[] = [
  { day: "Mon", studied: true },
  { day: "Tue", studied: true },
  { day: "Wed", studied: true },
  { day: "Thu", studied: false },
  { day: "Fri", studied: true },
  { day: "Sat", studied: true },
  { day: "Sun", studied: false },
];

export default function StudyStreakPage() {
  const currentStreak = useMemo(() => {
    let streak = 0;

    for (let i = weeklyData.length - 1; i >= 0; i--) {
      if (weeklyData[i].studied) {
        streak++;
      } else {
        break;
      }
    }

    return streak;
  }, []);

  const totalDaysStudied = weeklyData.filter(
    (item) => item.studied
  ).length;

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "34px",
            marginBottom: "10px",
            color: "#111827",
          }}
        >
          Study Streak Tracker
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "28px",
          }}
        >
          Monitor daily study consistency and maintain learning
          streaks.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              padding: "24px",
              borderRadius: "16px",
              backgroundColor: "#eff6ff",
            }}
          >
            <h2
              style={{
                color: "#2563eb",
                marginBottom: "10px",
              }}
            >
              Current Streak
            </h2>

            <div
              style={{
                fontSize: "42px",
                fontWeight: "bold",
                color: "#1d4ed8",
              }}
            >
              {currentStreak} Days
            </div>
          </div>

          <div
            style={{
              padding: "24px",
              borderRadius: "16px",
              backgroundColor: "#f0fdf4",
            }}
          >
            <h2
              style={{
                color: "#15803d",
                marginBottom: "10px",
              }}
            >
              Total Active Days
            </h2>

            <div
              style={{
                fontSize: "42px",
                fontWeight: "bold",
                color: "#166534",
              }}
            >
              {totalDaysStudied}/7
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(90px, 1fr))",
            gap: "14px",
          }}
        >
          {weeklyData.map((item) => (
            <div
              key={item.day}
              style={{
                padding: "18px",
                borderRadius: "14px",
                textAlign: "center",
                backgroundColor: item.studied
                  ? "#dcfce7"
                  : "#fee2e2",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "#111827",
                }}
              >
                {item.day}
              </div>

              <div
                style={{
                  fontSize: "28px",
                }}
              >
                {item.studied ? "🔥" : "❌"}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
