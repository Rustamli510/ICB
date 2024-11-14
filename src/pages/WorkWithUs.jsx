import React from 'react';
import { Link } from 'react-router-dom';

const WorkWithUs = () => {
    return (
        <section className="w-full">
            {/* Background Image and Overlay */}
            <div className="relative w-full h-44 bg-cover bg-center overflow-hidden mb-8" style={{ backgroundImage: `url('src/assets/images/brooke-cagle--uHVRvDr7pg-unsplash.jpg')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-4xl mt-16 text-center font-bold">Work with us</h1>
                </div>
            </div>

            <section className="max-w-6xl mx-auto py-16 px-4 lg:px-0">
                <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0">
                    {/* Left Column - Heading */}
                    <div className="flex-shrink-0 lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-6xl font-bold text-gray-900">
                            We're <span className="text-[#902923]">hiring!</span>
                        </h1>
                        <h2 className="text-xl font-semibold text-[#902923] mt-4">How to apply</h2>
                    </div>

                    {/* Right Column - Description, Button, and List */}
                    <div className="lg:w-1/2 text-center lg:text-left ml-0">
                        <p className="text-gray-700 text-xl mb-6">
                            Are you looking for new opportunities? We’re always looking for new talent. If you’re a professional in the Teaching, Administration or Marketing field, come and say Hi!
                        </p>

                        {/* CTA Button */}
                        <div className="mb-6">
                            <Link
                                className="block text-center bg-[#902923] text-white px-6 py-3 font-semibold rounded-lg transition duration-300 hover:bg-red-600 hover:scale-[1.05] hover:shadow-2xl ease-in-out"
                            >
                                OUR CURRENT JOB VACANCIES
                            </Link>
                        </div>

                        {/* Application Steps */}
                        <ul className="text-gray-700 space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#902923] mr-2">•</span> Fill the form below
                            </li>
                            <li className="flex items-start space-x-1">
                                <span className="text-[#902923] mr-2">•</span> Send us your CV at <Link className="text-[#902923] underline">people@nlcollege.es</Link>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#902923] mr-2">•</span> Apply via LinkedIn
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex max-w-6xl mx-auto flex-col md:flex-row justify-between items-start px-8 lg:px-0">
                {/* Left Side */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-4xl md:text-6xl font-bold">
                        Choose your own <br /> <span className="text-[#902923]">future</span>
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

            {/* How to Apply Section */}
            <div className="flex flex-col md:flex-row items-center justify-between min-h-screen mt-10 max-w-6xl mx-auto px-8 lg:px-0">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Apply</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Follow these steps to apply for a position at our institution. We look forward to reviewing your application!
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <span className="text-[#902923] font-semibold text-2xl">1</span>
                            <p className="text-gray-700 text-lg">
                                Complete the application form with accurate and up-to-date information.
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-[#902923] font-semibold text-2xl">2</span>
                            <p className="text-gray-700 text-lg">
                                Attach a copy of your updated CV, showcasing your skills and experience.
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-[#902923] font-semibold text-2xl">3</span>
                            <p className="text-gray-700 text-lg">
                                Choose your preferred campus and specify any additional information in the message box.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Application Form */}
                <form className="w-full max-w-xl bg-gray-800 p-6 rounded-lg shadow-md text-white my-10 md:ml-8">
                    <h2 className="text-2xl font-semibold text-[#902923] mb-4">Your details</h2>

                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full name *"
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="email"
                            placeholder="E-mail *"
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="tel"
                            placeholder="Telephone number / Whatsapp *"
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <select
                            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-red-500"
                            defaultValue=""
                        >
                            <option value="" disabled>Nationality *</option>
                            {/* Add options here */}
                        </select>
                    </div>

                    <button className="w-full mt-4 p-3 bg-[#902923] text-white rounded-md font-semibold hover:bg-white hover:text-[#902923] transition">
                        ATTACH YOUR CV
                    </button>

                    <div className="mt-4">
                        <label className="text-gray-400">Preferred Campus</label>
                        <div className="flex items-center space-x-4 mt-2">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="campus" className="cursor-pointer" style={{ accentColor: '#902923'}} />
                                <span>Barcelona</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="campus" className="cursor-pointer" style={{ accentColor: '#902923'}} />
                                <span>Madrid</span>
                            </label>
                        </div>
                    </div>

                    <textarea
                        placeholder="Message"
                        className="w-full mt-4 p-3 rounded-md bg-gray-700 text-gray-300 outline-none focus:ring-2 focus:ring-red-500 h-32"
                    />

                    <div className="flex items-center mt-4 space-x-2">
                        <input type="checkbox" className="cursor-pointer" style={{ accentColor: '#902923'}} />
                        <label className="text-sm text-gray-400">
                            I have read and accept the <span className="text-[#902923]">NL College Privacy Policy, Terms & Conditions, Cancellation Policy,</span> and <span className="text-[#902923]">Cookies Policy.</span>
                        </label>
                    </div>

                    <button className="w-full mt-6 p-3 bg-[#902923] text-white rounded-md font-semibold hover:bg-white hover:text-[#902923] transition">
                        SEND
                    </button>
                </form>
            </div>
        </section>
    );
}

export default WorkWithUs;