import React from 'react';
import mobile from '../../assets/mobile.png';
import button1 from '../../assets/button.png';
import button2 from '../../assets/button1.png';

const MobileSection = () => {
  return (
    <section className="bg-[#FDEBEE] py-10 font-poppins">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Image - Hidden on sm and md */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center">
            <img
              src={mobile}
              alt="Mobile App"
              className="max-w-[90%] h-[450px] object-contain"
            />
          </div>

          {/* Right Text + Buttons */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-2xl sm:text-3xl font-semibold leading-snug mb-4 max-w-xl">
              Say hello to the app that made everything even more convenient
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-4 max-w-xl">
              Millions of app downloads by Pakistanis
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-4">
              <img
                src={button1}
                alt="Download Button 1"
                className="w-[140px] sm:w-[150px] hover:scale-105 transition-transform"
              />
              <img
                src={button2}
                alt="Download Button 2"
                className="w-[140px] sm:w-[150px] hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
