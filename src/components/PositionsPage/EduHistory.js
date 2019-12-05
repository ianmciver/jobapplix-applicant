import React from "react";

import styled from "styled-components";

import Text from "../Questions/Text";
import { validateNums } from "../../helpers";

const EduHistoryGroup = styled.div`
  width: 100%;
  padding: 10px 15px;
  border: 2px solid ${props => props.theme.positionsBackground};
  border-radius: 5px;
  margin-bottom: 20px;

  &:nth-child(even) {
    background-color: ${props => props.theme.positionsBackground};
  }
`;

const EduHistTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${props => props.theme.subTitle};
`;

const EduHistory = props => {
  const { eduRef, index } = props;
  const title = ind =>
    ind === 0 ? "Most Recent School" : `School #${ind + 1}`;
  const changeHandler = (_, key, value) => {
    props.updateEduHist(index, key, value);
  };
  return (
    <EduHistoryGroup>
      <EduHistTitle>{title(index)}</EduHistTitle>
      <Text
        labelVisible={false}
        value={eduRef.school_name}
        question={{
          question: "Name of School"
        }}
        changeHandler={changeHandler}
        id="school_name"
      />
      <Text
        labelVisible={false}
        value={eduRef.school_type}
        question={{
          question: "Type of School (eg: High School, University, etc.)"
        }}
        id="school_type"
        changeHandler={changeHandler}
      />
      <Text
        labelVisible={false}
        value={eduRef.location}
        question={{
          question: "Address of School"
        }}
        changeHandler={changeHandler}
        id="location"
      />
      <Text
        labelVisible={false}
        value={eduRef.field_of_study}
        question={{
          question: "Your Area of Study/Major"
        }}
        changeHandler={changeHandler}
        id="field_of_study"
      />
      <Text
        labelVisible={false}
        value={eduRef.degree}
        question={{
          question: "Type of Degree Earned"
        }}
        changeHandler={changeHandler}
        id="degree"
      />
      <Text
        labelVisible={false}
        value={eduRef.years_completed}
        question={{
          question: "Years Completed"
        }}
        changeHandler={changeHandler}
        validator={validateNums}
        id="years_completed"
      />
      <Text
        labelVisible={false}
        value={eduRef.phone}
        question={{
          question: "School's Phone Number"
        }}
        changeHandler={changeHandler}
        id="phone"
      />
    </EduHistoryGroup>
  );
};

export default EduHistory;
