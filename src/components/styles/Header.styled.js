import styled from 'styled-components';

export const StyledHeader = styled.header`
width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    margin-left: clamp(1.5rem, 5vw, 2.5rem);
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1000;
    display: block;
    margin-right: clamp(1.5rem, 5vw, 2rem);
  }

  nav {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.faded10};
    backdrop-filter: blur(30px);
    display: none;
    ul {
      height: 100%;
      display: flex;
      gap: 50px;
      li {
        a {
          height: 100%;
          display: inline-flex;
          align-items: center;
          &:hover {
            border-bottom: 2px solid ${({ theme }) => theme.colors.faded50};
          }
        }
        span {
          margin-right: 0.5rem;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    button {
      display: none;
    }
    nav {
      display: block;
      padding-inline: 3rem;
      ul li span {
        display: none;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    margin-top: 2rem;
    nav {
      padding-left: clamp(2rem, 10vw, 10rem);
      padding-right: 15vw;
      ul li span {
        display: inline;
      }
    }
  }
`;
