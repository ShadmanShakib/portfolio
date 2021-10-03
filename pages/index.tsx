import React from "react";
import { ProjectCard } from "@components/projects";
import {
  SKillScetion,
  AboutSection,
  ServicesSection,
  ContactSection,
  HeroSection,
} from "@components/sections";

export default function Home({ data }: any): JSX.Element {
  return (
    <div className="max-w-screen-xl bg-white overflow-hidden mx-auto">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SKillScetion />
      <div className="bg-c3">
        <ProjectCard items={data.items} />
      </div>
      <ContactSection />
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
