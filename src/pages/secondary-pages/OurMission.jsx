import React from 'react'
import ExploreSection from '../../components/repeated/ExploreSection';

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
        bgColor: "bg-[#902923]",
    },
    {
        title: "C2: MASTERY",
        description: "From C2.1 to C2.2\nOfficial DELE C2 Diploma\n\nYou will be able to understand, summarise and express yourself very fluently and practically and can easily understand everything you read or hear.",
        bgColor: "bg-red-600",
    },
];

const helpCards = [
    {
        title: "Not sure what level you’re at?",
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

const OurMission = () => {
    return (
        <section className="w-full mb-5">
            {/* Background Image and Overlay */}
            <div className="relative w-full h-44 bg-cover bg-center overflow-hidden mb-8 bg-gray-900">
                <h1 className="text-white text-3xl md:text-4xl mt-28 text-center font-bold">Our mission & methodology</h1>
            </div>

            {/* Main Content */}
            <div className="flex max-w-6xl mx-auto flex-col md:flex-row justify-between items-start px-8 lg:px-0">
                {/* Left Side */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-4xl md:text-6xl font-bold">
                        Choose your own <span className="text-[#902923]">future</span>
                    </h2>
                    <p className="text-lg mt-4">by learning a new language</p>
                </div>

                {/* Right Side */}
                <div className="md:w-1/2">
                    <p className="text-gray-700 text-base mb-4">
                        We believe that communication is the most important tool that humans can develop. Our mission is to empower our students to live, learn, and speak Spanish and English with confidence, allowing them to explore the world and express themselves clearly, knowing that they will be understood.
                    </p>
                    <p className="text-gray-700 text-base">
                        Our first campus in Spain was established in Madrid in 2017 and within two years achieved the prestigious international accreditation from the Instituto Cervantes, becoming part of the network of Accredited Centers. In 2022, we decided it was time to expand and evolve: a new campus with incredible infrastructure was inaugurated in Barcelona to sustain this growing project, and on August 1, 2023, our second campus also obtained accreditation.
                    </p>
                </div>
            </div>

            <section className="py-16 px-5 lg:px-0">
                {/* Heading */}
                <div className="max-w-6xl mx-auto text-center md:text-left mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">All about our Levels</h2>
                    <p className="text-lg md:text-xl text-gray-700">
                        We offer a comprehensive and progressive language learning program that caters to individuals of all levels. Whether you're an absolute beginner or an advanced student, our courses are designed to help you progress from level A1, beginner, all the way up to mastery level, C2. As you complete each level, you will receive a diploma.
                    </p>
                </div>

                {/* Levels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto xs:mx-5">
                    {levelsData.map((level, index) => (
                        <div key={index} className={`${level.bgColor} text-white p-6 rounded-lg h-64 shadow-md`}>
                            <h3 className="text-xl font-semibold mb-2">{level.title}</h3>
                            <p className="text-sm whitespace-pre-line">
                                {level.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            {/* <section className="bg-[#B9BAA3] py-10 px-4 md:px-16"> */}
            {/* <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10"> */}
            {/* Section Title */}
            {/* <div className="flex">
                        <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">Let us help you</h2>
                        <span className="text-4xl text-black -mt-1 ml-4">→</span>
                    </div> */}

            {/* Help Cards */}
            {/* <div className="flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-6 space-y-4 md:space-y-0">
                        {helpCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-[#0A100D] text-white p-6 w-full sm:w-80 md:w-64 h-52 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition-all"
                            >
                                <h3 className="text-lg font-semibold">{card.title}</h3>
                                <p className="text-sm">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div> */}
            {/* </section> */}

            <ExploreSection />
        </section>
    )
}

export default OurMission