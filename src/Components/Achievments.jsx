import React from "react"

export const Achievments = () => {
    return (
        <>
            <p className="text-center text-4xl font-bold text-gray-500 mt-8">Achievements</p>
            <div className="grid grid-cols-2 grid-rows-2 sm:flex m-auto sm:justify-evenly w-full sm:w-3/5 mt-10 mb-10">

                <div className="m-auto mt-2">
                    <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full p-4 bg-green-700 ">
                        <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-white flex justify-center items-center">
                            {/* <img src={html} alt="html logo" className="w-16" /> */}
                            <p className="font-bold text-3xl">1200+ hrs</p>
                        </div>
                    </div>
                    <p className="text-center pt-2 text-2xl font-bold">Coding</p>
                </div>

                <div className="m-auto">
                    <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full p-4 bg-green-700 ">
                        <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-white flex justify-center items-center">
                            {/* <img src={CSS} alt="css logo" className="w-12" /> */}
                            <p className="font-bold text-3xl">100+ hrs</p>
                        </div>
                    </div>
                    <p className="text-center pt-2 text-2xl font-bold">SoftSkills</p>
                </div>

                <div className="m-auto">
                    <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full p-4 bg-green-700 ">
                        <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-white flex justify-center items-center">
                            {/* <img src={JavaScript} alt="js logo" /> */}
                            <p className="font-bold text-3xl ">100+</p>
                        </div>
                    </div>
                    <p className="text-center pt-2 text-2xl font-bold">DSA Problems</p>
                </div>

                <div className="m-auto">
                    <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full p-4 bg-green-700 ">
                        <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-white flex justify-center items-center">
                            {/* <img src={ReactJS} alt="react js logo" className="p-2" /> */}
                            <p className="font-bold text-3xl">10+</p>
                        </div>
                    </div>
                    <p className="text-center pt-2 text-2xl font-bold">Projects</p>
                </div>

            </div>
        </>
    )
}