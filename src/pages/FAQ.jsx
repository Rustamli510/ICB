import React, { useState } from 'react';

const faqData = [
    { question: "How do I upgrade / downgrade my workspace plan?", answer: "You can change your workspace plan by going to your account settings and selecting the 'Billing' section." },
    { question: "Can I add other information to an invoice?", answer: "Yes, you can add additional details to your invoice by visiting the 'Invoices' section in your account settings." },
    { question: "When should I use a new table vs. a view?", answer: "A new table is suitable for distinct data sets, while views help filter or visualize existing tables differently." },
    { question: "How can I transfer data from one base to another?", answer: "You can transfer data by exporting it as a CSV and importing it into another base." },
    { question: "How do I change my account email address?", answer: "Visit your account settings, and under 'Personal Information,' you can update your email address." },
    { question: "How does billing work?", answer: "Billing is processed monthly or annually, depending on your plan. Visit the Billing section for more details." },
    { question: "Can I share an individual app?", answer: "Yes, individual apps can be shared by generating a share link or inviting collaborators." },
    { question: "Can I export a list of all collaborators?", answer: "In the 'Collaborators' section, you can export a list of all current collaborators." },
    { question: "Can invoices be sent to other collaborators?", answer: "Invoices can be shared with collaborators who have the appropriate permissions." },
    { question: "How do I contact support?", answer: "You can contact support through the in-app help menu or by visiting our support page." }
];

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white">
            <div className="mx-auto">
                {/* Background Image with Overlay Text */}
                <div className="relative h-48 md:h-44 w-full flex items-center justify-center mb-8 bg-gray-900">
                        <h1 className="text-white text-3xl md:text-4xl mt-24 text-center font-bold">Frequently Asked Questions</h1>
                   
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:space-x-16">
                    {/* Left Side - Main Heading */}
                    <div className="flex-shrink-0 mb-8 md:mb-0">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Got any <span className="text-[#902923]">questions?</span>
                        </h2>
                    </div>

                    {/* Right Side - Paragraph Content */}
                    <div className="text-gray-700 space-y-4">
                        <p className="text-lg">
                            We understand that embarking on a new journey can be overwhelming, but don’t worry, we are here to help. Our team has a wealth of knowledge and experience in guiding students like you through any questions or inquiries you may have.
                        </p>
                        <p className="text-base">
                            We will be happy to provide you with the answers you need. Our goal is to ensure that your time at NL College is as smooth and stress-free as possible.
                        </p>
                        <p className="text-base">
                            If you are unsure where to start, we have put together a list of frequently asked questions that may be of assistance to you. But, if you need further clarification or have additional questions, please don’t hesitate to reach out to us. We are here to make sure you have a successful and enjoyable experience with us.
                        </p>
                    </div>
                </div>
            </div>
            <section className="max-w-6xl mx-auto py-20">
                <h2 className="text-4xl font-semibold mb-6">Frequently Asked Questions</h2>
                <div className="">
                    {faqData.map((faq, index) => (
                        <div key={index} className="bg-gray-100 shadow-md">
                            <button
                                className="w-full text-left p-4 flex items-center justify-between focus:outline-none"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-md font-medium">{faq.question}</span>
                                <span className="text-xl font-bold text-[#902923]">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                style={{
                                    maxHeight: openIndex === index ? '200px' : '0',
                                    opacity: openIndex === index ? 1 : 0,
                                }}
                            >
                                <div className="p-4 text-gray-600 border-t border-gray-200">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default FAQ;
