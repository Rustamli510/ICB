import React from "react";
import ContactForm from "../../components/ContactForm";

const ContactUs = () => {
    return (
        <div className="mx-auto">
            {/* Image Section */}
            <div className="relative w-full h-40 md:h-44 bg-gray-900">
                <h2 className="absolute inset-0 mt-24 flex items-center justify-center text-white text-3xl md:text-4xl font-bold">
                    Contact Us
                </h2>
            </div>

            <div className="mx-auto">
                {/* Content Section */}
                <div className="max-w-6xl flex flex-col md:flex-row text-black p-8 md:p-12 space-y-6 md:space-y-0 md:space-x-8 mx-auto">
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

                <ContactForm />
            </div>
        </div>
    );
};

export default ContactUs;
