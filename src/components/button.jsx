import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import ThemeContext from '../hooks/ThemeContext';

const Button = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledWrapper>
      <button
        className={`animated-button border-2 border-[#1f2667e6] dark:border-[#1595b6] text-[#1f2667e6] hover:border-[#1f2667e6] dark:text-[#1595b6] bg-transparent`}
      >
        <svg
          viewBox="0 0 24 24"
          className=" fill-[#1f2667e6] dark:fill-[#1595b6] arr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
        <span className="text">About Me</span>
        <span className="circle bg-[#1f2667e6] dark:bg-[#1595b6] border-[#1f2667e6] dark:border-[#1595b6] shadow-black" />
        <svg
          viewBox="0 0 24 24"
          className="fill-[#1f2667e6] dark:fill-[#1595b6] arr-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 16px 36px;
    font-size: 16px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button svg {
    position: absolute;
    width: 24px;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .arr-1 {
    right: 16px;
  }

  .animated-button .arr-2 {
    left: -25%;
  }

  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    color: #fff;
    border-radius: 12px;
  }

  .animated-button:hover .arr-1 {
    right: -25%;
  }

  .animated-button:hover .arr-2 {
    left: 16px;
  }

  .animated-button:hover .text {
    transform: translateX(12px);
  }

  .animated-button:hover svg {
    fill: #fff;
  }

  .animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px #1595b6;
  }

  .animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }
`;

export default Button;
