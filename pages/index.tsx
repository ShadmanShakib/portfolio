import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Feature from '../components/Feature'
import Skills from '../components/Skills';
import Aboutme from '../components/Aboutme';
import Services from '../components/Services';
import Contactme from '../components/Contactme';
import Projects from '../components/Projects';

export default function Home({data}:any):JSX.Element {
  console.log(data)
  return (
    <div className="">
    <Layout>
      <Feature/>
      <Aboutme/>
      <Services/>
      <Skills/>
      <Projects items={data.items}/> 
      <Contactme/>
    </Layout>
    </div>
  )
}

export async function getServerSideProps(context) {
  const url="https://www.googleapis.com/youtube/v3/playlistItems"
  const res = await fetch(`${url}?part=snippet&playlistId=PLQQpv-6Xxb2kKiyDd-s3gNkxp72hbbjDb&key=${process.env.GOOGLE_API_KEY}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
        data
    }, // will be passed to the page component as props
  }
}