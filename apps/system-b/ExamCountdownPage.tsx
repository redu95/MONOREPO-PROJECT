"use client";

import { useEffect, useState } from "react";

export default function ExamCountdownPage() {
  const examDate = new Date("2026-06-20T09:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = examDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (difference % (1000 * 60 * 60)) /
          (1000 * 60)
      ),
      seconds: Math.floor(
        (difference % (1000 * 60)) / 1000
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f4f6",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          Exam Countdown
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Track the remaining time before the final examination.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                backgroundColor: "#eff6ff",
                padding: "28px",
                borderRadius: "18px",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  fontWeight: "bold",
                  color: "#2563eb",
                  marginBottom: "10px",
                }}
              >
                {item.value}
              </div>

              <div
                style={{
                  color: "#374151",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "40px",
            padding: "18px",
            borderRadius: "14px",
            backgroundColor: "#f9fafb",
            color: "#374151",
            fontSize: "16px",
          }}
        >
          Stay consistent with your study schedule and complete
          your revision before the exam date.
        </div>
      </section>
    </main>
  );
}
