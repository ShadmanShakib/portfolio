import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "components/common";
import { Hero, Contact, Projects } from "components/home";

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
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
};

export default Home;
