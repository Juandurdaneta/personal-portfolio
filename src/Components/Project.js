import React from "react";
import { useParams } from "react-router";
import { projects } from "../projects";
import ProjectThumbnail from "./ProjectThumbnail";
import { Chip, ImageList, ImageListItem } from "@mui/material";
import { HeaderText } from "./Project.styles";

const Project = () => {
    const { projectId } = useParams();

    const project = projects.filter(p => {
        return p.id == projectId;
    })[0]

    

    return(
        <div className='wrapper'>
            <ProjectThumbnail title={project.title} onlyThumb />

            <HeaderText>
                <h1>{project.title}</h1>
                <Chip label='Project showcase' />
            </HeaderText>

            <p>{project.description}</p>

            {project.images.length > 0 &&
            <>

            <h2>Image Gallery</h2>
            
            <ImageList sx={{ width: '100%', height: 500 }} rowHeight={164} variant="woven" cols={3} gap={8}>
                {
                    project.images.map((image, index) =>(
                        <ImageListItem key={index}>
                            <img 
                            src={require(`../images/${project.title}/${image}`)}
                            loading='lazy'
                            />
                        </ImageListItem>
                    ))
                }
            </ImageList>

            </>

            }
            



        </div>
    );


}

export default Project;