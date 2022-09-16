import styled from 'styled-components';

export const StyledMain = styled.main`
  padding-top: 1.5rem;
  display: grid;
  justify-content: center;
  grid-template-columns: 90%;

  @media screen and (min-width: 768px) {
    padding-top: 5rem;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 0;
    height: calc(100vh - 5rem - 2rem);
    align-content: center;
    grid-template-columns: 80%;
  }
`;
