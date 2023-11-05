// ElewaButton.tsx
// This file defines the ElewaButton component, which renders a button with text 
// and an accompanying right arrow icon. It is styled using the ElewaButton.css stylesheet.

import React from 'react';
import './ElewaButton.css';

/**
 * Props interface for ElewaButton component.
 * @property {string} value - The text to be displayed inside the button.
 */
interface Props {
    value: string;
}

/**
 * ElewaButton functional component.
 * Renders a button-like element composed of text passed via 'value' prop and a right-arrow SVG icon.
 * This component demonstrates the use of TypeScript for prop type validation and functional component structure.
 *
 * @param {Props} props - Destructured props object containing the `value` for the button's display text.
 * @returns {JSX.Element} The JSX code for rendering the ElewaButton component.
 */
export default function ElewaButton({ value }: Props): JSX.Element {
    return (
        // Container div for the ElewaButton component. The 'elewa-button' class is used for styling.
        <div>
            <div className='elewa-button'>
                {/* Span element for displaying the button text. */}
                <span>{value}</span>
                
                {/* Section containing the SVG arrow icon. */}
                <section>
                    {/* SVG element for the right-arrow icon with accessibility attributes. */}
                    <svg
                        id="arrow-right"
                        className="svg-inline--fa fa-arrow-right-long"
                        focusable="false"
                        role="img"
                        viewBox="0 0 512 512"
                    >
                        {/* Path element of the SVG defining the shape of the arrow. */}
                        <path
                            fill="currentColor"
                            d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                        ></path>
                    </svg>
                </section>
            </div>
        </div>
    );
}
