import styled from 'styled-components';

export const HomeContainer = styled.section`
  display: grid;
  justify-items: center;
  gap: 5rem;
  color: ${({ theme }) => theme.colors.neutral};

  div {
    text-align: center;
    padding-inline: 2rem;

    h1 {
      font-family: 'Barlow Condensed', sans-serif;
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.fontSizes.heading5};
      letter-spacing: ${({ theme }) => theme.letterSpacing.medium};
      span {
        letter-spacing: normal;
        font-size: ${({ theme }) => theme.fontSizes.heading1};
        font-family: 'Bellefair', serif;
        color: ${({ theme }) => theme.colors.white};
      }
    }
    p {
      max-width: 54ch;
      margin-inline: auto;
      letter-spacing: 0.5px;
    }
  }
  a {
    align-self: flex-end;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.dark};
    font-size: clamp(1.5rem, 4vw, 2rem);
    text-transform: uppercase;
    font-family: 'Bellefair', serif;
    height: clamp(10rem, 32vw + 1rem, 15rem);
    width: clamp(10rem, 32vw + 1rem, 15rem);
    border-radius: 50%;
    border: none;
    display: grid;
    place-content: center;
    position: relative;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      top: 50;
      left: 0;
      inset: 0 0 0 0;
      height: 100%;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.faded25};
      border-radius: 50%;
      z-index: -1;
      transform: scale(0);
      transition: 0.5s ease-in-out;
    }
    &:hover::before {
      transform: scale(1.5);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    p {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: 1fr 1fr;
    align-content: end;
    div {
      text-align: left;
      p {
        margin: 0;
        line-height: 1.75;
      }
    }
    button {
      align-self: flex-end;
    }
  }
`;
