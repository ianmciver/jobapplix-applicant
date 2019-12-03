import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { dark, white } from "../../../constants/colors";

import {
  updateShiftTimesAnswer,
  updateAllShiftTimesAnswer
} from "../../../reduxSlices/PositionSlice";

const ShiftDayGroupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  outline: none;
  border: 1px solid ${dark};
  border-radius: 15px;
  height: 30px;
  width: 24%;
  max-width: 80px;
  background-color: ${props => (props.selected ? dark : white)};
  color: ${props => (props.selected ? white : dark)};
`;

const ShiftDayGroup = props => {
  const [allSelected, setAllSelected] = useState(false);
  const { updateShiftTimesAnswer, updateAllShiftTimesAnswer, details } = props;
  const { shiftTimes } = details;
  const formatShiftTime = time => {
    const shiftTime = time.split(":");
    const hour = Number(shiftTime[0]);
    const displayHour = hour <= 12 ? hour : hour % 12;
    const amPm = hour < 12 ? "a" : "p";
    return `${displayHour}${amPm}`;
  };

  const allSelector = () => {
    if (allSelected) {
      updateAllShiftTimesAnswer({
        [props.updateHandlerValues[0]]: false,
        [props.updateHandlerValues[1]]: false,
        [props.updateHandlerValues[2]]: false
      });
    } else {
      updateAllShiftTimesAnswer({
        [props.updateHandlerValues[0]]: true,
        [props.updateHandlerValues[1]]: true,
        [props.updateHandlerValues[2]]: true
      });
    }
    setAllSelected(!allSelected);
  };

  useEffect(() => {
    if (props.firstValue && props.secondValue && props.thirdValue) {
      setAllSelected(true);
    } else if (!props.firstValue || !props.secondValue || !props.thirdValue) {
      setAllSelected(false);
    }
  }, [props.firstValue, props.secondValue, props.thirdValue]);
  return (
    <ShiftDayGroupContainer>
      <Title>{props.title}</Title>
      <ButtonContainer>
        <Button
          selected={props.firstValue}
          onClick={e =>
            updateShiftTimesAnswer(
              props.updateHandlerValues[0],
              !props.firstValue
            )
          }
        >
          {formatShiftTime(shiftTimes.shift_one_begin)} -{" "}
          {formatShiftTime(shiftTimes.shift_one_end)}
        </Button>
        <Button
          selected={props.secondValue}
          onClick={e =>
            updateShiftTimesAnswer(
              props.updateHandlerValues[1],
              !props.secondValue
            )
          }
        >
          {formatShiftTime(shiftTimes.shift_two_begin)} -{" "}
          {formatShiftTime(shiftTimes.shift_two_end)}
        </Button>
        <Button
          selected={props.thirdValue}
          onClick={e =>
            updateShiftTimesAnswer(
              props.updateHandlerValues[2],
              !props.thirdValue
            )
          }
        >
          {formatShiftTime(shiftTimes.shift_three_begin)} -{" "}
          {formatShiftTime(shiftTimes.shift_three_end)}
        </Button>
        <Button onClick={allSelector} selected={allSelected}>
          ALL
        </Button>
      </ButtonContainer>
    </ShiftDayGroupContainer>
  );
};

export default connect(state => ({ details: state.position.details }), {
  updateShiftTimesAnswer,
  updateAllShiftTimesAnswer
})(ShiftDayGroup);
