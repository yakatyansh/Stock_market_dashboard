import React from 'react';
import { Container, Grid, Paper, ThemeProvider } from '@mui/material';
import theme, { TopBarContainer, TopBarLeft, TopBarTitle, TopBarSubTitle, TopBarRight, MarketSummaryCardContainer, NewsCardContainer } from './styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MarketSummaryCard from './components/MarketSummaryCard';
import Topbar from './components/Topbar';
import Stack from '@mui/material/Stack';
import NewsCard from './components/NewsCard';
import StockPriceChart from './components/StockPriceChart';
import Sidebar from './components/sidebar';

const App = () => {
  return (
   <div>
    <Topbar />
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Sidebar/>
      </Grid>
      <Grid item xs={10}>
        <Stack direction="row" spacing={3}>    
        <NewsCardContainer>
      <NewsCard/>
    </NewsCardContainer>
    <MarketSummaryCardContainer>
      <MarketSummaryCard />
    </MarketSummaryCardContainer>
    </Stack>
    <StockPriceChart symbol={undefined}/>
      </Grid>
    </Grid>
   
    </div>
  );
};


export default App;
