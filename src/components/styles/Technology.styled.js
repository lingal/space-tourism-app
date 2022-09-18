import styled from 'styled-components';

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
    /* width: 100%; */
  }

  .numbered-indicators {
    grid-area: indicators;
    display: flex;
    gap: 1rem;
    justify-self: center;

    & > * {
      height: 3rem;
      width: 3rem;
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
      margin-bottom: 1rem;
      font-family: 'Bellefair', serif;
    }
    & > p:last-of-type {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.neutral};
      max-width: 48ch;
      margin-inline: auto;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    h1 {
      text-align: unset;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-areas:
      'title title title'
      'indicators desc image';
    grid-template-columns: 1fr 1fr 1fr;

    img {
      height: 25rem;
    }

    .numbered-indicators {
      flex-direction: column;
    }
  }
`;
