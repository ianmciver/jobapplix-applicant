import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { media } from "../../constants/mediaQueries";

export const PositionsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 30px 0;
  width: 100%;
  max-width: 760px;
`;

const PositionHeader = styled.div`
  width: calc(100%-40px);
  display: flex;
  flex-direction: column;
  padding: 40px 0 30px;
  border-bottom: 1px solid ${props => props.theme.positionsBorder};
  margin: 0 20px;
  h2 {
    font-size: 2.6rem;
    color: ${props => props.theme.title};
  }

  ${media.desktop`
    width: 100%;
    margin: 0;
    padding: 40px 0 30px;
  `};
`;

export const ApplyButton = styled.button`
  display: inline-block;
  padding: 8px 11px;
  font-size: 1.2rem;
  text-transform: uppercase;
  border: 0;
  border-radius: 5px;
  letter-spacing: 2px;
  outline: none;
  background-color: #4dd0e1;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.backgroundBlue},
    ${props => props.theme.backgroundGreen}
  );
  color: #fff;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  &:hover {
    background-image: none;
    background-color: ${props => props.theme.backgroundBlue};
  }
  &:disabled {
    background-image: none;
    background-color: ${props => props.theme.backgroundWhite};
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.1);
    cursor: not-allowed;
  }

  ${media.desktop`
    font-size: 1.4rem;
    padding: 10px 14px;
  `}
`;

const Position = styled.li`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  h3 {
    font-size: 1.8rem;
    ${media.desktop`
      font-size: 2.4rem;
    `}
  }

  ${media.desktop`
    padding: 20px 0;
  `}

  &:hover {
    h3 {
      color: ${props => props.theme.backgroundBlue};
    }
    ${ApplyButton} {
      background-image: none;
      background-color: ${props => props.theme.backgroundBlue};
    }
  }
`;

const PositionsList = props => {
  const applyClick = positionId => e => {
    props.history.push(`/${props.businessName}/${positionId}`);
  };
  return (
    <PositionsListContainer>
      <PositionHeader>
        <h2>Open Positions:</h2>
      </PositionHeader>
      <ul>
        {props.positions.map(position => {
          return (
            <Position key={position.id} onClick={applyClick(position.id)}>
              <h3>{position.name}</h3>
              <ApplyButton>Apply &rarr;</ApplyButton>
            </Position>
          );
        })}
      </ul>
    </PositionsListContainer>
  );
};

PositionsList.defaultProps = {
  positions: []
};

export default withRouter(PositionsList);
