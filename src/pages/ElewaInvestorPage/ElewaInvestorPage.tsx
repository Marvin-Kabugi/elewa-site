import NavBar from '../../components/NavBarComponent/NavBar';
import Landing from '../../components/LandingComponent/Landing';
import Footer from '../../components/FooterComponent/Footer';
import ChildElement from '../../components/ChildComponent/ChildElement';
import KeyFigure from '../../components/KeyFigureComponent/KeyFigure';
import ImageDescription from '../../components/ImageDescriptionComponent/ImageDescription';
import TextHolder from '../../components/TextHolderComponent/TextHolder';
import { ImageDescriptionsInvestor, LandingData } from '../../data';
import './ElewaInvestorPage.css'
import { useEffect, useState } from 'react';

export default function InvestorPage(){
    const [img, setImg] = useState<string>('')
    const [h1, setH1] = useState<string>('')
    const [h2, setH2] = useState<string>('')
    const title: string = "How we see it differently"
    const paragraph: string = "The global South is rapidly catching up with the \"developed\" world. It's time for you to get to know the rapid development, innovation and drive going on in this part of the world (East-Africa, South Asia and beyond)."
    const childImageUrl: string = "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png"
    const spanOne: string = "Become part of our mission."
    const spanTwo: string = "And start"
    const alink: string = "investing"
    
    useEffect(() => {
        setImg(LandingData.InvestorLandingData.imageUrl)
        setH1(LandingData.InvestorLandingData.h1Header)
        setH2(LandingData.InvestorLandingData.h2Header)
    }, [])

    let toRender = ImageDescriptionsInvestor.map((element, index) => {

        return (
            element.description2 !== (null || undefined) ? (
                <ImageDescription key={element.heading} title={element.heading} imageUrl={element.imageUrl} description={element.description1} index={index + 1}>
                    <p>{element.description2}</p>
                </ImageDescription>) :
            (
                <ImageDescription key={element.heading} title={element.heading} imageUrl={element.imageUrl} description={element.description1} index={index + 1}/>
            )
        )
    })

    return (
        <>
            {/* <NavBar links={links}/> */}
            <Landing imageUrl={img} h1String={h1} h2String={h2}/>
            <div className='bg-child-component'>
                <div className='child-components'>
                    <ChildElement>
                        <h5>{title}</h5>
                        <p>{paragraph}</p>
                        <img src={childImageUrl} alt="" />
                    </ChildElement>
                </div>
            </div>
            <KeyFigure />
            {toRender}
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
