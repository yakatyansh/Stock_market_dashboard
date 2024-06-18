import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function StockPriceChart({ symbol }) {
  const [stockData, setStockData] = useState([]);

  // Fetches stock data on component mount
  useEffect(() => {
    const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const timeseries = data['Time Series (Intraday)'];
        const chartData = {
          labels: Object.keys(timeseries),
          datasets: [
            {
              label: symbol,
              data: Object.values(timeseries).map(point => point['4. close']),
              borderColor: 'blue',
              backgroundColor: 'rgba(0, 0, 255, 0.2)',
            },
          ],
        };
        setStockData(chartData);
      })
      .catch(error => console.error(error));
  }, [symbol]);

  // Function to display formatted price based on data
  const getFormattedPrice = (data) => {
    if (!data || !data.length) return 'N/A';
    const latestPrice = data[data.length - 1];
    return `$${latestPrice['4. close']}`;
  }

  return (
    <div className="stock-price-chart">
      <h2>{symbol}</h2>
      <Line data={stockData} options={{}} />
      <p>Latest Price: {getFormattedPrice(stockData.datasets[0].data)}</p>
    </div>
  );
}

export default StockPriceChart;
