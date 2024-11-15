import React from 'react';
import { Link } from 'react-router-dom';

const levelsData = [
    {
        title: "A1: ACCESS",
        description: "From A1.1 to A1.2\nOfficial DELE A1 Diploma\n\nFrom the first day, you will start speaking Spanish, and over the course of the two modules, you’ll learn to express needs, understand and use very common everyday expressions, as well as simple phrases aimed at meeting immediate needs.",
        bgColor: "bg-yellow-500",
    },
    {
        title: "A2: PLATFORM",
        description: "From A2.1 to A2.3\nOfficial DELE A2 Diploma\n\nYou will have the ability to understand the most common expressions and sentences in the major interest areas (e.g. personal information, describe family, and basic geography)",
        bgColor: "bg-yellow-400",
    },
    {
        title: "B1: Threshold",
        description: "From B1.1 to B1.2\nOfficial DELE B1 Diploma\n\nYou will be able to travel by yourself without language issues. You will be able to also describe events and dreams and to develop reasonable explanations, opinions and plans",
        bgColor: "bg-orange-400",
    },
    {
        title: "B2: ADVANCED",
        description: "From B2.1 to B2.2\nOfficial DELE B2 Diploma\n\nYou will be able to interact with native speakers with more confidence with a strong foundation that allows speaking on different subjects.",
        bgColor: "bg-orange-500",
    },
    {
        title: "C1: Domain",
        description: "From C1.1 to C1.2\nOfficial DELE C1 Diploma\n\nYou will have the ability to understand longer texts, complex conversations and express yourself without obvious pauses.",
        bgColor: "bg-red-500",
    },
    {
        title: "C2: MASTERY",
        description: "From C2.1 to C2.2\nOfficial DELE C2 Diploma\n\nYou will be able to understand, summarise and express yourself very fluently and practically and can easily understand everything you read or hear.",
        bgColor: "bg-red-600",
    },
];

const RussianCourse = () => {
    return (
        <>
            <section className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-24 py-12 lg:py-24 bg-white">
                <div className="absolute w-full h-[180px] top-0 left-0 bg-gray-900">
                    {/* <img src="src/assets/images/brooke-cagle--uHVRvDr7pg-unsplash.jpg" alt="Header Background" className="w-full h-full object-cover" /> */}
                    <h1 className='text-center mt-28 text-4xl text-white font-bold'>Spanish Course</h1>
                </div>
                <div className="relative mt-[250px] text-center lg:text-left max-w-md lg:max-w-lg mb-8 lg:mb-0">
                    <h2 className="text-3xl lg:text-7xl font-bold">
                        The time to <br />
                        learn is <span className="text-[#902923]">now</span>
                    </h2>
                    <div className="mt-6 space-y-4">
                        <Link to="/russian-course" className="text-[#902923] font-medium flex items-center space-x-2 hover:underline">
                            <span>&#x2192;</span>
                            <span>Russian</span>
                        </Link>
                        <Link to="/english-course" className="text-[#902923] font-medium flex items-center space-x-2 hover:underline">
                            <span>&#x2192;</span>
                            <span>English</span>
                        </Link>
                        <Link to="/catalan-course" className="text-[#902923] font-medium flex items-center space-x-2 hover:underline">
                            <span>&#x2192;</span>
                            <span>Catalan</span>
                        </Link>
                    </div>
                </div>
                <div className="relative lg:mt-[250px] text-gray-700 max-w-md lg:max-w-xl text-sm lg:text-base leading-relaxed">
                    <p className="mb-4">
                        Thank you for considering NL College for your language learning adventure. We understand that every student has unique needs and goals when it comes to language learning. That’s why we offer a range of Spanish and English courses to cater to your individual needs.
                    </p>
                    <p className="mb-4">
                        Our courses are designed to meet the needs of individuals with varying proficiency levels, ranging from A1 (basic) to C2 (proficiency). If you're already familiar with the language, you're welcome to join any of our existing groups, which start every Monday. However, if you're just starting, no worries at all. We have multiple starting dates available that you can check out here.
                    </p>
                    <p className="mb-4">
                        Our team of dedicated language experts is committed to delivering the best language education to our students. In addition to our regular courses, we also offer exam preparation courses that will help you excel in your language exams.
                    </p>
                    <p>
                        At NL College, we understand that language learning can be challenging, which is why we provide support every step of the way. Our aim is to help you achieve your language goals and ensure that your language learning journey is both enjoyable and effective.
                    </p>
                </div>
            </section>
            <section className="flex flex-col lg:flex-row bg-gray-900 text-gray-100 px-4 lg:px-24 py-12 lg:py-24">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <h3 className="text-[#902923] text-3xl font-bold mb-6">ACCELERATED</h3>
                    <div className="space-y-4 text-sm lg:text-base">
                        <div>
                            <p className="font-semibold text-[#902923]">Schedule</p>
                            <p>20h per week &nbsp; | &nbsp; 4 hours / day</p>
                        </div>
                        <div>
                            <p><span className="italic">Barcelona</span><br />
                                9:30 - 1:30 pm &nbsp; | &nbsp; Mon to Fri*<br />
                                2:00 - 6:00 pm &nbsp; | &nbsp; Mon to Fri*</p>
                            <hr className="border-[#902923] my-2" />
                            <p><span className="italic">Madrid</span><br />
                                9:00 - 1:00 pm &nbsp; | &nbsp; Mon to Fri*<br />
                                1:30 - 5:30 pm &nbsp; | &nbsp; Mon to Fri*</p>
                            <p className="text-xs mt-2">* depending on availability</p>
                        </div>
                        <div>
                            <a href="#" className="text-[#902923] hover:underline flex items-center">
                                <span>&#x25B6;</span>
                                <span className="ml-2">See our calendar for start dates</span>
                            </a>
                        </div>
                        <div>
                            <p className="font-semibold text-[#902923]">Levels</p>
                            <p>From A1 to C1</p>
                        </div>
                        <div>
                            <p className="font-semibold text-[#902923]">Price / month</p>
                            <p>€ 634</p>
                            <p className="text-xs mt-1">Remember: the more weeks you choose, the more discount you get!</p>
                        </div>
                        <button className="bg-[#902923] text-white font-semibold py-3 px-6 mt-6 rounded-md hover:scale-105">
                            I WANT TO KNOW MORE
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:pl-10">
                    <h4 className="text-lg lg:text-xl font-bold mb-4">Looking to learn Spanish at lightning speed?</h4>
                    <p className="leading-relaxed text-sm lg:text-base mb-4">
                        Our Accelerated Spanish Course is the perfect solution! This highly acclaimed course is specially designed for long-term students who need to meet visa requirements, but also want to improve their communication, comprehension, writing, and grammatical skills in a short period of time.
                    </p>
                    <p className="leading-relaxed text-sm lg:text-base mb-4">
                        With our Accelerated Spanish Course, you will see immediate results and develop your communicative abilities in no time. Our expert teachers will guide you through daily oral expression and written comprehension exercises, ensuring that your exposure to the language is abundant.
                    </p>
                    <p className="leading-relaxed text-sm lg:text-base mb-4">
                        The class is split into two parts, with a different native teacher for each slot and a short break in between. This means that you will enjoy two unique teaching styles and benefit from the expertise of two magnificent professors from the NL College teaching team. Join us today and accelerate your Spanish learning journey!
                    </p>
                    <p className="text-[#902923] text-sm lg:text-base mt-4">This course meets the long-term VISA requirements</p>
                </div>
            </section>
            <section className="py-16 px-5 lg:px-0">
                {/* Heading */}
                <div className="max-w-6xl mx-auto text-center md:text-left mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">All about our Levels</h2>
                    <p className="text-lg md:text-xl text-gray-700">
                        We offer a comprehensive and progressive language learning program that caters to individuals of all levels. Whether you're an absolute beginner or an advanced student, our courses are designed to help you progress from level A1, beginner, all the way up to mastery level, C2. As you complete each level, you will receive a diploma.
                    </p>
                </div>

                {/* Levels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {levelsData.map((level, index) => (
                        <div key={index} className={`${level.bgColor} text-white p-6 rounded-lg shadow-md`}>
                            <h3 className="text-xl font-semibold mb-2">{level.title}</h3>
                            <p className="text-sm whitespace-pre-line">
                                {level.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default RussianCourse;