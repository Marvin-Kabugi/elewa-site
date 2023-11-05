// CultureHeading.tsx
// This file defines the CultureHeading component which is responsible for rendering the heading and description for the "Our Culture & Values" section.

import React from 'react'; // Importing React library for JSX support
import './CultureHeading.css'; // Importing stylesheet for the CultureHeading component

/**
 * CultureHeading functional component
 * This component displays a static heading and description text related to the company's culture and values.
 *
 * @returns {JSX.Element} A JSX Element that contains a heading and a paragraph with predefined content.
 */
export default function CultureHeading(): JSX.Element {
    // Heading content string
    const heading: string = "Our Culture & Values";
    
    // Description content string
    const description: string = "Our culture, CODE-(T), defines us. It protects and guides us to success. It keeps our team and management accountable to itself, its objective, and our long-term mission.";

    // JSX rendered by the component. The 'culture-heading' and 'culture-description' class names are used for applying styles from the CSS file.
    return (
        <>  
            <h1 className="culture-heading">{heading}</h1>
            <p className="culture-description">{description}</p>
        </>
    );
}
