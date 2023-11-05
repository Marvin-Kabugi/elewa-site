// MapContent.tsx
// The MapContent component is responsible for displaying the location information for Elewa, including a Google Maps iframe and contact information. It also includes an ElewaButton component that triggers an action to get directions.

import React from 'react'; // Import React from react library.
import ElewaButton from '../ElewaButton/ElewaButton'; // Import the ElewaButton component.
import './MapContent.css'; // Import the MapContent CSS for styling.

/**
 * The MapContent component does not receive any props and renders static content.
 * It provides information on how to get to Elewa's physical location and offers an option to get directions.
 *
 * @returns {JSX.Element} - The JSX code for the MapContent component.
 */
export default function MapContent(): JSX.Element {
    // Text contents for the component stored in variables.
    const paragraph1: string = "Based in the heart of Westlands, Nairobi, Kenya, we are easily accessible from all parts of the city.";
    const paragraph2: string = "Not in town? Teams, Meets or Zoom are our second name. Book an appointment today via";
    const link: string = "contact@elewa.ke!";
    const h1Heading: string = "How to get there";
    const iframeUrl: string ="https://www.google.com/maps/place/Calltronix+HQ/@-1.2560943,36.8024305,17z/data=!3m1!4b1!4m6!3m5!1s0x182f17fb0f0bce73:0xfb19b44f14e829e8!8m2!3d-1.2560997!4d36.8050054!16s%2Fg%2F11fpgsr04p?authuser=0&entry=ttu"

    // Render method returns the structure of the MapContent component.
    return (
        <div className='mp-main'>
            <div className='mp-container'>
                <div>
                    {/* Google Maps iframe for displaying the location map. */}
                    <iframe
                        width="600"
                        height="600"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        src={iframeUrl}
                    ></iframe>
                </div>
                <div>
                    {/* Heading element with dynamic content from the h1Heading variable. */}
                    <h1 className='map-heading'>{h1Heading}</h1>
                    {/* Two paragraphs for location description. */}
                    <p>{paragraph1}</p>
                    <p>
                        {paragraph2}
                        {/* Link for contacting, with the href attribute to be replaced with actual URL. */}
                        <a href={`mailto:${link}`}>{link}</a>
                    </p>
                    {/* ElewaButton component for getting directions. */}
                    <ElewaButton value="Get directions" />
                </div>
            </div>
        </div>
    );
}
