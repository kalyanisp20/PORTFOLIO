import React from 'react';
import oneImg from 'D:/Projects 1/Portfolio/my-project/src/assets/Spotify.png';
import notes from 'D:/Projects 1/Portfolio/my-project/src/assets/notes.jpg';
import kyc from 'D:/Projects 1/Portfolio/my-project/src/assets/kyc.jpg';

const Projects = () => {
  return (
    <div id='projects' className="bg-gray-900 text-white py-12 ">
      <div className="max-w-7xl mx-auto px-8 pt-32">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold">Recent Projects</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I have developed a note application using React.js, Node.js, Express.js, and MongoDB for efficient task management, an e-KYC system with C#, .NET, SQL Server, and Azure OCR for streamlined onboarding, and a Spotify clone using React, Vite, and Tailwind CSS with a sleek, user-friendly interface.
          </p>
        </div>

        {/* Project Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Notes Application */}

          <a href="https://github.com/kalyanisp20/note-manager">
          <div className="relative text-center hover:scale-110 ease-in duration-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg"></div>
            </div>
            <div className="relative bg-gray-800 w-64 rounded-full p-10 ml-16">
              <img
                src={notes}
                alt="Notes Application"
                className="rounded-full w-32 h-32 object-cover mx-auto"
              />
              <p className="text-xl font-semibold mt-4">Notes<br />Application</p>
            </div>
          </div></a>

          {/* E-KYC Application */}
          <a href="https://github.com/kalyanisp20/E-KYC-form">
          <div className="relative text-center hover:scale-110 ease-in duration-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-lg"></div>
            </div>
            <div className="relative bg-gray-800 w-64 rounded-full p-10 ml-16">
              <img
                src={kyc}
                alt="E-KYC Application"
                className="rounded-full w-32 h-32 object-cover mx-auto"
              />
              <p className="text-xl font-semibold mt-4">E-KYC<br />Application</p>
            </div>
          </div>
          </a>

          {/* Music Application */}
          <a href="https://github.com/kalyanisp20/My-Music-App">
          <div className="relative text-center hover:scale-110 ease-in duration-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg"></div>
            </div>
            <div className="relative bg-gray-800 w-64 rounded-full p-10 ml-16">
              <img
                src={oneImg}
                alt="Music Application"
                className="rounded-full w-32 h-32 object-cover mx-auto"
              />
              <p className="text-xl font-semibold mt-4">Music<br />Application</p>
            </div>
          </div></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
