import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../utils/constants';
import { StyledNavbar } from './styles/Navbar.styled';

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        {links.map((link) => {
          const { id, title, url } = link;
          return (
            <li key={id}>
              <NavLink
                state={{ isSidebarOpen: true }}
                to={url}
                className={({ isActive }) => (isActive ? 'selected' : '')}
              >
                <span>0{id - 1}</span>
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
