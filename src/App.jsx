import { useEffect, useState, useContext } from 'react';
import './App.css';
import Button from './components/button'; // Import the Button component
import ToggleButtonDark from './components/ToggleButtonDark';
import SocialMedia from './components/SocialMedia';
import Popup from './components/About';
import Input from './components/formfields';
import Switch from './components/musicbutton';
import RippleButton from './components/ripplebutton';
import ThemeContext from './hooks/ThemeContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

//media
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import whiteLogoM from './assets/whiteLogoM.svg'
import sunicon from './assets/sun.svg'
import blueLogoM from './assets/blueLogoM.svg'
import linkdin from './assets/linkedin.svg'
import x from './assets/twitter-x.svg'
import instagram from './assets/instagram.svg'
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
import laptop1dark from './assets/laptop 5 dark.png'
import laptop2light from './assets/laptop 2 light.png'
import laptop2dark from './assets/laptop 2 dark.png'
import usermale from './assets/user male.svg'
import userfemale from './assets/user female.svg'
import BouncingCircles from './components/BouncingCircles';
import portfolio from './assets/portfolio.png'
import laptop3 from './assets/laptop 3.png'
import laptop4 from './assets/laptop 4.png'



function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const AVariants = { hidden: { opacity: 0, y: 150, }, visible: { opacity: 1, y: 0, }, };
  const BVariants = { hidden: { opacity: 0, x: 150 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } } };
  const CVariants = { hidden: { opacity: 0, y: 150, }, visible: { opacity: 1, y: 0, }, };
  const [Section1, isSection1InView] = useInView({ triggerOnce: true });
  const { theme } = useContext(ThemeContext);

  // Animations start
  // const mainVariants = { hidden: { y: 400, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1.5, ease: 'easeInOut', } } };
  // const mainVariants2 = { hidden: { y: 300, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeInOut', } } };
  // const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5, } } };
  // const staggerContainer2 = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  // const crossVarients = { hidden: { y: -40, x: 50, opacity: 0, }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.4, delay: 0.5 } } };
  // const crossVarients2 = { hidden: { opacity: 0, y: 40, x: 50 }, visible: { opacity: 1, y: 0, x: 0, transition: { delay: 0.5 } } }
  // const [Section2, isSection2InView] = useInView({ triggerOnce: true });
  // const [Section3, isSection3InView] = useInView({ triggerOnce: true });
  // const [Section4, isSection4InView] = useInView({ triggerOnce: true });
  // const [Section5, isSection5InView] = useInView({ triggerOnce: true });
  // const [Section6, isSection6InView] = useInView({ triggerOnce: true });
  // const [FooterSection, isFooterInView] = useInView({ triggerOnce: true });
  // Animations End

  const handleScroll = () => {
    const targetScroll = window.scrollY + window.innerHeight;
    const duration = 700;
    const startTime = performance.now();

    const smoothScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 2);
      const easeInQuad = (t) => t * t;
      const easedProgress = easeInQuad(progress);
      const scrollPosition =
        window.scrollY + (targetScroll - window.scrollY) * easedProgress;

      window.scrollTo(0, scrollPosition);

      if (progress < 1) {
        requestAnimationFrame(smoothScroll);
      }
    };

    requestAnimationFrame(smoothScroll);
  };
  const scrollToTop = () => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }


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

      <div className='body dark:bg-[#111] bg-[#ececec] text-white'>
        <section id='home' className='flex flex-col justify-between h-screen'>
          <header className='z-10 pointer-events-none flex items-center justify-between w-full px-4 mt-4 max-w-screen-xl mx-auto'>
            <img src={theme == 'light' ? blueLogoM : whiteLogoM} alt="" className='w-20 h-20 cursor-pointer pointer-events-auto' onClick={() => window.location.reload()} />
            <div className='flex gap-4 pointer-events-auto'><Switch /><div><ToggleButtonDark /></div></div>
          </header>
          <div className='absolute right-0 left-0 bottom-0 top-0 inset-0 hidden md:block' id="wrapper-canvas">
            <BouncingCircles theme={theme} />
          </div>

          <div className='flex -mt-10 relative'>
            <div className='w-full px-4 max-w-screen-xl mx-auto'>
              <img src={blueLogoM} alt="" className='pointer-events-none absolute top-0 left-1/2 -translate-y-[70px] sm:-translate-y-[100px] -translate-x-1/2 w-[200px] sm:w-[300px] md:w-[500px] opacity-80' />
              <div className='relative' ref={Section1}>
                <motion.h1 className='text-black dark:text-white pointer-events-none text-[32px] md:text-[64px] font-bold font-lexend mr-12' initial="hidden" animate="visible" transition={{ opacity: { duration: 0.4, delay: 0.2 }, y: { duration: 0.4, delay: 0.2 } }} variants={CVariants}> Masab Qurban </motion.h1>
                <motion.p className='text-black dark:text-white pointer-events-none text-[18px] md:text-[25px] font-medium font-HubotSans italic my-4 md:my-8' initial="hidden" animate="visible" transition={{ opacity: { duration: 0.7, delay: 0.5 }, y: { duration: 0.7, delay: 0.5 } }} variants={CVariants}> Front-End Website Developer </motion.p>
                {/* <button className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group"> About Me
                    <img src={rightArrow} alt="" className='absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 ease-in-out duration-100' />
                  </button> */}
                <motion.div className='' initial="hidden" animate="visible" transition={{ opacity: { duration: 1, delay: 0.8 }, y: { duration: 1, delay: 0.8 } }} variants={CVariants}>
                  <button onClick={() => setIsPopupVisible(true)} className='py-2 px-4 rounded font-bold relative hover:scale-110 ease-in-out duration-100 group'> <Button /> </button>
                </motion.div>
              </div>
            </div>
            <motion.ul className='ml-auto space-y-6 text-[#b0b2c3] absolute right-8' initial="hidden" animate="visible" transition={{ opacity: { duration: 0.5, delay: 0.3 }, y: { duration: 0.5, delay: 0.3 } }} variants={BVariants}>
              <li className='group hover:scale-110 ease-in-out duration-100 transition-all'> <a href="https://www.linkedin.com/in/masab-qurban/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path className='w-7 dark:text-[#b0b2c3] text-[#3d3d3d] dark:group-hover:text-white group-hover:text-[#000]' fill="currentColor" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /> </svg> </a> </li>
              <li className='group hover:scale-110 ease-in-out duration-100 transition-all'> <a href="https://x.com/Masab_Qurban" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path className='w-7 dark:text-[#b0b2c3] text-[#3d3d3d] dark:group-hover:text-white group-hover:text-[#000]' fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /> </svg> </a> </li>
              <li className='group hover:scale-110 ease-in-out duration-100 transition-all'> <a href="mailto:masabqurban@gmail.com" target="_blank"> <svg className='w-7 dark:text-[#b0b2c3] text-[#3d3d3d] dark:group-hover:text-white group-hover:text-[#000]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /> </svg> </a> </li>
              <li className='group hover:scale-110 ease-in-out duration-100 transition-all'> <a href="https://github.com/masabqurban" target="_blank"> <svg className='w-7 dark:text-[#b0b2c3] text-[#3d3d3d] dark:group-hover:text-white group-hover:text-[#000]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"> <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /> </svg> </a> </li>
              {/* <li className='group hover:scale-110 ease-in-out duration-100 transition-all'> <a href="https://www.instagram.com/masabqurban/" target="_blank"> <svg className='w-7 dark:text-[#b0b2c3] text-[#3d3d3d] dark:group-hover:text-white group-hover:text-[#000]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"> <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /> </svg> </a> </li> */}

            </motion.ul>
          </div>

          {isPopupVisible && (<Popup close={() => setIsPopupVisible(false)} />)}


          <div className='relative self-center after:content-[] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[100px]'>
            {/* <button className='bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-20'> Latest Works
                <img src={downArrow} alt="" className='absolute rotate-90 left-1/2 -translate-x-1/2 top-11 group-hover:top-12 ease-in-out duration-100'/>
              </button> */}
            <div className='w-full flex justify-center items-center rounded font-bold relative hover:scale-110 ease-in-out duration-100 transition-all group mb-10'>
              <div href='#project' className='cursor-pointer' onClick={handleScroll}>
                <motion.div className='w-[35px] h-[64px] rounded-3xl group border-4 border-[#1f2667e6] dark:border-[#1595b6] flex justify-center items-start p-2' initial="hidden" animate="visible" transition={{ opacity: { duration: 1.3, delay: 1 }, y: { duration: 1.3, delay: 1 } }} variants={AVariants}>
                  <motion.div animate={{ y: [0, 24, 0], }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", }} className='w-3 h-3 group rounded-full bg-[#1f2667e6] dark:bg-[#1595b6] mb-1' />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id='project' className='max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16'>
          <h2 className='text-3xl sm:text-[40px] bg-[#ececec] dark:bg-[#111] relative z-10 font-bold font-lexend px-4 py-2 w-max mx-auto text-center text-[#1f2667e6] dark:text-[#1595b6] sm:border-b-2 border-[#1f2667e6] dark:border-[#1595b6]'> Latest Projects </h2>

          <div className='flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative'>
            <div className='h-[1px] left-1/4 right-1/2 bg-[#d9784e] absolute top-1/2 hidden sm:block'>
            </div>
            <div className='w-4 h-4 rounded-full border-[3px] border-[#d9784e] absolute left-1/2 -translate-x-1/2 bg-[#ececec] dark:bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block'>
            </div>
            <a href="https://tool-matrix.vercel.app/" className='flex w-full relative justify-center sm:justify-start'>
              <div className='flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200'>
                <img src={laptop1dark} alt="" className='max-w-7xl w-[400px] mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]' />
                <span className='font-lexend flex group-hover:-top-14 ease-jump duration-200 bg-[#d9784e] text-black sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded-md w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 transition-all'> Tool Matrix
                  <img src={blacklink} alt="" className='feather feather-external-link' />
                </span>
              </div>
            </a>
            <div className='w-full'>
              <h3 className='text-[#d9784e] font-bold text-2xl md:text-4xl font-lexend'> Tool Matrix </h3>
              <span className='text-[#d9784e] text-base md:text-lg font-HubotSans font-medium' > (Final Year Project)</span>
              <p className='text-black dark:text-white text-justify text-sm md:text-base mt-2 font-HubotSans '> A web-based platform developed in React JS, Node JS and Tailwind CSS featuring calculators for various domains. Integrated a Python-powered AI model utilizing Gemini API to solve handwritten math problems. Achieved 95% accuracy in solving math queries through the AI-powered handwriting recognition feature. </p>
              <ul className='flex flex-wrap gap-2 mt-2 text-black dark:text-white'>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Vite </li>
                <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base font-lexend'> React JS </li>
                <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base font-lexend'> Node JS </li>
                <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base font-lexend'> Python </li>
                <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base font-lexend'> Tailwind CSS </li>
                <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base font-lexend'> Gemini API </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> GitHub </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Vercel </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative" >
            <div className="order-2 sm:order-1 w-full">
              <h3 className="text-[#905bf5] font-bold text-2xl md:text-4xl font-lexend"> Portfolio </h3>
              <span className="text-[#905bf5] text-base md:text-lg font-HubotSans font-medium" >(A Modern Showcase of My Work)</span >
              <p className="text-black dark:text-white text-justify text-sm md:text-base mt-2 font-HubotSans">A sleek and interactive portfolio showcasing my skills with smooth animations, engaging UI, and modern design elements. Built with React.js and Tailwind CSS, enhanced by AOS, Framer Motion, and Material UI for a dynamic experience.</p>
              <ul className="flex flex-wrap gap-2 mt-2 text-black dark:text-white">
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Vite </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> React JS </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Tailwind CSS </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Firebase </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Framer Motion </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> AOS </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Lucide </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Material UI </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> SweetAlert2 </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> GitHub </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Vercel </li>
              </ul>
            </div>
            <div className="h-[1px] left-1/2 right-1/4 bg-[#905bf5] absolute top-1/2 hidden sm:block" ></div>
            <div className="w-4 h-4 rounded-full border-[3px] border-[#905bf5] absolute left-1/2 -translate-x-1/2 bg-[#ececec] dark:bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block" ></div>
            <a href="https://masabqurban-portfolio.vercel.app/" className="order-1 md:order-2 flex w-full relative justify-center sm:justify-start" >
              <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 transition-all sm:ml-auto" >
                <img src={portfolio} alt="" className='block dark:block max-w-7xl w-[400px] mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]' />
                <span className="font-lexend flex group-hover:-top-14 ease-jump duration-200 text-white bg-[#905bf5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 transition-all" >Portfolio
                  <img src={link} alt="" className='feather feather-external-link' />
                </span>
              </div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative" >
            <div className="h-[1px] left-1/4 right-1/2 bg-[#44b1e5] absolute top-1/2 hidden sm:block" ></div>
            <div className="w-4 h-4 rounded-full border-[3px] border-[#44b1e5] absolute left-1/2 -translate-x-1/2 bg-[#ececec] dark:bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block" ></div>
            <a href="https://pngtotext.com/" className="flex w-full relative justify-center sm:justify-start" >
              <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200" >
                <img src={laptop2dark} alt="" className='max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]' />
                <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#44b1e5] text-black sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2" >PNG to Text
                  <img src={blacklink} alt="" className='feather feather-external-link' />
                </span>
              </div>
            </a>
            <div className="w-full">
              <h3 className="text-[#44b1e5] font-bold text-2xl md:text-4xl"> PNG to Text </h3>
              <span className="text-[#44b1e5] text-base md:text-lg" >(Image Processor)</span>
              <p className="text-black dark:text-white text-justify text-sm md:text-base mt-2">  Developed a feature-rich web-based platform using PHP, Laravel and Tailwind CSS. Integrated tools for image conversion, compression, and text extraction to enhance file processing efficiency.  </p>
              <ul className="flex flex-wrap gap-2 mt-2 text-black dark:text-white">
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base font-lexend"> PHP Laravel </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base font-lexend"> JavaScript </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base font-lexend"> Tailwind CSS </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base font-lexend"> Figma </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base font-lexend"> MySQL </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base font-lexend"> Tesseract OCR </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> GitHub </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative" >
            <div className="order-2 sm:order-1 w-full">
              <h3 className="text-[#05cafa] font-bold text-2xl md:text-4xl"> Snow Dream Studios </h3>
              <span className="text-[#05cafa] text-base md:text-lg" >(Company's Website)</span>
              <p className="text-black dark:text-white text-justify text-sm md:text-base mt-2"> Snow Dream Studios is a Swiss-based digital studio blending cutting-edge tech with stunning design. Built with Next.js, Tailwind CSS, Framer Motion, and JavaScript, and hosted on Vercel, it delivers a visually rich, interactive experience. The platform features smooth animations, a modern design, and a comprehensive portfolio, including case studies, services, career opportunities, and team insights. With intuitive design and optimized performance, it sets a new standard for corporate websites. </p>
              <ul className="flex flex-wrap gap-2 mt-2 text-black dark:text-white">
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Next JS</li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Tailwind CSS </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> JavaScript </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Framer Motion </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Figma </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> GitHub </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"> Vercel </li>
              </ul>
            </div>
            <div className="h-[1px] left-1/2 right-1/4 bg-[#05cafa] absolute top-1/2 hidden sm:block" ></div>
            <div className="w-4 h-4 rounded-full border-[3px] border-[#05cafa] absolute left-1/2 -translate-x-1/2 bg-[#ececec] dark:bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block" ></div>
            <a href="https://snowdreamstudios.com/" className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start" >
              <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto" >
                <img src={laptop3} alt="" className='max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'/>
                <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#05cafa] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2" >Snow Dream Studios
                <img src={blacklink} alt="" className='feather feather-external-link'/>
                </span>
              </div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative" >
            <div className="h-[1px] left-1/4 right-1/2 bg-[#114f7d] absolute top-1/2 hidden sm:block" ></div>
            <div className="w-4 h-4 rounded-full border-[3px] border-[#114f7d] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block" ></div>
            <a href="https://estorefoam.co.uk/" className="flex w-full relative justify-center sm:justify-start" >
              <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200" >
                <img src={laptop4} alt="" className='max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]'/>
                <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#114f7d] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2" >Pioneer Digital
                <img src={link} alt="" className='feather feather-external-link'/>
                </span>
              </div>
            </a>
            <div className="w-full">
              <h3 className="text-[#114f7d] font-bold text-2xl md:text-4xl"> Estorefoam </h3>
              <span className="text-[#114f7d] text-base md:text-lg" >(E-Commerce Platform)</span >
              <p className="text-black dark:text-white text-justify text-sm md:text-base mt-2"> Estorefoam, the UK’s largest online foam supplier since 2000, has a revamped e-commerce platform built with PHP Laravel and Tailwind CSS. The website offers custom foam visualization, allowing users to input measurements and see a visual representation of their foam. With over 25 years of expertise, it provides high-quality foam materials, including polyurethane and polyethylene, cut to any shape or size. Catering to upholsterers, crafters, and more, the platform combines modern design, functionality, and ease of use for an exceptional shopping experience. </p>
              <ul className="flex flex-wrap gap-2 mt-2 text-black dark:text-white">
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base" > Laravel </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base" > Tailwind CSS </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base" > JavaScript </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base" > Figma </li>
                <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base" > GitHub </li>
              </ul>
            </div>
          </div>

          <div className="w-[2px] hidden sm:block bg-[#1f2667e6] dark:bg-[#1595b6] absolute top-0 bottom-0 left-1/2 -translate-x-1/2" ></div>
        </section>

        <section className="max-w-screen-xl mx-auto pb-12">
          <h2 className="font-lexend text-3xl sm:text-[40px] bg-[#ececec] dark:bg-[#111] sm:w-max relative z-10 font-bold px-4 py-4 mx-auto text-center text-[#1f2667e6] dark:text-[#1595b6] sm:border-2 border-[#1f2667e6] dark:border-[#1595b6] rounded-md" > What my clients are saying? </h2>
          <div className="swiper mySwiper !py-14">
            <div className="swiper-wrapper items-center">

              <div className="swiper-slide px-4">
                <div className="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab active:cursor-grabbing" >
                  <img src={noman} alt="testimonial 3" className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]" />
                  <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative" >
                    <p className="text-black dark:text-white font-Figtree font-medium text-sm md:text-base mb-2"> “Masab is an exceptional developer! His attention to detail and problem-solving skills made our collaboration smooth. He delivers clean, optimized code and always meets deadlines. Highly recommended!” </p>
                    <h2 className="font-lexend text-right text-[#1f2667e6] dark:text-[#1595b6] font-bold text-2xl md:text-4xl" > Noman Tariq </h2>
                    <h5 className="font-HubotSans font-medium text-right text-[#1f2667e6] dark:text-[#1595b6] text-base md:text-lg"> Flutter App Developer </h5>
                  </div>
                </div>
              </div>

              <div className="swiper-slide px-4">
                <div className="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab" >
                  <img src={usermale} alt="testimonial 3" className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]" />
                  <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative" >
                    <p className="text-black dark:text-white font-Figtree font-medium text-sm md:text-base mb-2"> “Working with Masab was a great experience. His expertise in front-end development, particularly with React and Tailwind CSS, helped streamline our project's UI/UX. A truly skilled professional!” </p>
                    <h2 className="font-lexend text-right text-[#1f2667e6] dark:text-[#1595b6] font-bold text-2xl md:text-4xl" > Umair Javed </h2>
                    <h5 className="font-HubotSans font-medium text-right text-[#1f2667e6] dark:text-[#1595b6] text-base md:text-lg"> Angular Developer </h5>
                  </div>
                </div>
              </div>

              <div className="swiper-slide px-4">
                <div className="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab" >
                  <img src={taha} alt="testimonial 3" className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]" />
                  <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative" >
                    <p className="text-black dark:text-white font-Figtree font-medium text-sm md:text-base mb-2"> “Masab’s ability to integrate modern web technologies into our project was impressive. He writes efficient, scalable code and is always willing to go the extra mile. Looking forward to working with him again!” </p>
                    <h2 className="font-lexend text-right text-[#1f2667e6] dark:text-[#1595b6] font-bold text-2xl md:text-4xl" > Taha Umer </h2>
                    <h5 className="font-HubotSans font-medium text-right text-[#1f2667e6] dark:text-[#1595b6] text-base md:text-lg"> MERN Stack Developer </h5>
                  </div>
                </div>
              </div>

              <div className="swiper-slide px-4">
                <div className="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab" >
                  <img src={userfemale} alt="testimonial 3" className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]" />
                  <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative" >
                    <p className="text-black dark:text-white font-Figtree text-sm md:text-base mb-2"> “Masab understands the importance of design and functionality. His implementation of animations and interactive UI elements brought my designs to life beautifully. A pleasure to work with!” </p>
                    <h2 className="font-lexend text-right text-[#1f2667e6] dark:text-[#1595b6] font-bold text-2xl md:text-4xl" > Afeera Abid</h2>
                    <h5 className="font-HubotSans font-medium text-right text-[#1f2667e6] dark:text-[#1595b6] text-base md:text-lg"> Graphic Designer </h5>
                  </div>
                </div>
              </div>

              <div className="swiper-slide px-4">
                <div className="flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab" >
                  <img src={userfemale} alt="testimonial 3" className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]" />
                  <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative" >
                    <p className="text-black dark:text-white font-Figtree text-sm md:text-base mb-2"> “Masab’s expertise in React and Framer Motion is outstanding. His keen eye for UI/UX and structured coding approach make him a great asset to any project. Highly recommended!” </p>
                    <h2 className="font-lexend text-right text-[#1f2667e6] dark:text-[#1595b6] font-bold text-2xl md:text-4xl" > Hafsa Arshad </h2>
                    <h5 className="font-HubotSans font-medium text-right text-[#1f2667e6] dark:text-[#1595b6] text-base md:text-lg"> Front-End Developer </h5>
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
          <h2 className="font-lexend text-3xl sm:text-[40px] bg-[#ececec] dark:bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1f2667e6] dark:text-[#1595b6] sm:border-2 border-[#1f2667e6] dark:border-[#1595b6] rounded-md">
            Let's Connect
          </h2>
          <div className="font-lexend flex flex-col md:flex-row items-center mt-10">
            <div className="w-full mr-5">
              <img src={contactme} alt="connect" />
            </div>
            <form className="w-full" name="contactUS">
              <Input label="Name" type="text" />
              <Input label="Email" type="email" />
              <Input label="Message" type="textarea" />
              {/* <button type="submit" className="w-full text-white bg-[#1595b6] hover:bg-[#1280a4] focus:ring-4 focus:ring-[#4489a0] font-lexend font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none" >
                Send
              </button> */}
              <RippleButton dynamicText="Send" type="submit" dynamicClasses="bg-[#1f2667e6] dark:bg-[#1595b6] hover:bg-[#36409e] dark:hover:bg-[#1280a4] cursor-pointer rounded-lg" />
            </form>
          </div>
        </section>

        <footer className="flex flex-col items-center pb-20">
          <p className="text-xs text-black dark:text-gray-300 font-lexend font-semibold">Masab Qurban © 2025</p>
          <div href='#home' onClick={scrollToTop} className="my-4 cursor-pointer "> <img src={blueLogoM} alt="" className='w-14 h-14' /> </div>
          <SocialMedia />
        </footer>
      </div>
    </>
  )
}

export default App
