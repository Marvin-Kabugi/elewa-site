import React from 'react';
import logo from './logo.svg';
import './App.css';
import InvestorPage from './pages/ElewaInvestorPage/ElewaInvestorPage';

function App() {
  // const links: string[] = ['Home', 'About Us', 'Social Impact', 'Invest', 'Venture Labs', 'Brands', 'Careers', 'Contact']
  return (
    <div className="App">
      {/* <header className="App-header">
        <NavBar links={links}/>
        <Landing />
     </header> */}
     <InvestorPage />
    </div>
  );
}

export default App;
