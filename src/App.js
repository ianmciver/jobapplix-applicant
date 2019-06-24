import React from "react";
import { Switch, Route } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyles";

import BusinessContextProvider from "./context/BusinessContext";
import PositionContextProvider from "./context/PositionContext";

import BusinessPage from "./components/BusinessPage";
import PositionsPage from "./components/PositionsPage";

import FOF from "./components/FourOhFour";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
