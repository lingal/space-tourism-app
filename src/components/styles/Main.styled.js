import styled from 'styled-components';

export const StyledMain = styled.main`
  padding-top: 1.5rem;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding-top: 5rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-top: 0rem;
    height: calc(100vh - 5rem - 2rem);
    align-content: center;
    grid-template-columns: 80%;
  }
`;
