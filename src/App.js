import React from 'react';
import './css/style.css';
import GlobalRanking from './FigmaChart/GlobalRanking'
import VAI from './FigmaChart/VAI'


const App = () => {
  return (
    <div className="App">
      <GlobalRanking />
      <VAI />
    </div>
  );
}

export default App;
