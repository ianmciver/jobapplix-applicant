import React, { useContext } from "react";

import { PositionContext } from "../../../context/PositionContext";

import ShiftDayGroup from "./ShiftDayGroup";

const ShiftTimes = props => {
  const positionContext = useContext(PositionContext);
  const shiftTimesAnswers =
    positionContext && positionContext.shiftTimesAnswers;
  return (
    <>
      {positionContext &&
      positionContext.details &&
      positionContext.details.shiftTimes ? (
        <>
          <ShiftDayGroup
            title="MONDAY"
            firstValue={shiftTimesAnswers.mon_first}
            secondValue={shiftTimesAnswers.mon_second}
            thirdValue={shiftTimesAnswers.mon_third}
            updateHandler={positionContext.updateShiftTimesAnswer}
            updateHandlerValues={["mon_first", "mon_second", "mon_third"]}
          />
          <ShiftDayGroup
            title="TUESDAY"
            firstValue={shiftTimesAnswers.tues_first}
            secondValue={shiftTimesAnswers.tues_second}
            thirdValue={shiftTimesAnswers.tues_third}
            updateHandler={positionContext.updateShiftTimesAnswer}
            updateAllShiftTimesHandler={
              positionContext.updateAllShiftTimesHandler
            }
            updateHandlerValues={["tues_first", "tues_second", "tues_third"]}
          />
          <ShiftDayGroup
            title="WEDNESDAY"
            firstValue={shiftTimesAnswers.wed_first}
            secondValue={shiftTimesAnswers.wed_second}
            thirdValue={shiftTimesAnswers.wed_third}
            updateHandler={positionContext.updateShiftTimesAnswer}
            updateHandlerValues={["wed_first", "wed_second", "wed_third"]}
          />
          <ShiftDayGroup
            title="THURSDAY"
            firstValue={shiftTimesAnswers.thurs_first}
            secondValue={shiftTimesAnswers.thurs_second}
            thirdValue={shiftTimesAnswers.thurs_third}
            updateHandler={positionContext.updateShiftTimesAnswer}
            updateHandlerValues={["thurs_first", "thurs_second", "thurs_third"]}
          />
          <ShiftDayGroup
            title="FRIDAY"
            firstValue={shiftTimesAnswers.fri_first}
            secondValue={shiftTimesAnswers.fri_second}
            thirdValue={shiftTimesAnswers.fri_third}
            updateHandler={positionContext.updateShiftTimesAnswer}
            updateHandlerValues={["fri_first", "fri_second", "fri_third"]}
          />
          <ShiftDayGroup
            title="SATURDAY"
            firstValue={shiftTimesAnswers.sat_first}
            secondValue={shiftTimesAnswers.sat_second}
            thirdValue={shiftTimesAnswers.sat_third}
            updateHandler={positionContext.updateShiftTimesAnswer}
            updateHandlerValues={["sat_first", "sat_second", "sat_third"]}
          />
          <ShiftDayGroup
            title="SUNDAY"
            firstValue={shiftTimesAnswers.sun_first}
            secondValue={shiftTimesAnswers.sun_second}
            thirdValue={shiftTimesAnswers.sun_third}
            updateHandler={positionContext.updateShiftTimesAnswer}
            updateHandlerValues={["sun_first", "sun_second", "sun_third"]}
          />
        </>
      ) : (
        <div>LOADING</div>
      )}
    </>
  );
};

export default ShiftTimes;
