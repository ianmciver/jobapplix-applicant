import React, { useRef } from "react";
import styled from "styled-components";

const BoolContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const QuestionText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

const AnswerButton = styled.div`
  font-size: 1.1rem;
  width: 86px;
  height: 32px;
  border: 2px solid
    ${props => (props.selected ? props.theme.jaBlue : `rgba(0, 0, 0, 0.2)`)};
  border-radius: 7px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  background-color: ${props =>
    props.selected ? props.theme.jaBlue : props.theme.white};
  color: ${props => props.selected && props.theme.white};
  cursor: pointer;
  position: relative;
  z-index: 2;
`;

//Hidden Radio button is for accessibility reasons
const HiddenRadio = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

const BoolQuestion = props => {
  const trueBox = useRef(null);
  const falseBox = useRef(null);
  return (
    <BoolContainer>
      <QuestionText>{props.question}</QuestionText>
      <div>
        <HiddenRadio
          type="radio"
          name="true"
          onChange={props.changeHandler(props.id, true, props.sub)}
          checked={props.value}
          ref={trueBox}
          name={props.id}
        />
        <AnswerButton
          selected={props.value}
          onClick={() => trueBox.current.click()}
        >
          YES
        </AnswerButton>
        <HiddenRadio
          type="radio"
          name="true"
          onChange={props.changeHandler(props.id, false, props.sub)}
          checked={!props.value}
          ref={falseBox}
          name={props.id}
        />
        <AnswerButton
          selected={!props.value}
          onClick={() => falseBox.current.click()}
        >
          NO
        </AnswerButton>
      </div>
    </BoolContainer>
  );
};

export default BoolQuestion;
