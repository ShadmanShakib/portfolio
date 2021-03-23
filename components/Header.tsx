import React from 'react';
import Link from 'next/link';


function Header() {
    return (
        <div  className="h-16 flex items-center shadow-lg justify-around">
           <Link href="/">Shadman Shakib</Link>
            <Link href="/contact">Contact Me</Link>
        </div>
    )
}

export default Header
