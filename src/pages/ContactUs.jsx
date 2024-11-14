import React from "react";

const ContactUs = () => {
    return (
        <div className="mx-auto">
            {/* Image Section */}
            <div className="relative w-full h-40 md:h-44 bg-cover bg-center" style={{ backgroundImage: 'url("src/assets/images/brooke-cagle--uHVRvDr7pg-unsplash.jpg")' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h2 className="absolute inset-0 mt-16 flex items-center justify-center text-white text-3xl md:text-4xl font-bold">
                    Contact Us
                </h2>
            </div>

            <div className="mx-auto">
                {/* Content Section */}
                <div className="max-w-7xl flex flex-col md:flex-row text-black p-8 md:p-12 space-y-6 md:space-y-0 md:space-x-8 mx-auto">
                    {/* Left Text */}
                    <div className="flex-1 text-4xl md:text-5xl font-bold">
                        <p>We want to hear from</p>
                        <p className="text-[#902923]">you!</p>
                    </div>

                    {/* Right Text */}
                    <div className="flex-1">
                        <p className="mb-4">
                            We understand that sometimes you may need some additional help or support, and we're here to make that process as easy and seamless as possible.
                        </p>
                        <p className="mb-4">
                            Our team of support staff is always ready and available to answer any questions or concerns you may have. We believe that providing exceptional support is just as important as providing exceptional education, and we strive to make your experience with NL College as positive and rewarding as possible.
                        </p>
                        <p>
                            So, if you need any help or support, please don’t hesitate to contact us. We’re here to assist you every step of the way and look forward to hearing from you soon!
                        </p>
                    </div>
                </div>

                <div className="mx-auto bg-gray-900">
                    <div className="flex flex-col md:flex-row items-center text-white p-8 space-y-6 md:space-y-0 md:space-x-8 max-w-7xl mx-auto">

                        {/* Left Side Text */}
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Contact us and start planning your education with us!
                            </h2>
                            <p className="mt-4 text-sm">Center accredited by the Cervantes institute</p>
                        </div>

                        {/* Right Side Form */}
                        <div className="flex-1 max-w-xl bg-[#902923] p-6 rounded-lg shadow-lg">
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Full name *"
                                    className="w-full p-2 rounded-md focus:outline-none"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="E-mail *"
                                    className="w-full p-2 rounded-md focus:outline-none"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Telephone number / Whatsapp *"
                                    className="w-full p-2 rounded-md focus:outline-none"
                                    required
                                />
                                <select className="w-full p-2 rounded-md focus:outline-none" required>
                                    <option value="">Country *</option>
                                    {/* Add country options here */}
                                </select>
                                <select className="w-full p-2 rounded-md focus:outline-none" required>
                                    <option value="">Nationality *</option>
                                    {/* Add nationality options here */}
                                </select>

                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center ">
                                        <input type="radio" name="campus" value="Barcelona" className="mr-1" style={{ accentColor: '#902923' }} />
                                        Barcelona
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="campus" value="Madrid" className="mr-1"  style={{ accentColor: '#902923' }}/>
                                        Madrid
                                    </label>
                                </div>

                                <textarea
                                    placeholder="Message"
                                    className="w-full p-2 rounded-md focus:outline-none"
                                    rows="4"
                                ></textarea>

                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" className="rounded focus:outline-none" style={{ accentColor: '#902923' }} required />
                                    <label className="text-sm">
                                        I have read and accept the NL College Privacy Policy, Terms & Conditions, Cancellation Policy, and Cookies Policy.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-black text-white hover:bg-white hover:text-[#902923] font-bold p-2 rounded-md"
                                >
                                    SEND
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;
