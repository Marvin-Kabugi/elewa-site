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

export default function ElewaSocialImpact(){
    const [img, setImg] = useState<string>('')
    const [h1, setH1] = useState<string>('')
    const [h2, setH2] = useState<string>('')
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
        setImg(LandingData.SocialLandingData.imageUrl)
        setH1(LandingData.SocialLandingData.h1Header)
        setH2(LandingData.SocialLandingData.h2Header)
    },[])
    

    return (
        <>
            <Landing imageUrl={img} h1String={h1} h2String={h2}/>
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