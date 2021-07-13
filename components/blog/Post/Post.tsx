import Link from 'next/link';
import React from 'react';
import styles from './Post.module.css';

interface Props{
    title:string,
    images:  [{url:string}]
    id?:number,
   
}

function Post(props:Props):JSX.Element {
    const {title,images,id}=props
    return (
        <div className={styles.container}>

         { images && <img className="w-80 h-48" src={images[0].url} alt="" />}
        <h1>{title}</h1> 
       <Link href={`/blog/${id}?title=${title}`}>Visit</Link>
        </div>
    )
}

export default Post
