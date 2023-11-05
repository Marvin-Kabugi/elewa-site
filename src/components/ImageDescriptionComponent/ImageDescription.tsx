// ImageDescription.tsx
// This file defines the ImageDescription component, which alternates between displaying 
// an image and its associated description based on the provided index. It is styled using 
// the ImageDescription.css stylesheet.

import React from 'react';
import './ImageDescription.css';

/**
 * Props interface for ImageDescription component.
 * @property {string} title - The title of the image.
 * @property {string} imageUrl - The source URL of the image.
 * @property {React.ReactNode} [children] - Optional children components to be rendered.
 * @property {string} description - A text description of the image.
 * @property {number} index - The index used to determine the layout order.
 * @property {string} [cssClass] - Optional CSS class for additional styling.
 */
interface Props {
  title: string;
  imageUrl: string;
  children?: React.ReactNode;
  description: string;
  index: number;
  cssClass?: string;
}

/**
 * ImageDescription functional component.
 * Renders an image with a title and description. The layout alternates depending on 
 * the parity of the index prop, demonstrating the use of conditional rendering and TypeScript 
 * for prop type validation within functional component structures.
 *
 * @param {Props} props - Destructured props object of the ImageDescription component.
 * @returns {JSX.Element} The JSX code for rendering the ImageDescription component.
 */
export default function ImageDescription({ children, imageUrl, title, description, index, cssClass }: Props): JSX.Element {
  // Construct CSS class string with a conditional check for additional provided class.
  const imageDescriptionClass = cssClass ? `image-description-container ${cssClass}` : 'image-description-container';
  
  // Create an accessible description of the image as alt text.
  const altText = `Description of ${title}`;

  // JSX for the image description section.
  const imageDescription = (
    <div className="image-description">
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );

  // JSX for the image element section.
  const imageElement = (
    <div className="image-element">
      <img src={imageUrl} alt={altText} />
    </div>
  );

  // Conditional rendering based on the index to determine the order of image and description.
  return (
    <div className={imageDescriptionClass}>
      {index % 2 === 0 ? (
        <>
          {imageDescription}
          {imageElement}
        </>
      ) : (
        <>
          {imageElement}
          {imageDescription}
        </>
      )}
    </div>
  );
}
