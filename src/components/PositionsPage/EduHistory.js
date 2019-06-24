import React from "react";

import styled from "styled-components";

import Text from "../Questions/Text";
import { validateNums } from "../../helpers";

import { positionsBackground } from "../../constants/colors";

const EduHistoryGroup = styled.div`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${positionsBackground};
  border-radius: 5px;
  margin-bottom: 10px;

  &:nth-child(even) {
    background-color: ${positionsBackground};
  }
`;

const EduHistTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const EduHistory = props => {
  const { eduRef, index } = props;
  const title = ind =>
    ind === 0 ? "Most Recent School" : `School #${ind + 1}`;
  const changeHandler = (key, value) => e => {
    props.updateEduHist(index, key, value);
  };
  return (
    <EduHistoryGroup>
      <EduHistTitle>{title(index)}</EduHistTitle>
      <Text
        labelVisible={false}
        value={eduRef.school_name}
        question="Name of School"
        changeHandler={changeHandler}
        id="school_name"
      />
      <Text
        labelVisible={false}
        value={eduRef.school_type}
        question="Type of School (eg: High School, University, etc.)"
        id="school_type"
        changeHandler={changeHandler}
      />
      <Text
        labelVisible={false}
        value={eduRef.location}
        question="Address of School"
        changeHandler={changeHandler}
        id="location"
      />
      <Text
        labelVisible={false}
        value={eduRef.field_of_study}
        question="Your Area of Study/Major"
        changeHandler={changeHandler}
        id="field_of_study"
      />
      <Text
        labelVisible={false}
        value={eduRef.degree}
        question="Type of Degree Earned"
        changeHandler={changeHandler}
        id="degree"
      />
      <Text
        labelVisible={false}
        value={eduRef.years_completed}
        question="Years Completed"
        changeHandler={changeHandler}
        validator={validateNums}
        id="years_completed"
      />
      <Text
        labelVisible={false}
        value={eduRef.phone}
        question="School's Phone Number"
        changeHandler={changeHandler}
        id="phone"
      />
    </EduHistoryGroup>
  );
};

export default EduHistory;
