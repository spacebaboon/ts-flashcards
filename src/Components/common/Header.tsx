import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
        <span>
            <Link to="/">Flash Cards</Link>
        </span>
        <span>
            <Link to="/new">New Card</Link>
        </span>
    </StyledHeader>
);
