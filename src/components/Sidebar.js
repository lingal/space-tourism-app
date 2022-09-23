import React, { useContext } from 'react';
import Navbar from './Navbar';
import { StyledSidebar } from './styles/';
import { SidebarContext } from '../utils/Context';

const Sidebar = () => {
  const { isSidebarOpen } = useContext(SidebarContext);
  return (
    <StyledSidebar className={isSidebarOpen ? 'show' : ''}>
      <Navbar />
    </StyledSidebar>
  );
};

export default Sidebar;
