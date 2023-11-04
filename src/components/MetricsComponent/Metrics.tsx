import { useEffect, useState } from "react";
import { metricsData, MetricsInterface } from "../../data";
import Metric from "./Metric";
import './Metrics.css'

export default function Metrics(){
    const [metrics, setMetrics] = useState<MetricsInterface[]>([])

    useEffect(() => {
        setMetrics([...metricsData])
    }, [])

    const toRender = metrics.map((element) => {
        return <Metric metric={element.metric} description={element.description}/>
    })
    return (
        <div className="metrics-container">
            {toRender}
        </div>
    )
}