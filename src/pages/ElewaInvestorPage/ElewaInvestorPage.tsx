import NavBar from '../../components/NavBarComponent/NavBar';
import Landing from '../../components/LandingComponent/Landing';
import Footer from '../../components/FooterComponent/Footer';
import ChildElement from '../../components/ChildComponent/ChildElement';
import KeyFigure from '../../components/KeyFigureComponent/KeyFigure';
import ImageDescription from '../../components/ImageDescriptionComponent/ImageDescription';
import TextHolder from '../../components/TextHolderComponent/TextHolder';
import { ImageDescriptionsInvestor } from '../../data';
import './ElewaInvestorPage.css'

export default function InvestorPage(){
    const title: string = "How we see it differently"
    const paragraph: string = "The global South is rapidly catching up with the \"developed\" world. It's time for you to get to know the rapid development, innovation and drive going on in this part of the world (East-Africa, South Asia and beyond)."
    const childImageUrl: string = "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png"
    const spanOne: string = "Become part of our mission."
    const spanTwo: string = "And start"
    const alink: string = "investing"
    let imageUrl: string = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679982347/elewa-group-website/hero-Images/dark-to-light_xrat5g.jpg'
    let h2String: string = 'Trade, not aid';
    let h1String: string = 'Southern innovations addressing global problems';
    
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
            <Landing imageUrl={imageUrl} h1String={h1String} h2String={h2String}/>
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
