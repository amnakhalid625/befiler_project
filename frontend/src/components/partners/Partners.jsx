import React from 'react';
import one from '../../assets/one.png';
import two from '../../assets/two.png';
import './partner.css';

const Partner = () => {
  const partnerImages = [
    one,
    two,
    'https://www.befiler.com/assets/images/home/partner_3.png',
    'https://www.befiler.com/assets/images/home/partner_4.png',
    'https://www.befiler.com/assets/images/home/partner_5.png',
    'https://www.befiler.com/assets/images/home/partner_6.png',
    'https://www.befiler.com/assets/images/home/partner_7.png',
    'https://www.befiler.com/assets/images/home/partner_8.png',
    'https://www.befiler.com/assets/images/home/partner_9.png',
    'https://www.befiler.com/assets/images/home/partner_10.png',
    'https://www.befiler.com/assets/images/home/partner_11.png',
    'https://www.befiler.com/assets/images/home/partner_12.png',
    'https://www.befiler.com/assets/images/home/partner_13.png',
    'https://www.befiler.com/assets/images/home/partner_14.png',
  ];

  return (
    <section className="py-10 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-2xl lg:text-4xl sm:text-3xl font-semibold mb-8">
          Our Partners and Collaborators
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5">
          {partnerImages.map((imgSrc, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={imgSrc}
                alt={`partner-${index + 1}`}
                className="w-16 sm:w-20 md:w-24 lg:w-24 h-auto object-contain transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
