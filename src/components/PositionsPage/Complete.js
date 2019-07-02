import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { jaBlue, white, dark } from "../../constants/colors";
import { GroupContainer } from "./QuestionsGroup";

const CompleteContainer = styled(GroupContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Info = styled.h1`
  font-size: 3.4rem;
  color: ${jaBlue};
  margin-bottom: 50px;
  text-align: center;
`;

const Button = styled.button`
  outline: none;
  font-size: 1.3rem;
  color: ${white};
  background-color: ${jaBlue};
  border: 2px solid ${dark};
  border-radius: 24px;
  height: 48px;
  width: 186px;
  cursor: pointer;
`;

const Complete = props => {
  return (
    <CompleteContainer>
      <Info>SUCCESS! YOUR APPLICATION IS COMPLETE!</Info>
      <Link to={`/${props.match.params.business}`}>
        <Button>BACK TO POSITIONS</Button>
      </Link>
    </CompleteContainer>
  );
};

export default withRouter(Complete);
