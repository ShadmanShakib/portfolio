import React from 'react';
import styles from './PhoneMenu.module.css';
import Link from 'next/link';

interface Props{
    handleClick:()=>void
}
function PhoneMenu(props:Props):JSX.Element {
    return (
        <div className={styles.container}>
            <Link href='/'>Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/blog">Projects</Link>
            <button onClick={props.handleClick}>Close</button>
        </div>
    )
}

export default PhoneMenu
