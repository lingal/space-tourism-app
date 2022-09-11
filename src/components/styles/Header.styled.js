import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  .logo {
    margin-left: clamp(1.5rem, 5vw, 2.5rem);
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1000;
    display: none;
    margin-right: clamp(1.5rem, 5vw, 2rem);
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
        a {
          height: 100%;
          display: inline-flex;
          align-items: center;

          &:hover {
            border-bottom: 2px solid ${({ theme }) => theme.colors.white};
          }
        }
        span {
          margin-right: 0.5rem;
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
    margin-top: 0;
    nav {
      padding-inline: 3rem;
      ul li span {
        display: none;
      }
    }
  }
`;
