import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import me from "../assets/me.jpg";

const Main = () => {
  return (
    <div id='main' className="flex items-center justify-center min-h-screen bg-gray-900 px-4 sm:px-8">
      <div className="relative bg-gray-700 text-white w-full max-w-xl p-6 sm:p-8 rounded-lg shadow-lg">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-purple-500 rounded-full transform -translate-x-4 -translate-y-4 rotate-90" />
        <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-purple-500 rounded-full transform translate-x-10 translate-y-2" />
        <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-purple-500 rounded-full transform translate-x-4 translate-y-4" />


        {/* Profile and Text */}
        <div className="flex flex-col items-center sm:items-start p-4 text-center sm:text-left">
          {/* Circle Backgrounds */}
          <div className="absolute -bottom-8 -right-8 w-56 h-56 sm:w-72 sm:h-72 bg-sky-300 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute -top-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 bg-sky-300 rounded-full blur-2xl opacity-30"></div>

          <p className="text-purple-300 text-sm">Hello Everyone.</p>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            I'm Kalyani<br /> Pahadia
          </h1>
          <div className="flex justify-center sm:justify-start pt-4 max-w-[200px] w-full space-x-4">
            <a href="https://github.com/kalyanisp20"><FaGithub className="cursor-pointer" size={20} /></a>
            <a href="https://www.linkedin.com/in/kalyani-s-pahadia-874683253/"><FaLinkedinIn className="cursor-pointer" size={20} /></a>
            <a href="#"><SiLeetcode className="cursor-pointer" size={20} /></a>
            <a href="#"><IoIosMail className="cursor-pointer" size={20} /></a>
          </div>
          <div className="mt-4">
            <button className="flex items-center px-4 py-2 bg-purple-500 rounded-full text-white font-medium shadow-lg hover:bg-purple-600 transform hover:scale-105 transition duration-200">
              <a href="https://drive.google.com/file/d/1-ORji9gvz-XPrvtok0EtazArcNxelrxK/view?usp=drive_link">
              <span className="mr-2">Resume</span></a>
              <span className="text-xl">→</span>
            </button>
          </div>
          {/* Profile Image */}
          <div className="mt-6 sm:mt-4 sm:absolute sm:top-12 sm:right-12 w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src={me} alt="Profile" className="w-30 h-30 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
