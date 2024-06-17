import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface NewsCardProps {
}

const NewsCard = () => {
    const [newsData, setNewsData] = useState<string>('');

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=7914464d26574892b8ef81b9fc984b24')
            .then((response) => response.json())
            .then((data) => {
                // Process the data and set it to the state
                setNewsData(data.articles[0].title);
            })
            .catch((error) => {
                console.error('Error fetching news data:', error);
            });
    }, []);
  
  
    return (
    
    <Card>
      <CardContent>
        <Typography variant="body2">
            {newsData}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
