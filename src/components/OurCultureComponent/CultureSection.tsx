import CultureDetail from "./CultureDetail"
import { AboutCultureData } from "../../data"
export default function CultureSection(){
    const toRender = AboutCultureData.map((element) => {
        return <CultureDetail 
                    key={element.heading}
                    description={element.description1}
                    heading={element.heading}
                    imageUrl={element.imageUrl}
                    />
    })
    return (
        <div className="culture-detail">
            {toRender}
        </div>
    )
}