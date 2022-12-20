import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 7% 12%;
`;

export const Content = styled.div`
    h1{
        display: inline;
        font-size: 2.5rem;
        font-weight: 600;
    }

    @media screen and (max-width: 768px) {
        h1{
            font-size: 2rem;
        }
    }

`;

export const Experience = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin-top: 20px;

    h2{
        font-size: 1.6rem;
        font-weight: 600;
    }

    .entry{

    }

    @media screen and (max-width: 768px) {

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 50px;
        grid-row-gap: px;

        h2{
            font-size: 1.2rem;
        }
    }

`;