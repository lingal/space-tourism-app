import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../utils/constants';
import { StyledNavbar } from './styles/Navbar.styled';
import { SidebarContext } from '../utils/Context';

const Navbar = () => {
  const { setIsSidebarOpen } = useContext(SidebarContext);

  return (
    <StyledNavbar>
      <ul>
        {links.map((link) => {
          const { id, title, url } = link;
          return (
            <li key={id}>
              <NavLink
                onClick={() => setIsSidebarOpen(false)}
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
