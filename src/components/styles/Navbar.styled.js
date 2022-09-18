import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  ul {
    text-transform: uppercase;

    li {
      letter-spacing: ${({ theme }) => theme.letterSpacing.small};
      a {
        color: ${({ theme }) => theme.colors.white};
      }
      span {
        font-weight: bold;
      }
    }

    .selected {
      border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    }
  }
`;
