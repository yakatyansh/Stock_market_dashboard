import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface NewsCardProps {
}

const NewsCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1">
          Jan Inflation Surges, Squeezing Budgets; S&P 500 Rallies as Markets Face 'Bumpy' 2% Path
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
