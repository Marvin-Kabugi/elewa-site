// Footer.tsx
// This file contains the Footer component which is responsible for rendering the footer section of a webpage.
// It includes headings, contact information, navigation links, and social media icons.

import React, { useEffect, useState } from 'react';
import './Footer.css';
import ChildElement from '../ChildComponent/ChildElement';

/**
 * Type definition for the headings used within the Footer component.
 * @typedef {Object} Heading
 * @property {string} heading - The title for each footer section.
 * @property {string[]} xnumber - The content under each heading, could be contact info or links.
 */
interface Heading {
    heading: string;
    xnumber: string[];
}

/**
 * Footer functional component.
 * It displays the footer content which includes the headings, addresses, and social media links.
 * 
 * @returns {JSX.Element} The JSX code for rendering the Footer section of the webpage.
 */
export default function Footer(): JSX.Element {
    // State to hold the array of headings and their related content.
    const [headings, setFooterHeadings] = useState<Heading[]>([]);

    // Image URLs for the company logo and social media icons.
    let imageUrl: string = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg"
    let facebookUrl: string = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/facebook_lhhwk2.svg"
    let instagramUrl: string = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690295/elewa-group-website/Icons/SVG/_Social/instagram_x8ujcq.svg"
    let linkedInUrl: string = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/linkedin_x8smhm.svg"

    // useEffect to set the headings and content for the footer when the component mounts.
    useEffect(() => {
        // Populating the headings state with the footer data.
        setFooterHeadings([
            { heading: 'Contact', xnumber: ['T +254 78 92 27 755', 'E info@elewa.ke'] },
            { heading: 'Navigation', xnumber: ['About us', 'Social impact', 'Invest', 'News', 'Contact'] },
            { heading: 'Brands', xnumber: ['Elewa', 'Italanta', 'Venture labs'] },
            { heading: 'Privacy', xnumber: ['Terms and conditions', 'Cookie preferences'] },
        ]);
    }, []);

    // Process the headings data to create an array of ReactNode elements to be rendered.
    let x: React.ReactNode[] = headings.map((heading) => {
        const pTags: React.ReactNode[] = [];
        // Loop to create paragraphs and optional line breaks for each item under the heading.
        for (let i = 0; i < heading.xnumber.length; i++) {
            pTags.push(
                <React.Fragment key={i}>
                    <p>{heading.xnumber[i]}</p>
                    {i < heading.xnumber.length - 1 && <br />}
                </React.Fragment>
            );
        }
        // Adding the heading title to the beginning of the array.
        pTags.unshift(<><h4>{heading.heading}</h4></>)
        return pTags;
    });

    // Render the footer content, including the headings, contact info, and social media links.
    return (
        <div className='container-2'>
            <div className='footer-link-container'>
                {/* Static content for the headquarters address. */}
                <ChildElement >
                    <h4>Headquarters</h4>
                    <p>
                        The Promenade, 19 General
                        <br />
                        Mathenge Rd
                        <br />
                        Nairobi, Kenya
                    </p>
                </ChildElement>
                {/* Dynamic content generated from the headings state. */}
                {headings.map((heading, index) => (
                    <ChildElement key={heading.heading}>
                        {x[index]}
                    </ChildElement>
                ))}
            </div>
            <div className='footer-link-image-container'>
                {/* Company logo */}
                <div>
                    <img src={imageUrl} alt="Elewa Logo" />
                </div>
                {/* Social media icons */}
                <div className='footer-link-images'>
                    <img src={facebookUrl} alt="Facebook" />
                    <img src={instagramUrl} alt="Instagram" />
                    <img src={linkedInUrl} alt="LinkedIn" />
                </div>
            </div>
        </div>
    );
}
