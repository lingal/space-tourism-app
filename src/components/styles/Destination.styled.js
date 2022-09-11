import styled from 'styled-components';

export const DestinationContainer = styled.section`
  height: 100%;
  text-transform: uppercase;
  text-align: center;
  display: grid;

  img {
    max-width: 12rem;
    margin-inline: auto;
  }
  .tabs-container {
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
      &.selected {
        color: #fff;
        border-bottom: 3.5px solid;
      }
    }
  }
  h2 {
    font-size: 5rem;
  }
`;
