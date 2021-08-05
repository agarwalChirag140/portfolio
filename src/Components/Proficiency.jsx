import React from "react"
import ReactApp from "../Images/icon3-removebg-preview (1).png"
import FrontendApp from "../Images/icon1-removebg-preview (1).png"

export const Proficiency = () => {
    return (
        <>
            <p className="text-center text-4xl font-bold text-gray-500 mt-8">PROFICIENCY</p>
            <div className="sm:flex w-full lg:w-4/5 xl:w-7/12 m-auto justify-between mt-10 mb-10">
                <div className="w-full sm:w-3/12">
                    <img src={ReactApp} alt="react app" className="w-44 m-auto mt-1" />
                    <p className="text-center font-bold text-2xl mt-4">React App</p>
                    <p className="text-center mb-0 mt-1 md:text-sm xl:text-base">When it comes to react apps</p>
                    <p className="text-center mt-0 mb-2 md:text-sm xl:text-base">I have the strength of Atlas</p>
                </div>
                <div className="w-full sm:w-3/12 mt-8 sm:mt-0">
                    <img src={FrontendApp} alt="frontend app" className="w-44 m-auto mt-1" />
                    <p className="text-center font-bold text-2xl mt-4">Frontend</p>
                    <p className="text-center mb-0 mt-1 md:text-sm xl:text-base">Now just that I can</p>
                    <p className="text-center mt-0 mb-2 md:text-sm xl:text-base">even host the show</p>
                </div>
                <div className="w-full sm:w-3/12 mt-8 sm:mt-0">
                    <img src="https://reemasahusbp5345.github.io/assets/images/icon4.png" alt="DS" className="w-44 m-auto mt-1" />
                    <p className="text-center font-bold text-2xl mt-4">Data Structures</p>
                    <p className="text-center mb-0 mt-1 md:text-sm xl:text-base">Putting the right blocks in the</p>
                    <p className="text-center mt-0 mb-2 md:text-sm xl:text-base">right place is just my thing</p>
                </div>
            </div>
            <hr className="h-1 border-2 bg-gray-100" />
        </>
    )
}