import React from 'react'
function Feature():JSX.Element {
    return (
        <div  className="flex px-3 items-center flex-col pt-10 ">
            <div className="border-8 border-green-700 border-opacity-20 rounded-full">
                <div className="border-8 border-green-700 border-opacity-40 rounded-full">
                    <img className="w-48 h-48 rounded-full" src='/images/portfolioimg1.jpg' />
                </div>
            </div>
           <h1  className="font-semibold mt-16   py-2 bg-green-300 text-white rounded-tl-3xl px-5  text-center rounded-r-3xl">Hello I am</h1>
          <h1 className="text-4xl font-semibold mt-3 text-gray-800">Shadman Shakib</h1>
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
    )
}

export default Feature
