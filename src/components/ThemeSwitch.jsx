import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../hooks/ThemeContext';

const Switch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledWrapper>
      <button
        onClick={toggleTheme}
        className={`switch ${theme === 'dark' ? 'dark' : 'light'}`}
      >
        {theme === 'dark' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFD700"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M12 3a1 1 0 110 2 7 7 0 107 7 1 1 0 112 0 9 9 0 11-9-9z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M17.75 7.75a1 1 0 01-1.41 0L12 3.66l-4.34 4.09a1 1 0 01-1.41-1.41l5-4.73a1 1 0 011.41 0l5 4.73a1 1 0 010 1.41z" />
          </svg>
        )}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: var(--toggle-bg, #e2e2e2);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
  }

  .switch.dark {
    background-color: #333;
    box-shadow: 0 0 15px #ffca28;
  }

  .switch.light {
    background-color: #ffd700;
    box-shadow: 0 0 15px #333;
  }
`;

export default Switch;
