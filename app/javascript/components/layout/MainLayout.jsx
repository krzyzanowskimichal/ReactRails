import React from 'react'
import styled from 'styled-components'
import NavBar from "../ui-component/NavBar/NavBar"

const StyledMain = styled.div`
    padding: 100px 150px;
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