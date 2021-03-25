import React from 'react';
interface SkillCard{
    name:string,
    description:string,
    src:string,
}

const Card=({name,description,src}:SkillCard)=>{
    return(
        <div className="flex  items-center flex-col p-5 mb-5 rounded-sm text-white w-full bg-gray-900">
            <img className="h-20  w-20 rounded-full mb-2 " src={src} alt={name}/>
            <h1 className="text-center text-green-400 text-3xl mb-3 ">{name}</h1>
            <p className='text-center text-gray-300'>{description}</p>

        </div>
    )
}

function Skills():JSX.Element {
    return (
        <React.Fragment>
             <h1 className=" text-2xl mb-6 font-semibold py-2 px-5 rounded-md text-white bg-green-500">Technical Skills</h1>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 justify-items-center mx-3">
           
            <Card name="React JS" src="/images/react.png"  description="React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies."/>
            <Card name="Redux" src="/images/redux.svg"   description="Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. "/>
            <Card name="Next.JS" src="/images/next-js.svg" description="Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications."/>
            <Card name="GraphQL" src="/images/graphql.svg" description="GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data."/>
            <Card name="Node JS" src="/images/nodejs.svg" description="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."/>
            <Card name="Git" src="/images/giticon.png" description="Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Git is easy to learn and has a tiny footprint with lightning fast performance."/>
        </div>
        </React.Fragment>
    )
}

export default Skills
