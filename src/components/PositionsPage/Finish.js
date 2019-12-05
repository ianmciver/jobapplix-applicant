import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { API_URL } from "../../constants/urls";
import { dark, jaBlue, white } from "../../constants/colors";
import { media } from "../../constants/mediaQueries";
import { parseAnswersForSubmission } from "../../helpers";

import {
  GroupContainer,
  QuestionsContainer,
  ButtonsGroup,
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
  const submitApplication = e => {
    let submissionAnswers = parseAnswersForSubmission(props.position);
    fetch(
      `${API_URL}/apps/application?pid=${props.position.details.id}&bid=${props.position.details.business_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(submissionAnswers)
      }
    )
      .then(() => {
        props.history.push(props.nextPage);
      })
      .catch(err => {});
  };
  return (
    <GroupContainer>
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
        <ApplyButton color={white} bgColor={jaBlue} onClick={submitApplication}>
          SUBMIT &rarr;
        </ApplyButton>
      </ButtonsGroup>
    </GroupContainer>
  );
};

export default connect(
  state => ({ position: state.position }),
  null
)(withRouter(Finish));
