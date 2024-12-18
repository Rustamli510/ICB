import React from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ExploreSection = () => {
    return (
        <section className="bg-[#B9BAA3] py-6 px-4 sm:px-5 flex-сol items-center space-y-8 md:space-y-0">
            <div className='flex flex-col justify-center items-center'>
                <div className="flex flex-col items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Let’s explore!</h2>
                    <FaArrowDownLong className='text-[30px] text-gray-900 mt-2 ease-in-out' />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-center px-10">
                    <Link to="/meet-our-team" className="bg-gray-900 flex flex-col justify-between text-white p-4 md:p-6 w-full sm:w-80 md:w-64 h-56 rounded-lg hover:shadow-xl hover:scale-105 transition-all">
                        <h3 className="text-xl font-semibold">Know a little bit more about us!</h3>
                        <p className="text-xs">Let us introduce ourselves!</p>
                    </Link>
                    <Link to="/study-program-certification" className="bg-gray-900 flex flex-col justify-between text-white p-4 md:p-6 w-full sm:w-80 md:w-64 h-56 rounded-lg hover:shadow-xl hover:scale-105 transition-all">
                        <h3 className="text-xl font-semibold">Natural Learning & Communicative Program</h3>
                        <p className="text-xs">Learn more about our exclusive Program</p>
                    </Link>
                    <Link to="/student-life" className="bg-gray-900 flex flex-col justify-between text-white p-4 md:p-6 w-full sm:w-80 md:w-64 h-56 rounded-lg hover:shadow-xl hover:scale-105 transition-all">
                        <h3 className="text-xl font-semibold">Student life</h3>
                        <p className="text-xs">We support you during all the process. At NL College, we have your back!</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ExploreSection;
