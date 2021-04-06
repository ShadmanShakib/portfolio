import React from 'react'
import {Header,Footer} from '@components/common'

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
