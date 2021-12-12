import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 10px 0px;
    margin: 0 auto;
`;

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    
    a{
        margin: 1em;
    }
`;