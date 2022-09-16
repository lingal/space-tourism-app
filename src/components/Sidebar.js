import React from 'react';
import Navbar from './Navbar';
import { StyledSidebar } from './styles/';

const Sidebar = ({ isSidebarOpen, isClosed }) => {
  return (
    <StyledSidebar className={isSidebarOpen ? 'show' : ''}>
      <Navbar />
    </StyledSidebar>
  );
};

export default Sidebar;
