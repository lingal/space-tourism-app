import styled from 'styled-components';

export const CrewContainer = styled.section`
  display: grid;
  justify-items: center;
  grid-template-areas:
    ' title'
    ' image'
    'underline'
    'indicators'
    'desc';
  h1 {
    grid-area: title;
  }
  img {
    grid-area: image;
    width: 12rem;
  }
  .underline {
    grid-area: underline;
  }

  .dot-indicators {
    grid-area: indicators;
    display: flex;
    gap: 1rem;
    button {
      padding: 0.35rem;
      border-radius: 50%;
      border: none;
      background-color: #fff;

      &.selected {
        background-color: red;
      }
    }
  }
  article {
    grid-area: desc;
  }

  @media screen and (min-width: 700px) {
    grid-template-areas:
      ' title'
      'desc'
      'indicators'
      ' image';

    .underline {
      display: none;
    }
  }
`;
