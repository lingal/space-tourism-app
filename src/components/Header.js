import React, { useContext } from 'react';
import { SidebarContext } from '../utils/Context';
import Logo from '../assets/shared/logo.svg';
import BarsIcon from '../assets/shared/icon-hamburger.svg';
import CloseIcon from '../assets/shared/icon-close.svg';
import { Navbar } from '../components';
import { StyledHeader } from './styles/';

const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  return (
    <>
      <StyledHeader>
        <div className="logo">
          <img src={Logo} alt="space logo" />
        </div>
        <span>&nbsp;</span>
        <button
          onClick={() => setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen)}
        >
          <img src={isSidebarOpen ? CloseIcon : BarsIcon} alt="" />
        </button>
        <Navbar />
      </StyledHeader>
    </>
  );
};

export default Header;
