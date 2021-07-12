import React, { HTMLProps } from 'react';
import styles from './Post.module.css';

interface Props{
    title:string,
    images:  [{url:string}]
   
}

function Post(props:Props):JSX.Element {
    const {title,images}=props
    return (
        <div className={styles.container}>

         { images && <img className="w-80 h-48" src={images[0].url} alt="" />}
        <h1>{title}</h1> 
        </div>
    )
}

export default Post
