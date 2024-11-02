import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isAboutDropdownOpenMobile, setIsAboutDropdownOpenMobile] = useState(false);
    const navigate = useNavigate();

    // References for dropdowns
    const aboutDropdownRef = useRef(null);
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
        setIsAboutDropdownOpenMobile(false);
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
        <header className="w-full absolute top-0 left-0 z-10 bg-transparant text-white py-8 px-8 flex items-center justify-between">
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
                                OUR MISSION & METHODOLOGY
                            </button>
                            <button onClick={() => handleMenuClick("/study-program-certification")} className="block w-full px-4 py-2 text-left hover:text-[#902923] ">
                                OUR PROGRAM
                            </button>
                            <button onClick={() => handleMenuClick("/meet-our-team")} className="block w-full px-4 py-2 text-left hover:text-[#902923] ">
                                MEET OUR TEAM
                            </button>
                            <button onClick={() => handleMenuClick("/faq")} className="block w-full px-4 py-2 text-left hover:text-[#902923] ">
                                FREQUENTLY ASKED QUESTIONS
                            </button>
                            <button onClick={() => handleMenuClick("/work-with-us")} className="block w-full px-4 py-2 text-left hover:text-[#902923] ">
                                WORK WITH US
                            </button>
                        </div>
                    )}
                </div>

                <Link to="/spanish-course" className="text-sm md:text-md font-bold text-[#902923] hover:text-yellow-500">
                    {t('navbar.courses').toUpperCase()}
                </Link>
                <Link to="/prices-catalogues" className="text-sm md:text-md font-bold text-[#902923] hover:text-yellow-500">
                    {t('navbar.prices').toUpperCase()}
                </Link>
                <Link to="/student-life" className="text-sm md:text-md font-bold text-[#902923] hover:text-yellow-500">
                    {t('navbar.studentLife').toUpperCase()}
                </Link>
                <Link to="/contact-us" className="text-sm md:text-md font-bold text-[#902923] hover:text-yellow-500">
                    {t('navbar.contactUs').toUpperCase()}
                </Link>
                <Link to="/terms-conditions" className="text-sm md:text-md font-bold text-[#902923] hover:text-yellow-500">
                    {t('navbar.termsConditions').toUpperCase()}
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
                            <div className="flex flex-col items-start mt-2 space-y-2 transition-all">
                                <button onClick={() => handleMenuClick("/our-mission")} className="text-sm hover:text-yellow-500">
                                    OUR MISSION & METHODOLOGY
                                </button>
                                <button onClick={() => handleMenuClick("/study-program-certification")} className="text-sm hover:text-yellow-500">
                                    OUR PROGRAM
                                </button>
                                <button onClick={() => handleMenuClick("/meet-our-team")} className="text-sm hover:text-yellow-500">
                                    MEET OUR TEAM
                                </button>
                                <button onClick={() => handleMenuClick("/faq")} className="text-sm hover:text-yellow-500">
                                    FREQUENTLY ASKED QUESTIONS
                                </button>
                                <button onClick={() => handleMenuClick("/work-with-us")} className="text-sm hover:text-yellow-500">
                                    WORK WITH US
                                </button>
                            </div>
                        )}
                    </div>

                    <button onClick={() => handleMenuClick("/courses")} className="text-lg font-bold hover:text-yellow-500">
                        {t('navbar.courses').toUpperCase()}
                    </button>
                    <button onClick={() => handleMenuClick("/prices-catalogues")} className="text-lg font-bold hover:text-yellow-500">
                        {t('navbar.prices').toUpperCase()}
                    </button>
                    <button onClick={() => handleMenuClick("/student-life")} className="text-lg font-bold hover:text-yellow-500">
                        {t('navbar.studentLife').toUpperCase()}
                    </button>
                    <button onClick={() => handleMenuClick("/contact-us")} className="text-lg font-bold hover:text-yellow-500">
                        {t('navbar.contactUs').toUpperCase()}
                    </button>
                    <button onClick={() => handleMenuClick("/terms-conditions")} className="text-lg font-bold hover:text-yellow-500">
                        {t('navbar.termsConditions').toUpperCase()}
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;