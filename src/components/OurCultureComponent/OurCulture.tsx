// OurCulture.tsx
// This file defines the OurCulture component that acts as a main container for the culture section of the website.
// It combines the CultureHeading and CultureSection components to present the overall culture and values of the company.

import React from 'react';
import CultureHeading from "./CultureHeading";
import CultureSection from "./CultureSection";
import './OurCulture.css';

/**
 * The OurCulture functional component.
 * This component serves as the container for the culture-related content of the website.
 * It wraps the CultureHeading and CultureSection components to create a cohesive section.
 *
 * @returns {JSX.Element} A div with two child components, CultureHeading and CultureSection, that together represent the company's culture and values.
 */
export default function OurCulture(): JSX.Element {
    return (
        <div className="culture-container">
            <div className="heading-container">
                <CultureHeading />
            </div>
            <CultureSection />
        </div>
    );
}
