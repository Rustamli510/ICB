import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState()

    const toggleLanguageMenu = () => {
        setIsLanguageOpen(!isLanguageOpen);
    };

    const changeLanguage = (language) => {
        i18n.changeLanguage(language.toLowerCase());
        setSelectedLanguage(language);
        setIsLanguageOpen(false);
    };

    return (
        <header className="w-full absolute z-10 bg-transparent text-white py-8 px-8 flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-bold">NL College</div>

            {/* Menu */}
            <nav className="hidden md:flex space-x-8 relative">
                {/* About Us with Dropdown on Hover */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                    <button className="hover:text-yellow-500">
                        {t('navbar.aboutUs')}
                    </button>
                    {isAboutDropdownOpen && (
                        <div className="absolute mt-2 bg-white text-black text-sm rounded-md shadow-lg w-60">
                            <Link to="/our-mission" className="block px-4 py-2 hover:text-red-600">
                                Our mission
                            </Link>
                            <Link to="/meet-our-team" className="block px-4 py-2 hover:text-red-600">
                                Meet our team
                            </Link>
                            <Link to="/affiliations-recognitions" className="block px-4 py-2 hover:text-red-600">
                                Affiliations & Recognitions
                            </Link>
                            <Link to="/study-program-certification" className="block px-4 py-2 hover:text-red-600">
                                Study program and certification
                            </Link>
                            <Link to="/work-with-us" className="block px-4 py-2 hover:text-red-600">
                                Work with us
                            </Link>
                            <Link to="/terms-conditions" className="block px-4 py-2 hover:text-red-600">
                                Terms and conditions
                            </Link>
                        </div>
                    )}
                </div>
                
                <Link className="hover:text-yellow-500">{t('navbar.courses')}</Link>
                <Link className="hover:text-yellow-500">{t('navbar.prices')}</Link>
                <Link to='/student-life' className="hover:text-yellow-500">{t('navbar.studentLife')}</Link>
                <Link to='/contact-us' className="hover:text-yellow-500">{t('navbar.contactUs')}</Link>
            </nav>

            {/* Language Choice */}
            <div className="relative">
                <button
                    onClick={toggleLanguageMenu}
                    className="flex items-center space-x-2 hover:text-yellow-500 focus:outline-none"
                >
                    <span>{selectedLanguage}</span>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </button>

                {isLanguageOpen && (
                    <div className="absolute right-0 mt-2 w-24 bg-white text-black rounded-md shadow-lg">
                        <button
                            onClick={() => changeLanguage("EN")}
                            className="block w-full px-4 py-2 text-left hover:bg-gray-200 hover:rounded-md"
                        >
                            EN
                        </button>
                        <button
                            onClick={() => changeLanguage("RU")}
                            className="block w-full px-4 py-2 text-left hover:bg-gray-200 hover:rounded-md"
                        >
                            RU
                        </button>
                        <button
                            onClick={() => changeLanguage("ES")}
                            className="block w-full px-4 py-2 text-left hover:bg-gray-200 hover:rounded-md"
                        >
                            ES
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
