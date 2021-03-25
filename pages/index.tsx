import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Feature from '../components/Feature'
import Skills from '../components/Skills';
import Aboutme from '../components/Aboutme';
import Services from '../components/Services';
import Contactme from '../components/Contactme';

export default function Home():JSX.Element {
  return (
    <div className="">
    <Layout>
      <Feature/>
      <Aboutme/>
      <Services/>
      <Skills/>
      <Contactme/>
    </Layout>
    </div>
  )
}
