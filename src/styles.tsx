import AppBar from '@mui/material/AppBar/AppBar';
import Card from '@mui/material/Card/Card';
import Typography from '@mui/material/Typography/Typography';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#ffc107',
    },
  },
});

const TopBarContainer = styled(AppBar)`
  background: linear-gradient(to right, #007bff, #17a2b8);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const TopBarLeft = styled('div')`
  display: flex;
  align-items: center;
`;

const TopBarTitle = styled(Typography)`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const TopBarSubTitle = styled(Typography)`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`;

const TopBarRight = styled('div')`
  display: flex;
  align-items: center;
`;

const MarketSummaryCardContainer = styled(Card)`
  background-color: #f5f5f5;
  padding: 1rem;
  width: 100%;
  height: 100%;
  margin-right: 1rem;
`;

const NewsCardContainer = styled(Card)`
  padding: 1rem;
  width: 100%;
  height: 100%;
  margin-left: 1rem;
`;

export default theme;

export {
  TopBarContainer,
  TopBarLeft,
  TopBarTitle,
  TopBarSubTitle,
  TopBarRight,
  MarketSummaryCardContainer,
  NewsCardContainer,
};
