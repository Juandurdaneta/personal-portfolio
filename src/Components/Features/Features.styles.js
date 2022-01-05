import styled from "styled-components";

export const Wrapper = styled.div`

    padding: 4% 20%;

    @media screen and (max-width: 768px) {
        
        padding: 5%
    
    }


`;

export const Content = styled.div`
    padding: 50px 0px;
    background-color: var(--gray);
    width: 100%;
    height: 35rem;
    text-align: center;

    h1{
        display: inline;
    }

    @media screen and (max-width: 768px) {

        height: 100%;

        h1{
            font-size: 2rem
        }

        p{
            font-size: .8rem
        }
    }
`;

export const Cards = styled.div`
    margin-top: 20px;
    display: flex;
    position: absolute;
    left: 8rem;

    @media screen and (max-width: 768px) {
        display: block;
        position: static;

    }


`