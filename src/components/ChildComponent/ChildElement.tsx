import React from "react"

interface Props {
    // heading?: string;
    children: React.ReactNode;
}
export default function ChildElement({children}: Props){
    
    return (
        <>
            <div>
                {/* <h4>{heading}</h4> */}
                {children}
            </div>
        </>
    )
}