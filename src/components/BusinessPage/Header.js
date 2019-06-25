import React from "react";
import styled from "styled-components";
import { dark, jaBlue } from "../../constants/colors";
import { media } from "../../constants/mediaQueries";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TopBar = styled.div`
  width: 100%;
  height: 22px;
  background-color: ${dark};
  border-bottom: 4px solid ${jaBlue};
`;

const BusinessDetails = styled.div`
  padding: 30px;
  border-bottom: 6px solid ${dark};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 700px;
  ${media.desktop`
    align-items: center;
    justify-content: center;
    align-self: center;
    border-bottom: none;
  `}
`;

const LogoContainer = styled.img`
  min-width: 83px;
  max-width: 100%;
  height: auto;
  margin-bottom: 40px;
  padding-left: 20px;
  object-fit: contain;
  ${media.desktop`
    max-width: 500px;
  `}
`;

const DetailsContainer = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  ${media.desktop`
    margin-top: 40px;
    align-items: center;
  `};
`;

const BusinessName = styled.h1`
  font-size: 2.1rem;
  text-transform: uppercase;
  ${media.desktop`
    font-size: 2.7rem;
    line-height: 2rem;
    margin-bottom: 10px;
  `};
`;

const Divider = styled.div`
  width: 50%;
  height: 4px;
  background-color: ${jaBlue};
  margin: 10px 0;
  ${media.desktop`
    display: none;
  `};
`;

const BusinessContact = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.8rem;
  ${media.desktop`
    line-height: 2.2rem;
    font-size: 1.6rem;
  `};
`;

const BusinessDescription = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  line-height: 1.6rem;
  ${media.desktop`
    line-height: 2.2rem;
    text-align: center;
  `};
`;

const Header = props => (
  <Container>
    <TopBar />
    <BusinessDetails>
      {props.business.image_url && (
        <LogoContainer src={props.business.image_url} />
      )}
      {/* <img src={props.business.image_url} /> */}
      <DetailsContainer>
        <BusinessName>{props.business.name}</BusinessName>
        <Divider />
        {props.business.phone && (
          <BusinessContact>{props.business.phone}</BusinessContact>
        )}
        {props.business.address && (
          <BusinessContact>{props.business.address}</BusinessContact>
        )}
        {props.business.website && (
          <BusinessContact>
            <a
              href={`${props.business.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.business.website}
            </a>
          </BusinessContact>
        )}
        {props.business.email && (
          <BusinessContact>{props.business.email}</BusinessContact>
        )}
        {props.business.description && (
          <BusinessDescription>
            {props.business.description}
          </BusinessDescription>
        )}
      </DetailsContainer>
    </BusinessDetails>
  </Container>
);

export default Header;
