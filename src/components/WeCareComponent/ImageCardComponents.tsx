import ImageCard from "./ImageCard"
import { AboutImageCardData } from "../../data"

export default function ImageCards(){
    const toRender = AboutImageCardData.map((element) => {
        return <ImageCard 
                    imageUrl={element.imageUrl} 
                    description={element.description1} 
                    heading={element.heading}
                />
    })
    return (
        <div className="about-card-container">
            {toRender}
        </div>
    )
}