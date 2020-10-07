import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  margin: 20px;
  & span {
      font-weight: 
  }
`;

export const Header = () => (
  <StyledHeader>
    <span>Flash Cards</span>
  </StyledHeader>
);
