import React from "react";
import ProjectCard from "./ProjectCard";
import { getProjects, getImage } from "services/firebase";

function Projects() {
  const [projectList, setProjectList] = React.useState<any>();

  const getData = async () => {
    // const projects = await getProjects();
    const data = await getProjects();
    setProjectList(data);
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <section className="">
      <h1 className="text-center text-3xl font-bold text-white">Projects</h1>

      {projectList &&
        projectList.map((project: any) => {
          return (
            <ProjectCard
              key={project.thumbnail}
              thumbnail={project.thumbnail}
              title={project.title}
            />
          );
        })}
      <ProjectCard />
    </section>
  );
}

export default Projects;
