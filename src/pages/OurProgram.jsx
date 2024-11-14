import React from "react";
import ExploreSection from "../components/repeated/ExploreSection";


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


const OurProgram = () => {
    return (
        <section>
            {/* Image Section */}
            <div className="relative w-full h-40 md:h-44 bg-cover bg-center" style={{ backgroundImage: 'url("src/assets/images/brooke-cagle--uHVRvDr7pg-unsplash.jpg")' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-4xl mt-16 font-bold">
                    Our Program
                </h2>
            </div>

            <div className="container max-w-6xl mx-auto py-4">
                {/* Content Section */}
                <div className="flex flex-col md:flex-row mt-8 space-y-6 md:space-y-0 md:space-x-2">
                    {/* Left Side Text */}
                    <div className="flex-1 text-3xl md:text-7xl font-bold">
                        <p>Know our</p>
                        <p className="text-[#902923]">program</p>
                        <p className="text-lg text-gray-700 mt-4">Natural Learning & Communicative Program</p>
                    </div>

                    {/* Right Side Description */}
                    <div className="flex-1 text-gray-700 space-y-4">
                        <p>
                            At NL College, we believe in doing things differently! Our program is exclusive and unique, based on a natural approach. Unlike traditional methods, we rely on a more immersive methodology so that our students make the most out of their stay in Spain and also learn outside the classroom. We are committed to providing our students with the best learning experience possible, and we would love to show you what sets us apart!
                        </p>
                        <p>
                            Through our program, students can progress through different courses and levels, empowering them to achieve their personal learning goals. Our methodology focuses on the student as the protagonist of learning, prioritizing meaningful language use. We believe in action-based learning, motivating students to fully develop their language skills.
                        </p>
                    </div>
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

            {/* <div className="container max-w-6xl mx-auto p-4 space-y-12"> */}

                {/* Section 1 */}
                {/* <section className="bg-gray-900 text-white p-8 rounded-lg">
                    <h2 className="text-4xl font-bold">
                        A program tailored <span className="text-red-500">just for you!</span>
                    </h2>
                    <p className="mt-4 text-gray-300">
                        At NL College, teaching and learning are based on curriculum progression where the difficulty and amount of content, as well as the number of hours, will increase as you progress from course to course and from level to level, potentially reaching an advanced level in 36 weeks. Want to know more? No other school offers such a detailed and transparent program like NL College. You’ll know clearly and simply the duration of each course and level. We will inform you precisely about the grammatical, lexical, and communicative contents of each of our courses. Want to know when you’ll learn the subjunctive? At NL College, we’ll tell you everything.
                    </p>
                </section> */}

                {/* Section 2 */}
                {/* <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8"> */}
                    {/* Left Side Image */}
                    {/* <div className="flex-1 text-center md:text-left">
                        <h3 className="text-3xl font-bold">Let's <span className="text-red-500">jump in!</span></h3>
                        <img src="/path/to/your/levels-image.jpg" alt="Levels Graphic" className="w-full max-w-sm mx-auto" />
                    </div> */}

                    {/* Right Side Text */}
                    {/* <div className="flex-1 bg-gray-900 text-white p-8 rounded-lg">
                        <h4 className="text-2xl font-bold text-yellow-400">Access and Platform</h4>
                        <p className="mt-2 text-sm">A1.1 | A1.2 | A2.1 | A2.2 | A2.3</p>
                        <div className="mt-4 space-y-4 text-gray-300">
                            <p><span className="text-yellow-400 font-bold">A1.1</span> Welcome to NL COLLEGE! What’s your name? Where are you from? ...</p>
                            <p><span className="text-yellow-400 font-bold">A1.2</span> Are you interested in learning more about Spanish culture? ...</p>
                            <p><span className="text-yellow-400 font-bold">A2.1</span> Now that you know the present tense (and the near future) ...</p>
                            <p><span className="text-yellow-400 font-bold">A2.2</span> The next step is learning to talk about your past experiences ...</p>
                            <p><span className="text-yellow-400 font-bold">A2.3</span> Did you know there are 4 official languages in Spain? ...</p>
                        </div>
                    </div> */}
                {/* </section> */}

                {/* Section 3 */}
                {/* <section className="bg-gray-900 text-white p-8 rounded-lg">
                    <h4 className="text-xl font-bold text-red-500">Treshold and Advanced</h4>
                    <p className="mt-2 text-sm">B1.1 (beginner and Advanced) | B1.2 (Beginner and Advanced) | B2.1 | B2.2</p>
                    <h4 className="mt-6 text-xl font-bold text-red-500">Domain and Mastery</h4>
                    <p className="mt-2 text-sm">C1.1 | C1.2 | C2.1 | C2.2</p>
                </section> */}

                {/* Section 4 */}
                {/* <section className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-8 w-full">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold">We just started!</h3>
                        <p className="text-4xl mt-2">→</p>
                    </div>
                    <div className="flex flex-col md:flex-row flex-1 space-y-4 md:space-y-0 md:space-x-4 w-full">
                        <div className="bg-red-500 w-full md:w-[350px] text-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-lg font-bold">Not sure what level you're at?</h4>
                            <p className="text-sm mt-2">We have prepared a test to determine your English and Spanish proficiency levels</p>
                        </div>
                        <div className="bg-red-500 w-full md:w-auto text-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-lg font-bold">Which course will best fit your needs?</h4>
                            <p className="text-sm mt-2">We have options for everyone</p>
                        </div>
                        <div className="bg-red-500 w-full md:w-auto text-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-lg font-bold">Who said learning couldn't be fun?</h4>
                            <p className="text-sm mt-2">We have different extra cultural activities every month. Check them out!</p>
                        </div>
                    </div>
                </section> */}

            {/* </div> */}

            <ExploreSection />

        </section>
    );
};

export default OurProgram;
