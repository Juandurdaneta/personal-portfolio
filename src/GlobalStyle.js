import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #fff;
        --maxWidth: 1280px;
        --porcelainBlue: #EAF9FA;
        --black: #3A3B3C;
        --gray: #F4F6FB;
        --lightGreen: #D0EAEC;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    *{
        box-sizing: border-box;
        font-family: 'Outfit', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: var(--white);
        h1{
            font-size: 2rem;
            font-weight: 600;
            color: var(--black);
        }
        h3{
            font-size: 1.1rem;
            font-weight: 600;
        }
        p{
            font-size: 1rem;
            color: var(--black);
        }
    }

    .underlined{
        position: relative;
    }
    .underlined:after{
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        height: 6px;
        width: 100%;
        border: solid 6px var(--lightGreen);
        border-color: var(--lightGreen) transparent transparent transparent;
        border-radius: 100%;   
    }


`