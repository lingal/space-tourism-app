import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* .logo {
    flex-grow: 2;
  } */

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1000;
    display: none;
  }

  .underline {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -250px;
      height: 2px;
      width: 400px;
      background-color: red;
      /* margin-left: 50px; */
      z-index: 100000;
    }
  }

  nav {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.light};
    backdrop-filter: blur(30px);
    padding-left: clamp(2rem, 10vw, 10rem);
    padding-right: 15vw;
    ul {
      height: 100%;
      display: flex;
      gap: 50px;
      li {
        height: 100%;
        display: grid;
        align-items: center;
        span {
          margin-right: 0.5rem;
        }

        &:hover {
          border-bottom: 2px solid ${({ theme }) => theme.colors.white};
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    button {
      display: block;
    }
    nav {
      display: none;
    }
  }

  @media screen and (max-width: 1024px) {
    nav {
      padding-inline: 3rem;
      ul li span {
        display: none;
      }
    }
  }
`;
