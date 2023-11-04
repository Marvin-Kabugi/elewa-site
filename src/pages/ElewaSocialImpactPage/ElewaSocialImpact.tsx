import { useEffect, useState } from 'react';
import Landing from '../../components/LandingComponent/Landing';
import Footer from '../../components/FooterComponent/Footer';
import ChildElement from '../../components/ChildComponent/ChildElement';
import KeyFigure from '../../components/KeyFigureComponent/KeyFigure';
import Metrics from '../../components/MetricsComponent/Metrics';
import ProjectList from '../../components/ProjectListComponent/ProjectList';
import ImageDescription from '../../components/ImageDescriptionComponent/ImageDescription';
import TextHolder from '../../components/TextHolderComponent/TextHolder';
import { SocialImpact } from '../../data';
import './ElewaSocialImpact.css'

export default function ElewaSocialImpact(){
    let imageUrl: string = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg'
    let h2String: string = 'Scaling impact. Beyond the norm';
    let h1String: string = 'Human and Environmental Impact through Social Enterprise';
    const spanOne: string = "Become part of our mission."
    const spanTwo: string = "and "
    const alink: string = "join elewa."
    const projectHeading: string = "Some of our impact projects"
    let [dispItems, setDispItems] = useState<React.ReactNode>([])
    useEffect(() => {
        let toRender = SocialImpact.map((element, index) => {
            return (
                element.description3 !== (null || undefined) ? (
                    <ImageDescription key={element.heading} title={element.heading} imageUrl={element.imageUrl} description={element.description} index={index + 1} cssClass={element.cssClass}>
                        <p>{element.description2}</p>
                        <p>{element.description3}</p>
                    </ImageDescription>) :
                (
                    <ImageDescription key={element.heading} title={element.heading} imageUrl={element.imageUrl} description={element.description} index={index + 1} cssClass={element.cssClass}/>
                )
            )
        })
        setDispItems([...toRender])
    },[])
    

    return (
        <>
            <Landing imageUrl={imageUrl} h1String={h1String} h2String={h2String}/>
            <Metrics />
            {dispItems}
            <div className='project-heading'>
                <ChildElement >
                    <p>{projectHeading}</p>
                </ChildElement>
            </div>
            <ProjectList />
            <TextHolder heading={spanOne}>
                <span>
                    {spanTwo}  {" "}
                    <a className="span-link" href="">{alink}</a>
                </span>
            </TextHolder>
            <Footer />     
        </>
    )
}