import React from "react";
import { Hero, About, Services, Contact, Skills } from "@components/ui";
import { ProjectCard } from "@components/projects";

export default function Home({ data }: any): JSX.Element {
  return (
    <div className="max-w-screen-xl  mx-auto">
      <Hero />
      <About />
      <Services />
      <Skills />
      <ProjectCard items={data.items} />
      <Contact />
    </div>
  );
}

export async function getServerSideProps(context) {
  const url = "https://www.googleapis.com/youtube/v3/playlistItems";
  const res = await fetch(
    `${url}?part=snippet&playlistId=PLQQpv-6Xxb2kKiyDd-s3gNkxp72hbbjDb&key=${process.env.GOOGLE_API_KEY}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
