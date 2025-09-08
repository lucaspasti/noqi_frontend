// components/AnimatedLogo.tsx
"use client";

import React from "react";

interface AnimatedLogoProps {
  width?: number;
  height?: number;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  width = 250,
  height = 75,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 300 100"
    >
      <text
        x="0"
        y="80"
        fontFamily="Arial, sans-serif"
        fontSize="80"
        fontWeight="bold"
      >
        <tspan fill="#333333">
          n
          <animate
            attributeName="fill"
            values="#333333;#666666;#999999;#333333"
            dur="4s"
            repeatCount="indefinite"
          />
        </tspan>
        <tspan fill="#444444">
          o
          <animate
            attributeName="fill"
            values="#444444;#777777;#bbbbbb;#444444"
            dur="4s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </tspan>
        <tspan fill="#555555">
          q
          <animate
            attributeName="fill"
            values="#555555;#888888;#cccccc;#555555"
            dur="4s"
            repeatCount="indefinite"
            begin="1s"
          />
        </tspan>
        <tspan fill="#666666">
          i
          <animate
            attributeName="fill"
            values="#666666;#999999;#dddddd;#666666"
            dur="4s"
            repeatCount="indefinite"
            begin="1.5s"
          />
        </tspan>
      </text>
    </svg>
  );
};
