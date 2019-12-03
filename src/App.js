import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import GlobalStyles from "./components/GlobalStyles";
import { theme } from "./constants/colors";

import PositionContextProvider from "./context/PositionContext";

import BusinessPage from "./components/BusinessPage";
import PositionsPage from "./components/PositionsPage";
import reducer from "./reduxSlices";

import FOF from "./components/FourOhFour";

const store = configureStore({
  reducer
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
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
      </Provider>
    </ThemeProvider>
  );
};

export default App;
