// KeyFigure.tsx
// This file contains the KeyFigure component which serves as a container
// for displaying a collection of KeyFigureElement components. It maps through
// an array of key figure data and renders each one using the KeyFigureElement component.

import React from "react";
import KeyFigureElement from "./KeyFigureElement";
import KeyFigures from "../../data";
import './KeyFigure.css';

/**
 * The KeyFigure functional component is responsible for rendering the key figures section.
 * It generates a list of KeyFigureElement components based on data imported from KeyFigures.
 * 
 * @returns {JSX.Element} A React fragment containing a title and a grid of KeyFigureElement components.
 */
export default function KeyFigure(): JSX.Element {
    const title: string = "Key figures"; // Title for the key figures section
    let keyFiguresToBeDisplayed: React.ReactNode[] = KeyFigures.map((element) => {
        // Maps through the KeyFigures data array to create KeyFigureElement components
        return (
            <KeyFigureElement key={element.heading.toString()} heading={element.heading} description={element.description} />
        );
    });

    return (
        // Fragment containing the entire key figures section
        <>
            <h2 className="figure-title">{title}</h2> {/* Title of the section */}
            <div className="parent-grid">
                {keyFiguresToBeDisplayed} {/* Rendered array of KeyFigureElement components */}
            </div>
        </>
    );
}
