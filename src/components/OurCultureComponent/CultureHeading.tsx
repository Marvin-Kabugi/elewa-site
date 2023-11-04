import './CultureHeading.css'

export default function CultureHeading() {
    const heading: string = "Our Culture & Values"
    const description: string = "Our culture, CODE-(T), defines us. It protects and guides us to success. It keeps our team and management accountable to itself, its objective, and our long-term mission."
    return (
        <>
            <h1 className="culture-heading">{heading}</h1>
            <p className="culture-description">{description}</p>
        </>
    )
}