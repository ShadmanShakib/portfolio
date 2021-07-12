import React from 'react';

interface ServiceCard{
    name:string,
    description:string [],
    src?:string,
}

const Card=({name,description,src}:ServiceCard)=>{
    return(
        <div className="flex flex-col xl:flex-row items-center  w-full justify-center ">
            <img className="h-96" src={src} alt=""/>
        <div className="ml-10">
        <h1 className="text-4xl text-green-600 font-semibold">{name}</h1>
        {description.map((item:string,index:number)=>{
            return(
                <li className="text-xl" key={index}>{item}</li>
            )
        })}
        </div>
        
        </div>
    )
}
const ReverseCard=({name,description,src}:ServiceCard)=>{
    return(
        <div className="flex flex-col xl:flex-row items-center w-full justify-center ">
        <div className="ml-10">
        <h1 className="text-4xl text-green-600 font-semibold">{name}</h1>
        {description.map((item:string,index:number)=>{
            return(
                <li className="text-xl" key={index}>{item}</li>
            )
        })}
        </div>
        <img className="h-96 w-1/2" src={src} alt=""/>
        </div>
    )
}

function Services():JSX.Element {
    return (
        <div className="flex flex-col justify-center my-10 items-center">
            <h1 className="text-2xl mb-6 font-semibold py-2 px-5 rounded-md text-white bg-green-500">What I do</h1>
            <div className="">
            <Card  
            src="/images/ecom.svg"
            name="E-commerce Development"
            description={['Responsive Design',"Great SEO","Mobile Friendly",'Progressive Web Apps',"JAMStack"]}
             />
             <ReverseCard
             src='/images/jamimg.svg'
             name="JAMStack Development"
             description={['Next JS prerendering', "CDN","API ingegration","Personalize content"]}
             /> 
          <Card 
          src='/images/saasimg.svg'
          name="SaaS Development"
          description={['Responsive Charts','Maps Integration',"API integration (Restful or GraphQL)","Clean Code","Standard Pattern of future scaling"]}
          />
            </div>
        </div>
    )
}

export default Services
