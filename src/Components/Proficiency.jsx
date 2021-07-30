import React from "react"
import ReactApp from "../Images/icon3-removebg-preview (1).png"
import FrontendApp from "../Images/icon1-removebg-preview (1).png"
import DS from "../Images/icon4-removebg-preview.png"

export const Proficiency = () => {
    return (
        <>
            <p className="text-center text-4xl font-bold text-gray-500 mt-5">PROFICIENCY</p>
            <div className="sm:flex w-full sm:w-3/5 m-auto justify-between mt-10 mb-10">
                <div className="w-full sm:w-3/12">
                    <img src={ReactApp} alt="react app" className="w-44 m-auto mt-1" />
                    <p className="text-center font-bold text-2xl mt-4">React App</p>
                    <p className="text-center mb-0 mt-1">When it comes to react apps</p>
                    <p className="text-center mt-0 mb-2">I have the strength of Atlas</p>
                </div>
                <div className="w-full sm:w-3/12 mt-8 sm:mt-0">
                    <img src={FrontendApp} alt="frontend app" className="w-44 m-auto mt-1" />
                    <p className="text-center font-bold text-2xl mt-4">Frontend</p>
                    <p className="text-center mb-0 mt-1">Now just that I can</p>
                    <p className="text-center mt-0 mb-2">even host the show</p>
                </div>
                <div className="w-full sm:w-3/12 mt-8 sm:mt-0">
                    <img src="https://reemasahusbp5345.github.io/assets/images/icon4.png" alt="DS" className="w-44 m-auto mt-1" />
                    <p className="text-center font-bold text-2xl mt-4">Data Structures</p>
                    <p className="text-center mb-0 mt-1">Putting the right blocks in the</p>
                    <p className="text-center mt-0 mb-2">right place is just my thing</p>
                </div>
            </div>
            <hr />
        </>
    )
}