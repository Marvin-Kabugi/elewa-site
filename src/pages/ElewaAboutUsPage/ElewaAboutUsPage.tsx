import { useEffect, useState } from 'react';
import Landing from '../../components/LandingComponent/Landing';
import Footer from '../../components/FooterComponent/Footer';
import ChildElement from '../../components/ChildComponent/ChildElement';
import ImageDescription from '../../components/ImageDescriptionComponent/ImageDescription';
import TextHolder from '../../components/TextHolderComponent/TextHolder';
import WeCare from '../../components/WeCareComponent/WeCare';
import TeamCarousel from '../../components/TeamCarouselComponent/TeamCarousel';
import OurCulture from '../../components/OurCultureComponent/OurCulture';
import MapContent from '../../components/MapComponent/MapContent';
import { LandingData } from '../../data';
import './ElewaAboutUsPage.css'

export default function AboutUsPage(){
    const [img, setImg] = useState<string>('')
    const [h1, setH1] = useState<string>('')
    const [h2, setH2] = useState<string>('')
    const pTag: string = "*SERIOUS WHEN IT MATTERS"
    const spanOne: string = "Learn more about"
    const aLink: string = "Elewa's social impact."

    useEffect(() => {
        setImg(LandingData.AboutLandingData.imageUrl)
        setH1(LandingData.AboutLandingData.h1Header)
        setH2(LandingData.AboutLandingData.h2Header)
    }, [])

    return (
        <>
            <Landing imageUrl={img} h1String={h1} h2String={h2}>
                <p className='p-tag'>{pTag}</p>
            </Landing>
            <WeCare />
            <TeamCarousel />
            <OurCulture />
            <MapContent />
            <TextHolder heading={spanOne}>
                <span>
                    <a className="span-link" href="">{aLink}</a>
                </span>
            </TextHolder>
            <Footer />
        </>
    )
}