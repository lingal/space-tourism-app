import styled from 'styled-components';

export const TechnologyContainer = styled.section`
  background-color: none;

  .numbered-indicators {
    display: flex;
    gap: 1rem;
    & > * {
      height: 3rem;
      width: 3rem;
      background-color: transparent;
      border: 1px solid #fff;
      border-radius: 50%;
      color: #fff;
      cursor: pointer;
      &.selected {
        background-color: #fff;
        color: red;
      }
    }
  }
`;
