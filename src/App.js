import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./components/GlobalStyles";
import { theme } from "./constants/colors";

import BusinessContextProvider from "./context/BusinessContext";
import PositionContextProvider from "./context/PositionContext";

import BusinessPage from "./components/BusinessPage";
import PositionsPage from "./components/PositionsPage";

import FOF from "./components/FourOhFour";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BusinessContextProvider>
        <PositionContextProvider>
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={FOF} />
            <Route exact path="/404" component={FOF} />
            <Route exact path="/:business" component={BusinessPage} />
            <Route
              path="/:business/:position/:pageId?"
              component={PositionsPage}
            />
          </Switch>
        </PositionContextProvider>
      </BusinessContextProvider>
    </ThemeProvider>
  );
};

export default App;
