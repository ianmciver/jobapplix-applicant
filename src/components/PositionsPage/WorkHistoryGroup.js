import React, { useContext } from "react";
import styled from "styled-components";

import WorkHistory from "./WorkHistory";

import { PositionContext } from "../../context/PositionContext";

import { jaBlue } from "../../constants/colors";

export const AddButton = styled.div`
  color: ${jaBlue};
  align-self: flex-start;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  p {
    margin-left: 5px;
  }
`;

const WorkHistoryGroup = props => {
  const positionContext = useContext(PositionContext);
  return (
    <>
      {positionContext.workHist.map((workRef, index) => {
        return (
          <WorkHistory
            workRef={workRef}
            index={index}
            key={index}
            updateWorkHist={positionContext.updateWorkHist}
          />
        );
      })}
      <AddButton onClick={e => positionContext.addWorkHist()}>
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
        <p>ADD POSITION</p>
      </AddButton>
    </>
  );
};

export default WorkHistoryGroup;
