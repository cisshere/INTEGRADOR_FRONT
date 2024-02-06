import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html{
    scroll-behavior: smooth;
    background-color: white;
  }
    body {
      margin: 0;
      padding: 0;
      font-family: 'ABeeZee', sans-serif;
    }
    h4 {
      color: black;
      margin: 0;
    }
    p{
      margin: 0;
      color: black;
    }
    a {
    text-decoration: none;
    color: black;
    }
    a:visited {
    color: black;
    }
    li {
    list-style: none;
    }
`;
