import React from 'react';

//Images
import Pic from '../../assets/images/brooke-cagle--uHVRvDr7pg-unsplash.jpg'

//Videos
import BannerVideo from '../../assets/videos/BannerVideo.mp4';

function StudentLife() {
  return (
    <section className="flex flex-col items-center">
      {/* Picture area */}
      <div className="w-full h-40 md:h-44 text-center relative bg-gray-900">
          <h1 className="text-4xl md:text-4xl font-bold text-white mt-28">Student Life</h1>
      </div>

      <div>
        {/* Top Section */}
        <div className="py-16 px-4 md:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:space-x-12">
            {/* Left Side - Text Content */}
            <div className="flex-1 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Education for a life <span className='text-[#902923]'>well-lived.</span>
              </h2>
              <p className="text-lg mb-4">
                Telos Classical Academy is a private classical Christian school in Park City, Utah serving grades K-8.
              </p>
              <p className="text-base mb-4 text-gray-600">
                Education should do more than prepare a child to be ready for college or to have a career. A great education should guide a child toward wisdom and virtue so they can become a good human.
              </p>
              <p className="text-base mb-8 text-gray-600">
                Our mission is to develop students’ academic potential and purpose by nurturing their mind, soul, and body empowering them to pursue wisdom and virtue for the rest of their lives.
              </p>
              <button className="bg-[#902923] text-white py-3 px-6 rounded-md text-sm font-semibold hover:bg-white hover:text-[#902923] transition">
                Discover Telos Classical Academy
              </button>
            </div>

            {/* Right Side - Collage of Images */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="row-span-2">
                <img src={Pic} alt="Collage Image 1" className="w-full h-full object-cover rounded-lg shadow-md" />
              </div>
              <div className="col-span-1">
                <img src={Pic} alt="Collage Image 2" className="w-full h-full object-cover rounded-lg shadow-md" />
              </div>
              <div className="col-span-1">
                <img src={Pic} alt="Collage Image 3" className="w-full h-full object-cover rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#0A100D] text-white py-16 px-4 md:px-10 lg:px-20">
          <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-start md:space-x-12">
            {/* Video Thumbnail */}
            <div className="flex-1 mb-8 md:mb-0">
              <div className="relative">
                <video
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover rounded-lg shadow-md">
                  <source src={BannerVideo} type="video/mp4" />
                </video>
                {/* Play button overlay */}
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 bg-white text-[#902923] rounded-full flex items-center justify-center text-3xl font-semibold">
                    ▶
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                What is classical Christian education?
              </h2>
              <p className="text-base mb-4 text-gray-300">
                Classical education is rooted in great books and ancient history. It teaches wisdom (how to think) and virtue (how to be) through the study of books and artifacts that embody the true, the good, and the beautiful.
              </p>
              <p className="text-base mb-8 text-gray-300">
                It prepares young people to live in freedom and independence, pursuing the highest matters and the deepest questions of truth, justice, beauty, and virtue.
              </p>
              <button className="bg-[#902923] text-white py-3 px-6 rounded-md text-sm font-semibold hover:bg-white hover:text-[#902923] transition">
                Learn More About Classical Education
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Text area */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row gap-8">
        {/* Left side */}
        <div className="text-4xl md:text-5xl font-semibold text-center md:text-left">
          <p>
            Welcome to your new <span className="text-[#902923]">life!</span>
          </p>
        </div>

        {/* Right side */}
        <div className="text-lg text-gray-700 space-y-4">
          <p>
            Moving to a new country can be an overwhelming experience, but we want to ensure that your transition to
            Barcelona or Madrid is as enjoyable and stress-free as possible.
          </p>
          <p>
            As a school, we're here to support you every step of the way. From the moment you decide to join us, we'll
            provide you with all the information you need to make the move, including useful tips and advice on housing,
            transportation, and cultural differences.
          </p>
          <p>
            If you have any questions or concerns, our FAQ page is a great resource, or you can always reach out to us
            directly. We're committed to providing you with the support you need to make the most of your experience in
            Spain.
          </p>
        </div>
      </div>

      <div className="container mx-auto p-4 space-y-12">

        {/* Section 1: Student Visa */}
        <div className="relative w-full h-80 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url('src/assets/images/brooke-cagle--uHVRvDr7pg-unsplash.jpg')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-4xl font-bold">Student Visa</h1>
            <p className="text-lg mt-2">All you need to know</p>
          </div>
        </div>

        {/* Section 2: Accommodation and Health Insurance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Accommodation */}
          <div className="relative w-full h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url('src/assets/images/brooke-cagle--uHVRvDr7pg-unsplash.jpg')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-2xl font-bold">Accommodation</h2>
              <p className="text-sm mt-2">Discover all our options</p>
            </div>
          </div>

          {/* Health Insurance */}
          <div className="relative w-full h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url('src/assets/images/brooke-cagle--uHVRvDr7pg-unsplash.jpg')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-2xl font-bold">Health Insurance</h2>
              <p className="text-sm mt-2">Discover all our options</p>
            </div>
          </div>
        </div>
      </div>

    </section >
  );
}

export default StudentLife;
