import React from "react";

interface ServiceCard {
  name: string;
  description: string[];
  src?: string;
}

const Card = ({ name, description, src }: ServiceCard) => {
  return (
    <div className="flex flex-col xl:flex-row items-center bg  w-full justify-center ">
      <img className="h-96" src={src} alt="" />
      <div className="ml-10">
        <h1 className="xl:text-4xl text-2xl text-green-600 font-semibold">
          {name}
        </h1>
        {description.map((item: string, index: number) => {
          return (
            <li className="text-xl" key={index}>
              {item}
            </li>
          );
        })}
      </div>
    </div>
  );
};
const ReverseCard = ({ name, description, src }: ServiceCard) => {
  return (
    <div className="flex flex-col xl:flex-row items-center w-full justify-center ">
      <div className="ml-10">
        <h1 className="text-4xl text-green-600 font-semibold">{name}</h1>
        {description.map((item: string, index: number) => {
          return (
            <li className="text-xl" key={index}>
              {item}
            </li>
          );
        })}
      </div>
      <img className="h-96 w-1/2" src={src} alt="" />
    </div>
  );
};

function Services(): JSX.Element {
  return (
    <div className="flex flex-col justify-center my-10 items-center">
      <h1 className="text-xl mb-6 xl:text-5xl font-semibold py-2 px-5 rounded-md ">
        What I do
      </h1>
      <div className=""></div>
    </div>
  );
}

export default Services;
