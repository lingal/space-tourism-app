import styled from 'styled-components';

export const StyledSectionTitle = styled.h1`
  letter-spacing: ${({ theme }) => theme.heading5.spacing};
  font-size: ${({ theme }) => theme.heading5.fSize};
  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lighter};
    margin-right: 0.5rem;
  }
`;
