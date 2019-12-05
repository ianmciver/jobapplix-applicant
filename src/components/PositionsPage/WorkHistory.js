import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { updateWorkHist } from "../../reduxSlices/PositionSlice";

import Text from "../Questions/Text";
import Bool from "../Questions/Bool";

const WorkHistoryGroup = styled.div`
  width: 100%;
  padding: 10px 15px;
  border: 2px solid ${props => props.theme.positionsBackground};
  border-radius: 5px;
  margin-bottom: 20px;

  &:nth-child(even) {
    background-color: ${props => props.theme.positionsBackground};
  }
`;

const WorkHistTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${props => props.theme.subTitle};
`;

const WorkHistory = props => {
  const { workRef, index } = props;

  const title = ind =>
    ind === 0 ? "Most Recent Position" : `Position #${ind + 1}`;

  const changeHandler = (_, key, value) => {
    props.updateWorkHist(index, key, value);
  };

  return (
    <WorkHistoryGroup>
      <WorkHistTitle>{title(index)}</WorkHistTitle>
      <Text
        labelVisible={false}
        value={workRef.employer_name}
        question={{ question: "Name of Employer" }}
        id="employer_name"
        changeHandler={changeHandler}
      />
      <Text
        labelVisible={false}
        value={workRef.phone}
        question={{ question: "Employers Phone Number" }}
        changeHandler={changeHandler}
        id="phone"
      />
      <Text
        labelVisible={false}
        value={workRef.address}
        question={{ question: "Address" }}
        changeHandler={changeHandler}
        id="address"
      />
      <Text
        labelVisible={false}
        value={workRef.supervisors_name}
        question={{ question: "Your Supervisor's Name" }}
        changeHandler={changeHandler}
        id="supervisors_name"
      />
      <Text
        labelVisible={false}
        value={workRef.title}
        question={{ question: "Your Title" }}
        changeHandler={changeHandler}
        id="title"
      />
      <Text
        labelVisible={false}
        value={workRef.duties}
        question={{ question: "Your Duties" }}
        changeHandler={changeHandler}
        id="duties"
      />
      <Text
        labelVisible={false}
        value={workRef.start_date}
        question={{ question: "Date You Started" }}
        changeHandler={changeHandler}
        id="start_date"
      />
      <Text
        labelVisible={false}
        value={workRef.end_date}
        question={{ question: "Date You Left" }}
        changeHandler={changeHandler}
        id="end_date"
      />
      <Text
        labelVisible={false}
        value={workRef.reason_for_leaving}
        question={{ question: "Your Reason for Leaving" }}
        changeHandler={changeHandler}
        id="reason_for_leaving"
      />
      <Bool
        question={{ question: "May we contact this employer?" }}
        value={workRef.can_contact}
        changeHandler={changeHandler}
        id="can_contact"
      />
    </WorkHistoryGroup>
  );
};

export default connect(null, { updateWorkHist })(WorkHistory);
