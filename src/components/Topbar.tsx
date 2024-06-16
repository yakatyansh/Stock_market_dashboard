import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

interface AppBarProps {
}

const  TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Hello, Jane
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
          For you
        </Typography>
        <Typography variant="h6" color="inherit">
          Screener
        </Typography>
        <Typography variant="h6" color="inherit">
          Q
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
