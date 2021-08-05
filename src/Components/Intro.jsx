import React from "react"
import MyPhoto from "../Images/_DSC0044 (1).JPG"
import { BiMap } from "react-icons/bi"
import { AiOutlinePhone } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import { GrLinkedin } from "react-icons/gr"
import { GoMarkGithub} from "react-icons/go"
import { FaTwitter } from "react-icons/fa"

export const Intro = () => {

    return (
        <>
            <div className="flex justify-center items-center mt-5">
                <div className="w-48 h-48 lg:w-52 lg:h-52 rounded-full p-2 mt-4 bg-green-700 ">
                    <div className="w-44 h-44 lg:w-48 lg:h-48 rounded-full bg-white flex justify-center items-center">
                        <img src={MyPhoto} alt="html logo" className="w-44 h-44 lg:w-48 lg:h-48 rounded-full" />
                    </div>
                </div>
            </div>

            <p className="text-center pt-5 text-4xl font-bold text-gray-500">Chirag Agarwal</p>
            <p className="text-center text-2xl font-semibold text-gray-500">Frontend Developer</p>

            {/* Contact Details */}
            <div className="lg:w-2/5 m-auto mt-5">

                <div className="flex m-auto w-max lg:w-max">
                    <BiMap className="mt-1 text-green-800" />
                    <p className="pb-1 font-bold text-gray-500 text-center">Agra, India</p>
                </div>

                <div className="flex m-auto w-max mt-1 lg:w-max">
                    <AiOutlinePhone className="mt-1 text-green-800" />
                    <p className="font-bold text-gray-500">+91 8273995825</p>
                </div>

                <div className="flex w-max m-auto mt-1 lg:w-max">
                    <AiOutlineMail className="mt-1 text-green-800" />
                    <p className="ml-1 font-bold text-gray-500">agarwalchirag140@gmai.com</p>
                </div>

            </div>

            <div className="mt-10 w-max m-auto flex">
                <a href="https://www.linkedin.com/in/chirag-agarwal-06911a196/" target="_blank">
                    <GrLinkedin className="text-5xl text-blue-700" />
                </a>
                <a href="https://github.com/agarwalchirag140" target="_blank" className="ml-10">
                    <GoMarkGithub className="text-5xl" />
                </a>
                <a href="https://twitter.com/ChiragA62187921" target="_blank" className="ml-10">
                    <FaTwitter className="text-5xl text-blue-500" />
                </a>
            </div>

            {/* Description */}
            <p className="text-center text-lg pl-1 pr-1 w-full md:w-4/5 lg:w-3/5 xl:w-2/5 m-auto mt-10">A sincere and passionate developer with proficiency in working well with the React-Redux framework. Capable of working under pressure with ease and delivering the best in any situation. Looking forward to creating a celebrated career as a Full Stack Developer.</p>

            {/* Resume Button */}
            <div className="w-max sm:w-max m-auto bg-green-700 p-2 mb-10 mt-10">
                <a href="https://drive.google.com/file/d/12dUiIZF7RDcRi6SIzCv29RA-pAVe8gbX/view?usp=sharing" target="_blank">
                    <button className="p-2 text-white text-xl">View Resume</button>
                </a>
            </div>
            {/* underline */}
            <hr className="h-1 bg-gray-200" />
        </>
    )
}