import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({children}) {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
