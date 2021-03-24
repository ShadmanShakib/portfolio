import React from 'react'

function Skills():JSX.Element {
    return (
        <div className="flex flex-col bg-gray-900 ">
            <div className="">
            <img className="h-20 w-20 rounded-full p-2" src="/images/react.png" alt="reactjs logo"/>
            <h1 className="text-center text-3xl text-white">React</h1>
            </div> 
            <img className="h-20 w-20" src="/images/redux.svg" alt=""/>
            <img className="h-20 w-20 fill-current bg-white p-2" src="/images/nextjs.svg" alt=""/>
            <img className="h-20 w-20" src="/images/graphql.svg" alt=""/>
            <img className="  h-20 w-20" src="/images/nodejs.svg" alt="nodejs"/>
        </div>
    )
}

export default Skills
