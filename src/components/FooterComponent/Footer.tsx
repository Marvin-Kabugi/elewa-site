import React, { useEffect, useState } from 'react';
import './Footer.css';
import ChildElement from '../ChildComponent/ChildElement';

interface Heading {
    heading: string;
    xnumber: string[];
}

export default function Footer() {
    const [headings, setFooterHeadings] = useState<Heading[]>([]);
    let imageUrl: string = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg"
    let facebookUrl: string = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/facebook_lhhwk2.svg"
    let instagramUrl: string = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690295/elewa-group-website/Icons/SVG/_Social/instagram_x8ujcq.svg"
    let linkedInUrl: string = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/linkedin_x8smhm.svg"

    useEffect(() => {
        setFooterHeadings([
            { heading: 'Contact', xnumber: ['T +254 78 92 27 755', 'E info@elewa.ke'] },
            { heading: 'Navigation', xnumber: ['About us', 'Social impact', 'Invest', 'News', 'Contact'] },
            { heading: 'Brands', xnumber: ['Elewa', 'Italanta', 'Venture labs'] },
            { heading: 'Privacy', xnumber: ['Terms and conditions', 'Cookie preferences'] },
        ]);
    }, []);

    let x: React.ReactNode[] = headings.map((heading) => {
        const pTags: React.ReactNode[] = [];
        for (let i = 0; i < heading.xnumber.length; i++) {
            pTags.push(
                <React.Fragment key={i}>
                    <p>{heading.xnumber[i]}</p>
                    {i < heading.xnumber.length - 1 && <br />}
                </React.Fragment>
            );
        }
        pTags.unshift(<><h4>{heading.heading}</h4></>)
        return pTags;
    });

    return (
        <div className='container-2'>
            <div className='footer-link-container'>
            <ChildElement >
                <h4>Headquarters</h4>
                <p>
                    The Promenade, 19 General
                    <br />
                    Mathenge Rd
                    <br />
                    Nairobi, Kenya
                </p>
            </ChildElement>
            {headings.map((heading, index) => (
                <ChildElement key={heading.heading}>
                    {x[index]}
                </ChildElement>
            ))}
            </div>
            <div className='footer-link-image-container'>
                <div>
                    <img src={imageUrl} alt="" />
                </div>
                <div className='footer-link-images'>
                    <img src={facebookUrl} alt="" />
                    <img src={instagramUrl} alt="" />
                    <img src={linkedInUrl} alt="" />
                </div>
            </div>
        </div>
    );
}

