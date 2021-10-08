import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --orange : #FF6F00;
        --white : #FFFFFF;
        --black : #000000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--white);
        -webkit-font-smooth: antialiased;
    }

    html {
        @media (min-width: 1080px) {
            font-size: 93.75%;
        }
        @media (min-width: 720px) {
            font-size: 87.5%;
        }
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, strong {
        font-weight: 700;
    }
    h4, h5 {
        font-weight: 500;
    }
    h6 {
        font-weight: 300;
    }
`;