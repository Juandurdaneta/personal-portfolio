import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 15px 0;

    @media screen and (max-width: 768px) {
        padding: 10px 0;
    }


`;

export const Content = styled.div`
    a{
        font-size: 1.3rem;
        text-decoration: none;
        color: black;
        font-weight: 500;
    }

    @media screen and (max-width: 768px) {
        a{
            font-size: 1rem
        }
    }
`;