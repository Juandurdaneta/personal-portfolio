import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 50px;
    @media screen and (max-width: 768px) {
        padding: 10px 60px;
    }
`;

export const Content = styled.div`
    padding: 25px;
    background-color: var(--white);
    color: var(--black);
    border-radius: 5px;
    width: 300px;
    text-align: left;

    h1{
        font-size: 4rem;
    }

    p{
        color: gray;
    }

    @media screen and (max-width: 768px) {
        text-align:center;
    }

`;
