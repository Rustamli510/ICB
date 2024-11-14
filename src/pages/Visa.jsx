import React from "react";
import ExploreSection from "../components/repeated/ExploreSection";

const helpCards = [
    {
        title: "How many levels are there?",
        description: "We have prepared a test to determine your English and Spanish proficiency levels",
    },
    {
        title: "Which course will best fit your needs?",
        description: "We have options for everyone",
    },
    {
        title: "Who said learning couldn’t be fun?",
        description: "We have different extra cultural activities every month. Check them out!",
    },
];

const Visa = () => {
    return (
        <>
            <section className="bg-gray-900 text-white">
                {/* Background Image with Overlay Text */}
                <div
                    className="relative h-44 bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: "url('src/assets/images/brooke-cagle--uHVRvDr7pg-unsplash.jpg')" }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-white mt-16">Student VISA</h1>
                </div>

                {/* Content Section */}
                <div className="bg-white text-gray-800 py-16 px-4 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:space-x-16">
                        {/* Left Side - Main Heading */}
                        <div className="mb-8 md:mb-0">
                            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                                Let's make it <span className="text-[#902923]">easy</span>
                            </h2>
                        </div>

                        {/* Right Side - Paragraph Content */}
                        <div className="text-gray-700 space-y-4">
                            <p className="text-lg">
                                We know that applying for a long-term student visa can be a daunting task, especially if you’re not familiar with the process. That's why we're here to help.
                            </p>
                            <p className="text-base">
                                With our extensive experience in advising students during the application process, and our partnership with specialized visa lawyers, you can trust that you're in good hands.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-900 text-white py-16 px-4 md:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    {/* First Section */}
                    <div className="mb-16">
                        <h2 className="text-xl md:text-2xl font-semibold text-[#902923] mb-4">
                            First things first
                        </h2>
                        <div className="flex items-start space-x-4">
                            {/* Circle with line */}
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-[#902923]"></div>
                                <div className="w-px h-full bg-gray-500 mt-2"></div>
                            </div>
                            {/* Content */}
                            <div>
                                <p className="text-lg">
                                    To get started, all you need to do is enroll in our Accelerated Spanish course.
                                </p>
                                <p className="text-gray-300 mt-2">
                                    Once you’ve fully paid for the course, we’ll guide you through every step of the visa application process. Our goal is to make the process as smooth and hassle-free as possible, so you can focus on what really matters – learning and growing with us.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Section */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-[#902923] mb-4">
                            Do have this in consideration
                        </h2>
                        <div className="space-y-8">
                            {/* Points List */}
                            {[
                                "You can apply for a visa at the Consulate General of Spain in your home country, or you can apply after you enter Spain as a tourist. Please note that there is a time limit for applying for a visa from within Spain, so if this is your situation, please consult with us.",
                                "The documents must be translated and apostatized.",
                                "By choosing courses of 27 weeks or more, you will have the right to renew your student visa, if you wish to do so in the future.",
                                "We have partnerships with companies that can assist you with visa applications in Spain and other countries for an additional cost. Feel free to contact us to learn more."
                            ].map((text, index) => (
                                <div className="flex items-start space-x-4" key={index}>
                                    {/* Circle with line */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-4 h-4 rounded-full bg-[#902923]"></div>
                                        {index < 3 && <div className="w-px h-full bg-gray-500 mt-2"></div>}
                                    </div>
                                    {/* Content */}
                                    <p className="text-gray-300">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <ExploreSection />
        </>
    );
};

export default Visa;