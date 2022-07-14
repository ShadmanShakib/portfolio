import React from "react";
import ProjectCard from "./ProjectCard";
import { getProjects } from "services/firebase";
function Projects() {
  const getData = async () => {
    const projects = await getProjects();
    console.log(projects);
  };
  return (
    <section className="">
      <h1 className="text-center text-3xl font-bold text-white">Projects</h1>
      <button onClick={getData}>Get Data</button>
      <ProjectCard />
    </section>
  );
}

export default Projects;
