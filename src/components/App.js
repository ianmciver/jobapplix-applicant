import React from "react";
import styled from "styled-components";
import { media } from "../constants/mediaQueries";
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.desktop`
  
  `}
`;

const App = props => <AppContainer>{props.children}</AppContainer>;

export default App;
