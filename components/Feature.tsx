import React from 'react'
function Feature():JSX.Element {
    return (
        <React.Fragment>
        <div  className="flex  px-3 items-center xl:flex-row-reverse  justify-center flex-col pt-10 ">

            {/* Protfolio image */}
            <div className=" relative   rounded-full">
            <div className="absolute rounded-full opacity-40 z-0 -top-4 -right-4 -left-4 -bottom-4 bg-green-700"></div>
            <div className="absolute rounded-full opacity-30 z-0 -top-8 -right-8 -left-8 -bottom-8 bg-green-700"></div>
              
               <img className="xl:w-64 w-48 h-48 relative z-10 xl:h-64 rounded-full" src='/images/portfolioimg1.jpg' />
            </div>
            {/* Description */}
            <div className="flex items-center flex-col mr-32">
           <h1  className="font-semibold mt-16   py-2 bg-green-300 text-white rounded-tl-3xl px-5  text-center rounded-r-3xl">Hello I am</h1>
          <h1 className="text-4xl xl:text-5xl font-semibold mt-3 text-gray-800">Shadman Shakib</h1>
          <h1 className="text-xl font-semibold mt-3">Front-end Developer</h1>
          <div className="flex my-10 ">
          <div className="bg-gray-300 p-2 rounded-full">
              <img className="h-6 w-6" src="/images/gmail.svg" alt=""/>
          </div>
          <div className="bg-gray-300 h-10 w-10 flex items-center justify-center mx-4  rounded-full ">
              <img className="h-6 w-6 fill-current text-blue-500" src="/images/twitter.svg" alt="twitter"/>
          </div>
              <img className="w-10 h-10 rounded-full" src="/images/github.svg" alt=""/>
    
          </div>
          </div>
        </div>
        </React.Fragment>
    )
}

export default Feature
