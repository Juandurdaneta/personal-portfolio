import React from "react";
import { Image, ImageContainer } from "./ProjectThumbnail.styles";

const ProjectThumbnail = ({title, description}) => (
    <>
        <ImageContainer>
            <Image src={require(`../../images/${title}/cover.png`)} />
        </ImageContainer>
        <h2>{title}</h2>
        <p>{description}</p>
     </>
)

export default ProjectThumbnail;