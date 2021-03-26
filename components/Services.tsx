import React from 'react';

interface ServiceCard{
    name:string,
    description?:string,
}

const Card=({name,description}:ServiceCard)=>{
    return(
        <div className="shadow-md h-40">
        <h1>{name}</h1>
        <p>{description}</p>
        </div>
    )
}

function Services():JSX.Element {
    return (
        <div>
            <h1 className="text-2xl mb-6 font-semibold py-2 px-5 rounded-md text-white bg-green-500">What I do</h1>
            <div className="grid grid-cols-3 gap-x-3">
            <Card  
            name="E-commerce Development"
             description="Build Interactive, Responsive, SEO friendly E-commerce website with"
             />
            <Card name="Web apps"/>
            <Card name="JAMStack Development"/>
            <Card name="Single Page Application(SPA)"/>
            <Card name="Progressive Web Apps"/>
            <Card name="Static Sites(Blogs) development"/>
            <Card name="SaaS development"/>
            </div>
        </div>
    )
}

export default Services
