import styled from 'styled-components';

export const StyledMain = styled.main`
  /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding-bottom: 5rem;
  } */

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 85%;
    margin-inline: auto;
  }
`;
