import styled from 'styled-components';
import { breakpoints } from './breakpoints';

export const CrewContainer = styled.section`
  align-self: flex-end;
  display: grid;
  justify-items: center;
  grid-template-areas:
    'title'
    'image'
    'indicators'
    'desc';

  gap: 1.75rem;
  h1 {
    grid-area: title;
    align-self: flex-start;
  }

  & > div:first-of-type {
    grid-area: image;
    width: 90%;
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
      font-size: 1rem;
      ${breakpoints('font-size', 'rem', [{ 768: 1.75 }])};
    }

    & > p:first-of-type {
      font-size: 1.5rem;
      ${breakpoints('font-size', 'rem', [{ 768: 2.5 }])};
      margin-bottom: 1rem;
    }
    & > p:last-of-type {
      font-size: 1rem;
      ${breakpoints('font-size', 'rem', [{ 768: 1.1 }])};
      color: ${({ theme }) => theme.colors.neutral};
      max-width: 38ch;
      ${breakpoints('max-width', 'ch', [{ 768: 52 }])};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
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
        height: 100%;
      }
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-areas:
      '. title title .'
      '. desc image .'
      '. indicators image .';

    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(
        1rem,
        1fr
      );
    gap: 0;


    & > div:first-of-type {
      border: none;

      img {
        grid-row: 1 / -5;
        align-self: flex-end;
        height: 28rem;
        width: auto;
      }
    }

    article {
      align-self: flex-end;
      text-align: left;
      justify-self: left;
    }
    .dot-indicators {
      align-self: center;
      justify-self: left;
    }
  }
`;
