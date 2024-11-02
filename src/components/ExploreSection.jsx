import React from 'react';
import { Link } from 'react-router-dom';

const ExploreSection = () => {
  return (
    <div className="bg-yellow-400 py-10 px-4 sm:px-5 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-14">
      <div className="flex flex-col items-center justify-center mb-8 mt-8">
        <h2 className="text-xl md:text-3xl font-bold text-black">Let’s explore!</h2>
        <span className="text-2xl md:text-4xl font-bold text-black">→</span>
      </div>
      <div className="flex flex-wrap justify-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
        <Link to="/meet-our-team" className="bg-gray-800 flex flex-col text-white p-4 md:p-6 w-full sm:w-1/2 md:w-64 h-56 rounded-lg hover:shadow-xl hover:scale-105 transition-all">
          <h3 className="text-xl font-semibold">Know a little bit more about us!</h3>
          <p className="text-xs">Let us introduce ourselves!</p>
        </Link>
        <Link to="/study-program-certification" className="bg-gray-800 flex flex-col text-white p-4 md:p-6 w-full sm:w-1/2 md:w-64 h-56 rounded-lg hover:shadow-xl hover:scale-105 transition-all">
          <h3 className="text-xl font-semibold">Natural Learning & Communicative Program</h3>
          <p className="text-xs">Learn more about our exclusive Program</p>
        </Link>
        <Link to="/student-life" className="bg-gray-800 flex flex-col text-white p-4 md:p-6 w-full sm:w-1/2 md:w-64 h-56 rounded-lg hover:shadow-xl hover:scale-105 transition-all">
          <h3 className="text-xl font-semibold">Student life</h3>
          <p className="text-xs">We support you during all the process. At NL College, we have your back!</p>
        </Link>
      </div>
    </div>
  );
};

export default ExploreSection;
