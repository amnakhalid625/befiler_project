import React from 'react';
import Navbar from '../navbar/Navbar';
import HomeImage from '../../assets/home-img.png'; 
import './hero.css';

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="bg-[#FDEBEE] py-0.5 font-poppins ">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mt-20">
    
    {/* Left Text Section */}
    <div className="md:w-[80%]   text-center md:text-left space-y-4">
      <h1 className="text-4xl md:text-[40px] font-bold leading-tight bg-gradient-to-t from-[#f26e55] to-[#e41e26] bg-clip-text text-transparent">
        File Your Taxes In Just 6 Minutes <br /> With Our Qualified Consultants!
      </h1>
      <h2 className="text-2xl font-semibold text-black">
        Now available in just Rs. 3000/-
      </h2>
      <p className="text-gray-700 text-sm font-medium max-w-xl mx-auto md:mx-0">
        Befiler goes beyond tax filing! We also help with all your business registration,
        sales tax filing, trademark registration, and LLC registration in the USA — all in one place.
      </p>
      <button className="bg-[#f26e55] hover:bg-[#e94e38] text-white px-8 py-2 rounded-full font-medium text-sm transition">
        File Now
      </button>
    </div>

    {/* Right Image Section */}
    <div className="md:w-3/5 flex items-end justify-center">
      <img src={HomeImage} alt="Home" className="max-w-full h-auto" />
    </div>
  </div>
</section>

    </>
  );
};

export default Hero;
