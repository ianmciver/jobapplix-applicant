import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import ProgressBar from "./ProgressBar";
import styled from "styled-components";
import { PositionContext } from "../../context/PositionContext";

import { dark, jaBlue, white } from "../../constants/colors";
import { media } from "../../constants/mediaQueries";

import {
  GroupContainer,
  QuestionsContainer,
  ButtonsGroup,
  Buttons,
  PreviousButton
} from "./QuestionsGroup";

import { ApplyButton } from "../BusinessPage/PositionsList";

export const Title = styled.h1`
  font-size: 2.4rem;
  color: ${props => props.theme.title};
  align-self: flex-start;
  margin-bottom: 5px;
  ${media.desktop`
    font-size: 3rem;
  `};
`;

export const Divider = styled.div`
  width: 75%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  align-self: flex-start;
  ${media.desktop`
    width: 50%;
  `};
`;

export const Instructions = styled.p`
  font-size: 1.6rem;
  line-height: 2.5rem;
  text-align: center;
  margin-top: 20px;
`;

const Finish = props => {
  const positionContext = useContext(PositionContext);
  return (
    <GroupContainer>
      <ProgressBar
        width={`${props.percentage}%`}
        step={`${1 + Number(props.match.params.pageId)}/${props.total}`}
      />
      <QuestionsContainer>
        <Title>Submit Your Application</Title>
        <Divider />
        <Instructions>
          Almost there! Please take a momment to look back through your
          application and change anything that doesn't look right. When you are
          ready, hit the submit button below to finish up.
        </Instructions>
      </QuestionsContainer>
      <ButtonsGroup>
        <PreviousButton
          color={dark}
          bgColor={white}
          onClick={e => props.history.goBack()}
        >
          &larr; PREVIOUS
        </PreviousButton>
        <ApplyButton
          color={white}
          bgColor={jaBlue}
          onClick={() => positionContext.submitApplication(props.nextPage)}
        >
          SUBMIT &rarr;
        </ApplyButton>
      </ButtonsGroup>
    </GroupContainer>
  );
};

export default withRouter(Finish);
