import React from 'react';
import Navbar from './Navbar';
import { StyledSidebar } from './styles/';

const Sidebar = () => {
  const isOpen = false;

  return (
    <StyledSidebar>
      <Navbar />
    </StyledSidebar>
  );
};

export default Sidebar;
