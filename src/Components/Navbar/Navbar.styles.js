import styled from "styled-components";
import { FaRegEnvelope } from 'react-icons/fa';

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
        text-decoration: none;
        color: var(--black);
    }
`;

export const Email = styled.div`
    display: flex;
    justify-content: space-between;

    p{
        margin: 1em;
    }
    
`;

export const EmailIcon = styled(FaRegEnvelope)`
    font-size: 1.5rem;
`