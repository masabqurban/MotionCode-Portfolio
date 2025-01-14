import React from 'react';
import styled from 'styled-components';

const Input = ({ label, type = 'text' }) => {
  const isTextarea = type === 'textarea';

  return (
    <StyledWrapper>
      <div className="font-HubotSans font-medium form-control">
        {isTextarea ? (
          <textarea required placeholder=" " />
        ) : (
          <input type={type} required placeholder=" " />
        )}
        <label>
          {label.split('').map((char, index) => (
            <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
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
    border: 0;
    border-bottom: 2px #1788ae solid;
    display: block;
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    color: #fff;
    resize: none; /* Prevent textarea resizing */
    overflow: hidden; /* Hide scrollbars while preserving scrolling */
    white-space: pre-wrap; /* Ensure text wraps properly */
  }

  .form-control input:focus,
  .form-control input:not(:placeholder-shown),
  .form-control textarea:focus,
  .form-control textarea:not(:placeholder-shown) {
    outline: 0;
    border-bottom-color: lightblue;
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
    color: #1788ae;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .form-control input:focus + label span,
  .form-control input:not(:placeholder-shown) + label span,
  .form-control textarea:focus + label span,
  .form-control textarea:not(:placeholder-shown) + label span {
    color: lightblue;
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
