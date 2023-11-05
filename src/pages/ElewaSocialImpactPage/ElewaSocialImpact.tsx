// ElewaSocialImpact.tsx
// This component serves as the social impact page for Elewa's web application.
// It compiles different components to present the social projects and metrics 
// that showcase Elewa's commitment to social change.

import { useEffect, useState } from 'react';
import Landing from '../../components/LandingComponent/Landing';
import Footer from '../../components/FooterComponent/Footer';
import ChildElement from '../../components/ChildComponent/ChildElement';
import Metrics from '../../components/MetricsComponent/Metrics';
import ProjectList from '../../components/ProjectListComponent/ProjectList';
import ImageDescription from '../../components/ImageDescriptionComponent/ImageDescription';
import TextHolder from '../../components/TextHolderComponent/TextHolder';
import { LandingData, SocialImpact } from '../../data';
import './ElewaSocialImpact.css'

/**
 * The ElewaSocialImpact functional component.
 * It renders the social impact page of the Elewa web application,
 * displaying the main landing area, metrics, a list of projects, and a call to action.
 * 
 * @returns {JSX.Element} The rendered social impact page component.
 */
export default function ElewaSocialImpact(){
    // State variables to manage dynamic content for the landing component.
    const [img, setImg] = useState<string>('');
    const [h1, setH1] = useState<string>('');
    const [h2, setH2] = useState<string>('');
    const [dispItems, setDispItems] = useState<React.ReactNode[]>([]);

    // Static text content for call to action components
    const spanOne: string = "Become part of our mission.";
    const spanTwo: string = "and ";
    const alink: string = "join elewa.";
    const projectHeading: string = "Some of our impact projects";

    /**
     * useEffect hook to initialize component state.
     * It simulates fetching data for the landing area and prepares components
     * to display various social impact projects with their descriptions.
     */
    useEffect(() => {
        // Mapping over the SocialImpact data to create ImageDescription components.
        const toRender = SocialImpact.map((element, index) => {
            return (
                element.description3 !== (null || undefined) ? (
                    <ImageDescription
                        key={element.heading}
                        title={element.heading}
                        imageUrl={element.imageUrl}
                        description={element.description}
                        index={index + 1}
                        cssClass={element.cssClass}>
                        <p>{element.description2}</p>
                        <p>{element.description3}</p>
                    </ImageDescription>) :
                (
                    <ImageDescription
                        key={element.heading}
                        title={element.heading}
                        imageUrl={element.imageUrl}
                        description={element.description}
                        index={index + 1}
                        cssClass={element.cssClass}/>
                )
            )
        });

        setDispItems(toRender);
        setImg(LandingData.SocialLandingData.imageUrl);
        setH1(LandingData.SocialLandingData.h1Header);
        setH2(LandingData.SocialLandingData.h2Header);
    }, []);

    // The return method renders the entire social impact page.
    return (
        <>
            <Landing imageUrl={img} h1String={h1} h2String={h2}/>
            <Metrics />
            {dispItems}
            <div className='project-heading'>
                <ChildElement>
                    <p>{projectHeading}</p>
                </ChildElement>
            </div>
            <ProjectList />
            <TextHolder heading={spanOne}>
                <span>
                    {spanTwo}{" "}
                    <a className="span-link" href="">{alink}</a>
                </span>
            </TextHolder>
            <Footer />
        </>
    );
}
