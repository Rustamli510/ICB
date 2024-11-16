import React from 'react';
import { FaMessage } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const ContactButton = () => {
    const navigate = useNavigate();

    const goToHomeBottom = () => {
        navigate('/'); // Navigate to the main page
        setTimeout(() => {
            window.scrollTo({
                top: 1800,
                behavior: 'smooth',
            });
        }); // Delay to ensure navigation completes
    };

    return (
        <div className="fixed right-10 bottom-10 z-0 flex items-center space-x-2">
            {/* Text Container */}
            <div className="bg-white text-[#902923] rounded-full px-4 py-2 shadow-lg flex items-center transition-opacity duration-300 opacity-100">
                <span className="text-sm font-semibold">Contact with us 👋</span>
            </div>

            {/* Icon Container */}
            <div
                onClick={goToHomeBottom}
                className="w-14 h-14 bg-[#902923] rounded-full p-2 flex items-center justify-center cursor-pointer"
            >
                <FaMessage className="text-white text-2xl" />
            </div>
        </div>
    );
};

export default ContactButton;
