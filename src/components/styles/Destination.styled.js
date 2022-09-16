import styled from 'styled-components';

export const DestinationContainer = styled.section`
  height: 100%;
  text-transform: uppercase;
  text-align: center;
  display: grid;
  justify-items: center;
  gap: 1.75rem;
  grid-template-areas:
    'title'
    'image'
    'tabs'
    'desc';
  grid-template-columns: 1fr;

  h1 {
    grid-area: title;
  }
  img {
    grid-area: image;
    max-width: 16rem;
    margin-inline: auto;
  }
  .tabs-container {
    grid-area: tabs;
    display: flex;
    gap: clamp(1rem, 1vw + 1rem, 2rem);
    button {
      background: transparent;
      border: none;
      text-transform: uppercase;
      letter-spacing: ${({ theme }) => theme.navbar.spacing};
      color: ${({ theme }) => theme.colors.neutral};
      padding-bottom: 0.5rem;
      cursor: pointer;
      &.selected {
        color: #fff;
        border-bottom: 3.5px solid;
      }
    }
  }
  article {
    grid-area: desc;
    margin-bottom: 3rem;
    h2 {
      font-family: 'Bellefair', serif;
      font-size: 3.5rem;
    }
    & > p {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.neutral};
      text-transform: none;
      max-width: 31rem;
      margin-bottom: 3rem;
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border-top: 1px solid ${({ theme }) => theme.colors.faded25};
      padding-top: 1.5rem;

      h3 {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.neutral};
        letter-spacing: 2.35px;
      }
      p {
        font-family: 'Bellefair', serif;
        font-size: 1.75rem;
      }
    }
  }
  @media screen and (min-width: 768px) {
    h1 {
      justify-self: left;
    }

    article {
      h2 {
        font-size: 4.5rem;
      }
      & > div {
        flex-direction: row;
        justify-content: space-evenly;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    text-align: left;
    /* justify-items: left; */
    grid-template-areas:
      'title title'
      'image tabs'
      'image desc';

      grid-template-columns: 1fr 1fr;
    img {
      max-width: 70%;
    }

    article {
      & > p {
        max-width: 21rem;
      }
      & > div {
        flex-direction: row;
        justify-content: start;
      }
    }
  }
`;
