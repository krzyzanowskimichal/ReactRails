import React from 'react'
import styled from 'styled-components'
import NavBar from "../ui-component/NavBar/NavBar"

const StyledMain = styled.div`
    padding: 100px 0;
    margin: 0 auto;
`

const MainLayout = ({children}) => {

    return (
        <div>
            <NavBar />
            <StyledMain>
                {children}
            </StyledMain>
            
        </div>
    )
}

export default MainLayout