import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

interface MarketSummaryCardProps {
}

const MarketSummaryCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        image="https://images.unsplash.com/photo-150344324705-e7dfd8cfaa3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlLW8&auto=format&fit=crop&w=500&q=60"
        alt="Market Chart"
      />
      <CardContent>
        <Typography variant="h6">Markets</Typography>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="body1">S&P 500</Typography>
            <Typography variant="body1">498.84</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">+4.70 (+0.00%)</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="body1">Nasdaq</Typography>
            <Typography variant="body1">433.35</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">+4.80</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="body1">Dow Jones</Typography>
            <Typography variant="body1">384.31</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">+1.49</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MarketSummaryCard;
