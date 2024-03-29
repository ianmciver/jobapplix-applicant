import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { media } from "../../constants/mediaQueries";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TopBar = styled.div`
  width: 100%;
  background-color: #fff;
  position: fixed;
`;

const LogoContainer = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  align-items: center;
  ${media.desktop`
    padding: 15px 0;
  `}
`;

const Logo = styled.img`
  object-fit: contain;
  max-height: ${props => (props.scrolled ? "50px" : "100px")};
  width: auto;
  max-width: 290px;
  margin: 0 auto;
  transition: max-height 300ms linear;
  ${media.desktop`
    max-height: ${props => (props.scrolled ? "70px" : "120px")};
    max-width: 760px;
  `};
`;

const BusinessDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 760px;
  padding: 0 25px;
  ${media.desktop`
    align-self: center;
    padding-left: 0;
  `}
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 150px;
  ${media.desktop`
    margin-top: 170px;
  `};
`;

const BusinessName = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  line-height: 3.4rem;
  margin-bottom: 10px;
  color: ${props => props.theme.title};
  ${media.desktop`
    font-size: 3.8rem;
    line-height: 4rem;
  `};
`;

const BusinessContact = styled.h3`
  font-size: 1.8rem;
  letter-spacing: -0.015rem;
  line-height: 28px;
  ${media.desktop`
    font-size: 1.8rem;
  `};
`;

const AboutUsTitle = styled.h3`
  margin: 40px 0 5px;
  font-size: 1.8rem;
  font-weight: bold;
`;

const BusinessDescription = styled.p`
  font-size: 1.8rem;
  letter-spacing: -0.015rem;
  line-height: 28px;
  white-space: pre-line;
`;

const Header = props => {
  const [scrolled, setScrolled] = useState(false);

  const checkScrolled = () => {
    if (window.pageYOffset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScrolled);
    return () => window.removeEventListener("scroll", checkScrolled);
  });
  return (
    <Container>
      <TopBar>
        {props.business.image_url && (
          <LogoContainer scrolled={scrolled}>
            <Logo scrolled={scrolled} src={props.business.image_url} />
          </LogoContainer>
        )}
      </TopBar>
      <BusinessDetails>
        <DetailsContainer scrolled={scrolled}>
          <BusinessName>{props.business.name}</BusinessName>
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
            <>
              <AboutUsTitle>About Us:</AboutUsTitle>
              <BusinessDescription>
                {props.business.description}
              </BusinessDescription>
            </>
          )}
        </DetailsContainer>
      </BusinessDetails>
    </Container>
  );
};

export default Header;
