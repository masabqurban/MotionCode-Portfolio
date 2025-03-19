// Popup.js
import React from 'react';
import mypicture from '../assets/mypic.png'
import react from '../assets/react.svg'
import Button from './closebutton';
import tailwind from '../assets/tailwindcsslogo.svg'
import laravel from '../assets/laravellogo.svg'
import mypic2 from '../assets/mypic2.png'
import Download from './downloadbutton';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


const Popup = ({ close }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="">

        {/* Content Section */}
        <div className="md:max-w-6xl w-full md:h-fit relative px-5 md:px-10 py-1 md:py-5 flex flex-col-reverse md:grid md:grid-cols-2 max-h-[80vh] overflow-y-scroll md:overflow-y-hidden">
          {/* About Me Section */}
          <div className='relative h-full bg-[#ececec] text-black p-5 lg:p-20 overflow-hidden'>
            <span className='z-0 text-[190px] absolute -top-14 -right-24 text-[#e6e6e6] font-bold heading-font'>ABOUT</span>
            <h2 className="relative z-10 text-[#1595b6] text-3xl md:text-4xl font-semibold font-lexend">ABOUT ME</h2>
            <h2 className="relative z-10 text-[#1595b6] text-lg mb-2 md:mb-4 font-HubotSans font-medium">Front-End Web Developer</h2>
            <p className="mb-2 md:mb-4 relative z-10 font-HubotSans font-medium text-sm md:text-base">
              I help business owners and busy web developers to design & develop creative websites that fit their vision
              and attract the visitors to stay for ever. Technologies and tools that I use to create such awesome websites.
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2 md:mt-10 font-lexend">
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
                  className="bg-gray-800 text-gray-400 text-[12px] md:text-sm px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            {/* MERN Stack Section */}
            <div className="mt-0 md:mt-6">
              {/* <div className="flex space-x-8 mt-12">
                <img src={react} alt="MongoDB" className="w-12" />
                <img src={laravel} alt="Express.js" className="w-12" />
                <img src={tailwind} alt="React.js" className="w-12" />
              </div> */}
              <Download />
            </div>
          </div>

          {/* Illustration Section */}
          <div className='bg-[#1c1d25] h-full relative text-white p-10 md:p-20 overflow-hidden'>
            <span className='z-0 text-[190px] absolute -bottom-14 -right-40 text-[#27282f] font-bold heading-font'>DEVELO</span>
            <div className="flex justify-between items-start">
              <div className="md:w-full w-[150px] relative flex items-start justify-start">
                {/* Lazy Loading Image */}
                <LazyLoadImage
                  src={mypic2}
                  alt="My Picture"
                  effect="blur" // You can also use "opacity" or "black-and-white"
                  className="z-10 w-full h-full object-cover mx-auto"
                />
              </div>
              <button className="absolute right-1 md:right-4 top-1 md:top-4 text-gray-400 hover:text-white focus:outline-none font-lexend" onClick={close} > <Button /> </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Popup;
