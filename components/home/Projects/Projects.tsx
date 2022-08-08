import React from "react";
import ProjectCard from "./ProjectCard";
import { getProjects, getImage } from "services/firebase";
import { Heading } from "components/ui";
import { map } from "underscore";
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
      <Heading>Projects</Heading>

      {projectList &&
        map(projectList, (project: any) => {
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
