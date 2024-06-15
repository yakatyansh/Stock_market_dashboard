import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewsCard from './components/NewsCard';
import TopBar from './components/Topbar';
function App() {
  return (
    <div className="App">
      <TopBar title="Hi Yash" />
      <NewsCard title="News Title" body="News Body"  />
      {/* <StockPriceChart symbol='AAPL'/> */}
    </div>
  );
}

export default App;
