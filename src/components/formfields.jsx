import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import ThemeContext from '../hooks/ThemeContext';

const Input = ({ label, type = 'text' }) => {
  const { theme } = useContext(ThemeContext);
  const isTextarea = type === 'textarea';

  return (
    <StyledWrapper>
      <div className="font-HubotSans font-medium form-control">
        {isTextarea ? (
          <textarea
            required
            className="bg-transparent text-black dark:text-white border-b-2 border-[#1f2667e6] dark:border-[#1788ae] focus:border-[#1788ae] dark:focus:border-[#add8e6] focus:outline-none"
            placeholder=" "
          />
        ) : (
          <input
            type={type}
            required
            className="bg-transparent text-black dark:text-white border-b-2 border-[#1f2667e6] dark:border-[#1788ae] focus:border-[#1788ae] dark:focus:border-[#add8e6] focus:outline-none"
            placeholder=" "
          />
        )}
        <label>
          {label.split('').map((char, index) => (
            <span
              key={index}
              className="text-[#1f2667e6] dark:text-[#1788ae] transition-all duration-300 ease-in-out"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {char}
            </span>
          ))}
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-control {
    position: relative;
    margin: 20px 0 40px;
    width: 100%;
  }

  .form-control input,
  .form-control textarea {
    background-color: transparent;
    display: block;
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    resize: none; /* Prevent textarea resizing */
    overflow: hidden; /* Hide scrollbars while preserving scrolling */
    white-space: pre-wrap; /* Ensure text wraps properly */
  }

  .form-control label {
    position: absolute;
    top: 15px;
    left: 0;
    pointer-events: none;
  }

  .form-control label span {
    display: inline-block;
    font-size: 18px;
    min-width: 5px;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .form-control input:focus + label span,
  .form-control input:not(:placeholder-shown) + label span,
  .form-control textarea:focus + label span,
  .form-control textarea:not(:placeholder-shown) + label span {
    transform: translateY(-30px);
  }

  /* Completely hide scrollbars */
  .form-control textarea {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }

  .form-control textarea::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Edge */
  }
`;

export default Input;
