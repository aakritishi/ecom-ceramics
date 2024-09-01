import React from 'react';
import cera from '../media/ceramicpot.jpg'

const IntroductionSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white">
      {/* Left Section */}
      <div className="md:w-1/2 p-8 bg-[#582707] text-white flex flex-col justify-center z-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Crafted with Care <br /> for Memorable Moments.
        </h1>
        <p className="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className=' flex items-center justify-center'>
        <button className="bg-white text-[#582707] py-2 px-6 rounded-full hover:bg-gray-200 transition w-1/3 font-semibold">
          SHOP NOW
        </button>
        </div>   
      </div>

      {/* Right Section */}
      <div className="md:w-1/2">
        <img
          src={cera}
          alt="Beautiful Setup"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default IntroductionSection;
