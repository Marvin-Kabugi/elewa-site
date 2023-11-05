interface Props {
    imageUrl: string;
    heading: string;
    description: string;
}
export default function ImageCard({imageUrl, heading, description}: Props){
    return (
        <div className="about-card">
            <img src={imageUrl} alt="" />
            <h3>{heading}</h3>
            <p>{description}</p>
        </div>
    )
}