import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 20px;
    color: white;
    letter-spacing: 3px;
    background-color: #3f51b5;
    display: flex;
    align-items: center;
    justify-content: center;

`

const StyledHeading = styled.h1`
    font-size: 30px;

    @media (max-width: 460px) {
        font-size: 20px;
    }
`

const NavBar = () => {

    return (
        <StyledWrapper>
            <StyledHeading>MOTORCYCLE APP</StyledHeading>
        </StyledWrapper>
    )

}


export default NavBar