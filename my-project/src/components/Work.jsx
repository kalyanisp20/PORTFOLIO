import React from 'react';
import place from '../assets/place.jpg';

const Work = () => {
  return (
    <div id='work' className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Image Section with Circles */}
        <div className="flex-1 relative">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-64 lg:h-64 mx-auto">
            {/* Circle Backgrounds */}
            <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 lg:-top-10 lg:-right-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-64 lg:h-64 bg-green-600 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 lg:-bottom-2 lg:-left-7 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-600 rounded-full blur-2xl opacity-30"></div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-full shadow-lg">
              <img src={place} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* About Me Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">About Me</h2>
          <hr className="border-t-2 border-gray-500 my-4 w-16 mx-auto md:mx-0" />

          <p className="text-gray-400 mb-6 text-sm sm:text-base lg:text-lg">
          I am a passionate and detail-oriented software developer with hands-on experience in full-stack development, specializing in building robust and user-friendly applications. My expertise spans across modern technologies like the MERN stack, React.js, Node.js, and .NET.          </p>

          {/* Work Experience Button */}
          <a href="https://drive.google.com/file/d/14E7Fo6P--qgHrsTTRooouU8f40CMeYU8/view?usp=drive_link">
          <button className="bg-green-500 text-gray-900 px-4 py-2 rounded-md font-semibold mb-6 hover:scale-110 ease-in duration-200">
            Work Experience
          </button></a>

          {/* Experience List */}
          <div className="space-y-6">
            <div>
              <p className="text-green-400 text-xl sm:text-2xl font-bold">2024 - Present</p>
              <p className="font-semibold text-sm sm:text-base">
                Trust Fintech Limited <span className="text-gray-400 font-normal">| Project Intern</span>
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
              Currently, I am interning at Trust Fintech Limited, where I am developing a cutting-edge banking onboarding system that incorporates e-KYC verification, AML protection, and ID validation, streamlining the customer experience.              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
