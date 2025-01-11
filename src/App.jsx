import { useEffect, useState } from 'react';
import './App.css';
import { motion } from "framer-motion";
import Button from './components/button'; // Import the Button component
import ToggleButtonDark from './components/ToggleButtonDark';
import SocialMedia from './components/SocialMedia';
import Popup from './components/About';


//media
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import whiteLogoM from './assets/whiteLogoM.svg'
import sunicon from './assets/sun.svg'
import blueLogoM from './assets/blueLogoM.svg'
import linkdin from './assets/linkedin.svg'
import x from './assets/twitter-x.svg'
import instagram from './assets/instagram.svg'
// import facebook from './assets/facebook.svg'
import downArrow from './assets/downArrow.svg'
import rightArrow from './assets/rightArrow.svg'
import laptop1 from './assets/reference/ProCodrr.webp'
import link from './assets/link-icon.svg'
import blacklink from './assets/black-link-icon.svg'
import taha from './assets/taha.jpeg'
import noman from './assets/noman.jpeg'
import connect from './assets/connect.png'
import contactme from './assets/contact-me.svg'
import laptop1light from './assets/laptop 1 light.png'
import laptop1dark from './assets/laptop 1 dark.png'
import laptop2light from './assets/laptop 2 light.png'
import laptop2dark from './assets/laptop 2 dark.png'
import usermale from './assets/user male.svg'
import userfemale from './assets/user female.svg'



function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  useEffect(() => {
    const swiper = new Swiper('.mySwiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  return (
    <>
    <div className='body bg-[#111] text-white font-Nunito'>
        <section className='flex flex-col justify-between h-screen'>
          <header className='z-10 pointer-events-none flex items-center justify-between w-full px-4 mt-4 max-w-screen-xl mx-auto'>
            {/* <img src={theme === 'light' ? whiteLogoM : whiteLogoM } alt="" className='md:w-40 w-28' /> */}
            <img src={whiteLogoM} alt="" className='w-20 h-20' />
            <div className='flex gap-4 pointer-events-auto'><ToggleButtonDark /></div>
          </header>
          <div className='absolute inset-0 hidden md:block' id="wrapper-canvas"></div>
            
            <div className='flex -mt-10 relative'>
              <div className='w-full px-4 max-w-screen-xl mx-auto'>
                <img src={blueLogoM} alt="" className='pointer-events-none absolute top-0 left-1/2 -translate-y-[70px] sm:-translate-y-[100px] -translate-x-1/2 w-[200px] sm:w-[300px] md:w-[500px] opacity-60' />
                <div className='relative'>
                  <h1 className='pointer-events-none text-4xl md:text-[64px] font-semibold font-Spartan mr-12'> Masab Qurban </h1>
                  <p className='pointer-events-none text-[25px] font-Merriweather italic my-4 md:my-8'> Front-End Website Developer </p>
                  {/* <button className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group"> About Me
                    <img src={rightArrow} alt="" className='absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 ease-in-out duration-100' />
                  </button> */}
                  <button onClick={() => setIsPopupVisible(true)} className='py-2 px-4 rounded font-extrabold relative hover:scale-110 ease-in-out duration-100 group'>
                    <Button />
                  </button>
                </div>
              </div>
              <ul className='ml-auto space-y-6 text-[#b0b2c3] absolute right-8'>
                <li> <a href="" target="_blank"> <img src={linkdin} alt="" className='w-7' /> </a> </li>
                <li> <a href="" target="_blank"> <img src={x} alt="" className='w-7' /> </a> </li>
                <li> <a href="" target="_blank"> <img src={instagram} alt="" className='w-7'/> </a> </li>
              </ul>
            </div>
            
            {isPopupVisible && ( <Popup close={() => setIsPopupVisible(false)} /> )}

            
            <div className='relative self-center after:content-[] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[100px]'>
              {/* <button className='bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-20'> Latest Works
                <img src={downArrow} alt="" className='absolute rotate-90 left-1/2 -translate-x-1/2 top-11 group-hover:top-12 ease-in-out duration-100'/>
              </button> */}
            <div className='w-full flex justify-center items-center rounded font-extrabold relative hover:scale-110 ease-in-out duration-100 transition-all group mb-10'>
              <a href='#work'>
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#1595b6] flex justify-center items-start p-2'>
                  <motion.div animate={{ y: [0, 24, 0], }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", }} className='w-3 h-3 rounded-full bg-[#1788ae] mb-1'/>
                </div>
              </a>
            </div>
            </div>
        </section>

        <section className='max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16'>
          <h2 className='text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]'> Latest Projects </h2>
          
          <div className='flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative'>
            <div className='h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block'>  
            </div>
            <div className='w-4 h-4 rounded-full border-[3px] border-[#d9784e] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block'>
            </div>
            <a href="https://tool-matrix.vercel.app/" className='flex w-full relative justify-center sm:justify-start'>
              <div className='flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200'>
                <img src={laptop1dark} alt="" className='max-w-7xl w-[550px] mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'/>
                <span className='flex group-hover:top-[88px] ease-jump duration-200 bg-[#d9784e] text-black sm:absolute left-1/2 sm:-translate-x-1/2 top-40 px-2 py-1 text-sm sm:text-base mt-2 rounded-md w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 transition-all'> Tool Matrix
                  <img src={blacklink} alt="" className='feather feather-external-link'/>
                </span>
              </div>
            </a>
            <div className='w-full'>
              <h3 className='text-[#d9784e] font-bold text-2xl md:text-4xl'> Tool Matrix </h3>
              <span className='text-[#d9784e] text-base md:text-lg' > (Final Year Project)</span>
              <p className='text-justify text-sm md:text-base mt-2'> A web-based platform developed in React JS, Node JS and Tailwind CSS featuring calculators for various domains. Integrated a Python-powered AI model utilizing Gemini API to solve handwritten math problems. Achieved 95% accuracy in solving math queries through the AI-powered handwriting recognition feature. </p>
              <ul className='flex flex-wrap gap-2 mt-2'>
                <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base'> React JS </li>
                <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base'> Node JS </li>
                <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base'> Python </li>
                <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base'> Tailwind CSS </li>
                <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base'> Gemini API </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative" >
            <div className="order-2 sm:order-1 w-full">
              <h3 className="text-[#44b1e5] font-bold text-2xl md:text-4xl"> PNG to Text </h3>
              <span className="text-[#44b1e5] text-base md:text-lg" >(Image Processor)</span >
              <p className="text-justify text-sm md:text-base mt-2"> Developed a feature-rich web-based platform using PHP, Laravel and Tailwind CSS. Integrated tools for image conversion, compression, and text extraction to enhance file processing efficiency. </p>
              <ul className="flex flex-wrap gap-2 mt-2">
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> PHP Laravel </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> JavaScript </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Tailwind CSS </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Figma </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> MySQL </li>
              </ul>
            </div>
            <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block" ></div>
            <div className="w-4 h-4 rounded-full border-[3px] border-[#44b1e5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block" ></div>
            <a href="https://pngtotext.com/" className="order-1 md:order-2 flex w-full relative justify-center sm:justify-start" >
              <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 transition-all sm:ml-auto" >
                <img src={laptop2dark} alt="" className='max-w-7xl w-[550px] mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'/>
                <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#44b1e5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 transition-all" >PNG to Text
                  <img src={blacklink} alt="" className='feather feather-external-link'/>
                </span>
              </div>
            </a>
          </div>

           <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative" >
            <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block" ></div>
            <div className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block" ></div>
            <a href="#" className="flex w-full relative justify-center sm:justify-start" >
              <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200" >
                <img src={laptop1} alt="" className='max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'/>
                <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2" >Harigurus
                <img src={link} alt="" className='feather feather-external-link'/>
                </span>
              </div>
            </a>
            <div className="w-full">
              <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl"> Harigurus </h3>
              <span className="text-[#fc815c] text-base md:text-lg" >(Event Booking)</span>
              <p className="text-justify text-sm md:text-base mt-2"> HariGurus is a one-stop-shop for all Hindu religious, customs and traditional requirements. Built the complete site from scratch. </p>
              <ul className="flex flex-wrap gap-2 mt-2">
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #react.js </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #express.js </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #node.js </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #swiper.js </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #mongoDB </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #mongoose </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #css </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #javascript </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #figma </li>
              </ul>
            </div>
          </div>

          {/*<div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative" >
            <div className="order-2 sm:order-1 w-full">
              <h3 className="text-[#47afa1] font-bold text-2xl md:text-4xl"> Web Dev English </h3>
              <span className="text-[#47afa1] text-base md:text-lg" >(Coaching and Consulting)</span>
              <p className="text-justify text-sm md:text-base mt-2"> Being a lead developer, revamped the site to a highly responsive, and interactive website. Created new features and pages. Worked as a team with product manager and ux designer. </p>
              <ul className="flex flex-wrap gap-2 mt-2">
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #react.js </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #express.js </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #node.js </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #swiper.js </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #mongoDB </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #mongoose </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #css </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #javascript </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> #figma </li>
              </ul>
            </div>
            <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block" ></div>
            <div className="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block" ></div>
            <a href="#" className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start" >
              <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto" >
                <img src={laptop1} alt="" className='max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'/>
                <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2" >Web Dev English
                <img src={link} alt="" className='feather feather-external-link'/>
                </span>
              </div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative" >
            <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block" ></div>
            <div className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block" ></div>
            <a href="#" className="flex w-full relative justify-center sm:justify-start" >
              <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200" >
                <img src={laptop1} alt="" className='max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'/>
                <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2" >Pioneer Digital
                <img src={link} alt="" className='feather feather-external-link'/>
                </span>
              </div>
            </a>
            <div className="w-full">
              <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl"> Pioneer Digital </h3>
              <span className="text-[#fc815c] text-base md:text-lg" >(Digital Marketing Agency)</span >
              <p className="text-justify text-sm md:text-base mt-2"> One of the featured site while working with TheBrandWick.com (agency). Worked as a frontend developer to make the site user-interactive and responsive. </p>
              <ul className="flex flex-wrap gap-2 mt-2">
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base" > #react.js </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base" > #express.js </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base" > #node.js </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base" > #swiper.js </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base" > #mongoDB </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base" > #mongoose </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base" > #css </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base" > #javascript </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base" > #figma </li>
              </ul>
            </div>
          </div> */}

          <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2" ></div>
        </section>

        <section className="max-w-screen-xl mx-auto pb-12">
          <h2 className="text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md" > What my clients are saying? </h2>
          <div className="swiper mySwiper !py-14">
            <div className="swiper-wrapper items-center">
              
              <div className="swiper-slide px-4">
                <div className="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab" >
                  <img src={noman} alt="testimonial 3" className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"/>
                  <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative" >
                    <p className="text-sm md:text-base mb-2"> “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel consequuntur ex, error non provident atque? Iste eveniet eaque dolorem quo placeat odit expedita impedit quam consectetur eius aperiam, temporibus aut.” </p>
                    <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl" > Noman Tariq </h2>
                    <h5 className="text-right text-[#459bd5] text-base md:text-lg"> Flutter App Developer </h5>
                  </div>
                </div>
              </div>
              
              <div className="swiper-slide px-4">
                <div className="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab" >
                  <img src={usermale} alt="testimonial 3" className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"/>
                  <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative" >
                    <p className="text-sm md:text-base mb-2"> “Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto magni praesentium impedit, aut consectetur perferendis suscipit minus temporibus in quam eum modi commodi officia rerum iste beatae, nisi quia necessitatibus!” </p>
                    <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl" > Umair Javed </h2>
                    <h5 className="text-right text-[#459bd5] text-base md:text-lg"> Angular Developer </h5>
                  </div>
                </div>
              </div>
              
              <div className="swiper-slide px-4">
                <div className="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab" >
                  <img src={taha} alt="testimonial 3" className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"/>
                  <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative" >
                    <p className="text-sm md:text-base mb-2"> “Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum cupiditate culpa dolores ipsum earum magni maiores assumenda molestiae, quaerat aut debitis quas vel excepturi. Ut vel ab molestias earum!” </p>
                    <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl" > Taha Umer </h2>
                    <h5 className="text-right text-[#459bd5] text-base md:text-lg"> MERN Stack Developer </h5>
                  </div>
                </div>
              </div>

              <div className="swiper-slide px-4">
                <div className="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab" >
                  <img src={userfemale} alt="testimonial 3" className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"/>
                  <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative" >
                    <p className="text-sm md:text-base mb-2"> “Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum cupiditate culpa dolores ipsum earum magni maiores assumenda molestiae, quaerat aut debitis quas vel excepturi. Ut vel ab molestias earum!” </p>
                    <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl" > Afeera Abid</h2>
                    <h5 className="text-right text-[#459bd5] text-base md:text-lg"> Graphic Designer </h5>
                  </div>
                </div>
              </div>

              <div className="swiper-slide px-4">
                <div className="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab" >
                  <img src={userfemale} alt="testimonial 3" className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"/>
                  <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative" >
                    <p className="text-sm md:text-base mb-2"> “Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum cupiditate culpa dolores ipsum earum magni maiores assumenda molestiae, quaerat aut debitis quas vel excepturi. Ut vel ab molestias earum!” </p>
                    <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl" > Hafsa Arshad </h2>
                    <h5 className="text-right text-[#459bd5] text-base md:text-lg"> Front-End Developer </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-4 pb-12">
          <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md" > Let's Connect </h2>
          <div className="flex flex-col md:flex-row items-center mt-10">
            <div className="w-full"> <img src={contactme} alt="connect" /> </div>
            <form className="w-full" name="contactUS">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Name</label >
              
              <div className="relative mb-4">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none" >
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                    />
                  </svg>
                </div>
                <input type="text" id="name" name="name" className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your name" />
              </div>

              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Your Email</label >
              
              <div className="relative mb-4">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none" >
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path
                      d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                    />
                    <path
                      d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                    />
                  </svg>
                </div>
                <input type="email" id="email" name="email" className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@gmail.com" />
              </div>

              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Message</label >
              <div className="relative mb-4">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none" ></div>
                <textarea id="message" name="message" rows="8" className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" ></textarea>
              </div>

              <button type="submit" className="w-full text-white bg-[#1788ae] hover:bg-[#1280a4] focus:ring-4 focus:ring-[#4489a0] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none" >
                Send
              </button>
            </form>
          </div>
        </section>

        <footer className="flex flex-col items-center pb-10">
          <p className="text-xs text-gray-300">Masab Qurban © 2025</p>
          <div className="black-logo my-4 "> <img src={blueLogoM} alt="" className='w-14 h-14'/> </div>
          <ul className="mx-auto flex items-center justify-center gap-6 text-[#b0b2c3]">
            <li>
              <a href="" target="_blank">
                <SocialMedia/>
                <svg
                  className="w-5 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <svg
                  className="w-5 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  className="w-5 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <svg
                  className="w-5 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  className="w-5 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path
                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </footer>
    </div>
    </>
  )
}

export default App
