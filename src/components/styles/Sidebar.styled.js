import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  display: none;
  background: ${({ theme }) => theme.colors.light};
  backdrop-filter: blur(30px);
  position: fixed;
  inset: 0 0 0 30%;
  z-index: 999;

  nav {
    position: relative;
    top: 20%;
  }

  /* @media screen and (max-width: 500px) {
    nav{

    }
  } */
  ul {
    display: grid;
    gap: ${({ theme }) => theme.navbar.gap.mobile};
  }

  
`;
