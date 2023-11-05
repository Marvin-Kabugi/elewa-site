// Project.tsx
// This component is responsible for rendering a single project element with an image.
// It is used within a parent component that handles a collection of projects.

import React from 'react';
import './Project.css'

/**
 * Props definition for the Project component.
 * @property {string} imageUrl - The URL of the image to display for the project.
 */
interface Props {
    imageUrl: string;
}

/**
 * Project component rendering a single project's image.
 * 
 * @param {Props} props - The props containing imageUrl for the project image.
 * @returns {JSX.Element} A div wrapping an img tag for the project.
 */
export default function Project({ imageUrl }: Props): JSX.Element {
    return (
        <div className='project-element'>
            <img src={imageUrl} alt="Project display" />
        </div>
    );
}
