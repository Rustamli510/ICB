import React from "react";
import ExploreSection from "../components/repeated/ExploreSection";

//Images
import Pic from '../assets/images/brooke-cagle--uHVRvDr7pg-unsplash.jpg'


const Accommodation = () => {
    return (
        <section className="bg-gray-900 text-white">
            {/* Background Image with Overlay Text */}
            <div
                className="relative h-44 bg-cover bg-center flex items-center justify-center"
                // style={{ backgroundImage: "url('src/assets/images/brooke-cagle--uHVRvDr7pg-unsplash.jpg')" }}
            >
                <h1 className="text-3xl md:text-4xl font-bold mt-24 text-white">Accommodation</h1>
            </div>

            {/* Content Section */}
            <div className="bg-white text-gray-800 py-16 px-4 md:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:space-x-16">
                    {/* Left Side - Main Heading */}
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                            Make yourself <span className="text-[#902923]">at home!</span>
                        </h2>
                    </div>

                    {/* Right Side - Paragraph Content */}
                    <div className="text-gray-700 space-y-4">
                        <p className="text-lg">
                            We know how important it is to feel that someone is supporting you – especially when it comes to a move to a foreign country.
                        </p>
                        <p className="text-base">
                            This is why we have great options of accommodation companies that will make this process easier for an additional cost.
                        </p>
                        <p className="text-base">
                            You will be housed in a safe location and as close to the school as possible to maximize your comfort thanks to our partner network.
                        </p>
                    </div>
                </div>

                {/* Image Gallery Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img src={Pic} alt="Accommodation 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img src={Pic} alt="Accommodation 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img src={Pic} alt="Accommodation 3" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <ExploreSection />
        </section>
    );
};

export default Accommodation;