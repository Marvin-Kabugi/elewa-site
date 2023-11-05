// Paragraph.tsx
// This file contains the Paragraph component, which is responsible for rendering text content on a page.
// The component fetches paragraphs from a data source defined in "../../data" and displays them within a styled div.

import React from 'react';
import { Paragraph1, Paragraph2 } from "../../data";

/**
 * Paragraph functional component.
 * It renders two paragraphs of text content, utilizing data imported from "../../data".
 *
 * @returns {JSX.Element} The JSX code for rendering the Paragraph component with two <p> elements.
 */
export default function Paragraph(): JSX.Element {
    // Returning a div with two paragraph elements, each containing text content from the imported data.
    return (
        <div className="paragraph-body">
            <p>{Paragraph1}</p>
            <p>{Paragraph2}</p>
        </div>
    );
}
