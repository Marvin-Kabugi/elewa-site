import './CultureDetail.css'

interface Props{
    imageUrl: string;
    heading: string;
    description: string;
}

export default function CultureDetail({imageUrl, heading, description}: Props){
    return (
        <div className='detail-container'>
            <img src={imageUrl} alt="no image" />
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
    )
}