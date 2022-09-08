import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark};
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  font-family: 'Barlow Condensed', sans-serif;
}

h1,h2,h3,h4 {
  font-family: 'Bellefair', serif;
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
