import React from "react";
import { connect } from "react-redux";

import {} from "../../reduxSlices/PositionSlice";

import PersonalRefs from "./PersonalRefs";

const PersonalRefsGroup = props => {
  return (
    <>
      {props.personalRefs.map((personalRef, index) => {
        return (
          <PersonalRefs personalRef={personalRef} index={index} key={index} />
        );
      })}
    </>
  );
};

export default connect(state => ({
  personalRefs: state.position.personalRefs
}))(PersonalRefsGroup);
