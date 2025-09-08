// components/ConnectingLine.tsx
"use client";

import React from "react";

interface ConnectingLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  stroke?: string;
  strokeWidth?: number;
  duration?: number;
}

export const ConnectingLine: React.FC<ConnectingLineProps> = ({
  x1,
  y1,
  x2,
  y2,
  stroke = "#2c3e50",
  strokeWidth = 2,
  duration = 2,
}) => {
  const length = Math.hypot(x2 - x1, y2 - y1);

  return (
    <svg
      style={{ position: "absolute", left: 0, top: 0, pointerEvents: "none" }}
      width="100%"
      height="100%"
    >
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={length}
        strokeDashoffset={length}
      >
        <animate
          attributeName="stroke-dashoffset"
          from={length}
          to="0"
          dur={`${duration}s`}
          repeatCount="indefinite"
        />
      </line>
    </svg>
  );
};
