import React from 'react';
import { Container, Grid, Paper, ThemeProvider } from '@mui/material';
import theme, { TopBarContainer, TopBarLeft, TopBarTitle, TopBarSubTitle, TopBarRight, MarketSummaryCardContainer, NewsCardContainer } from './styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SectorPerformance from './components/sectorPerformance';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <TopBarContainer position="static">
          <TopBarLeft>
            <TopBarTitle variant="h6">Hello, Jane</TopBarTitle>
            <TopBarSubTitle variant="h6">For you</TopBarSubTitle>
          </TopBarLeft>
          <TopBarRight>
            <IconButton color="inherit" aria-label="open drawer">
              {/* Add your desired icon here */}
            </IconButton>
            <IconButton color="inherit" aria-label="search">
              {/* Add your desired icon here */}
            </IconButton>
            <IconButton color="inherit" aria-label="notifications">
              {/* Add Notifications Icon here */}
            </IconButton>
            <IconButton color="inherit" aria-label="settings">
              {/* Add Settings Icon here */}
            </IconButton>
          </TopBarRight>
        </TopBarContainer>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h6" color="primary.main">
                      The markets are bullish
                    </Typography>
                  </Grid>
                  <SectorPerformance />
                  <Grid item xs={12}>
                    <Typography variant="h6" color="primary.main">
                      What to know today
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <NewsCardContainer>
                      <Typography variant="body1">
                        Jan Inflation Surges, Squeezing Budgets; S&P 500 Rallies as Markets Face 'Bumpy' 2% Path
                      </Typography>
                    </NewsCardContainer>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <MarketSummaryCardContainer>
                {/* Add your MarketSummaryCard component here */}
              </MarketSummaryCardContainer>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
