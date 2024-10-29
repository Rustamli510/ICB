import React from 'react'

const teachers = [
    { name: "CLARA", img: "path_to_image_1" },
    { name: "VANESSA", img: "path_to_image_2" },
    { name: "JONE", img: "path_to_image_3" },
    { name: "ANA MARIA", img: "path_to_image_4" },
];

const MeetOurTeam = () => {
    return (
        <>
            <section className="w-full mb-10">
                {/* Background Image and Overlay */}
                <div className="relative w-full h-44 bg-cover bg-center overflow-hidden mb-8" style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-white text-3xl md:text-4xl mt-16 text-center font-bold">Meet Our Team</h1>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex max-w-[1240px] mx-auto flex-col md:flex-row justify-between items-start px-8 lg:px-0">
                    {/* Left Side */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Choose your own <span className="text-red-500">future</span>
                        </h2>
                        <p className="text-lg md:text-xl mt-4">by learning a new language</p>
                    </div>

                    {/* Right Side */}
                    <div className="md:w-1/2">
                        <p className="text-gray-700 text-base md:text-lg mb-4">
                            We believe that communication is the most important tool that humans can develop. Our mission is to empower our students to live, learn, and speak Spanish and English with confidence, allowing them to explore the world and express themselves clearly, knowing that they will be understood.
                        </p>
                        <p className="text-gray-700 text-base md:text-lg">
                            Our first campus in Spain was established in Madrid in 2017 and within two years achieved the prestigious international accreditation from the Instituto Cervantes, becoming part of the network of Accredited Centers. In 2022, we decided it was time to expand and evolve: a new campus with incredible infrastructure was inaugurated in Barcelona to sustain this growing project, and on August 1, 2023, our second campus also obtained accreditation.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-gray-800 text-white py-12 px-6 md:px-12">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Meet our <span className="text-red-500">teachers</span>
                    </h2>
                    <p className="text-lg text-gray-300 mt-2">
                        Barcelona <span className="text-red-500">Campus</span>
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
                    {teachers.map((teacher, index) => (
                        <div
                            key={index}
                            className="relative rounded-lg overflow-hidden shadow-lg bg-gray-700 group h-60"
                        >
                            <img
                                src={teacher.img}
                                alt={teacher.name}
                                className="w-full h-full object-cover transform transition duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-2 text-center text-white text-lg font-semibold">
                                {teacher.name}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default MeetOurTeam