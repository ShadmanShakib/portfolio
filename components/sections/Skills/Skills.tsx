import React from "react";
import { SkillsData } from "@constants/index";
import { SkillCard } from "@components/ui/cards";

function Skills(): JSX.Element {
  return (
    <React.Fragment>
      <div className="py-10 cursor-pointer  bg-gray-100 relative  ">
        <div className="flex items-center justify-center ">
          <h1 className=" text-2xl mb-6 font-semibold py-2 px-5 rounded-md text-white bg-green-500">
            Technical Skills
          </h1>
        </div>

        <div
          style={{ width: "3000px" }}
          className=" flex flex-nowrap overflow-x-scroll "
        >
          {SkillsData.map((skill) => {
            return (
              <SkillCard key={skill.id} title={skill.name} src={skill.img} />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;
