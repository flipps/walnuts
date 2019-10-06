import React from 'react';
import logo from '../assets/logo-inline.svg';
import Menu from './Menu';
import styled from 'styled-components';

const Logo = () => <img alt="Walnut" src={logo} />

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <Menu />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    padding: 3.15em;
    display: flex;
    justify-content: space-between;
`

export default Header;