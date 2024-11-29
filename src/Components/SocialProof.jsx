import React from 'react';
import lg1 from './images/logo1.png'
import lg2 from './images/logo2.png'
import lg3 from './images/logo3.png'
import lg4 from './images/logo4.png'
import lg5 from './images/logo5.png'
import lg6 from './images/logo6.png'

const SocialProof = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
    
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">Join 4,000+ companies already growing</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          <img
            src={lg1}
            alt="Company 1"
            className="w-full h-auto object-contain"
          />
          <img
              src={lg2}
            alt="Company 2"
            className="w-full h-auto object-contain"
          />
          <img
              src={lg3}
            alt="Company 3"
            className="w-full h-auto object-contain"
          />
          <img
              src={lg4}
            alt="Company 4"
            className="w-full h-auto object-contain"
          />
          <img
              src={lg5}
            alt="Company 5"
            className="w-full h-auto object-contain"
          />
          <img
              src={lg6}
            alt="Company 6"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default SocialProof;
