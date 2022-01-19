import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "@sections/common";
import { Hero } from "@sections/homepage";
import s from "../styles/Home.module.css";
const Home: NextPage = ({ data }: any) => {
  return (
    <div className={s.container}>
      <Head>
        <title>Shadman Shakib</title>
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/72305492?s=96&v=4"
        />
      </Head>
      <main>
        <Navbar src={data.avatar_url} />
        <Hero src={data.avatar_url} />
      </main>
    </div>
  );
};

export default Home;
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.github.com/users/shadmanshakib`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
