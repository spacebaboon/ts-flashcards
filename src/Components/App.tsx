import React from "react";
import { Header } from "../common/Header";
import { Home } from './Home';
import { NewCard } from './NewCard';
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ade0cb;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/new">
            <NewCard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
