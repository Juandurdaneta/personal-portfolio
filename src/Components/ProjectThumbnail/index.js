import React from "react";
import { Image, ImageContainer } from "./ProjectThumbnail.styles";

const ProjectThumbnail = ({title, summary}) => (
    <>
        {
            
        }
        <ImageContainer>
            <Image src={require(`../../images/${title}/cover.png`)} />
        </ImageContainer>
        <h2>{title}</h2>
        <p>{summary}</p>
     </>
)

export default ProjectThumbnail;