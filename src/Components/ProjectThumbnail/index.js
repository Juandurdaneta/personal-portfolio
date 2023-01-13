import React from "react";
import { Image, ImageContainer } from "./ProjectThumbnail.styles";
import { Link } from "react-router-dom";


const ProjectThumbnail = ({title, summary, id, onlyThumb}) => (
    !onlyThumb ? 
    <>
        <Link to={`/projects/${id}`}>
            <ImageContainer>
                <Image src={require(`../../images/${title}/cover.png`)} />
            </ImageContainer>
        </Link>
        
        <h2>{title}</h2>
        <p>{summary}</p>
     </> :

    <>
        <ImageContainer>
            <Image src={require(`../../images/${title}/cover.png`)} />
        </ImageContainer>
    </>

)

export default ProjectThumbnail;