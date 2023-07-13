import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    background: #e9ecef;
  }

  main {
    padding-top: 4rem;
    width: 40rem;
    height: 100vh;
    background: white;
    margin: auto;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  ul,li {
    list-style: none;
  }

  button, input {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    font: inherit;
  }

  input {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
