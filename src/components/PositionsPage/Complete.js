import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";

import { GroupContainer } from "./QuestionsGroup";

import { ApplyButton } from "../BusinessPage/PositionsList";

const CompleteContainer = styled(GroupContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Info = styled.h1`
  font-size: 3.4rem;
  color: ${props => props.theme.jaBlue};
  margin-bottom: 50px;
  text-align: center;
`;

const SubInfo = styled.h2`
  font-size: 3rem;
  margin-bottom: 50px;
  text-align: center;
`;

const Complete = props => {
  return (
    <CompleteContainer>
      <Info>SUCCESS</Info>
      <SubInfo>Your Application is Complete</SubInfo>
      <Link to={`/${props.match.params.business}`}>
        <ApplyButton>BACK TO POSITIONS &rarr;</ApplyButton>
      </Link>
    </CompleteContainer>
  );
};

export default withRouter(Complete);
