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
            value={props.answersGroup.group[question.id]}
            changeHandler={props.answersGroup.changeHandler}
            showLabel={!(props.group === "basic")}
          />
        );
      })}
    </>
  );
};

export default Questions;
