// InvestorPage.tsx
// This file contains the InvestorPage component, which serves as the Investor Information page.

import { useEffect, useState } from 'react';
import Landing from '../../components/LandingComponent/Landing';
import Footer from '../../components/FooterComponent/Footer';
import ChildElement from '../../components/ChildComponent/ChildElement';
import KeyFigure from '../../components/KeyFigureComponent/KeyFigure';
import ImageDescription from '../../components/ImageDescriptionComponent/ImageDescription';
import TextHolder from '../../components/TextHolderComponent/TextHolder';
import { ImageDescriptionsInvestor, LandingData } from '../../data';
import './ElewaInvestorPage.css'

/**
 * The InvestorPage functional component.
 * It creates the Investor page by initializing state variables for dynamic content and
 * composing various sections of the page that detail investment opportunities and narratives in the global South.
 *
 * @returns {JSX.Element} The JSX code for rendering the Investor page.
 */
export default function InvestorPage(){
    // State hooks for dynamic content in the Landing component
    const [img, setImg] = useState<string>(''); // State for the image URL for the Landing component
    const [h1, setH1] = useState<string>('');   // State for the primary heading for the Landing component
    const [h2, setH2] = useState<string>('');   // State for the secondary heading for the Landing component

    // Static text content for the page
    const title: string = "How we see it differently";
    const paragraph: string = "The global South is rapidly catching up with the \"developed\" world. It's time for you to get to know the rapid development, innovation and drive going on in this part of the world (East-Africa, South Asia and beyond).";
    const childImageUrl: string = "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png";
    const spanOne: string = "Become part of our mission.";
    const spanTwo: string = "And start";
    const alink: string = "investing";

    // useEffect hook to set the Landing component's dynamic content when the component mounts
    useEffect(() => {
        setImg(LandingData.InvestorLandingData.imageUrl); // Sets the image URL from LandingData
        setH1(LandingData.InvestorLandingData.h1Header);  // Sets the primary heading from LandingData
        setH2(LandingData.InvestorLandingData.h2Header);  // Sets the secondary heading from LandingData
    }, []); // The empty array ensures this effect runs only once

    // Mapping ImageDescriptionsInvestor to render ImageDescription components
    let toRender = ImageDescriptionsInvestor.map((element, index) => (
        // Conditionally renders the additional description if it exists
        element.description2 ? (
            <ImageDescription key={element.heading} title={element.heading} imageUrl={element.imageUrl} description={element.description1} index={index + 1}>
                <p>{element.description2}</p>
            </ImageDescription>
        ) : (
            <ImageDescription key={element.heading} title={element.heading} imageUrl={element.imageUrl} description={element.description1} index={index + 1}/>
        )
    ));

    // Render method returns the composition of the Investor page
    return (
        <>
            {/* Landing component displaying the dynamic header and image */}
            <Landing imageUrl={img} h1String={h1} h2String={h2}/>
            {/* Section with child elements */}
            <div className='bg-child-component'>
                <div className='child-components'>
                    {/* ChildElement component displaying a title, paragraph, and an image */}
                    <ChildElement>
                        <h5>{title}</h5>
                        <p>{paragraph}</p>
                        <img src={childImageUrl} alt="Child imagery" />
                    </ChildElement>
                </div>
            </div>
            {/* KeyFigure component displaying important figures or data */}
            <KeyFigure />
            {/* Renders a list of ImageDescription components mapped from data */}
            {toRender}
            {/* TextHolder component for displaying a heading and additional links */}
            <TextHolder heading={spanOne}>
                <span>
                    {spanTwo}{" "}
                    {/* Anchor tag for a call to action */}
                    <a className="span-link" href="#">{alink}</a>
                </span>
            </TextHolder>
            {/* Footer component included on every page */}
            <Footer />
            
        </>
    );
}
