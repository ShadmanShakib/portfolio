import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Feature from '../components/Feature'
import Skills from '../components/Skills';
import Aboutme from '../components/Aboutme';

export default function Home():JSX.Element {
  return (
    <div className="">
    <Layout>
      <Feature/>
      <Aboutme/>
      <Skills/>
    </Layout>
    </div>
  )
}
