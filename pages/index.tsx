import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "@sections/common";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shadman Shakib</title>
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/72305492?s=96&v=4"
        />
      </Head>
      <main>
        <Navbar />
      </main>
    </div>
  );
};

export default Home;
