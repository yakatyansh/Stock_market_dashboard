import React from 'react';
import { Drawer } from '@mui/material';

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

    </div>
  );
};

export default Sidebar;
