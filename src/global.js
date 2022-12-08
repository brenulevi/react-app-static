import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Fira Sans', sans-serif;
    transition: background 0.25s linear;
  }
  a {
    color: ${({ theme }) => theme.text};
  }
  a:hover {
    color: ${({ theme }) => theme.textHover};
  }
  .fixed {
    position: fixed;
    bottom: 5%;
    right: 2%;
  }
`;