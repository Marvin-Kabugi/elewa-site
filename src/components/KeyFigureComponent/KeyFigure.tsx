import React from "react"
import KeyFigureElement from "./KeyFigureElement"
import KeyFigures from "../../data"
import './KeyFigure.css'

export default function KeyFigure() {
    const title: string = "Key figures"
    let keyFiguresToBeDisplayed: React.ReactNode[] = KeyFigures.map((element) => {
        return (
        <KeyFigureElement key={element.heading} heading={element.heading} description={element.description}/>
        )
    })

    return (
        <>
           <h2 className="figure-title">{title}</h2> 
           <div className="parent-grid">
                {keyFiguresToBeDisplayed}
           </div>
        </>
    )
}