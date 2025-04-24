import React from 'react'
import edu from 'D:/Projects 1/Portfolio/my-project/src/assets/edu.jpeg'

const Education = () => {
  return (
    <div className="bg-gray-900 text-white py-12 pt-40 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Education Text Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-semibold">My Education</h2>
          <hr className="border-t-2 border-gray-500 my-4 w-16" />
          
          <div className="space-y-6">
            <div>
              <p className="text-pink-500 text-3xl font-bold">2021-Present</p>
              <p className="font-semibold">B.Tech in Information Technology</p>
              <p className="text-gray-400">St. Vincent Pallotti College of Engineering and Technology, Nagpur</p>
            </div>
            <div>
              <p className="text-pink-500 text-3xl font-bold">2019</p>
              <p className="font-semibold">HSC</p>
              <p className="text-gray-400">Prerna College of Science, Nagpur</p>
            </div>
            <div>
              <p className="text-pink-500 text-3xl font-bold">2018</p>
              <p className="font-semibold">SSC</p>
              <p className="text-gray-400">Shahu's Garden High School, Nagpur</p>
            </div>
          </div>

          <p className="text-gray-400 mt-6">
          Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing.          </p>
        </div>

        {/* Image Section with Circles */}
        <div className="flex-1 relative">
          <div className="relative w-64 h-64 mx-auto">

            {/* Circle Backgrounds */}
            <div className="absolute -top-5 -left-5 w-72 h-72 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute -bottom-5 -right-5 w-72 h-72 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-30"></div>
            
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-full shadow-lg">
              <img src={edu} alt="Education" className="w-64 h-64 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education