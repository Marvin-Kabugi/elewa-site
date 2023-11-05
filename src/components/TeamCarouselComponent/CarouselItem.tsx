// CarouselItem.tsx
// This component is used to display an item within a carousel.

import React from 'react';
import './CarouselItem.css';

/**
 * Props for the CarouselItem component.
 * @property {string} imageUrl - The URL of the image to be displayed.
 * @property {string} name - The name of the person.
 * @property {string} role - The person's role or title.
 */
interface Props {
    imageUrl: string;
    name: string;
    role: string;
}

/**
 * CarouselItem functional component.
 * Renders an image, name, and role for an individual, often used in a carousel of team members or testimonials.
 *
 * @param {Props} props - The props containing imageUrl, name, and role.
 * @returns {JSX.Element} A div that represents a single item in a carousel.
 */
export default function CarouselItem({ imageUrl, name, role }: Props): JSX.Element {
    return (
        <div className='carousel-item'>
            <img src={imageUrl} alt={name} />
            <p className='first-p'>{name}</p>
            <p className='second-p'>{role}</p>
            <div>
                {/* LinkedIn SVG Icon */}
                <svg width="15" height="15" className="svg-inline--fa fa-linkedin-in" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ color: '#fff' }}>
                    {/* Path for the LinkedIn logo */}
                    <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 1 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
            </div>
        </div>
    );
}
