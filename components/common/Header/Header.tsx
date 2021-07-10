import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import {Menu} from '@components/icons'

function Header():JSX.Element {
    return (
        <div  className={styles.container}>
            <div className="flex items-center">
           
          <h1 className=" block font-bold text-xl text-green-500"><Link  href="/">S.SHAKIB</Link></h1> 
            </div>
               <ul className="hidden uppercase xl:flex justify-around w-96">
                   <li>About Me</li>
                    <Link href="/blog">Blog</Link>
                   <li>SKILLS</li>
                   <li>PROJECTS</li>
               </ul>
         <Menu className={styles.menuIcon}/>
        </div>
    )
}

export default Header
