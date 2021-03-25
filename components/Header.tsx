import React from 'react';
import Link from 'next/link';


function Header():JSX.Element {
    return (
        <div  className="h-16 flex items-center shadow-lg justify-around">
            <div className="flex items-center">
            <img className="h-10 w-10 border-2 border-green-500 rounded-full" src="/images/shadman.jfif"  alt="Shadman Shakib"/>
          <h1 className="ml-3 font-bold text-green-500"><Link  href="/">SHADMAN SHAKIB</Link></h1> 
            </div>
               <ul className="hidden xl:flex justify-around w-96">
                   <li>HOME</li>
                   <li>ABOUT ME</li>
                   <li>SKILLS</li>
                   <li>PROJECTS</li>
               </ul>
         
        </div>
    )
}

export default Header
