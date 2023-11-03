import React from "react";
import './ImageDescription.css';

interface Props {
    title: string;
    imageUrl: string;
    children?: React.ReactNode;
    description: string;
    index: number;
}

export default function ImageDescription({children, imageUrl, title, description, index}: Props){
    let toRender = index % 2 === 0 ? (
        <div className="image-description-container">
                <div className="image-description">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    {children}
                </div>
                <div className="image-element">
                    <img src={imageUrl} alt="" />
                </div>
            </div> 
    ) : 
    (
        <div className="image-description-container">
            <div className="image-element">
                <img src={imageUrl} alt="" />
            </div>            
            <div className="image-description">
                <h1>{title}</h1>
                <p>{description}</p>
                {children}
            </div>
    </div> 
    )

    return (
        <>
           {toRender}   
        </>
    )
}