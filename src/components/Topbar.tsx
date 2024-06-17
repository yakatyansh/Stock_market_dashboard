import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface TopbarProps {
}

const Topbar = () => {
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(to right, #14151b, #00000)' }}>
      <Toolbar variant="dense">
        <Stack direction="column" spacing={2}>
          <Typography variant="h6" color="inherit">
            Hello, Jane
          </Typography>
          <Typography variant="h6" color="inherit" sx={{ fontSize: '0.8rem'  }}>
            For you
          </Typography>
        </Stack>
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
        </Typography>
        <IconButton color="inherit" aria-label="open drawer">
          
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
       <IconButton color="inherit" aria-label="search">
        <SearchIcon />
        </IconButton> 
        
        
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
