import React, { useState } from 'react';
import Logo from '../assets/shared/logo.svg';
import BarsIcon from '../assets/shared/icon-hamburger.svg';
import CloseIcon from '../assets/shared/icon-close.svg';
import { Navbar } from '../components';
import { StyledHeader } from './styles/';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <StyledHeader>
        <div className="logo">
          <img src={Logo} alt="space logo" />
        </div>
        <button onClick={() => setIsOpen((prevState) => !prevState)}>
          <img src={isOpen ? CloseIcon : BarsIcon} alt="" />
        </button>
        <Navbar />
      </StyledHeader>
    </>
  );
};

export default Header;
