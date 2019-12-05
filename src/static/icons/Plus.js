import React from "react";

export default props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <text
      transform="translate(0 18)"
      fill={props.fill}
      fontSize="29"
      fontFamily="Montserrat-Medium, Montserrat"
      fontWeight="500"
      letterSpacing="0.04em"
    >
      <tspan x="0" y="0">
        +
      </tspan>
    </text>
  </svg>
);
