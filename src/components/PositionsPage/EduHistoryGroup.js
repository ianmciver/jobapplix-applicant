import React from "react";
import { connect } from "react-redux";

import { addEduHist, updateEduHist } from "../../reduxSlices/PositionSlice";

import Plus from "../../static/icons/Plus";

import EduHistory from "./EduHistory";

import { AddButton } from "./WorkHistoryGroup";

import { jaBlue } from "../../constants/colors";

const EduHistoryGroup = props => {
  return (
    <>
      {props.eduHist.map((eduRef, index) => {
        return (
          <EduHistory
            eduRef={eduRef}
            index={index}
            key={index}
            updateEduHist={props.updateEduHist}
          />
        );
      })}
      <AddButton onClick={e => props.addEduHist()}>
        <Plus fill={jaBlue} />
        <p>ADD SCHOOL</p>
      </AddButton>
    </>
  );
};

export default connect(state => ({ eduHist: state.position.eduHist }), {
  addEduHist,
  updateEduHist
})(EduHistoryGroup);
