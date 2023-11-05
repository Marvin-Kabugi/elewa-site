// Metrics.tsx
// This file defines the Metrics component which renders a list of Metric components.
// It fetches metric data from a local data source and maintains it in the component's state.
import { useEffect, useState } from "react";
import { metricsData, MetricsInterface } from "../../data";
import Metric from "./Metric";
import './Metrics.css'

/**
 * Metrics component that renders a list of Metric components.
 * It utilizes useEffect to populate the metrics data from a static source on component mount.
 * 
 * @returns {JSX.Element} A container with a list of Metric components.
 */
export default function Metrics(): JSX.Element {
    // State to hold the metrics data with initial empty array.
    const [metrics, setMetrics] = useState<MetricsInterface[]>([]);

    // useEffect hook to set the metrics data once the component mounts.
    useEffect(() => {
        // Set the metrics data from the provided metricsData array.
        setMetrics([...metricsData]);
    }, []); // Empty dependency array ensures this effect runs only once after initial render.

    // Map the metrics state to render a list of Metric components.
    const toRender = metrics.map((element, index) => {
        // Returns a Metric component for each element in the metrics array.
        // A 'key' prop is added to satisfy React's list rendering requirements.
        return <Metric key={index} metric={element.metric} description={element.description}/>
    });

    // Render the container with the list of Metric components.
    return (
        <div className="metrics-container">
            {toRender}
        </div>
    );
}
