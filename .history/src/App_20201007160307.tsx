import React from "react";
import { Header } from "./common/Header";
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ade0cb;
  }
`;


function App() {
  return (
    <StyledApp>
      <Header />
      <h1>Hello World!</h1>
    </StyledApp>
  );
}

export default App;
