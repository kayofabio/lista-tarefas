import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

    transition: all 0.3s ease;
  }
`;

export default GlobalStyle;