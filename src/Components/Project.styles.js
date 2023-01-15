import { ImageList, ImageListItem } from "@mui/material";
import styled from "styled-components";

export const ImageListGrid = styled(ImageList)`
    background-color: rgb(248, 248, 248);
    border: 1px solid rgba(0,0,0,0.20);
    border-radius: 15px;
`;

export const ImageListGridItem = styled(ImageListItem)`
    border-radius: 15px;
    border: 1px solid rgba(0,0,0,0.20);
    width: 100%;
    :hover{
        cursor: pointer;
    }

`;

export const ImageItem = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover !important;
    border-radius: 15px;
`;

