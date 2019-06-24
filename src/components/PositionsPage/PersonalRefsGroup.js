import React, { useContext } from "react";

import PersonalRefs from "./PersonalRefs";

import { PositionContext } from "../../context/PositionContext";

const PersonalRefsGroup = props => {
  const positionContext = useContext(PositionContext);
  return (
    <>
      {positionContext.personalRefs.map((personalRef, index) => {
        return (
          <PersonalRefs
            personalRef={personalRef}
            index={index}
            key={index}
            updatePersonalRefs={positionContext.updatePersonalRefs}
          />
        );
      })}
    </>
  );
};

export default PersonalRefsGroup;
