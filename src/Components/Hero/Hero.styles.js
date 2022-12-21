import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center; 
`;

export const Content = styled.div`
    padding: 5%;
    height: 90vh;

    h1{
        font-size: 3rem;
    }

    p{
        font-size: 1.2rem;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 768px) {

        padding: 2%;
        margin: 0;


        h1{
            font-size: 2rem;
        }
        p{
            font-size: .8rem;
        }

        h2{
            font-size: 1.4rem;
        }

      }
        
`;

export const HeroImage = styled.img`
    width: 10rem;
    background-color: var(--porcelainBlue);
    border-radius: 100px;
    padding: 10px;
    @media screen and (max-width: 768px) {
        margin-top: 40px
    }
`