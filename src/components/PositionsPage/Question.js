import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { changeHandler } from "../../reduxSlices/PositionSlice";
import Text from "../Questions/Text";
import BoolQuestion from "../Questions/Bool";
import Multi from "../Questions/Multi";

const QuestionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const SubQuestionContainer = styled.div`
  margin-top: 5px;
`;

const Question = props => {
  const { question, value, changeHandler, showLabel } = props;
  return (
    <QuestionsContainer>
      {question.type === "text" && (
        <Text
          question={question}
          value={value.value}
          sub={false}
          id={question.id}
          labelVisible={showLabel}
          changeHandler={changeHandler}
        />
      )}
      {question.type === "bool" && (
        <BoolQuestion
          question={question}
          value={value.value}
          sub={false}
          id={question.id}
          changeHandler={changeHandler}
        />
      )}
      {question.type === "multi" && (
        <Multi
          question={question}
          value={value.value}
          sub={false}
          id={question.id}
          changeHandler={changeHandler}
        />
      )}
      {question.sub_question && value.value ? (
        <SubQuestionContainer>
          {question.sub_type === "text" && (
            <Text
              question={question}
              value={value.subValue}
              sub={true}
              id={question.id}
              labelVisible={showLabel}
              changeHandler={changeHandler}
            />
          )}
          {question.sub_type === "bool" && (
            <BoolQuestion
              question={question}
              value={value.subValue}
              sub={true}
              id={question.id}
              changeHandler={changeHandler}
            />
          )}
        </SubQuestionContainer>
      ) : null}
    </QuestionsContainer>
  );
};

export default connect(null, { changeHandler })(Question);
