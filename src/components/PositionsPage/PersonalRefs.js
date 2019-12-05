import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { updatePersonalRefs } from "../../reduxSlices/PositionSlice";

import Text from "../Questions/Text";
import { validateNums } from "../../helpers";

const PersonalRefsGroup = styled.div`
  width: 100%;
  padding: 10px 15px;
  border: 2px solid ${props => props.theme.positionsBackground};
  border-radius: 5px;
  margin-bottom: 20px;

  &:nth-child(even) {
    background-color: ${props => props.theme.positionsBackground};
  }
`;

const PersonalRefsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${props => props.theme.subTitle};
`;

const PersonalRefs = props => {
  const { personalRef, index } = props;
  const title = ind => `Reference #${ind + 1}`;
  const changeHandler = (_, key, value) => {
    props.updatePersonalRefs(index, key, value);
  };
  return (
    <PersonalRefsGroup>
      <PersonalRefsTitle>{title(index)}</PersonalRefsTitle>
      <Text
        labelVisible={false}
        value={personalRef.name}
        question={{ question: "Name" }}
        changeHandler={changeHandler}
        id="name"
      />
      <Text
        labelVisible={false}
        value={personalRef.address}
        question={{ question: "Address" }}
        id="address"
        changeHandler={changeHandler}
      />
      <Text
        labelVisible={false}
        value={personalRef.phone}
        question={{ question: "Phone Number" }}
        changeHandler={changeHandler}
        id="phone"
      />
      <Text
        labelVisible={false}
        value={personalRef.email}
        question={{ question: "Email" }}
        changeHandler={changeHandler}
        id="email"
      />
      <Text
        labelVisible={false}
        value={personalRef.relationship}
        question={{ question: "Your Relationship" }}
        changeHandler={changeHandler}
        id="relationship"
      />
      <Text
        labelVisible={false}
        value={personalRef.years_known}
        question={{ question: "Years Known" }}
        changeHandler={changeHandler}
        validator={validateNums}
        id="years_known"
      />
    </PersonalRefsGroup>
  );
};

export default connect(null, { updatePersonalRefs })(PersonalRefs);
