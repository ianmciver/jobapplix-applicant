import React, { useContext } from "react";

import EduHistory from "./EduHistory";

import { PositionContext } from "../../context/PositionContext";
import { AddButton } from "./WorkHistoryGroup";

import { jaBlue } from "../../constants/colors";

const EduHistoryGroup = props => {
  const positionContext = useContext(PositionContext);
  return (
    <>
      {positionContext.eduHist.map((eduRef, index) => {
        return (
          <EduHistory
            eduRef={eduRef}
            index={index}
            key={index}
            updateEduHist={positionContext.updateEduHist}
          />
        );
      })}
      <AddButton onClick={e => positionContext.addEduHist()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="35"
          viewBox="0 0 17 35"
        >
          <text
            transform="translate(0 28)"
            fill={jaBlue}
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
        <p>ADD SCHOOL</p>
      </AddButton>
    </>
  );
};

export default EduHistoryGroup;
