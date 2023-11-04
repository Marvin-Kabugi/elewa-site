import React from 'react';
// import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import InvestorPage from './pages/ElewaInvestorPage/ElewaInvestorPage';
import ElewaSocialImpact from './pages/ElewaSocialImpactPage/ElewaSocialImpact';
import AboutUsPage from './pages/ElewaAboutUsPage/ElewaAboutUsPage';
import NavBar from './components/NavBarComponent/NavBar';
import { appLinks } from './data';



function App() {
  return (
    <div className="App">
      <NavBar links={appLinks}/>
      <Routes>
        <Route path="/" element={<InvestorPage />}/> {/* 👈 Renders at /app/ */}
        <Route path="/social-impact" element={<ElewaSocialImpact />}/>
        <Route path='/about' element={<AboutUsPage />} />
      </Routes>

    </div>
  );
}

export default App;
