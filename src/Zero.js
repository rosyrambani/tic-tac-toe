// This component shows O when a cell is clicked
import React from "react";

function Zero() {
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
          x="33.092"
          y="34.862"
          transform="matrix(2.87428 0 0 2.11712 -72.866 -12.027)"
          xmlSpace="preserve"
        >
          O
        </text>
      </g>
    </svg>
  );
}

export default Zero;
