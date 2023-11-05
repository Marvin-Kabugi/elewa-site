// WeCare.tsx
// It combines a main header with additional text content from the Paragraph component
// and a set of image cards from the ImageCards component.
// The component is styled using the WeCare.css stylesheet.

import React from 'react';
import Paragraph from './ParagraphComponent';
import ImageCards from './ImageCardComponents';
import './WeCare.css'; 

/**
 * The WeCare functional component.
 * This component is designed to serve as a section on a webpage that showcases the company's care
 * for its customers, community, or services.
 *
 * @returns {JSX.Element} The JSX code for rendering the WeCare component.
 */
export default function WeCare(): JSX.Element {
    const mainHeader: string = "We Care!";

    // The component returns a parent container that encapsulates the WeCare section,
    return (
        <div className="we-care-parent-container">
            <div className="we-care">
                <div className='content-container'>
                    <h2>{mainHeader}</h2> {/* The main heading displayed at the top of the section. */}
                    <Paragraph /> {/* A call to the Paragraph component that renders text content. */}
                    <ImageCards /> {/* The ImageCards component renders a series of image-based cards. */}
                </div>  
            </div>
        </div>
    );
}
