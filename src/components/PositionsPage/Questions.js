import React from "react";
import Question from "./Question";

const Questions = props => {
  return (
    <>
      {props.questions.map(question => {
        return (
          <Question
            key={question.id}
            question={question}
            value={props.answersGroup[question.id]}
            showLabel={!(props.group === "basic")}
          />
        );
      })}
    </>
  );
};

export default Questions;
