import React from 'react';
import Link from 'next/link';


function Header():JSX.Element {
    return (
        <div  className="h-16 flex items-center shadow-lg justify-around">
            <img className="h-10 w-10 rounded-full" src="/images/shadman.jfif"  alt="Shadman Shakib"/>
           <Link href="/">Shadman Shakib</Link>
            <Link href="/contact">Contact Me</Link>
        </div>
    )
}

export default Header
