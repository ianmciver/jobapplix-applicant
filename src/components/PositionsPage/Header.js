import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { media } from "../../constants/mediaQueries";
const HeaderContainer = styled.div`
  width: 100%;
  background-color: #fff;
  position: fixed;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const BusinessImageContainer = styled.div`
  width: 100%;
  max-width: 760px;
  padding: 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  ${media.desktop`
    padding: 15px 0;
  `}
`;

const BusinessImage = styled.img`
  object-fit: contain;
  max-height: 30px;
  width: auto;
  max-width: 290px;
  cursor: pointer;
  ${media.desktop`
    max-height: 50px;
    max-width: 760px;
  `};
`;

const PositionAndBusinessName = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.dark};
  h1 {
    font-size: 2.1rem;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.3rem;
    text-transform: uppercase;
    margin-top: 5px;
  }
`;

const PositionTitle = styled.h2`
  font-size: 1.4rem;
  color: ${props => props.theme.title};
  ${media.desktop`
    font-size: 2rem;
  `};
`;

const Header = props => {
  return (
    <HeaderContainer>
      <BusinessImageContainer>
        <PositionTitle>{props.business.name}</PositionTitle>
        <BusinessImage
          src={props.business.image_url}
          onClick={() => props.history.push(`/${props.businessUrl}`)}
        />
        <PositionTitle>{props.positionName}</PositionTitle>
      </BusinessImageContainer>
    </HeaderContainer>
  );
};

export default withRouter(Header);
