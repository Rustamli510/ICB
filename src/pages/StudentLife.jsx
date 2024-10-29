import React from 'react';

function StudentLife() {
  return (
    <section className="flex flex-col items-center">
      {/* Picture area */}
      <div className="w-full h-40 md:h-44 bg-cover bg-center relative" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-4xl font-bold text-white mt-16">Student Life</h1>
        </div>
      </div>

      {/* Text area */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row gap-8">
        {/* Left side */}
        <div className="text-4xl md:text-5xl font-semibold text-center md:text-left">
          <p>
            Welcome to your new <span className="text-yellow-500">life!</span>
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
        <div className="relative w-full h-80 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("/path/to/your/student-visa-image.jpg")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-4xl font-bold">Student Visa</h1>
            <p className="text-lg mt-2">All you need to know</p>
          </div>
        </div>

        {/* Section 2: Accommodation and Health Insurance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Accommodation */}
          <div className="relative w-full h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("/path/to/your/accommodation-image.jpg")' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-2xl font-bold">Accommodation</h2>
              <p className="text-sm mt-2">Discover all our options</p>
            </div>
          </div>

          {/* Health Insurance */}
          <div className="relative w-full h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("/path/to/your/health-insurance-image.jpg")' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-2xl font-bold">Health Insurance</h2>
              <p className="text-sm mt-2">Discover all our options</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default StudentLife;
