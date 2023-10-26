import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: ${({ theme }) => theme.colours.main};
    font-family: ${({ theme }) => theme.typography.family};
    background-color:${({ theme }) => theme.colours.background} ;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button,
  input {
    font-family: inherit;
  }

  h1,
  h2 {
    margin: 0;
  }
`;

export default GlobalStyle;
