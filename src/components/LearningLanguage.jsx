import React from 'react';
import Slider from 'react-slick';
import '../assets/style/carousel.css'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//Images
import Home from '../assets/images/home-sw-2.png'

const logos = [
    { src: Home, alt: "Logo 1" },
    { src: Home, alt: "Logo 2" },
    { src: Home, alt: "Logo 3" },
    { src: Home, alt: "Logo 4" },
    { src: Home, alt: "Logo 5" },
];

const LearningLanguage = () => {

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-prev-arrow`} // Add custom class for styling
                style={{ ...style, display: "block" }} // Ensure the arrow is always displayed
                onClick={onClick}
            >
                <IoIosArrowBack style={{ fontSize: '30px' }} />
            </div>
        );
    };

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-next-arrow`} // Add custom class for styling
                style={{ ...style, display: "block" }} // Ensure the arrow is always displayed
                onClick={onClick}
            >
                <IoIosArrowForward style={{ fontSize: '30px' }} />
            </div>
        );
    };

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: false
                }
            }
        ]
    };
    return (
        <section>
            <div className="bg-[#B9BAA3] text-white px-4 py-20 md:py-32">
                <div className="max-w-6xl mx-auto md:flex md:space-x-10 ">
                    <h1 className="text-3xl md:text-5xl font-bold mb-10 md:mb-3">
                        Learning a new <br />language is one thing,
                    </h1>
                    <p className="text-xl md:text-2xl md:w-[60%]">
                        But doing it in a completely different, innovative way is a whole other experience.
                        <br />
                        <br />
                        Our campuses are located in privileged locations, and their modern facilities and multicultural
                        classrooms will not only enrich your learning journey but also transform it into a more fun and exciting adventure.
                    </p>
                </div>
            </div>
            <div className="py-20 px-5 overflow-hidden">
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div key={index} className="p-3">
                            <div
                                className="w-full 2xl:w-[350px] shadow-md rounded-lg bg-white ml-0 lg:ml-0 flex justify-center items-center"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="w-full h-full align-middle border-none rounded-md shadow-lg" // Ensures the image scales well
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default LearningLanguage;
