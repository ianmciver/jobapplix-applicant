import React from "react";
import styled from "styled-components";
import { media } from "../constants/mediaQueries";
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
`;

const App = props => <AppContainer>{props.children}</AppContainer>;

export default App;
