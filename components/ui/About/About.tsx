import React from 'react';
import styles from './About.module.css'

function Aboutme():JSX.Element {
    return (
        <div className={styles.conatiner}>
            <div className=" xl:w-1/2 ">

            <img className="" src="/images/aboutmeimg.svg" alt="about me"/>
            </div>
            <div className=" flex items-center flex-col justify-center">
            <h1 className={styles.title}>About me</h1>
            <p className={styles.description}>Hi, Im Shadman Shakib, React/React Native Developer. 
               Here you help your dream website or app and grow your business.
            </p>
            </div>
         
        </div>
    )
}

export default Aboutme;
