import type { NextPage } from "next";
import Head from "next/head";
import { Footer, Navbar } from "@sections/common";
import { Hero, Projects } from "@sections/homepage";
import { getPlaylist } from "services";
import s from "../styles/Home.module.css";
const Home: NextPage = ({ data, playlist }: any) => {
  return (
    <div className={s.main}>
      <Head>
        <title>Shadman Shakib</title>
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/72305492?s=96&v=4"
        />
      </Head>
      <main className=" ">
        <div className="max-w-screen-xl mx-auto">
          <Navbar src={data.avatar_url} />
          <Hero src={data.avatar_url} />
          <Projects playlist={playlist} />
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.github.com/users/shadmanshakib`);
  const data = await res.json();
  //geting playlist
  // const playlist = await getPlaylist();

  // Pass data to the page via props
  return { props: { data } };
}
