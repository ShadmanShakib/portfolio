import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
interface SkillCard {
  name: string;
  src: string;
}
const SkillsData = [
  { id: "adhfoafodaf", name: "React", img: "/images/react.png" },
  { id: "scohbounalgv", name: "Redux", img: "/images/redux.svg" },
  { id: "lhghhboeigg", name: "Next JS", img: "/images/next-js.svg" },
  { id: "ljvoufhhhb", name: "Graphql", img: "/images/graphql.svg" },
  { id: "aoeivnaoinc", name: "Node JS", img: "/images/nodejs.svg" },
  { id: "oeihghhoeooeov", name: "Git", img: "/images/Giticon.png" },
  {
    id: "fhoabhhbhbhaloicice",
    name: "Tailwind CSS",
    img: "/images/tailwindcss.svg",
  },
  { id: "fjdjfdjvhutguxpe", name: "Ant Design", img: "/images/ant-design.svg" },
];
const Card = ({ name, src }: SkillCard) => {
  return (
    <div className="w-44 rounded-md justify-start pl-4 shadow-md flex items-center h-16 bg-white ">
      <img className="h-10 mr-3  w-10   " src={src} alt={name} />
      <div className="">{name}</div>
    </div>
  );
};

function Skills(): JSX.Element {
  return (
    <React.Fragment>
      <div className="py-10 bg-gray-100 relative  ">
        <div className="flex items-center justify-center ">
          <h1 className=" text-2xl mb-6 font-semibold py-2 px-5 rounded-md text-white bg-green-500">
            Technical Skills
          </h1>
        </div>

        <div className="grid xl:grid-cols-5 gap-6 justify-center items-center  ">
          {SkillsData.map((skill) => {
            return <Card key={skill.id} name={skill.name} src={skill.img} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;
