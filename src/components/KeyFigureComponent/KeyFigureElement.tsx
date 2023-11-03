import React from "react";
import './KeyFigureElement.css'

interface Props {
    heading: string | number;
    description: string;
}

export default function KeyFigureElement({heading, description}: Props) {
    let toRender: React.ReactNode = (typeof(heading) === "string" ? 
                        (<>
                            <h1>{heading.slice(0,heading.length - 1)} <span>{heading.slice(-1)}</span></h1>
                            <p>{description}</p>
                        </>) : 
                        (<>
                            <h1>{heading}</h1>
                            <p>{description}</p>
                        </>))

    return (
        <>
            <div className="key-element">
                {toRender}
            </div>
        </>
    )
}