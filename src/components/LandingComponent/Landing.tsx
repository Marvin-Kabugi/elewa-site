import React from "react";
import './Landing.css'

interface Props {
    imageUrl: string;
    h2String: string;
    h1String: string;
    children?: React.ReactNode;
}

export default function Landing({imageUrl, h2String, h1String, children}: Props){
    // let imageUrl: string = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679982347/elewa-group-website/hero-Images/dark-to-light_xrat5g.jpg'
    // let h2String: string = 'Trade, not aid';
    // let h1String: string = 'Southern innovations addressing global problems';

    let h2Class: string = 'h2'
    let h1Class: string = 'h1'

    return (
        <>
            <div className="container">
                <img src={imageUrl} alt="" />
                <h2 className={h2Class}>{h2String}</h2>
                <h1 className={h1Class}>{h1String}</h1>
                {children}
            </div>
        </>
    )
}