import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface NewsCardProps {
}

const NewsCard = () => {
    const [newsData, setNewsData] = useState<string>('');
    const [Sentment, setSentiment] = useState<string>('');

    useEffect(() => {
        fetch('https://api.polygon.io/v2/reference/news?ticker=AAPL&limit=10&apiKey=v4pQWriX9tFHHj85ATnnX68GMbUrLRQg')
            .then((response) => response.json())
            .then((data) => {
                // Process the data and set it to the state
                setSentiment(data.sentiment);
            });
    }, []);
    

    useEffect(() => {
        fetch('https://api.polygon.io/v2/reference/news?ticker=AAPL&limit=10&apiKey=v4pQWriX9tFHHj85ATnnX68GMbUrLRQg')
            .then((response) => response.json())
            .then((data) => {
                // Process the data and set it to the state
                setNewsData(data.results[0].title);
            })
            .catch((error) => {
                console.error('Error fetching news data:', error);
            });
    }, []);
  
  
    return (
    
    <Card>
      <CardContent>
        <Typography variant="body2">
            The Market is currently {Sentment}
        </Typography>
        <Typography variant="body1">
            {newsData}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
