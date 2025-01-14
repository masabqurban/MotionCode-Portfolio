import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import musiccalm from '../assets/musiccalm.mp3';

const Switch = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Start with audio paused
  const audioRef = useRef(new Audio(musiccalm)); // Create Audio object

  // Ensure audio starts paused
  useEffect(() => {
    audioRef.current.loop = true; // Enable looping
    audioRef.current.pause(); // Start paused
  }, []);

  const handleToggle = (checked) => {
    setIsPlaying(checked);
    if (checked) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <StyledWrapper>
      <div>
        <input
          id="checkboxInput"
          checked={isPlaying}
          type="checkbox"
          onChange={(e) => handleToggle(e.target.checked)}
        />
        <label className="toggleSwitch" htmlFor="checkboxInput">
          <div className={`icon ${isPlaying ? 'speaker' : 'mute-speaker bg-[#660000] rounded-full'}`}>
            {isPlaying ? (
              <svg viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
                <path
                  style={{
                    stroke: '#fff',
                    strokeWidth: 5,
                    strokeLinejoin: 'round',
                    fill: '#fff',
                  }}
                  d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
                />
                <path
                  style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeWidth: 5,
                    strokeLinecap: 'round',
                  }}
                  d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
                />
              </svg>
            ) : (
              <svg strokeWidth={5} stroke="#fff" viewBox="0 0 75 75">
                <path
                  strokeLinejoin="round"
                  fill="#fff"
                  d="m39,14-17,15H6V48H22l17,15z"
                />
                <path
                  strokeLinecap="round"
                  fill="#fff"
                  d="m49,26 20,24m0-24-20,24"
                />
              </svg>
            )}
          </div>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggleSwitch {
    width: 44px;
    height: 44px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(39, 39, 39);
    border-radius: 50%;
    cursor: pointer;
    transition-duration: 0.3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
  }

  #checkboxInput {
    display: none;
  }

  .icon {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.3s;
  }

  .icon svg {
    width: 18px;
  }

  .toggleSwitch:hover {
    background-color: rgb(61, 61, 61);
  }

  #checkboxInput:active + .toggleSwitch {
    transform: scale(0.7);
  }
`;

export default Switch;
