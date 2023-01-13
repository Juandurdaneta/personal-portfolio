import React from "react";
import { Image, ImageContainer, ThumbnailContainer, ThumbnailFooter } from "./ProjectThumbnail.styles";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink";
import { CgArrowTopRight } from 'react-icons/cg';

const ProjectThumbnail = ({title, summary, id, onlyThumb}) => (
    !onlyThumb ? 
    <ThumbnailContainer>
        <Link to={`/projects/${id}`}>
            <ImageContainer>
                <Image src={require(`../../images/${title}/cover.png`)} />
            </ImageContainer>
        </Link>
        <ThumbnailFooter>
            <h2>{title}</h2>
            <p>{summary}</p>
            <Link to={`/projects/${id}`} style={{textDecoration: 'none', color:'black'}}>
                <h4>See details <CgArrowTopRight/></h4>
            </Link>
        </ThumbnailFooter>
        
     </ThumbnailContainer> :

    <>
        <ImageContainer>
            <Image src={require(`../../images/${title}/cover.png`)} />
        </ImageContainer>
    </>

)

export default ProjectThumbnail;