import NavBar from '../components/NavBar';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import FooterElement from '../components/FooterElement';
import KeyFigure from '../components/KeyFigure';
import ImageDescription from '../components/ImageDescription';
import { ImageDescriptionsInvestor } from '../data';
import './ElewaInvestorPage.css'

export default function InvestorPage(){
    const links: string[] = ['Home', 'About Us', 'Social Impact', 'Invest', 'Venture Labs', 'Brands', 'Careers', 'Contact']
    const title: string = "How we see it differently"
    const paragraph: string = "The global South is rapidly catching up with the \"developed\" world. It's time for you to get to know the rapid development, innovation and drive going on in this part of the world (East-Africa, South Asia and beyond)."
    const imageUrl: string = "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png"
    let toRender = ImageDescriptionsInvestor.map((element, index) => {

        return (
            element.description2 !== (null || undefined) ? (
                <ImageDescription title={element.heading} imageUrl={element.imageUrl} description={element.description1} index={index + 1}>
                    <p>{element.description2}</p>
                </ImageDescription>) :
            (
                <ImageDescription title={element.heading} imageUrl={element.imageUrl} description={element.description1} index={index + 1}/>
            )
        )
    })

    return (
        <>
            <NavBar links={links}/>
            <Landing />
            <div className='bg-child-component'>
                <div className='child-components'>
                    <FooterElement>
                        <h5>{title}</h5>
                        <p>{paragraph}</p>
                        <img src={imageUrl} alt="" />
                    </FooterElement>
                </div>
            </div>
            <KeyFigure />
            {toRender}
            <Footer />
        </>
    )
}
