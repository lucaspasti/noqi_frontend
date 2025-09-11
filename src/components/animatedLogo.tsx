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
        {/* Letra 'n' */}
        <tspan>
          n
          <animate
            attributeName="fill"
            values="#F87171;#ED8989;#C499C4;#9FA6E2;#60A5FA;#9FA6E2;#C499C4;#ED8989;#F87171"
            dur="6s"
            repeatCount="indefinite"
            keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
          />
        </tspan>

        {/* Letra 'o' */}
        <tspan>
          o
          <animate
            attributeName="fill"
            values="#F87171;#ED8989;#C499C4;#9FA6E2;#60A5FA;#9FA6E2;#C499C4;#ED8989;#F87171"
            dur="6s"
            repeatCount="indefinite"
            begin="0.75s"
            keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
          />
        </tspan>

        {/* Letra 'q' */}
        <tspan>
          q
          <animate
            attributeName="fill"
            values="#F87171;#ED8989;#C499C4;#9FA6E2;#60A5FA;#9FA6E2;#C499C4;#ED8989;#F87171"
            dur="6s"
            repeatCount="indefinite"
            begin="1.5s"
            keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
          />
        </tspan>

        {/* Letra 'i' */}
        <tspan>
          i
          <animate
            attributeName="fill"
            values="#F87171;#ED8989;#C499C4;#9FA6E2;#60A5FA;#9FA6E2;#C499C4;#ED8989;#F87171"
            dur="6s"
            repeatCount="indefinite"
            begin="2.25s"
            keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
          />
        </tspan>
      </text>
    </svg>
  );
};
