import { Drawer, IconButton, Stack } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import React from 'react';

interface SidebarProps {
    isOpen ?: boolean;

  // Add any props your sidebar component needs, like isOpen (boolean)
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false }: SidebarProps) => {
  // JSX for your sidebar content
  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <Drawer
        variant="temporary"
  ModalProps={{
    keepMounted: false,
  }}
/>
<Stack direction="column" spacing={2}>
        <IconButton>
            <BookmarkIcon />
        </IconButton>
        <IconButton>
            <QueryStatsIcon />    
        </IconButton>
        <IconButton>
            <MenuBookIcon />
        </IconButton>
        <IconButton>
            <BookmarkBorderIcon />
        </IconButton>
        </Stack>
        
    </div>
  );
};

export default Sidebar;
