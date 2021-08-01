import React from "react"
import covid from "../Images/Screenshot from 2021-07-30 12-12-35.png"
import github from "../Images/GitHub-Mark-removebg-preview.png"
import { FiExternalLink } from "react-icons/fi"
import Redux from "../Images/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t-removebg-preview.png"
import ReactApp from "../Images/638-6386507_10-years-of-experience-react-native-logo-svg-removebg-preview.png"
import Tailwind from "../Images/Tailwind-removebg-preview.png"
import netflix from "../Images/Screenshot from 2021-07-30 17-43-06.png"
import firebase from "../Images/firebase_logo-removebg-preview.png"
import instagram from "../Images/Screenshot from 2021-07-30 17-57-54.png"
// import imageSearch from "../Images/"

export const Projects = () => {
    return (
        <>
            <p className="text-center text-4xl font-bold text-gray-500 mt-5">PROJECTS</p>
            <div className="sm:flex sm:w-3/5 sm:m-auto mt-5">
                {/* Covid Tracker App */}
                <div className="sm:w-1/3 m-2 shadow-2xl bg-gray-100">
                    <img src={covid} alt="screenshot of covid" className="w-full p-2 mb-3" />
                    <hr/>
                    <h1 className="text-center text-2xl font-bold pt-2">Covid Tracker App</h1>
                    <p className="text-center text-lg p-1 pt-4">In this application, we track the CoronaVirus Cases, Recovery, and Death through the number as well asthrough the map.</p>
                    <div className="flex w-3/5 m-auto justify-between mb-8 mt-4">
                        <div className="flex">
                            <a href="https://github.com/agarwalchirag140/covid-tracker-app" target="_blank" className="flex">
                                <img src={github} alt="github logo" className="w-6" />
                                <p className="ml-1">Github</p>
                            </a>
                        </div>
                        <div className="flex">
                            <a href="https://react-covid-tracker-app1.netlify.app/" target="_blank" className="flex">
                                <FiExternalLink className="mt-1" />
                                <p className="ml-1">Demo Link</p>
                            </a>
                        </div>
                    </div>
                    {/* Tech Stack */}
                    <div className="flex w-3/5 m-auto justify-evenly">
                        <img src={ReactApp} alt="react logo" className="w-12 h-12 mb-2" />
                        <img src={Tailwind} alt="tailwind logo" className="w-12 h-12" />
                    </div>
                </div>
                {/* Netflix Clone */}
                <div className="sm:w-1/3 mt-4  sm:m-2 shadow-2xl bg-gray-100">
                    <img src={netflix} alt="screenshot of covid" className="w-full p-2 mb-3" />
                    <hr/>
                    <h1 className="text-center text-2xl font-bold pt-2">Netflix Clone</h1>
                    <p className="text-center text-lg p-1 pt-4">This is the complete clone of the Netflix website. On this website, the user can create an account, and if it's successful, then after the login, the user can see the trailer of different types of movies, web series, and documentaries.</p>
                    <div className="flex w-3/5 m-auto justify-between mb-8 mt-4">
                        <div className="flex">
                            <a href="https://github.com/agarwalchirag140/netflix_clone" target="_blank" className="flex">
                                <img src={github} alt="github logo" className="w-6" />
                                <p className="ml-1">Github</p>
                            </a>
                        </div>
                        <div className="flex">
                            <a href="https://netflix-clone-project2.netlify.app/" target="_blank" className="flex">
                                <FiExternalLink className="mt-1" />
                                <p className="ml-1">Demo Link</p>
                            </a>
                        </div>
                    </div>
                    {/* Tech Stack */}
                    <div className="flex w-3/5 m-auto justify-between mb-3">
                        <img src={ReactApp} alt="react logo" className="w-12 h-12 mb-2" />
                        <img src={Redux} alt="redux logo" className="w-12 h-12" />
                        <img src={Tailwind} alt="tailwind logo" className="w-12 h-12" />
                        <img src={firebase} alt="tailwind logo" className="w-12 h-12" />
                    </div>
                </div>
                {/* Instagram Clone */}
                <div className="sm:w-1/3 mt-4 sm:m-2 shadow-2xl bg-gray-100">
                    <img src={instagram} alt="screenshot of covid" className="w-full p-2 mb-3" />
                    <hr/>
                    <h1 className="text-center text-2xl font-bold pt-2">Instagram Clone</h1>
                    <p className="text-center text-lg p-1 pt-4">This is the complete clone of Instagram. In this clone, the user can create an account, if it's successful, then after the login, the User can create a post, the user can like a post, user can add a comment on the post, and also user can see other users post on the homepage of Instagram.</p>
                    <div className="flex w-3/5 m-auto justify-between mb-8 mt-4">
                        <div className="flex">
                            <a href="https://github.com/agarwalchirag140/Instagram_clone" target="_blank" className="flex">
                                <img src={github} alt="github logo" className="w-6" />
                                <p className="ml-1">Github</p>
                            </a>
                        </div>
                        <div className="flex">
                            <a href="https://instagram-clone-chirag.netlify.app/" target="_blank" className="flex">
                                <FiExternalLink className="mt-1" />
                                <p className="ml-1">Demo Link</p>
                            </a>
                        </div>
                    </div>
                    {/* Tech Stack */}
                    <div className="flex w-3/5 m-auto justify-between mb-3">
                        <img src={ReactApp} alt="react logo" className="w-12 h-12 mb-2" />
                        <img src={Redux} alt="redux logo" className="w-12 h-12" />
                        <img src={Tailwind} alt="tailwind logo" className="w-12 h-12" />
                        <img src={firebase} alt="tailwind logo" className="w-12 h-12" />
                    </div>
                </div>
            </div>
            {/* 2nd row */}
            <div className="sm:flex sm:w-3/5 sm:m-auto mt-5 pb-10">
                {/* Covid Tracker App */}
                <div className="sm:w-1/3 m-2 ml-1 shadow-2xl bg-gray-100">
                    <img src={covid} alt="screenshot of covid" className="w-full p-2 mb-3" />
                    <hr/>
                    <h1 className="text-center text-2xl font-bold pt-2">Image Search App</h1>
                    <p className="text-center text-lg p-1 pt-4">In this application, we can search the image of different thing. This application is building by using React JS and TailwindCSS</p>
                    <div className="flex w-3/5 m-auto justify-between mb-8 mt-4">
                        <div className="flex">  
                            <a href="https://github.com/agarwalchirag140/covid-tracker-app" target="_blank" className="flex">
                                <img src={github} alt="github logo" className="w-6" />
                                <p className="ml-1">Github</p>
                            </a>
                        </div>
                        <div className="flex">
                            <a href="https://react-covid-tracker-app1.netlify.app/" target="_blank" className="flex">
                                <FiExternalLink className="mt-1" />
                                <p className="ml-1">Demo Link</p>
                            </a>
                        </div>
                    </div>
                    {/* Tech Stack */}
                    <div className="flex w-3/5 m-auto justify-evenly">
                        <img src={ReactApp} alt="react logo" className="w-12 h-12 mb-2" />
                        <img src={Tailwind} alt="tailwind logo" className="w-12 h-12" />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}