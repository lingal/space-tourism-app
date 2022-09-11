import { createGlobalStyle } from 'styled-components';

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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: hidden;
}

h1,h2,h3,h4 {
  font-family: 'Barlow Condensed', sans-serif;
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
