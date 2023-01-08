import styled from "styled-components";


// WRAPPER AND HEADER
export const Wrapper = styled.div`
    padding: 0 12% 8%;
    text-align: center;   

`;

export const WrapperHeader = styled.div`
    display: flex;
    margin-bottom: 2rem;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        display: block;
        a {
            display: none;
        }
    }

    
`;

export const ButtonLink = styled.a`
    padding: 10px;
    background-color: var(--lightGreen);
    color: var(--white);
    height: 45px;
    margin-top: 15px;
    box-shadow: 5px 5px black;


    @media screen and (max-width: 768px) {
        display: block;
    }
    
`;

export const SmallerScreenButtonDisplay = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
    }
`

// END WRAPPER AND HEADER 

