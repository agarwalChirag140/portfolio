import React from "react"

export const Achievments = () => {
    return (
        <>
            <p className="text-center text-4xl font-bold text-gray-500 mt-8">Achievements</p>
            <div className="grid md:grid-cols-2 md:grid-rows-2 xl:flex xl:justify-evenly w-full xl:w-3/5 m-auto mt-10 mb-5">

                <div className="m-auto mt-3">
                    <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full p-4 bg-green-700 ">
                        <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-white flex justify-center items-center">
                            {/* <img src={html} alt="html logo" className="w-16" /> */}
                            <p className="font-bold text-3xl">1200+ hrs</p>
                        </div>
                    </div>
                    <p className="text-center pt-2 text-2xl font-bold">Coding</p>
                </div>

                <div className="m-auto mt-3">
                    <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full p-4 bg-green-700 ">
                        <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-white flex justify-center items-center">
                            {/* <img src={CSS} alt="css logo" className="w-12" /> */}
                            <p className="font-bold text-3xl">100+ hrs</p>
                        </div>
                    </div>
                    <p className="text-center pt-2 text-2xl font-bold">SoftSkills</p>
                </div>

                <div className="m-auto mt-3">
                    <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full p-4 bg-green-700 ">
                        <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-white flex justify-center items-center">
                            {/* <img src={JavaScript} alt="js logo" /> */}
                            <p className="font-bold text-3xl ">100+</p>
                        </div>
                    </div>
                    <p className="text-center pt-2 text-2xl font-bold">DSA Problems</p>
                </div>

                <div className="m-auto mt-3">
                    <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full p-4 bg-green-700 ">
                        <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-white flex justify-center items-center">
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