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
   


    .entry{
        width: 40%;
        flex-grow: 1;
        min-height: 120px;
        box-sizing: border-box;
        margin: 0 5px 10px;
        justify-content: space-between;
        text-align: start;
    }

    h2{
        font-size: 1.7rem;
        margin-bottom: 5px;
    }

    .references-list{
      display: flex;
      flex-wrap: wrap;
    }

    .references-list > div{
        flex: 50%;
    }

    @media screen and (max-width: 768px) {

        text-align: center;
     

        h1{
            font-size: 2rem;
        }
        

        .entry{
            width: 100%;
            text-align: center;
        }

        .references-list > div{
            flex: 100%;
        }
    

    }

`;

export const Experience = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

`;

