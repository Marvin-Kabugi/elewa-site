import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Entry file for the Elewa web application.
 * This file is the starting point for the React application, where the App component
 * is rendered into the DOM within the BrowserRouter context to enable routing.
 *
 */

// Selects the root element from the DOM.
const rootElement = document.getElementById('root') as HTMLElement;

// Creates a root container for the React application.
const root = ReactDOM.createRoot(rootElement);

// Renders the application within a StrictMode and BrowserRouter context.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Call the reportWebVitals function to measure app performance.
reportWebVitals();
