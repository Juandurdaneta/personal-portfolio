import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 2% 15%;
    h1{
        font-size: 2.5rem;
    }

    @media screen and (max-width: 768px) {
        h1{
            font-size: 1.6rem;
            text-align: center;
        }
    }

`;

export const FormWrapper = styled.div`
    margin-top: 30px;
   
`;

export const FormControl = styled.div`
    label, input {
        display: block;
    }
    width: 100%; 

`;

export const FormInput = styled.input`
    border: none;
    background-color: rgb(250, 250, 250);
    padding: 10px;   
    width: 100%; 

    &:focus {
        outline: none;
        border: 1px solid black;
    }
`;

export const FormTextArea = styled.textarea`
    background-color: rgb(250, 250, 250);
    border: none;
    width: 100%; 
    height: 200px;
    padding: 10px;
`;

export const SubmitFormButton = styled.button`
    color: var(--white);
    background-color: var(--black);
    border: none;
    width: 10rem;
    padding: 10px;
    margin-top: 30px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
