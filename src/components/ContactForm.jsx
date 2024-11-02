import React from 'react';

const ContactForm = () => {
  return (
    <section className="w-full bg-[#363636]">
      <div className="flex items-center justify-center">
        <div className="container mx-auto p-4 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-14">
          <div className="lg:w-1/2 text-white p-4 lg:pr-10">
            <h1 className="text-4xl font-semibold mb-20">Invest in your studies at a quality institution</h1>
            <p className="text-2xl mb-40">Contact us and start planning your education in Spain. Start being part of the #NLCollegeCommunity</p>
            <p className="text-lg font-semibold">Center accredited by the Cervantes Institute</p>
            <div className="flex items-center mt-4">
              <img src="/path/to/logo1.png" alt="Logo 1" className="w-16 h-16 mr-4" />
              <img src="/path/to/logo2.png" alt="Logo 2" className="w-16 h-16" />
            </div>
          </div>
          
          <div className="lg:w-[500px] p-6 mt-8 mb-10 lg:mt-0">
            <form className="space-y-4">
              <input type="text" placeholder="Full name *" className="w-full p-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring focus:ring-yellow-500" />
              <input type="email" placeholder="E-mail *" className="w-full p-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring focus:ring-yellow-500" />
              <input type="text" placeholder="Telephone number / Whatsapp *" className="w-full p-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring focus:ring-yellow-500" />
              <select className="w-full p-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring focus:ring-yellow-500">
                <option>Country *</option>
                {/* Add other countries */}
              </select>
              <select className="w-full p-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring focus:ring-yellow-500">
                <option>Nationality *</option>
                {/* Add other nationalities */}
              </select>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="campus" className="form-radio text-yellow-500" />
                  <span>Barcelona</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="campus" className="form-radio text-yellow-500" />
                  <span>Madrid</span>
                </label>
              </div>
              <textarea placeholder="Message" className="w-full p-3 min-h-24 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-yellow-500"></textarea>
              <div className="flex items-center">
                <input type="checkbox" className="form-checkbox text-yellow-500" />
                <p className="text-xs ml-2">
                  I have read and accept the 
                  <span className="text-[#902923] underline"> NL College Privacy Policy</span>, 
                  <span className="text-[#902923] underline"> Terms & Conditions</span>, 
                  <span className="text-[#902923] underline"> Cancellation Policy</span>, and 
                  <span className="text-[#902923] underline"> Cookies Policy</span>.
                </p>
              </div>
              <button type="submit" className="w-full py-3 bg-[#902923] text-white rounded-md font-semibold hover:bg-yellow-600 transition">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
