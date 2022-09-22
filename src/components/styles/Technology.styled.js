import styled from 'styled-components';
import { breakpoints } from './breakpoints';

export const TechnologyContainer = styled.section`
  display: grid;
  grid-template-areas:
    'title'
    'image'
    'indicators'
    'desc';
  gap: 1.75rem;

  h1 {
    grid-area: title;
    text-align: center;
  }

  img {
    grid-area: image;
    width: 100%;
  }

  .numbered-indicators {
    grid-area: indicators;
    display: flex;
    gap: 1rem;
    justify-self: center;

    & > * {
      font-size: 1rem;
      ${breakpoints('font-size', 'rem', [{ 768: 1.25 }, { 1024: 1.5 }])};
      font-family: 'Bellefair', serif;
      height: clamp(3rem, 4vw + 1rem, 5rem);
      width: clamp(3rem, 4vw + 1rem, 5rem);
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.faded25};
      border-radius: 50%;
      color: #fff;
      cursor: pointer;

      &:hover {
        border-color: ${({ theme }) => theme.colors.white};
      }

      &.selected {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.dark};
      }
    }
  }

  article {
    grid-area: desc;
    text-align: center;

    & > *:not(p:last-child) {
      text-transform: uppercase;
    }

    h2 {
      color: ${({ theme }) => theme.colors.neutral};
      font-size: 1rem;
      letter-spacing: 2.35px;
    }

    & > p:first-of-type {
      font-size: 1.5rem;
      ${breakpoints('font-size', 'rem', [{ 768: 2.5 }])};
      font-family: 'Bellefair', serif;
      margin-bottom: 1rem;
    }
    & > p:last-of-type {
      font-size: 1rem;
      ${breakpoints('font-size', 'rem', [{ 768: 1.1 }])};
      color: ${({ theme }) => theme.colors.neutral};
      max-width: 48ch;
      margin-inline: auto;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    h1 {
      text-align: unset;
      justify-self: start;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-areas:
      '. title title title .'
      '. indicators desc image .';

    grid-template-columns:
      minmax(1rem, 1fr) 5rem minmax(0, 25rem) minmax(24rem, 1fr)
      minmax(1rem, 1fr);

    gap: 0;
    column-gap: 3rem;
    img {
      grid-column: 4 / -1;
      width: 80%;
      height: 25rem;
      justify-self: flex-end;
    }

    .numbered-indicators {
      justify-self: start;
      align-self: center;
      flex-direction: column;
    }
    article {
      align-self: center;
      text-align: left;

      & > p:last-of-type {
        max-width: 44ch;
        margin-inline: 0;
      }
    }
  }
`;
