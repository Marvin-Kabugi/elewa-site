import './Metric.css'

interface Prop {
    metric: string;
    description: string;
}

export default function Metric({metric, description}: Prop){    
    return (
        <div className="metric-container">
            <h1>{metric}</h1>
            <p>{description}</p>
        </div>
    )
}



