import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  margin: 20px;
  & span {
      font-weight: 600;
  }
`;

export const Header = () => (
  <StyledHeader>
    <span><a href='/'>Flash Cards</a></span>
  </StyledHeader>
);
