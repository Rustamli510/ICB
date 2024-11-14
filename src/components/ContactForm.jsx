import React from 'react';

const ContactForm = () => {
  return (
    <section
      className="w-full relative bg-cover bg-center"
      style={{ backgroundImage: "url('src/assets/background images/contactbackground.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center py-16">
        <div className="container mx-auto p-4 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-14">
          {/* Left Content */}
          <div className="lg:w-1/2 text-white p-4 lg:pr-10 relative z-10">
            <h1 className="text-4xl font-semibold mb-20">Invest in your studies at a quality institution</h1>
            <p className="text-2xl mb-40">Contact us and start planning your education in Spain. Start being part of the #NLCollegeCommunity</p>
            <p className="text-lg font-semibold">Center accredited by the Cervantes Institute</p>
            <div className="flex items-center mt-4">
              <img src="/path/to/logo1.png" alt="Logo 1" className="w-16 h-16 mr-4" />
              <img src="/path/to/logo2.png" alt="Logo 2" className="w-16 h-16" />
            </div>
          </div>

          {/* Right Form Content */}
          <div className="lg:w-[500px] p-6 mt-8 mb-10 lg:mt-0 relative">
            <form className="space-y-4">
              <input type="text" placeholder="Full name *" className="w-full p-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring focus:ring-[#902923]" />
              <input type="email" placeholder="E-mail *" className="w-full p-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring focus:ring-[#902923]" />
              <input type="text" placeholder="Telephone number / Whatsapp *" className="w-full p-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring focus:ring-[#902923]" />
              <select className="w-full cursor-pointer p-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring focus:ring-[#902923]">
                <option>Country *</option>
                {/* Add other countries */}
              </select>
              <select className="w-full cursor-pointer p-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring focus:ring-[#902923]">
                <option>Nationality *</option>
                {/* Add other nationalities */}
              </select>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="campus" className="cursor-pointer outline-none" style={{ accentColor: '#902923' }} />
                  <span className='text-white'>Barcelona</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="campus" className="cursor-pointer" style={{ accentColor: '#902923' }} />
                  <span className='text-white'>Madrid</span>
                </label>
              </div>
              <textarea placeholder="Message" className="w-full p-3 min-h-24 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-[#902923]"></textarea>
              <div className="flex items-center">
                <input type="checkbox" className="cursor-pointer" style={{ accentColor: '#902923' }} />
                <p className="text-xs ml-2 text-white">
                  I have read and accept the 
                  <span className="text-[#902923] underline"> NL College Privacy Policy</span>, 
                  <span className="text-[#902923] underline"> Terms & Conditions</span>, 
                  <span className="text-[#902923] underline"> Cancellation Policy</span>, and 
                  <span className="text-[#902923] underline"> Cookies Policy</span>.
                </p>
              </div>
              <button type="submit" className="w-full py-3 bg-[#902923] text-white rounded-md font-semibold hover:bg-white hover:text-[#902923] transition">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
