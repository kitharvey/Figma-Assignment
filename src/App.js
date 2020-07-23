import React from 'react';
import PartnerCard from './FigmaChart/PartnerCard'
import GlobalRanking from './FigmaChart/GlobalRanking'
import VAI from './FigmaChart/VAI'
import './css/style.css'

const App = () => {
  return (
    <div className="App">
      <PartnerCard />
      <GlobalRanking />
      <VAI />
    </div>
  );
}

export default App;
