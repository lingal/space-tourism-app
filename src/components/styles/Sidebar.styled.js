import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  background: ${({ theme }) => theme.colors.faded10};
  backdrop-filter: blur(30px);
  position: fixed;
  inset: 0 0 0 30%;
  z-index: 999;
  padding-left: 2rem;
  transform: translateX(200%);
  transition: 1s ease;

  &.show {
    transform: translateX(0);
  }

  nav {
    position: relative;
    top: 20%;
  }

  ul {
    display: grid;
    gap: ${({ theme }) => theme.space.gap.mobile};

    li > * span {
      margin-right: 0.5rem;
    }
  }
`;
