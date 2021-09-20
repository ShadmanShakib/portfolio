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
    <div className="max-w-screen-xl overflow-hidden bg-gray-100 mx-auto">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SKillScetion />
      <ProjectCard items={data.items} />
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
