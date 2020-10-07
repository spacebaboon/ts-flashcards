import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  margin: 20px;
  
`;

export const Header = () => (
  <StyledHeader>
    <span>Flash Cards</span>
  </StyledHeader>
);
