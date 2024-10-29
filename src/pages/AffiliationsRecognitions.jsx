import React from 'react';

import Kingsbook from '../assets/images/gallery.jpg'
import Gallery from '../assets/images/IMG_5774-780x290.jpg'

const AffiliationsRecognitions = () => {
  return (
    <section>
      {/* Background Image and Overlay */}
      <div className="relative w-full h-44 bg-cover bg-center overflow-hidden mb-8" style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl mt-16 text-center font-bold">Meet Our Team</h1>
        </div>
      </div>

      <div className='container mx-auto p-4'>
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Left Side */}
          <div className="lg:w-2/3">
            <img
              src={Gallery}
              alt="Kingsbrook"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <h2 className="mt-4 text-lg font-bold uppercase">Recognitions & Affiliations</h2>
            <p className="mt-2 text-gray-700">
              Our school is <strong>accredited by the Instituto Cervantes</strong>, which means it meets the conditions
              set by the Instituto Cervantes Accreditation System for Centres, the only international accreditation
              exclusively focused on the teaching of Spanish as a foreign language (ELE). This accreditation also allows
              us to issue Study Certificates and I or Achievement Certificates to apply for an Student Visa or a NIE
              renewals.
            </p>
            <p className="mt-2 text-gray-700">
              Our school is <strong>SIELE Examination Center (SelloSIELE)</strong>. SIELE is the International Service
              for the Evaluation of the Spanish Language.
            </p>
          </div>

          {/* Right side */}
          <div className="lg:w-1/3">
            <div className="relative">
              <img
                src={Kingsbook}
                alt="Gallery"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AffiliationsRecognitions;
