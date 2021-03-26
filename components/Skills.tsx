import React from 'react';
interface SkillCard{
    name:string,
   
    src:string,
}

const Card=({name,src}:SkillCard)=>{
    return(
        <div className="flex  items-center flex-col p-5 mb-5 rounded-sm text-white w-full bg-gray-900">
            <img className="h-20  w-20 rounded-full mb-2 " src={src} alt={name}/>
            <h1 className="text-center text-green-400 text-3xl mb-3 ">{name}</h1>
          

        </div>
    )
}

function Skills():JSX.Element {
    return (
        <React.Fragment>
             <h1 className=" text-2xl mb-6 font-semibold py-2 px-5 rounded-md text-white bg-green-500">Technical Skills</h1>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-3 justify-items-center mx-3">
           
            <Card name="React" src="/images/react.png"  />
            <Card name="Redux" src="/images/redux.svg"   />
            <Card name="Next.JS" src="/images/next-js.svg" />
            <Card name="GraphQL" src="/images/graphql.svg" />
            <Card name="Node JS" src="/images/nodejs.svg" />
            <Card name="Git" src="/images/giticon.png" />
            <Card name="Tailwind CSS" src="/images/tailwindcss.svg"/>
            <Card name="Ant-Design" src="/images/ant-design.svg"/>
        </div>
        </React.Fragment>
    )
}

export default Skills
