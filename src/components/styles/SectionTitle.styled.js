import styled from 'styled-components';

export const StyledSectionTitle = styled.h1`
  letter-spacing: ${({ theme }) => theme.letterSpacing.large};
  font-size: ${({ theme }) => theme.fontSizes.heading5};
  text-transform: uppercase;
  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.faded50};
    margin-right: 0.5rem;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.menium}) and (max-width: ${({ theme }) =>
      theme.breakpoints.large}) {
    margin-left: clamp(1.5rem, 5vw, 2.5rem);
  }
`;
