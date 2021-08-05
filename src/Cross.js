// This component shows X when a cell is clicked
import React from "react";

function Cross() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90">
      <g
        fill="#000"
        stroke="#000"
        strokeWidth="0"
        fontFamily="Noto Sans JP"
        fontSize="24"
        textAnchor="start"
      >
        <text
          x="231"
          y="130"
          transform="matrix(4.51712 0 0 3.23675 -812.454 -242.443)"
          xmlSpace="preserve"
        >
          X
        </text>
        <text
          x="24.109"
          y="47.15"
          transform="matrix(2.55676 0 0 1.83922 -38.14 -25.203)"
          xmlSpace="preserve"
        >
          X
        </text>
      </g>
    </svg>
  );
}

export default Cross;
