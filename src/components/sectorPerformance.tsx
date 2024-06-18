import React from 'react';
import { Grid, Typography } from '@mui/material';

interface SectorPerformanceProps {
}

const SectorPerformance = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography variant="body1">All Sectors</Typography>
        <Typography variant="body1">+0.88%</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">Healthcare</Typography>
        <Typography variant="body1">+0.841</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">Industrials</Typography>
        
        <Typography variant="body1">+0.841</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="body1">Technology</Typography>
        <Typography variant="body1">+0.841</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="body1">Consumer Discretionary</Typography>
        <Typography variant="body1">+0.841</Typography>
        </Grid>
        
    </Grid>
    );
}

export default SectorPerformance;
