import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center; 
`;

export const Content = styled.div`
    padding: 5%;

    h1{
        font-size: 3rem;
    }

    p{
        font-size: 1.2rem;
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
`;

export const HeroImage = styled.img`
    width: 10rem;
    background-color: var(--porcelainBlue);
    border-radius: 100px;
    padding: 10px;
`