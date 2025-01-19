import React from 'react';
import Image from 'next/image';
import arrowdown from '@public/services/scroll-down-arrow.svg';

const ScrollDown = ({ lang = 'en' }) => {
  const handleScroll = () => {
    const targetScroll = window.scrollY + window.innerHeight;
    const duration = 600;
    const startTime = performance.now();

    const smoothScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
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

  return (
    <div className="flex flex-col items-center justify-center gap-2 group cursor-pointer w-fit" role="button" aria-label="Scroll down" onClick={handleScroll} >
      <div className="h-[52px] w-[34.5px] flex justify-center items-start py-2 border-2 border-white rounded-full">
        <Image src={arrowdown} alt="arrow down" width={11} height={11} className="translate-y-0 group-hover:translate-y-4 transition-all duration-300" />
      </div>
      <p className="text-white text-xs font-normal group-hover:text-primary transition-all" suppressHydrationWarning>
        {{
          en: 'Scroll Down',
          fr: 'Faites Défiler vers le Bas',
          it: 'Scorri verso il Basso',
        }[lang]}
      </p>
    </div>
  );
};

export default ScrollDown;
