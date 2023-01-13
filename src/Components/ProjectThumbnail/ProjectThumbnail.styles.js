import styled from "styled-components";

// IMAGE STYLES

export const Image = styled.img`
    width: 100%;
`;

export const ImageContainer = styled.div`
    height: auto;
`;


// THUMBNAIL STYLES

export const ThumbnailFooter = styled.div`
    text-align: start;
    padding: 5px 10px;

    h2,p,h4{
        text-align: start;
    }
    h2{
        
        margin: 5px 0 5px;
    }
    p{
        margin-top: 0;
    }
`

export const ThumbnailContainer = styled.div`
    border: 1px solid rgba(0,0,0,0.20);
    border-radius: 3px;
`;