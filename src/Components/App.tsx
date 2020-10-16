import React from 'react';
import { Header } from './common/Header';
import { Home } from './Home';
import { NewCard } from './NewCard';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ade0cb;
  }
`;

function App() {
    return (
        <StylesProvider injectFirst>
            <GlobalStyle />
            <Router>
                <Header />
                <Container component="main" maxWidth="xs">
                    <Switch>
                        <Route path="/new">
                            <NewCard />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </StylesProvider>
    );
}

export default App;
