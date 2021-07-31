import React from "react";
interface SkillCard {
  name: string;

  src: string;
}

const Card = ({ name, src }: SkillCard) => {
  return (
    <img
      className="h-10 bg-gray-200  w-10 rounded-full mb-2 "
      src={src}
      alt={name}
    />
  );
};

function Skills(): JSX.Element {
  return (
    <React.Fragment>
      <div className="py-10 relative  ">
        <div className="flex items-center justify-center ">
          <h1 className=" text-2xl mb-6 font-semibold py-2 px-5 rounded-md text-white bg-green-500">
            Technical Skills
          </h1>
        </div>
        <div className=" flex flex-row overflow-scroll">
          <Card name="React" src="/images/react.png" />
          <Card name="Redux" src="/images/redux.svg" />
          <Card name="Next.JS" src="/images/next-js.svg" />
          <Card name="GraphQL" src="/images/graphql.svg" />
          <Card name="Node JS" src="/images/nodejs.svg" />
          <Card name="Git" src="/images/GitIcon.png" />
          <Card name="Tailwind CSS" src="/images/tailwindcss.svg" />
          <Card name="Ant-Design" src="/images/ant-design.svg" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;
