import CultureHeading from "./CultureHeading"
import CultureSection from "./CultureSection"
import './OurCulture.css'
export default function OurCulture(){
    return (
        <div className="culture-container">
            <div className="heading-container">
                <CultureHeading />
            </div>
            <CultureSection />
        </div>
    )
}