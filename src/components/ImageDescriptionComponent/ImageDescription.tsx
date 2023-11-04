// import React from "react";
// import './ImageDescription.css';

// interface Props {
//     title: string;
//     imageUrl: string;
//     children?: React.ReactNode;
//     description: string;
//     index: number;
//     cssClass?: string;
// }

// export default function ImageDescription({children, imageUrl, title, description, index, cssClass}: Props){
//     console.log(cssClass)
//     let toRender = index % 2 === 0 ? (
//         <div className={cssClass ? `image-description-container ${cssClass}` : 'image-description-container'}>
//                 <div className="image-description">
//                     <h1>{title}</h1>
//                     <p>{description}</p>
//                     {children}
//                 </div>
//                 <div className="image-element">
//                     <img src={imageUrl} alt="" />
//                 </div>
//             </div> 
//     ) : 
//     (
//         <div className={cssClass ?  `image-description-container ${cssClass}` : 'image-description-container'}>
//             <div className="image-element">
//                 <img src={imageUrl} alt="" />
//             </div>            
//             <div className="image-description">
//                 <h1>{title}</h1>
//                 <p>{description}</p>
//                 {children}
//             </div>
//     </div> 
//     )

//     return (
//         <>
//            {toRender}  
//         </>
//     )
// }
import React from 'react';
import './ImageDescription.css';

interface Props {
  title: string;
  imageUrl: string;
  children?: React.ReactNode;
  description: string;
  index: number;
  cssClass?: string;
}

export default function ImageDescription({ children, imageUrl, title, description, index, cssClass }: Props) {
    console.log(cssClass)
const imageDescriptionClass = cssClass ? `image-description-container ${cssClass}` : 'image-description-container';
  const altText = `Description of ${title}`; // Example alt text, replace with your actual description

  const imageDescription = (
    <div className="image-description">
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );

  const imageElement = (
    <div className="image-element">
      <img src={imageUrl} alt={altText} />
    </div>
  );

  return (
    
    <div className={imageDescriptionClass}>
      {index % 2 === 0 ? (
        <>
          {imageDescription}
          {imageElement}
        </>
      ) : (
        <>
          {imageElement}
          {imageDescription}
        </>
      )}
    </div>
  );
}
