import styled from 'styled-components';

export const HomeContainer = styled.section`
  display: grid;
  justify-items: center;
  gap: 5rem;
  color: ${({ theme }) => theme.colors.neutral};

  div {
    text-align: center;
    padding-inline: 1rem;
    h1 {
      font-family: 'Barlow Condensed', sans-serif;
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.colors.lighter};
      letter-spacing: ${({ theme }) => theme.heading5.spacing};
      span {
        letter-spacing: normal;
        font-size: clamp(6rem, 13vw + 1rem, 8rem);
        font-family: 'Bellefair', serif;
        color: ${({ theme }) => theme.colors.white};
      }
    }
    p {
      max-width: 22rem;
      margin-inline: auto;
    }
  }
  button {
    font-size: 1.5rem;
    font-size: clamp(1.5rem, 4vw, 2rem);
    text-transform: uppercase;
    font-family: 'Bellefair', serif;
    height: 10rem;
    width: 10rem;
    height: clamp(11rem, 32vw + 1rem, 15rem);
    width: clamp(11rem, 32vw + 1rem, 15rem);
    border-radius: 50%;
    border: none;
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
      background-color: red;
      border-radius: 50%;
      z-index: -1;
      transform: scale(0);
      transition: 0.75s linear;
    }
    &:hover::before {
      transform: scale(1.5);
    }
  }

  @media screen and (min-width: 700px) {
    p {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    align-content: end;
    div {
      /* padding: 0; */
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
