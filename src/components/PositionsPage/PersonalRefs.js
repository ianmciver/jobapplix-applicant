import React from "react";
import styled from "styled-components";

import Text from "../Questions/Text";
import { validateNums } from "../../helpers";

import { positionsBackground } from "../../constants/colors";

const PersonalRefsGroup = styled.div`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${positionsBackground};
  border-radius: 5px;
  margin-bottom: 10px;

  &:nth-child(even) {
    background-color: ${positionsBackground};
  }
`;

const PersonalRefsTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const PersonalRefs = props => {
  const { personalRef, index } = props;
  const title = ind => `Reference #${ind + 1}`;
  const changeHandler = (key, value) => e => {
    props.updatePersonalRefs(index, key, value);
  };
  return (
    <PersonalRefsGroup>
      <PersonalRefsTitle>{title(index)}</PersonalRefsTitle>
      <Text
        labelVisible={false}
        value={personalRef.name}
        question="Name"
        changeHandler={changeHandler}
        id="name"
      />
      <Text
        labelVisible={false}
        value={personalRef.address}
        question="Address"
        id="address"
        changeHandler={changeHandler}
      />
      <Text
        labelVisible={false}
        value={personalRef.phone}
        question="Phone Number"
        changeHandler={changeHandler}
        id="phone"
      />
      <Text
        labelVisible={false}
        value={personalRef.email}
        question="Email"
        changeHandler={changeHandler}
        id="email"
      />
      <Text
        labelVisible={false}
        value={personalRef.relationship}
        question="Your Relationship"
        changeHandler={changeHandler}
        id="relationship"
      />
      <Text
        labelVisible={false}
        value={personalRef.years_known}
        question="Years Known"
        changeHandler={changeHandler}
        validator={validateNums}
        id="years_known"
      />
    </PersonalRefsGroup>
  );
};

export default PersonalRefs;
