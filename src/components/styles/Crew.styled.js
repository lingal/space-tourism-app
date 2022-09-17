import styled from 'styled-components';

export const CrewContainer = styled.section`
  height: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-areas:
    'title'
    'image'
    'indicators'
    'desc';

  row-gap: 2rem;
  h1 {
    grid-area: title;
  }

  & > div:first-of-type {
    grid-area: image;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.faded25};
    img {
      height: 14rem;
      margin-inline: auto;
    }
  }

  .dot-indicators {
    grid-area: indicators;
    display: flex;
    gap: 1rem;
    button {
      padding: 0.35rem;
      border-radius: 50%;
      border: none;
      background-color: ${({ theme }) => theme.colors.faded25};
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.colors.faded50};
      }

      &.selected {
        background-color: ${({ theme }) => theme.colors.white};
      }
    }
  }
  article {
    grid-area: desc;
    text-align: center;

    & > *:not(p:last-child) {
      text-transform: uppercase;
      font-family: 'Bellefair', serif;
    }

    h2 {
      color: ${({ theme }) => theme.colors.faded50};
      font-size: 1.15rem;
    }

    & > p:first-of-type {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    & > p:last-of-type {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.neutral};
      max-width: 38ch;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-areas:
      'title'
      'desc'
      'indicators'
      'image';

    row-gap: 4rem;
    h1 {
      justify-self: left;
    }

    & > div:first-of-type {
      border: none;
      img {
        /* width: 70%; */
        /* height: 30rem; */
        height: 100%;
      }
    }

    article {
      h2 {
        font-size: 1.75rem;
      }

      & > p:first-of-type {
        font-size: 2.5rem;
      }

      & > p:last-of-type {
        font-size: 1.25rem;
        max-width: 52ch;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    grid-template-areas:
      'title image'
      'desc image'
      'indicators image';

    align-items: center;

    & > div:first-of-type {
      height: 100%;
      border: none;
      align-content: flex-end;

      img {
        /* height: 100%; */
        width: 100%;
      }
    }

    article {
      text-align: left;
      justify-self: left;
    }
    .dot-indicators {
      justify-self: left;
    }
  }
`;
