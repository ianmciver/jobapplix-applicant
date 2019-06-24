import React from "react";
import { withRouter, Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";

import { media } from "../../constants/mediaQueries";
import { dark, jaBlue, white } from "../../constants/colors";

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  ${media.desktop`
    margin-top: 50px;
  `};
`;

export const QuestionsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 0 30px;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  ${media.desktop`
    font-size: 2.1rem;
  `};
`;

export const Notice = styled.p`
  margin: 5px 0;
  font-size: 1.2rem;
  line-height: 1.7rem;
  margin-bottom: 20px;
  text-align: center;
`;

// Three types of questions text, boolean, multi

export const ButtonsGroup = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;

export const Buttons = styled.button`
  color: ${props => props.color && props.color};
  background-color: ${props => props.bgColor && props.bgColor};
  font-size: 1.3rem;
  padding: 15px 32px;
  border: 2px solid ${dark};
  border-radius: 24px;
  outline: none;
  cursor: pointer;
`;

const QuestionsGroup = props => {
  return (
    <GroupContainer>
      <ProgressBar
        width={`${props.percentage}%`}
        step={`${1 + Number(props.match.params.pageId)}/${props.total}`}
      />
      <QuestionsContainer>
        <Title>{props.title}</Title>
        <Notice>{props.notice}</Notice>
        {props.children}
      </QuestionsContainer>
      <ButtonsGroup>
        <Buttons
          color={dark}
          bgColor={white}
          onClick={e => props.history.goBack()}
        >
          PREVIOUS
        </Buttons>
        <Link to={props.nextPage}>
          <Buttons color={white} bgColor={jaBlue}>
            SAVE & NEXT
          </Buttons>
        </Link>
      </ButtonsGroup>
    </GroupContainer>
  );
};

export default withRouter(QuestionsGroup);
