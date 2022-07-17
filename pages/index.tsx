import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "components/common";
import { Hero, ServicesView, Contact, Projects, Posts } from "components/home";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Shadman Shakib || React/Next JS Developer</title>
        <meta name="description" content="Shadman Shakib Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <ServicesView />
        <Projects />
        <Posts />
        <Contact />
      </Layout>
    </div>
  );
};

export default Home;
