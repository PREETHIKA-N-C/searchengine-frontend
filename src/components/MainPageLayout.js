import React from 'react'
import Nav from './Nav'
import Title from './Title'

function MainPageLayout({children,name}) {
    return (
        <div>
            <Nav>
            <Title title="Data MarketPlace" subtitle= "Are you looking for Data Sources !!!"/>
            </Nav>
            {children}
        </div>

        
    )
}

export default MainPageLayout
