import styled from 'styled-components';
import { breakpoints } from './breakpoints';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  gap: 1.5rem;
  ${breakpoints('gap', 'rem', [{ 768: 2.5 }])};

  /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 2.5rem;
  } */
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-top: 2rem;
  }
`;
