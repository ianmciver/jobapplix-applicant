import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { media } from "../../constants/mediaQueries";
import { jaBlue, dark, white } from "../../constants/colors";

import { PositionContext } from "../../context/PositionContext";

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  max-width: 700px;
  h1 {
    font-size: 1.6rem;
  }
  ${media.desktop`
    margin: 50px auto 0;
    
  `};
`;

const DescriptionDetails = styled.p`
  margin: 30px;
  font-size: 1.2rem;
  line-height: 1.7rem;
  flex-grow: 1;
  white-space: pre-line;
`;

const GetStartedButton = styled.button`
  background-color: ${jaBlue};
  border: 2px solid ${dark};
  color: ${white};
  margin-bottom: 20px;
  height: 50px;
  width: 187px;
  border-radius: 25px;
  font-size: 1.3rem;
  outline: none;
`;

const Description = props => {
  const { details } = useContext(PositionContext);
  return (
    <DescriptionContainer>
      <h1>DESCRIPTION</h1>
      <DescriptionDetails>{details.description}</DescriptionDetails>
      <Link to={props.nextPage}>
        <GetStartedButton>GET STARTED</GetStartedButton>
      </Link>
    </DescriptionContainer>
  );
};

export default withRouter(Description);
