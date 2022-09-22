import styled from 'styled-components';
import { breakpoints } from './breakpoints';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  gap: 1.5rem;
  ${breakpoints('gap', 'rem', [{ 768: 2.5 }])};
  ${breakpoints('padding-top', 'rem', [{ 1024: 2 }])};
`;
