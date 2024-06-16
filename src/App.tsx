import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import TopBar from './components/Topbar';
import MarketSummaryCard from './components/MarketSummaryCard';
import NewsCard from './components/NewsCard';
import SectorPerformance from './components/sectorPerformance';


const App = () => {
  return (
    <div>
      <TopBar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6">The markets are bullish</Typography>
                </Grid>
                <SectorPerformance />
                <Grid item xs={12}>
                  <Typography variant="h6">What to know today</Typography>
                </Grid>
                <Grid item xs={12}>
                  <NewsCard />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <MarketSummaryCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
