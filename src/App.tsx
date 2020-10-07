import React from "react";
import { Header } from "./common/Header";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ade0cb;
  }
`;


function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <h1>Hello World!</h1>
    </React.Fragment>
  );
}

export default App;
