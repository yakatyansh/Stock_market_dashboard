import React from 'react';
import logo from './logo.svg';
import './App.css';
import Summary from './components/Summary';
import Header from './components/Header';
import StockPriceChart from './components/StockPriceChart';
function App() {
  return (
    <div className="App">
      <Header title="Hi Yash" />
      <Summary sentiment="bullish" body="hi I am Yash" />
      <StockPriceChart symbol="AAPL" />
      


    </div>
  );
}

export default App;
