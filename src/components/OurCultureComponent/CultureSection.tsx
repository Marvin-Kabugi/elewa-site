// CultureSection.tsx
// This file defines the CultureSection component that aggregates individual culture details
// and presents them as a section within a web application. It utilizes CultureDetail
// components to render each piece of culture-related data.

import React from 'react';
import CultureDetail from "./CultureDetail";
import { AboutCultureData } from "../../data";

/**
 * The CultureSection functional component.
 * It is responsible for mapping the AboutCultureData to individual CultureDetail components
 * to present the details of the company culture in an organized section.
 *
 * @returns {JSX.Element} A div containing a list of CultureDetail components.
 */
export default function CultureSection(): JSX.Element {
    // Mapping the data to individual CultureDetail components.
    // Each item's `heading` attribute is used as the key for React's rendering algorithm.
    const toRender = AboutCultureData.map((element) => (
        <CultureDetail 
            key={element.heading}
            description={element.description1}
            heading={element.heading}
            imageUrl={element.imageUrl}
        />
    ));

    // Returns a JSX element that renders the collection of CultureDetail components
    // contained within a div with a class of "culture-detail".
    return (
        <div className="culture-detail">
            {toRender}
        </div>
    );
}
