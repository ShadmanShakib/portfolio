import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import {Menu} from '@components/icons'
import { Portal } from '@reach/portal';
import PhoneMenu from '../PhoneMenu';

function Header():JSX.Element {
    const [isOpen,setIsOpen]=React.useState(false)
    const handleClick=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
        <div  className={styles.container}>
            <div className="flex items-center">
           
          <h1 className=" block font-bold text-xl text-green-500"><Link  href="/">S.SHAKIB</Link></h1> 
            </div>
               <ul className="hidden uppercase xl:flex items-center justify-around w-96">
                    <Link href="/aboutme">About me</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/projects">Projects</Link>
                    <button
                    onClick={()=>window.open("https://www.upwork.com/freelancers/~0169d0ad10a0d8d490?viewMode=1&s=1110580755057594368")}
                     className="bg-black text-white py-1 px-5 rounded-3xl">Hire me</button>
               </ul>
               <div onClick={handleClick} className="xl:hidden p-2 bg-gray-200">
                    <Menu className={styles.menuIcon}/>
               </div>
              

        {isOpen && 
        <Portal>
            <PhoneMenu handleClick={handleClick}/>
        </Portal>}
            
        </div>
        </>
    )
}

export default Header
