import React from "react";
import styled from "styled-components";
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
  const { question, value, changeHandler } = props;
  return (
    <QuestionsContainer>
      {question.type === "text" && (
        <Text
          question={question.question}
          value={value.value}
          changeHandler={changeHandler}
          sub={false}
          id={question.id}
          labelVisible={props.showLabel}
        />
      )}
      {question.type === "bool" && (
        <BoolQuestion
          question={question.question}
          value={value.value}
          changeHandler={changeHandler}
          sub={false}
          id={question.id}
        />
      )}
      {question.type === "multi" && (
        <Multi
          options={question.options}
          question={question.question}
          value={value.value}
          changeHandler={changeHandler}
          sub={false}
          id={question.id}
        />
      )}
      {question.sub_question && value.value ? (
        <SubQuestionContainer>
          {question.sub_type === "text" && (
            <Text
              question={question.sub_question}
              value={value.subValue}
              changeHandler={changeHandler}
              sub={true}
              id={question.id}
              labelVisible={props.showLabel}
            />
          )}
          {question.sub_type === "bool" && (
            <BoolQuestion
              question={question.sub_question}
              value={value.subValue}
              changeHandler={changeHandler}
              sub={true}
              id={question.id}
            />
          )}
        </SubQuestionContainer>
      ) : null}
    </QuestionsContainer>
  );
};

export default Question;
