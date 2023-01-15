import { ImageList, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillGithub } from 'react-icons/ai'

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

export const ButtonLink = styled.a`
    padding: 10px;
    background-color: var(--black);
    color: var(--white);
    height: 45px;
    margin: auto;
    box-shadow: 5px 5px black;
    text-decoration: none;
    
`;

export const GithubLogo = styled(AiFillGithub)`
    vertical-align: bottom;
`;