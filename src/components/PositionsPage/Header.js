import React from "react";
import styled from "styled-components";

import { dark, white, jaBlue, lightBorder } from "../../constants/colors";
import { media } from "../../constants/mediaQueries";
const HeaderContainer = styled.div`
  width: 100%;
  padding: 10px 50px;
  background-color: ${dark};
  display: flex;
  align-items: center;
  border-bottom: 4px solid ${jaBlue};
  ${media.desktop`justify-content: center;`};
`;

const BusinessImage = styled.div`
  width: 200px;

  height: 100px;
  /* border: 1px solid ${lightBorder}; */
  /* border-radius: 50%; */
  background-image: ${props => `url(${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
`;

const PositionAndBusinessName = styled.div`
  display: flex;
  flex-direction: column;
  color: ${white};
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

const Header = props => {
  return (
    <HeaderContainer>
      <BusinessImage image={props.business.image_url} />
      <PositionAndBusinessName>
        <h1>{props.positionName}</h1>
        <h2>{props.business.name}</h2>
      </PositionAndBusinessName>
    </HeaderContainer>
  );
};

export default Header;
