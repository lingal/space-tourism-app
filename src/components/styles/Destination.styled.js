import styled from 'styled-components';
import { breakpoints } from './breakpoints';


export const DestinationContainer = styled.section`
  text-transform: uppercase;
  text-align: center;
  display: grid;
  justify-items: center;
  /* gap: 1.75rem; */
  row-gap: 1.75rem;
  grid-template-areas:
    'title'
    'image'
    'tabs'
    'desc';

  h1 {
    grid-area: title;
  }
  img {
    grid-area: image;
    max-width: 16rem;
  }
  .tabs-container {
    grid-area: tabs;
    display: inline-flex;
    gap: clamp(1rem, 1vw + 1rem, 2rem);
    button {
      background: transparent;
      border: none;
      text-transform: uppercase;
      letter-spacing: ${({ theme }) => theme.letterSpacing.small};
      color: ${({ theme }) => theme.colors.neutral};
      padding-bottom: 0.5rem;
      cursor: pointer;
      &.selected {
        color: ${({ theme }) => theme.colors.white};
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
      ${breakpoints('font-size', 'rem', [{ 768: 4.5 }])};
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
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    h1 {
      justify-self: start;
    }

    article {
      & > div {
        flex-direction: row;
        justify-content: space-evenly;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    /* column-gap: 6rem; */
    text-align: left;
    align-items: center;
    justify-items: start;
    grid-template-areas:
      '. title title .'
      '. image tabs .'
      '. image desc .';

    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(
        1rem,
        1fr
      );

    img {
      max-width: 80%;
    }

    .tabs-container {
      justify-self: start;
      /* width: 80%; */
    }

    article {
      margin-bottom: 0;
      /* width: 80%; */
      justify-self: start;
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
