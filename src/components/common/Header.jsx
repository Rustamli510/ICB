import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";


//Images
import Logo from '../../assets/images/icb_b-removebg-preview.png'

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
    const [isAboutDropdownOpenMobile, setIsAboutDropdownOpenMobile] = useState(false);
    const [isCoursesDropdownOpenMobile, setIsCoursesDropdownOpenMobile] = useState(false);
    const [priceModal, setpriceModal] = useState(false)
    const navigate = useNavigate();

    // References for dropdowns
    const aboutDropdownRef = useRef(null);
    const coursesDropdownRef = useRef(null);
    const languageMenuRef = useRef(null);

    const toggleLanguageMenu = () => {
        setIsLanguageOpen(!isLanguageOpen);
    };

    const changeLanguage = (language) => {
        i18n.changeLanguage(language.toLowerCase());
        setSelectedLanguage(language);
        setIsLanguageOpen(false);
    };

    const toggleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
        document.body.style.overflow = isBurgerMenuOpen ? "auto" : "hidden";
    };

    const handleMenuClick = (path) => {
        navigate(path);
        setIsBurgerMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsCoursesDropdownOpen(false);
        setIsAboutDropdownOpenMobile(false);
        setIsCoursesDropdownOpenMobile(false);
        document.body.style.overflow = "auto";
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)
            ) {
                setIsAboutDropdownOpen(false);
            }
            if (
                coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target)
            ) {
                setIsCoursesDropdownOpen(false);
            }
            if (
                languageMenuRef.current && !languageMenuRef.current.contains(event.target)
            ) {
                setIsLanguageOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "auto";
        };
    }, []);

    //Open prices modal

    const handleModal = () => {
        setpriceModal(!priceModal);
        setIsBurgerMenuOpen(false);
        document.body.style.overflow = priceModal ? "auto" : "hidden";
    };

    return (
        <header className="w-full absolute top-0 left-0 z-10 bg-transparent text-white py-8 px-8 flex items-center justify-between">
            {/* Logo */}
            <div className="h-20 w-40">
                <Link to="/" className="w-full h-full">
                    <img src={Logo} alt="NL College Logo" className="w-full h-full" />
                </Link>
            </div>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex items-center space-x-8 relative">
                {/* About Us Dropdown */}
                <div className="relative" ref={aboutDropdownRef}>
                    <button
                        onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                        className="text-sm md:text-md font-bold text-[#902923] hover:text-white focus:outline-none"
                    >
                        {t('navbar.aboutUs').toUpperCase()}
                    </button>
                    {isAboutDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white text-black rounded-md shadow-lg z-20">
                            <button onClick={() => handleMenuClick("/our-mission")} className="block w-full  px-4 py-2 text-left hover:text-[#902923] border-b">
                                Our Mission & Methodology
                            </button>
                            <button onClick={() => handleMenuClick("/study-program-certification")} className="block w-full px-4 py-2 text-left hover:text-[#902923] border-b">
                                Our Program
                            </button>
                            <button onClick={() => handleMenuClick("/meet-our-team")} className="block w-full px-4 py-2 text-left hover:text-[#902923] border-b">
                                Meet Our Team
                            </button>
                            <button onClick={() => handleMenuClick("/faq")} className="block w-full px-4 py-2 text-left hover:text-[#902923] border-b">
                                Frequently Asked Questions
                            </button>
                            <button onClick={() => handleMenuClick("/work-with-us")} className="block w-full px-4 py-2 text-left hover:text-[#902923] border-b">
                                Work With Us
                            </button>
                            <button onClick={() => handleMenuClick("/terms-conditions")} className="block w-full px-4 py-2 text-left hover:text-[#902923]">
                                Terms and Conditions
                            </button>
                        </div>
                    )}
                </div>

                {/* Courses Dropdown */}
                <div className="relative" ref={coursesDropdownRef}>
                    <button
                        onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                        className="text-sm md:text-md font-bold text-[#902923] hover:text-white focus:outline-none"
                    >
                        {t('navbar.courses').toUpperCase()}
                    </button>
                    {isCoursesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-24 bg-white text-black rounded-md shadow-lg z-20">
                            <button onClick={() => handleMenuClick("/english-course")} className="block w-full px-4 py-2 text-left hover:text-[#902923] border-b">
                                English
                            </button>
                            <button onClick={() => handleMenuClick("/spanish-course")} className="block w-full px-4 py-2 text-left hover:text-[#902923] border-b">
                                Spanish
                            </button>
                            <button onClick={() => handleMenuClick("/russian-course")} className="block w-full px-4 py-2 text-left hover:text-[#902923] border-b">
                                Russian
                            </button>
                            <button onClick={() => handleMenuClick("/catalan-course")} className="block w-full px-4 py-2 text-left hover:text-[#902923]">
                                Catalan
                            </button>
                        </div>
                    )}
                </div>

                <button onClick={handleModal} className="text-sm md:text-md font-bold text-[#902923] hover:text-white">
                    {t('navbar.prices').toUpperCase()}
                </button>
                <Link to="/visa" className="text-sm md:text-md font-bold text-[#902923] hover:text-white">
                    {t('navbar.visa').toUpperCase()}
                </Link>
                <Link to="/accommodation" className="text-sm md:text-md font-bold text-[#902923] hover:text-white">
                    {t('navbar.accommodation').toUpperCase()}
                </Link>
                <Link to="/student-life" className="text-sm md:text-md font-bold text-[#902923] hover:text-white">
                    {t('navbar.studentLife').toUpperCase()}
                </Link>
                <Link to="/contact-us" className="text-sm md:text-md font-bold text-[#902923] hover:text-white">
                    {t('navbar.contactUs').toUpperCase()}
                </Link>
            </nav>

            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-2 cursor-pointer" ref={languageMenuRef} onClick={toggleLanguageMenu}>
                <span className="text-lg text-[#902923] hover:text-white font-bold">{selectedLanguage}</span>
                <div className="w-2 h-2 bg-[#902923] rounded-full"></div>
            </div>

            {/* Language Menu Dropdown */}
            {isLanguageOpen && (
                <div className="absolute top-16 right-8 bg-white text-black rounded-md shadow-lg">
                    <button
                        onClick={() => changeLanguage("EN")}
                        className="block w-full px-4 py-2 text-left hover:text-[#902923]"
                    >
                        EN
                    </button>
                    <button
                        onClick={() => changeLanguage("ES")}
                        className="block w-full px-4 py-2 text-left hover:text-[#902923]"
                    >
                        ES
                    </button>
                    <button
                        onClick={() => changeLanguage("RU")}
                        className="block w-full px-4 py-2 text-left hover:text-[#902923]"
                    >
                        RU
                    </button>
                </div>
            )}

            {/* Price Modal */}
            {priceModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    {/* Modal backdrop */}
                    <div
                        className="fixed inset-0 bg-black opacity-50"
                        onClick={handleModal} // Close modal when backdrop is clicked
                    ></div>

                    {/* Modal content */}
                    <div className="relative bg-white p-4 sm:p-6 w-11/12 sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] rounded-lg shadow-lg text-black mx-auto">
                        {/* Close button */}
                        <button
                            onClick={handleModal}
                            className="absolute top-2 right-4 text-3xl text-[#902923] font-bold"
                        >
                            &times;
                        </button>

                        {/* Modal Header */}
                        <h2 className="text-center text-[#902923] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2">
                            Download
                        </h2>
                        <p className="text-center text-lg sm:text-xl lg:text-2xl mb-6">
                            our price list and catalogue
                        </p>

                        {/* Download Options */}
                        <div className="flex flex-col sm:flex-row justify-around items-center">
                            {/* Price List */}
                            <div className="flex flex-col items-center mb-4 sm:mb-0">
                                <img
                                    src="/path/to/price-list.png"
                                    alt="Price List"
                                    className="w-20 h-28 sm:w-24 sm:h-32 mb-2"
                                />
                                <a
                                    href="/path/to/price-list-download.pdf"
                                    download
                                    className="text-center font-semibold text-sm text-[#902923] hover:underline"
                                >
                                    Price List
                                </a>
                            </div>

                            {/* Brochure */}
                            <div className="flex flex-col items-center mb-4 sm:mb-0">
                                <img
                                    src="/path/to/brochure.png"
                                    alt="Brochure"
                                    className="w-20 h-28 sm:w-24 sm:h-32 mb-2"
                                />
                                <a
                                    href="/path/to/brochure-download.pdf"
                                    download
                                    className="text-center font-semibold text-sm text-[#902923] hover:underline"
                                >
                                    Brochure
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {/* Burger Menu Button (Visible on Mobile) */}
            <button
                onClick={toggleBurgerMenu}
                className="md:hidden flex flex-col space-y-1 focus:outline-none"
            >
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
            </button>

            {/* Full-Screen Burger Menu Overlay (Mobile Only) */}
            {isBurgerMenuOpen && (
                <div className="fixed text-center inset-0 bg-gray-950 text-white flex flex-col items-center justify-center space-y-8 z-50">
                    <button onClick={toggleBurgerMenu} className="absolute top-8 right-8 text-3xl">
                        &times;
                    </button>

                    {/* About Us Dropdown in Burger Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setIsAboutDropdownOpenMobile(!isAboutDropdownOpenMobile)}
                            className="text-lg font-bold hover:text-[#902923] focus:outline-none"
                        >
                            {t('navbar.aboutUs')}
                        </button>
                        {isAboutDropdownOpenMobile && (
                            <div className="flex flex-col items-center mt-2 space-y-2 transition-all capitalize">
                                <button onClick={() => handleMenuClick("/our-mission")} className="text-sm hover:text-[#902923]">
                                    Our Mission & Methodology
                                </button>
                                <button onClick={() => handleMenuClick("/study-program-certification")} className="text-sm hover:text-[#902923]">
                                    Our Program
                                </button>
                                <button onClick={() => handleMenuClick("/meet-our-team")} className="text-sm hover:text-[#902923]">
                                    Meet Our Team
                                </button>
                                <button onClick={() => handleMenuClick("/faq")} className="text-sm hover:text-[#902923]">
                                    Frequently Asked Questions
                                </button>
                                <button onClick={() => handleMenuClick("/work-with-us")} className="text-sm hover:text-[#902923]">
                                    Work With Us
                                </button>
                                <button onClick={() => handleMenuClick("/terms-conditions")} className="text-sm hover:text-[#902923]">
                                    Terms and Conditions
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Courses Dropdown in Burger Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setIsCoursesDropdownOpenMobile(!isCoursesDropdownOpenMobile)}
                            className="text-lg font-bold hover:text-[#902923] focus:outline-none"
                        >
                            {t('navbar.courses')}
                        </button>
                        {isCoursesDropdownOpenMobile && (
                            <div className="flex flex-col items-center mt-2 space-y-2 transition-all">
                                <button onClick={() => handleMenuClick("/english-course")} className="text-sm hover:text-[#902923]">
                                    English
                                </button>
                                <button onClick={() => handleMenuClick("/spanish-course")} className="text-sm hover:text-[#902923]">
                                    Spanish
                                </button>
                                <button onClick={() => handleMenuClick("/russian-course")} className="text-sm hover:text-[#902923]">
                                    Russian
                                </button>
                                <button onClick={() => handleMenuClick("/catalan-course")} className="text-sm hover:text-[#902923]">
                                    Catalan
                                </button>
                            </div>
                        )}
                    </div>

                    <button onClick={handleModal} className="text-lg font-bold hover:text-[#902923]">
                        {t('navbar.prices')}
                    </button>
                    <button onClick={() => handleMenuClick("/student-life")} className="text-lg font-bold hover:text-[#902923]">
                        {t('navbar.studentLife')}
                    </button>
                    <button onClick={() => handleMenuClick("/contact-us")} className="text-lg font-bold hover:text-[#902923]">
                        {t('navbar.contactUs')}
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;