// KeyFigureElement.tsx
// This file defines the KeyFigureElement component, which displays a heading and a description. 
// The heading can be either a string or a number. If it's a string and the last character 
// is distinct, it is wrapped in a <span> for special styling. The component uses the KeyFigureElement.css stylesheet for styling.

import React from "react";
import './KeyFigureElement.css'

/**
 * Props interface for KeyFigureElement component.
 * @property {string | number} heading - The heading content, which can be a string or a number.
 * @property {string} description - The description text below the heading.
 */
interface Props {
    heading: string | number;
    description: string;
}

/**
 * KeyFigureElement functional component.
 * It renders a heading that, if a string, splits the last character to be separately styled. 
 * A description paragraph is also rendered below the heading. This component shows how to handle 
 * conditional content rendering based on prop types in TypeScript.
 *
 * @param {Props} props - Destructured props object for the KeyFigureElement component.
 * @returns {JSX.Element} The JSX code for rendering the KeyFigureElement component.
 */
export default function KeyFigureElement({heading, description}: Props): JSX.Element {
    /**
     * Determines how to render the heading based on whether it's a string or a number.
     * If it's a string, the last character is wrapped in a <span> for special styling.
     * If it's a number, it's displayed as-is.
     *
     * @type {React.ReactNode} The content to render, containing the heading and description.
     */
    let toRender: React.ReactNode = (typeof(heading) === "string" ? 
                        (
                            // Fragment containing the heading with the last character wrapped in a <span>, and the description paragraph.
                            <>
                                <h1>{heading.slice(0, heading.length - 1)} <span>{heading.slice(-1)}</span></h1>
                                <p>{description}</p>
                            </>
                        ) : 
                        (
                            // Fragment containing the numeric heading and the description paragraph.
                            <>
                                <h1>{heading}</h1>
                                <p>{description}</p>
                            </>
                        ));

    // The returned JSX containing the conditional content wrapped in a container div with a class for styling.
    return (
        <>
            <div className="key-element">
                {toRender}
            </div>
        </>
    )
}
