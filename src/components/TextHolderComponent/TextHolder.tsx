import React from "react";
import './TextHolder.css'

interface Props {
    heading: string;
    children?: React.ReactNode
}

export default function TextHolder({heading, children}: Props) {

    return (
        <>
            <section className="text-main">
                <span className="span1">{heading}</span>
                <span className="span2"> {children}</span>
            </section>
        </>
    )
}