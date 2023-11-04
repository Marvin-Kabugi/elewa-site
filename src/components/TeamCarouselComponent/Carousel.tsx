import { TeamData } from "../../data"
import CarouselItem from "./CarouselItem"
export default function Carousel(){
    
    const toRender = TeamData.map((element) => {
       return <CarouselItem 
            key={element.name}
            imageUrl={element.imageUrl}
            name={element.name}
            role={element.role}    
        />
    })
    return (
        <>
            {toRender}
        </>
    )
}