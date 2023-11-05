// ImageCards.tsx
// This file defines the ImageCards component, which serves as a container for multiple ImageCard components.
// It utilizes data from the AboutImageCardData array to generate a list of ImageCard components, each displaying different content.

import React from 'react';
import ImageCard from "./ImageCard";
import { AboutImageCardData } from "../../data";

/**
 * ImageCards functional component.
 * It maps over the AboutImageCardData array to create a list of ImageCard components with specific data.
 * Each item in the AboutImageCardData provides imageUrl, description, and heading for the ImageCard.
 *
 * @returns {JSX.Element} The JSX code for rendering the ImageCards component, wrapping the generated list of ImageCard components.
 */
export default function ImageCards(): JSX.Element {
    // Mapping the AboutImageCardData to individual ImageCard components.
    const toRender = AboutImageCardData.map((element) => (
        <ImageCard 
            key={element.imageUrl} 
            imageUrl={element.imageUrl} 
            description={element.description1} 
            heading={element.heading}
        />
    ));

    // Rendering the container div with the list of ImageCard components.
    return (
        <div className="about-card-container">
            {toRender}
        </div>
    );
}
