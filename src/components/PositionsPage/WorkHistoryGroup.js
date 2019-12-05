import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { addWorkHist } from "../../reduxSlices/PositionSlice";

import WorkHistory from "./WorkHistory";

import { jaBlue } from "../../constants/colors";
import Plus from "../../static/icons/Plus";

export const AddButton = styled.div`
  color: ${jaBlue};
  align-self: flex-start;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  border: 2px solid ${props => props.theme.jaBlue};
  border-radius: 5px;
  padding: 7px 5px;
  background-color: ${props => props.theme.white};
  p {
    margin-left: 5px;
  }

  &:hover {
    background-color: ${props => props.theme.jaBlue};
    color: ${props => props.theme.white};

    svg {
      text {
        fill: ${props => props.theme.white};
      }
    }
  }
`;

const WorkHistoryGroup = props => {
  return (
    <>
      {props.workHist.map((workRef, index) => {
        return (
          <WorkHistory
            workRef={workRef}
            index={index}
            key={index}
            updateWorkHist={props.updateWorkHist}
          />
        );
      })}
      <AddButton onClick={e => props.addWorkHist()}>
        <Plus fill={jaBlue} />
        <p>ADD POSITION</p>
      </AddButton>
    </>
  );
};

export default connect(state => ({ workHist: state.position.workHist }), {
  addWorkHist
})(WorkHistoryGroup);
