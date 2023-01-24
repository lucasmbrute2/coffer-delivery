import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    img {
        filter: drop-shadow(6px 16px 20px black);
    }    

    body {
        background-color: #696969;
        max-width: calc(100% - 20rem);
        margin: 0 auto;
    }


`;
