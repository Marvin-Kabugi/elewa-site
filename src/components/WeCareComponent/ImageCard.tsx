// ImageCard.tsx
// This file defines the ImageCard component, which is a reusable UI card element for displaying an image followed by a heading and a description.

import React from 'react';

/**
 * Props interface defining the structure and types of the expected props for the ImageCard component.
 * 
 * @property {string} imageUrl - The source URL for the image to be displayed on the card.
 * @property {string} heading - The heading text to be displayed below the image.
 * @property {string} description - The descriptive text that explains the heading or provides more information.
 */
interface Props {
    imageUrl: string;
    heading: string;
    description: string;
}

/**
 * The ImageCard functional component.
 * 
 * @param {Props} props - The props object destructured to extract `imageUrl`, `heading`, and `description`.
 * @returns {JSX.Element} The JSX code for rendering the ImageCard component.
 */
export default function ImageCard({imageUrl, heading, description}: Props): JSX.Element {
    return (
        <div className="about-card">
            <img src={imageUrl} alt={heading} />
            <h3>{heading}</h3>
            <p>{description}</p>
        </div>
    );
}
