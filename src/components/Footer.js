import React from "react";

import styled from "styled-components";
import { dark, jaBlue } from "../constants/colors";

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${dark};
  padding: 15px;
  p {
    color: ${jaBlue};
    font-size: 1.1rem;
    text-align: center;
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>Powered by JobApplix</p>
  </FooterContainer>
);

export default Footer;
