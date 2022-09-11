import React, { useState } from 'react';
import Logo from '../assets/shared/logo.svg';
import BarsIcon from '../assets/shared/icon-hamburger.svg';
import CloseIcon from '../assets/shared/icon-close.svg';
import { Navbar } from '../components';
import { StyledHeader } from './styles/';




const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="logo">
          <img src={Logo} alt="space logo" />
        </div>
        <button>
          <img src={BarsIcon} alt="" />
        </button>
        <Navbar />
      </StyledHeader>
    </>
  );
};

export default Header;
