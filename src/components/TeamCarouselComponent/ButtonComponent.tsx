// Button.tsx
// Defines a Button component that renders a pair of styled buttons to be used as action triggers.

import React from 'react';

/**
 * Defines the props structure for the Button component.
 * @property {Function} cbFunction - A callback function to be executed when the button is clicked.
 */
interface Props {
  cbFunction: (increase: number) => void;
}

// Inline styles for the button element.
const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  border: '2px solid white',
  borderRadius: '50%',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  outline: 'none',
  margin: '0 5px',
};

// Inline styles for the arrow icon within the button.
const arrowStyle = {
  color: 'white',
  fontSize: '24px',
  lineHeight: '1',
};

/**
 * Button functional component.
 * Renders a pair of buttons that perform actions based on a provided callback function.
 *
 * @param {Props} props - The destructured props object containing `cbFunction`.
 * @returns {JSX.Element} A fragment containing two styled button elements with arrow icons.
 */
export default function Button({ cbFunction }: Props): JSX.Element {
  // Handler for the left arrow button click, logging the action and invoking the callback with -1.
  const handleLeftClick = () => {
    cbFunction(-1);
  };

  // Handler for the right arrow button click, directly invoking the callback with 1.
  const handleRightClick = () => cbFunction(1);

  return (
    <>
      {/* Left arrow button */}
      <button onClick={handleLeftClick} style={buttonStyle}>
        <span style={arrowStyle}>←</span>
      </button>        
      {/* Right arrow button */}
      <button onClick={handleRightClick} style={buttonStyle}>
        <span style={arrowStyle}>→</span>
      </button>
    </>
  );
}
