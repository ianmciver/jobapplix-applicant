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
  const { changeHandler, question, id, sub, value } = props;
  const trueBox = useRef(null);
  const falseBox = useRef(null);
  const boolSelect = bool => e => {
    changeHandler(question.group, id, bool, sub);
  };
  const questionText = sub ? question.sub_question : question.question;
  return (
    <BoolContainer>
      <QuestionText>{questionText}</QuestionText>
      <div>
        <HiddenRadio
          type="radio"
          onChange={boolSelect(true)}
          checked={value}
          ref={trueBox}
          name={id}
        />
        <AnswerButton selected={value} onClick={() => trueBox.current.click()}>
          YES
        </AnswerButton>
        <HiddenRadio
          type="radio"
          onChange={boolSelect(false)}
          checked={!value}
          ref={falseBox}
          name={id}
        />
        <AnswerButton
          selected={!value}
          onClick={() => falseBox.current.click()}
        >
          NO
        </AnswerButton>
      </div>
    </BoolContainer>
  );
};

export default BoolQuestion;
