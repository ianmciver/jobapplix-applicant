import React, { useState } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

import DownCaret from "../../static/icons/DownCaret";
import { changeHandler } from "../../reduxSlices/PositionSlice";

const MultiModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  display: ${props => (props.open ? "block" : "none")};
`;

const MultiContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

const QuestionText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

const MultiSelector = styled.div`
  height: 33px;
  overflow: ${props => (props.open ? "visible" : "hidden")};
  border: ${props => (props.open ? "none" : `2px solid rgba(0,0,0,0.2)`)};
  border-radius: 5px;
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  background-color: transparent;
`;

const MultiWindow = styled.div`
  padding-right: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  visibility: ${props => (props.open ? "hidden" : "visible")};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
  cursor: pointer;
`;

const MultiList = styled.div`
  position: relative;
  border: ${props => (props.open ? `2px solid rgba(0,0,0,0.2)` : "none")};
  border-radius: 5px;
  background-color: ${props => props.theme.white};
  height: ${props => props.length * 33}px;
  top: ${props =>
    css`
      ${props.valueIndex * -33}px
    `};
  left: -1px;
  z-index: ${props => (props.open ? 100 : 0)};
  display: inline-flex;
  flex-direction: column;
`;

const MultiOption = styled.div`
  height: 33px;
  padding-left: 8px;
  padding-right: 55px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  &:hover {
    background-color: ${props => props.theme.jaBlue};
    color: ${props => props.theme.white};
  }
  cursor: pointer;
`;

//TODO: accessibility

const MultiQuestion = props => {
  const { question, id, sub, changeHandler, value } = props;
  const [open, setOpen] = useState(false);
  const valueIndex = question.options.findIndex(item => item === value);
  const optionSelect = option => e => {
    changeHandler(question.group, id, sub, option);
  };

  return (
    <>
      <MultiModal open={open} onClick={() => setOpen(false)} />
      <MultiContainer>
        <QuestionText>{question.question}</QuestionText>
        <MultiSelector open={open}>
          <MultiWindow open={open} onClick={e => setOpen(true)}>
            <DownCaret />
          </MultiWindow>
          <MultiList
            open={open}
            valueIndex={valueIndex}
            onClick={() => setOpen(false)}
            length={question.options.length}
          >
            {question.options.map(option => {
              return (
                <MultiOption
                  key={option + Math.random()}
                  onClick={optionSelect(option)}
                >
                  {option}
                </MultiOption>
              );
            })}
          </MultiList>
        </MultiSelector>
      </MultiContainer>
    </>
  );
};

export default connect(null, { changeHandler })(MultiQuestion);
