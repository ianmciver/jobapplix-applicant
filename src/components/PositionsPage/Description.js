import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { media } from "../../constants/mediaQueries";

import { PositionContext } from "../../context/PositionContext";

import { ApplyButton } from "../BusinessPage/PositionsList";

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 20px 20px;
  width: 100%;
  max-width: 760px;
  h1 {
    font-size: 2.4rem;
    color: ${props => props.theme.title};
  }
  ${media.desktop`
    margin: 130px auto 0;
  `};
`;

const DescriptionDetails = styled.p`
  margin: 30px 0;
  font-size: 1.8rem;
  letter-spacing: -0.015rem;
  line-height: 28px;
  white-space: pre-line;
`;

const NextButton = styled(ApplyButton)`
  ${media.desktop`
    align-self: flex-end;
    margin-bottom: 20px;
  `};
`;

const Description = props => {
  const { details } = useContext(PositionContext);
  const nextStep = () => {
    props.history.push(props.nextPage);
  };
  return (
    <DescriptionContainer>
      <h1>About the Position:</h1>
      <DescriptionDetails>{details.description}</DescriptionDetails>
      <NextButton onClick={nextStep}>GET STARTED &rarr;</NextButton>
    </DescriptionContainer>
  );
};

export default withRouter(Description);
