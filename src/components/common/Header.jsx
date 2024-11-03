import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
    const [isAboutDropdownOpenMobile, setIsAboutDropdownOpenMobile] = useState(false);
    const [isCoursesDropdownOpenMobile, setIsCoursesDropdownOpenMobile] = useState(false); // New state for mobile courses dropdown
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
        setIsCoursesDropdownOpenMobile(false); // Close mobile courses dropdown when navigating
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

    return (
        <header className="w-full absolute top-0 left-0 z-10 bg-transparent text-white py-8 px-8 flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-bold">
                <Link to="/">
                    <img src="/path/to/logo.png" alt="NL College Logo" className="h-8" />
                </Link>
            </div>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex items-center space-x-8 relative">
                {/* About Us Dropdown */}
                <div className="relative" ref={aboutDropdownRef}>
                    <button
                        onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                        className="text-sm md:text-md font-bold text-[#902923] hover:text-yellow-500 focus:outline-none"
                    >
                        {t('navbar.aboutUs').toUpperCase()}
                    </button>
                    {isAboutDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white text-black rounded shadow-lg z-20">
                            <button onClick={() => handleMenuClick("/our-mission")} className="block w-full px-4 py-2 text-left hover:text-[#902923] ">
                                Our Mission & Methodology
                            </button>
                            <button onClick={() => handleMenuClick("/study-program-certification")} className="block w-full px-4 py-2 text-left hover:text-[#902923] ">
                                Our Program
                            </button>
                            <button onClick={() => handleMenuClick("/meet-our-team")} className="block w-full px-4 py-2 text-left hover:text-[#902923] ">
                                Meet Our Team
                            </button>
                            <button onClick={() => handleMenuClick("/faq")} className="block w-full px-4 py-2 text-left hover:text-[#902923] ">
                                Frequently Asked Questions
                            </button>
                            <button onClick={() => handleMenuClick("/work-with-us")} className="block w-full px-4 py-2 text-left hover:text-[#902923] ">
                                Work With Us
                            </button>
                            <button onClick={() => handleMenuClick("/terms-conditions")} className="block w-full px-4 py-2 text-left hover:text-[#902923] ">
                                Terms and Conditions
                            </button>
                        </div>
                    )}
                </div>

                {/* Courses Dropdown */}
                <div className="relative" ref={coursesDropdownRef}>
                    <button
                        onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                        className="text-sm md:text-md font-bold text-[#902923] hover:text-yellow-500 focus:outline-none"
                    >
                        {t('navbar.courses').toUpperCase()}
                    </button>
                    {isCoursesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-24 bg-white text-black rounded shadow-lg z-20">
                            <button onClick={() => handleMenuClick("/english-course")} className="block w-full px-4 py-2 text-left hover:text-[#902923]">
                                English
                            </button>
                            <button onClick={() => handleMenuClick("/spanish-course")} className="block w-full px-4 py-2 text-left hover:text-[#902923]">
                                Spanish
                            </button>
                            <button onClick={() => handleMenuClick("/russian-course")} className="block w-full px-4 py-2 text-left hover:text-[#902923]">
                                Russian
                            </button>
                            <button onClick={() => handleMenuClick("/catalan-course")} className="block w-full px-4 py-2 text-left hover:text-[#902923]">
                                Catalan
                            </button>
                        </div>
                    )}
                </div>

                <Link to="/prices-catalogues" className="text-sm md:text-md font-bold text-[#902923] hover:text-yellow-500">
                    {t('navbar.prices').toUpperCase()}
                </Link>
                <Link to="/visa" className="text-sm md:text-md font-bold text-[#902923] hover:text-yellow-500">
                    {t('navbar.visa').toUpperCase()}
                </Link>
                <Link to="/accommodation" className="text-sm md:text-md font-bold text-[#902923] hover:text-yellow-500">
                    {t('navbar.accommodation').toUpperCase()}
                </Link>
                <Link to="/student-life" className="text-sm md:text-md font-bold text-[#902923] hover:text-yellow-500">
                    {t('navbar.studentLife').toUpperCase()}
                </Link>
                <Link to="/contact-us" className="text-sm md:text-md font-bold text-[#902923] hover:text-yellow-500">
                    {t('navbar.contactUs').toUpperCase()}
                </Link>
            </nav>

            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-2 cursor-pointer" ref={languageMenuRef} onClick={toggleLanguageMenu}>
                <span className="text-lg text-[#902923] font-bold">{selectedLanguage}</span>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
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
                            className="text-lg font-bold hover:text-red-500 focus:outline-none"
                        >
                            {t('navbar.aboutUs').toUpperCase()}
                        </button>
                        {isAboutDropdownOpenMobile && (
                            <div className="flex flex-col items-center mt-2 space-y-2 transition-all capitalize">
                                <button onClick={() => handleMenuClick("/our-mission")} className="text-sm hover:text-yellow-500">
                                    Our Mission & Methodology
                                </button>
                                <button onClick={() => handleMenuClick("/study-program-certification")} className="text-sm hover:text-yellow-500">
                                    Our Program
                                </button>
                                <button onClick={() => handleMenuClick("/meet-our-team")} className="text-sm hover:text-yellow-500">
                                    Meet Our Team
                                </button>
                                <button onClick={() => handleMenuClick("/faq")} className="text-sm hover:text-yellow-500">
                                    Frequently Asked Questions
                                </button>
                                <button onClick={() => handleMenuClick("/work-with-us")} className="text-sm hover:text-yellow-500">
                                    Work With Us
                                </button>
                                <button onClick={() => handleMenuClick("/terms-conditions")} className="text-sm hover:text-yellow-500">
                                Terms and Conditions
                            </button>
                            </div>
                        )}
                    </div>

                    {/* Courses Dropdown in Burger Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setIsCoursesDropdownOpenMobile(!isCoursesDropdownOpenMobile)}
                            className="text-lg font-bold hover:text-red-500 focus:outline-none"
                        >
                            {t('navbar.courses').toUpperCase()}
                        </button>
                        {isCoursesDropdownOpenMobile && (
                            <div className="flex flex-col items-center mt-2 space-y-2 transition-all">
                                <button onClick={() => handleMenuClick("/courses/english")} className="text-sm hover:text-red-500">
                                    English
                                </button>
                                <button onClick={() => handleMenuClick("/courses/spanish")} className="text-sm hover:text-yellow-500">
                                    Spanish
                                </button>
                                <button onClick={() => handleMenuClick("/courses/russian")} className="text-sm hover:text-yellow-500">
                                    Russian
                                </button>
                                <button onClick={() => handleMenuClick("/courses/catalan")} className="text-sm hover:text-yellow-500">
                                    Catalan
                                </button>
                            </div>
                        )}
                    </div>

                    <button onClick={() => handleMenuClick("/prices-catalogues")} className="text-lg font-bold hover:text-yellow-500">
                        {t('navbar.prices').toUpperCase()}
                    </button>
                    <button onClick={() => handleMenuClick("/student-life")} className="text-lg font-bold hover:text-yellow-500">
                        {t('navbar.studentLife').toUpperCase()}
                    </button>
                    <button onClick={() => handleMenuClick("/contact-us")} className="text-lg font-bold hover:text-yellow-500">
                        {t('navbar.contactUs').toUpperCase()}
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;