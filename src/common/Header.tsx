import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  margin: 20px;
  & span {
      padding: 0 20px;
      font-weight: 600;
  }
`;

export const Header = () => (
  <StyledHeader>
    <span><a href='/'>Flash Cards</a></span>
    <span><a href='/new'>New Card</a></span>
  </StyledHeader>
);
