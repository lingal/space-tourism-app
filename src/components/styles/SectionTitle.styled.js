import styled from 'styled-components';
import { breakpoints } from './breakpoints';

export const StyledSectionTitle = styled.h1`
  letter-spacing: ${({ theme }) => theme.letterSpacing.large};
  font-size: 1rem;
  ${breakpoints('font-size', 'rem', [{ 768: 1.25 }, { 1024: 1.75 }])};
  text-transform: uppercase;
  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.faded50};
    margin-right: 0.5rem;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.medium}) and (max-width: ${({ theme }) =>
      theme.breakpoints.large}) {
    margin-left: clamp(1.5rem, 5vw, 2.5rem);
  }
`;
