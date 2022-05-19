import React from 'react';
import logo from '../../assets/images/logo.png';
import styled from 'styled-components';

const StyledNav = styled.nav`
    position: relative;
    display: flex;
    width: 95%;
    max-width: 1200px;
    margin: 20px auto 30px;

    img{
        max-width: 100px;
    }
`

function NavItem() {
  return (
   <StyledNav>
       <img src={logo} alt="" />
   </StyledNav>
  )
}

export default NavItem