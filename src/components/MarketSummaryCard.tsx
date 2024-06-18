
import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

interface MarketSummaryCardProps {
}


const MarketSummaryCard = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=139T7WOPRL55N8DL')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Card>
      <CardContent>
        {data ? (
          <Typography variant="body1">{data.marketSummary}</Typography>
        ) : (
          <Typography variant="body1">Loading...</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default MarketSummaryCard;
