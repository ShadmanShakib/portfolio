import React from 'react'

function Aboutme():JSX.Element {
    return (
        <div className="items-center bg-green-50 py-10  mt-10 px-10 flex flex-col justify-center xl:flex-row">
            <div className=" xl:w-1/2 ">

            <img className="" src="/images/aboutmeimg.svg" alt="about me"/>
            </div>
            <div className="w-1/2 ml-6 flex items-center flex-col justify-center">
            <h1 className="text-4xl mb-10  bg-green-500 rounded-sm text-white py-2 px-5 font-semibold">About me</h1>
            <p className="text-2xl text-center font-semibold">Hi, Im Shadman Shakib, React/React Native Developer. 
               Here you help your dream website or app and grow your business.
            </p>
            </div>
         
        </div>
    )
}

export default Aboutme;
