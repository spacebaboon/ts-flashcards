import React from "react";
import { Header } from "./common/Header";
import styled from "styled-components";

const StyledApp = styled.div`
  margin: 10em;
  textalign: center;
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
