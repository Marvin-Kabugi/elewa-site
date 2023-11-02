import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Footer from './components/Footer';
function App() {
  const links: string[] = ['Home', 'About Us', 'Social Impact', 'Invest', 'Venture Labs', 'Brands', 'Careers', 'Contact']
  return (
    <div className="App">
      <header className="App-header">
        <NavBar links={links}/>
        <Landing />
        <Footer />
     </header>
    </div>
  );
}

export default App;
