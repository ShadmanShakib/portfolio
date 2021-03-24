import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({children}:any):JSX.Element {
    return (
        <div className="max-w-screen-2xl w-full">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
