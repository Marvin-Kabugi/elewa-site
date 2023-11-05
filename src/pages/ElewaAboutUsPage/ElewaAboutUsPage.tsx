// AboutUsPage.tsx
// This file contains the AboutUsPage component, which serves as the About Us page for the Elewa web application.
// The page brings together various components like Landing, WeCare, TeamCarousel, OurCulture, MapContent,
// and TextHolder to construct a complete view of the company's background, values, team, and impact.

import { useEffect, useState } from 'react';
import Landing from '../../components/LandingComponent/Landing';
import Footer from '../../components/FooterComponent/Footer';
import TextHolder from '../../components/TextHolderComponent/TextHolder';
import WeCare from '../../components/WeCareComponent/WeCare';
import TeamCarousel from '../../components/TeamCarouselComponent/TeamCarousel';
import OurCulture from '../../components/OurCultureComponent/OurCulture';
import MapContent from '../../components/MapComponent/MapContent';
import { LandingData } from '../../data';
import './ElewaAboutUsPage.css'

/**
 * The AboutUsPage functional component.
 * It composes the About Us page by initializing state variables for the Landing component
 * and assembling various sections of the page that showcase different aspects of the company.
 * It also manages the state for dynamic data which may be fetched or derived in a real-world application.
 *
 * @returns {JSX.Element} The JSX code for rendering the About Us page.
 */
export default function AboutUsPage(){
    // State hooks for managing dynamic content in the Landing component
    const [img, setImg] = useState<string>(''); // State for the image URL for the Landing component
    const [h1, setH1] = useState<string>('');   // State for the primary heading for the Landing component
    const [h2, setH2] = useState<string>('');   // State for the secondary heading for the Landing component

    // Static text content for the page
    const pTag: string = "*SERIOUS WHEN IT MATTERS"; // Text content for a paragraph tag
    const spanOne: string = "Learn more about";      // Text content for a span element
    const aLink: string = "Elewa's social impact.";  // Text content for an anchor link

    // useEffect hook to simulate fetching data on component mount and setting the state accordingly
    useEffect(() => {
        // Simulated data fetch and state update
        setImg(LandingData.AboutLandingData.imageUrl);    // Sets the image URL from the LandingData
        setH1(LandingData.AboutLandingData.h1Header);     // Sets the primary heading from the LandingData
        setH2(LandingData.AboutLandingData.h2Header);     // Sets the secondary heading from the LandingData
    }, []); // Empty dependency array means this effect runs once on component mount

    // Render method returns the composition of the About Us page with all the sections
    return (
        <>
            <Landing imageUrl={img} h1String={h1} h2String={h2}>
                <p className='p-tag'>{pTag}</p>  {/* Child component for the Landing, displaying a styled paragraph */}
            </Landing>
            <WeCare />  {/* Section component that highlights the company's care for its community or values* /}
            <TeamCarousel />  {/* Carousel component showcasing the team members */}
            <OurCulture />  {/* Component that represents the company's culture */}
            <MapContent />  {/* Component displaying a map or geographical information */}
            <TextHolder heading={spanOne}>  {/* Reusable component for text display, used here for additional links or info */}
                <span>
                    <a className="span-link" href="">{aLink}</a>  {/* Anchor link that would typically lead to more information */} 
                </span>
            </TextHolder>
            <Footer />  {/* Footer component common across the website */}
        </>
    )
}
