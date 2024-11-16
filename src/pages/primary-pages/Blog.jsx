import React from "react";

const Blog = () => {
    return (
        <>
            <div
                className="relative h-44 flex items-center justify-center bg-gray-900"
            >
                <h1 className="text-3xl md:text-4xl font-bold mt-24 text-white">Blog</h1>
            </div>
            <section className="flex flex-col lg:flex-row items-center lg:justify-between lg:gap-8 p-8 lg:p-16">
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://via.placeholder.com/600x400" // Replace with your image URL
                        alt="Fresh Salad"
                        className="rounded-lg object-cover w-full"
                    />
                </div>
                {/* Text Section */}
                <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">
                        Stanton Food & Recipes
                    </h1>
                    <p className="text-lg text-gray-600">
                        With the hyper-convenience of modern life, many of us can only operate
                        a microwave. A home-cooked meal is not a luxury, anyone can do it!
                    </p>
                </div>
            </section>
            <section className="bg-white py-12 px-6 lg:px-24">
                {/* Title and Description */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl lg:text-4xl font-semibold text-[#902923]">
                        Recent Posts
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud.
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Post 1 */}
                    <div className="shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://via.placeholder.com/400x300"
                            alt="Post 1"
                            className="w-full object-cover h-48"
                        />
                        <div className="p-4">
                            <p className="text-gray-500 text-sm">6/27/19</p>
                            <h3 className="text-lg font-semibold text-gray-800 mt-2">
                                Broiled Salmon with Garlic
                            </h3>
                        </div>
                    </div>

                    {/* Post 2 */}
                    <div className="shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://via.placeholder.com/400x300"
                            alt="Post 2"
                            className="w-full object-cover h-48"
                        />
                        <div className="p-4">
                            <p className="text-gray-500 text-sm">6/27/19</p>
                            <h3 className="text-lg font-semibold text-gray-800 mt-2">
                                Lemon Herb Chicken
                            </h3>
                        </div>
                    </div>

                    {/* Post 3 */}
                    <div className="shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://via.placeholder.com/400x300"
                            alt="Post 3"
                            className="w-full object-cover h-48"
                        />
                        <div className="p-4">
                            <p className="text-gray-500 text-sm">6/27/19</p>
                            <h3 className="text-lg font-semibold text-gray-800 mt-2">
                                Roasted Veggies with Basil
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
