import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import InvestorPage from './pages/ElewaInvestorPage/ElewaInvestorPage';
import ElewaSocialImpact from './pages/ElewaSocialImpactPage/ElewaSocialImpact';
import AboutUsPage from './pages/ElewaAboutUsPage/ElewaAboutUsPage';
import NavBar from './components/NavBarComponent/NavBar';
import { appLinks } from './data';

/**
 * The root component of the Elewa web application.
 * It sets up the main routing structure of the application and renders
 * the NavBar component at the top of the page, followed by the current route's page component.
 * 
 * The Routes component manages the navigation between different pages of the app based on the URL.
 * The Route component defines a mapping between a URL path and a React component.
 * 
 * @returns {JSX.Element} The top-level React component that defines the main structure of the application.
 */
function App(): JSX.Element {
  // Render method returning the overall app structure.
  return (
    <div className="App">
      {/* NavBar component with links passed as props for site navigation. */}
      <NavBar links={appLinks} />
      {/* Routes container defining the mapping between paths and components. */}
      <Routes>
        {/* Route for the root path ("/") leading to the InvestorPage component. */}
        <Route path="/" element={<InvestorPage />} /> 
        {/* Route for "/social-impact" leading to the ElewaSocialImpact component. */}
        <Route path="/social-impact" element={<ElewaSocialImpact />} />
        {/* Route for "/about" leading to the AboutUsPage component. */}
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
