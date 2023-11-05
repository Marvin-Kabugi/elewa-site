// CultureDetail.tsx
// This component is responsible for rendering a cultural detail card which includes an image, a heading, and a descriptive text.

import React from 'react'; // Importing React from the react package.
import './CultureDetail.css' // Importing the CSS styles specific to this component.

/**
 * Props interface for CultureDetail component
 * @property {string} imageUrl - The source URL for the image to display.
 * @property {string} heading - The heading text for the detail card.
 * @property {string} description - The descriptive text that provides more information about the culture.
 */
interface Props {
  imageUrl: string;
  heading: string;
  description: string;
}

/**
 * CultureDetail functional component
 * It takes imageUrl, heading, and description as props to display a cultural detail card.
 * This could represent a cultural practice, a traditional dish, or any other cultural aspect.
 *
 * @param {Props} props - The destructured props object containing imageUrl, heading, and description.
 * @returns {JSX.Element} - The JSX code for rendering the culture detail card.
 */
export default function CultureDetail({ imageUrl, heading, description }: Props): JSX.Element {
  // Render a container div with an image, a heading (h2), and a paragraph (p) containing the description.
  return (
    <div className='detail-container'>
      {/* Image element with alt text, displaying the cultural image. */}
      <img src={imageUrl} alt="culture" />
      {/* Heading element displaying the title of the cultural detail. */}
      <h2>{heading}</h2>
      {/* Paragraph element displaying the description of the cultural detail. */}
      <p>{description}</p>
    </div>
  );
}
