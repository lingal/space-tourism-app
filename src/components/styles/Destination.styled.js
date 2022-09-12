import styled from 'styled-components';

export const DestinationContainer = styled.section`
  height: 100%;
  text-transform: uppercase;
  text-align: center;
  display: grid;
  gap: 1rem;
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
    max-width: 12rem;
    margin-inline: auto;
  }
  .tabs-container {
    grid-area: tabs;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    button {
      background: transparent;
      border: none;
      text-transform: uppercase;
      letter-spacing: ${({ theme }) => theme.navbar.spacing};
      color: ${({ theme }) => theme.colors.neutral};
      line-height: 2;
      cursor: pointer;
      &.selected {
        color: #fff;
        border-bottom: 3.5px solid;
      }
    }
  }
  article {
    grid-area: desc;
    h2 {
      font-family: 'Bellefair', serif;
      font-size: 4rem;
    }
    & > p {
      color: ${({ theme }) => theme.colors.neutral};
      text-transform: none;
      width: 38ch;
      margin-inline: auto;
    }
    .underline {
      height: 1px;
      opacity: 0.25;
      width: 90%;
      background-color: #fff;
      margin-inline: auto;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-areas:
      'title title'
      'image tabs'
      'image desc';
  }
`;
