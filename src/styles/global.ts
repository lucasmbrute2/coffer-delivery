import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme["purple-100"]}
    }

    body {
        background-color: ${({ theme }) => theme["white-background"]};
        max-width: calc(100% - 20rem);
        margin: 0 auto;
    }

    body, input, textarea, button {
        font-family: 'Roboto', 'sans-serif';
        font-weight: 400;
        font-size: 1rem;        
    }

`;
