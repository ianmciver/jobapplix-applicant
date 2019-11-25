import React from "react";

import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.white};
  padding: 25px;
  display: flex;
  justify-content: center;
  z-index: 9;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  a {
    color: ${props => props.theme.jaBlue};
    font-size: 1.2rem;
    text-decoration: none;
  }
`;

const Footer = () => (
  <FooterContainer>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.jobapplix.com"
    >
      Powered by JobApplix
    </a>
  </FooterContainer>
);

export default Footer;
