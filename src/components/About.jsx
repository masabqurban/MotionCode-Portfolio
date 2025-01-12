// Popup.js
import React from 'react';
import mypicture from '../assets/mypic.png'
import react from '../assets/react.svg'
import Button from './closebutton';
import tailwind from '../assets/tailwindcsslogo.svg'
import laravel from '../assets/laravellogo.svg'



const Popup = ({ close }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-[#191919] text-white rounded-2xl p-6 max-w-6xl w-full h-fit relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
          onClick={close}
        >
          <Button/>
        </button>

        {/* Content Section */}
        <div className="px-10 py-5 mb-5 flex justify-between gap-10">
          {/* About Me Section */}
          <div className='w-[50%]'>
            <h2 className="text-[#1595b6] text-2xl font-semibold mb-4">ABOUT ME</h2>
            <p className="mb-4">
              I help business owners and busy web developers to design & develop creative websites that fit their vision
              and attract the visitors to stay for ever. Technologies and tools that I use to create such awesome websites.
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10">
              {[
                'HTML',
                'CSS',
                'JavaScript',
                'Tailwind CSS',
                'React JS',
                'Next JS',
                'Laravel',
                'MySQL',
                'GitHub',
                'Canva',
                'Figma',
                'MS Office',
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-800 text-gray-400 text-sm px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            {/* MERN Stack Section */}
            <div className="mt-6">
              <h2 className="text-[#1595b6] text-2xl font-semibold mt-12 mb-4">Front-End Web Developer</h2>
              <div className="flex space-x-8 mt-12">
                <img src={react} alt="MongoDB" className="w-12" />
                <img src={laravel} alt="Express.js" className="w-12" />
                <img src={tailwind} alt="React.js" className="w-12" />
              </div>
            </div>
          </div>

          {/* Illustration Section */}
          <div className='w-[50%]'>
          <div className="flex justify-end items-start">
            <div className="relative">
              <div className="absolute inset-0"></div>
              <img src={mypicture} alt="my picture" className="z-10 w-80 h-80 rounded-2xl object-contain mx-auto" />
            </div>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Popup;
