import React, { useState } from 'react';
import Logo from '../assets/shared/logo.svg';
import BarsIcon from '../assets/shared/icon-hamburger.svg';
import CloseIcon from '../assets/shared/icon-close.svg';
import { Navbar } from '../components';
import { StyledHeader } from './styles/Header.styled';

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
        <div className="underline"></div>
        <Navbar />
      </StyledHeader>
    </>
  );
};

export default Header;
