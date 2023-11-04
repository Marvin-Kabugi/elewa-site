import ElewaButton from '../ElewaButton/ElewaButton'
import './MapContent.css'
export default function MapContent(){
    const paragraph1: string = "Based in the heart of Westlands, Nairobi, Kenya, we are easily accessible from all parts of the city."
    const paragraph2: string = "Not in town? Teams, Meets or Zoom are our second name. Book an appointment today via"
    const link: string = "contact@elewa.ke!"
    return (
        <div className='mp-main'>
            <div className='mp-container'>
                <div>
                    <iframe
                        width="500"
                        height="500"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/place/Calltronix+HQ/@-1.2560943,36.8024305,17z/data=!4m14!1m7!3m6!1s0x182f17fb0f0bce73:0xfb19b44f14e829e8!2sCalltronix+HQ!8m2!3d-1.2560997!4d36.8050054!16s%2Fg%2F11fpgsr04p!3m5!1s0x182f17fb0f0bce73:0xfb19b44f14e829e8!8m2!3d-1.2560997!4d36.8050054!16s%2Fg%2F11fpgsr04p?authuser=0&entry=ttu"
                    ></iframe>
                </div>
                <div>
                    <h1 className='map-heading'>How to get there</h1>
                    <p>{paragraph1}</p>
                    <p>{paragraph2}
                        <a href="#">{link}</a>
                    </p>
                    <ElewaButton value="Get directions" />
                </div>
            </div>
        </div>
        
    )
}