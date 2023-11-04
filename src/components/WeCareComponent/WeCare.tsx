import Paragraph from './ParagraphComponent'
import ImageCards from './ImageCardComponents'
import './WeCare.css'


export default function WeCare(){
    const mainHeader: string = "We Care!"
    return(
        <div className="we-care-parent-container">
            <div className="we-care">
                <div className='content-container'>
                    <h2>{mainHeader}</h2>
                    <Paragraph />
                    <ImageCards />
                </div>  
            </div>
        </div>
    )
}