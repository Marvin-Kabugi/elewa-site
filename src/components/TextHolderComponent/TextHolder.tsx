// TextHolder.tsx
// This file defines the TextHolder component, which serves as a container for displaying heading text and optional children elements.
// It can be used across the application to display primary and secondary text content in a vertically and horizontally centered layout.
// The component is styled using the TextHolder.css stylesheet.

import React from "react";
import './TextHolder.css'

/**
 * Interface for defining the structure of props expected by the TextHolder component.
 * 
 * @property {string} heading - The text content for the primary heading element.
 * @property {React.ReactNode} children - Optional children elements that can be passed to the component for additional content.
 */
interface Props {
    heading: string;
    children?: React.ReactNode;
}

/**
 * The TextHolder functional component.
 * It renders a section with a primary heading and optional additional content, centered both vertically and horizontally.
 * This component is designed to serve as a generic text container that can be reused in various parts of an application.
 *
 * @param {Props} props - The props object destructured to extract `heading` and `children`.
 * @returns {JSX.Element} The JSX code for rendering the TextHolder component.
 */
export default function TextHolder({heading, children}: Props): JSX.Element {
    // The main JSX returned by the component, consisting of a main section element with two spans.
    // The first span (`span1`) is for displaying the heading, and the second span (`span2`) is for additional content that is passed as children.
    return (
        <>
            <section className="text-main">
                <span className="span1">{heading}</span>
                <span className="span2">{children}</span>
            </section>
        </>
    );
}
