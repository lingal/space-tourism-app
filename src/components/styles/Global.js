import { createGlobalStyle } from 'styled-components';
import { breakpoints } from './breakpoints';

const GlobalStyles = createGlobalStyle`

html {
  font-size: 100%;

  font-size-adjust: auto;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-size: 0.9375rem;
  color: #ffffff;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark};
  background-image: url(${({ bg }) => bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
${breakpoints('overflow-Y', '', [{ 1024: 'hidden' }])};

  /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1rem;
  } */
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
     /* font-size: 1.125rem; */
     /* overflow-Y: hidden; */
  }
}

h1,h2,h3,h4 {
  font-weight: 400;
}


ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: #ffffff;
}

img {
  display: block;
  max-width: 100%;
}


`;

export default GlobalStyles;
