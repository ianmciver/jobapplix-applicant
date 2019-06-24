import React from "react";
import styled from "styled-components";

import { dark, jaBlue, white } from "../../constants/colors";

const BoolContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const QuestionText = styled.p`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

const AnswerButton = styled.div`
  font-size: 1.1rem;
  width: 86px;
  height: 32px;
  border: 2px solid ${dark};
  border-radius: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  background-color: ${props => props.selected && jaBlue};
  color: ${props => props.selected && white};
  cursor: pointer;
`;

const BoolQuestion = props => {
  return (
    <BoolContainer>
      <QuestionText>{props.question}</QuestionText>
      <div>
        <AnswerButton
          selected={props.value}
          onClick={props.changeHandler(props.id, true, props.sub)}
        >
          YES
        </AnswerButton>
        <AnswerButton
          selected={!props.value}
          onClick={props.changeHandler(props.id, false, props.sub)}
        >
          NO
        </AnswerButton>
      </div>
    </BoolContainer>
  );
};

export default BoolQuestion;
