import React from "react";
import logo from './images/Features/Logomark.png'
import candice from './images/candice.png'
const Testimonial = () => {
  return (
    <section className="bg-[#F9FAFB]  py-16 px-6">
      <div className="max-w-4xl mx-auto  p-8 text-center">
    
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Sisyphus Logo" className="w-auto h-6 mr-2"/>
          <span className="text-bold-600 font-bold text-xl">Sisyphus</span>
        </div>

      
        <blockquote className="text-4xl font-semibold text-gray-900 mb-6">
          "We’ve been using Untitled to kick start every new project and can’t
          imagine working without it."
        </blockquote>

     
        <div className="flex flex-col items-center">
          <img
            src={candice} 
            alt="Candice Wu"
            className="w-16 h-16 rounded-full mb-4"
          />
          <div>
            <p className="text-gray-900 font-semibold">Candice Wu</p>
            <p className="text-gray-500 text-sm">
              Product Manager, Sisyphus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
