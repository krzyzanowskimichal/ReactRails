import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    background-color: #f2aa4cff;
    display: flex;
    align-items: center;
    justify-content: center;

`

const StyledHeading = styled.h1`
    font-size: 20px;
`

const NavBar = () => {

    return (
        <StyledWrapper>
            <StyledHeading>MOTORCYCLED APP</StyledHeading>
        </StyledWrapper>
    )

}


export default NavBar