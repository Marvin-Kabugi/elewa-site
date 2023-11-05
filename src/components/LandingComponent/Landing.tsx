// Landing.tsx
// This file defines the Landing component, which serves as a versatile banner or hero section in a web application.
// It is designed to display an image, a heading, and a subheading, and can optionally include additional children components.
// The component is styled using the Landing.css stylesheet.

import React from "react";
import './Landing.css'

/**
 * Interface for defining the structure of props expected by the Landing component.
 * 
 * @property {string} imageUrl - The URL of the image to be displayed within the Landing component.
 * @property {string} h2String - The text content for the secondary heading (h2) element.
 * @property {string} h1String - The text content for the primary heading (h1) element.
 * @property {React.ReactNode} children - Optional children elements that can be passed to the component for additional content.
 */
interface Props {
    imageUrl: string;
    h2String: string;
    h1String: string;
    children?: React.ReactNode;
}

/**
 * The Landing functional component.
 * It renders a section typically used at the top of a webpage as a hero banner. This includes an image,
 * a primary heading, a secondary heading, and any optional children components that might be passed in for additional content.
 *
 * @param {Props} props - The props object destructured to extract `imageUrl`, `h2String`, `h1String`, and `children`.
 * @returns {JSX.Element} The JSX code for rendering the Landing component.
 */
export default function Landing({imageUrl, h2String, h1String, children}: Props): JSX.Element {
    // Class names defined for the h2 and h1 elements, allowing for consistent styling.
    // These could be customized or extended to support dynamic styling if needed.
    let h2Class: string = 'h2';
    let h1Class: string = 'h1';

    // The main JSX returned by the component, consisting of a container div with an image, two headings, and optional children.
    // The image's alt attribute is left empty, which is not recommended for production. It should be filled with a descriptive text for accessibility.
    return (
        <div className="container">
            <img src={imageUrl} alt="" />
            <h2 className={h2Class}>{h2String}</h2>
            <h1 className={h1Class}>{h1String}</h1>
            {children}
        </div>
    );
}
