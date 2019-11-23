import React, { useState } from "react";
import styled, { css } from "styled-components";

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

const MultiQuestion = props => {
  const [open, setOpen] = useState(false);
  const valueIndex = props.options.findIndex(item => item === props.value);
  console.log(valueIndex);
  return (
    <>
      <MultiModal open={open} onClick={() => setOpen(false)} />
      <MultiContainer>
        <QuestionText>{props.question}</QuestionText>
        <MultiSelector open={open}>
          <MultiWindow open={open} onClick={e => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.314"
              height="10.071"
              viewBox="0 0 17.314 10.071"
            >
              <path
                id="Path_76"
                data-name="Path 76"
                d="M630.786,5883.881l7.95,7.95,7.95-7.95"
                transform="translate(-630.079 -5883.174)"
                fill="none"
                stroke="#2b2d2d"
                strokeWidth="2"
              />
            </svg>
          </MultiWindow>
          <MultiList
            open={open}
            valueIndex={valueIndex}
            onClick={e => setOpen(false)}
            length={props.options.length}
          >
            {props.options.map(option => {
              return (
                <MultiOption
                  key={option + Math.random()}
                  onClick={props.changeHandler(props.id, option, props.sub)}
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

export default MultiQuestion;
