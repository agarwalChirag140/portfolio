import React from "react"

export const Achievments = () => {
    return (
        <>
            <p className="text-center text-4xl font-bold text-gray-500 mt-5">Achievements</p>
            <div className="grid grid-cols-2 grid-rows-2 sm:flex m-auto sm:justify-evenly w-full sm:w-3/5 mt-10">

                <div className="m-auto mt-2">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-4 bg-green-700 ">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white flex justify-center items-center">
                            {/* <img src={html} alt="html logo" className="w-16" /> */}
                            <p className="font-bold text-2xl">1200+ hrs</p>
                        </div>
                    </div>
                    <p className="text-center pt-2 text-lg font-bold">Coding</p>
                </div>

                <div className="m-auto">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-4 bg-green-700 ">
                        <div className="w-24 h-24 sm:w-28 sm:h-28  rounded-full bg-white flex justify-center items-center">
                            {/* <img src={CSS} alt="css logo" className="w-12" /> */}
                            <p className="font-bold text-2xl">100+ hrs</p>
                        </div>
                    </div>
                    <p className="text-center pt-2 text-lg font-bold">SoftSkills</p>
                </div>

                <div className="m-auto">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-4 bg-green-700 ">
                        <div className="w-24 h-24 sm:w-28 sm:h-28  rounded-full bg-white">
                            {/* <img src={JavaScript} alt="js logo" /> */}
                            <p className="font-bold text-2xl text-center pt-10">100+</p>
                        </div>
                    </div>
                    <p className="text-center pt-2 text-lg font-bold">DSA Problems</p>
                </div>

                <div className="m-auto">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-4 bg-green-700 ">
                        <div className="w-24 h-24 sm:w-28 sm:h-28  rounded-full bg-white">
                            {/* <img src={ReactJS} alt="react js logo" className="p-2" /> */}
                            <p className="font-bold text-2xl pt-10 text-center">10+</p>
                        </div>
                    </div>
                    <p className="text-center pt-2 text-lg font-bold">Projects</p>
                </div>

            </div>
        </>
    )
}