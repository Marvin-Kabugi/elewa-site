// Metric.tsx
// This component renders a single metric with its description.
// It is designed to be a reusable component where a metric is a key data point
// and description provides context for that data point.

import React from "react";
import './Metric.css' // Stylesheet for the Metric component

// Interface to type the props passed to the Metric component
interface Prop {
  metric: string;       // The value of the metric, expected to be a string
  description: string;  // The description of the metric, providing context
}

/**
 * Metric component renders a metric and its associated description.
 * 
 * It takes two props:
 * - metric: the numeric or textual value of the metric
 * - description: a short text explaining the metric
 *
 * The structure of the component is a div container with a heading element for
 * the metric and a paragraph element for the description. Styles are applied from Metric.css
 *
 * @param {Prop} props - The props containing the metric and description.
 * @returns {JSX.Element} The rendered component.
 */
export default function Metric({ metric, description }: Prop): JSX.Element {    
  return (
    <div className="metric-container">
      <h1>{metric}</h1>      
      <p>{description}</p> 
    </div>
  );
}
