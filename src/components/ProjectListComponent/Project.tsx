import './Project.css'

interface Props {
    imageUrl: string
}

export default function Project({imageUrl}: Props){
    return (
        <div className='project-element'>
            <img src={imageUrl} alt="no image" />
        </div>
    )
}