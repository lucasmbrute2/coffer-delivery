import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import coffeImage from "./assets/Coffe/Americano.svg";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme} />
        <img src={coffeImage} alt="" />
        <GlobalStyle />
    </React.StrictMode>
);
