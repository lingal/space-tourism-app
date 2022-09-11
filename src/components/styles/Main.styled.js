import styled from 'styled-components';

export const StyledMain = styled.main`
  height: calc(100vh - 4rem);
  display: grid;
  align-items: center;

  @media screen and (max-width: 1024px) {
    margin-top: clamp(1.5rem, 3vw, 3.5rem);
  }
`;
