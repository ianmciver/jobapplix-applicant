import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import {
  jaBlue,
  positionsBorder,
  positionsBackground
} from "../../constants/colors";

const PositionsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 30px;
  width: 100%;
  max-width: 700px;
`;

const PositionHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0 30px;

  h2 {
    font-size: 2.3rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

const Position = styled.li`
  width: 100%;
  padding: 20px 50px;
  border-top: 1px solid ${positionsBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.6rem;
  }

  a {
    color: ${jaBlue};
    font-size: 1.6rem;
  }

  &:nth-child(odd) {
    background-color: ${positionsBackground};
  }

  &:last-child {
    border-bottom: 1px solid ${positionsBorder};
  }
`;

const PositionsList = props => {
  return (
    <PositionsListContainer>
      <PositionHeader>
        <h2>OPEN POSITIONS</h2>
      </PositionHeader>
      <ul>
        {props.positions.map(position => {
          return (
            <Position key={position.id}>
              <h3>{position.name}</h3>
              <Link to={`/${props.businessName}/${position.id}`}>
                <p>Apply</p>
              </Link>
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

export default PositionsList;
