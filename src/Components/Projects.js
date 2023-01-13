import React from "react";
import { Wrapper, GridContainer } from "./Projects.styles";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import ProjectThumbnail from "./ProjectThumbnail";
import { projects } from "../projects";

const Projects = () =>{

    return(
    <Wrapper>
        <div>
            <h1>My <span className="underlined">projects</span></h1>

            <GridContainer>
                <Grid2 container spacing={1.5}>
                {
                    projects.map((project, index)=>(
                            <Grid2 key={index} md={4} xs={12}>
                                    <ProjectThumbnail id={project.id} title={project.title} summary={project.summary} />
                            </Grid2>
                    ))
                }
                </Grid2>
            </GridContainer>
        </div>
    </Wrapper>
)};

export default Projects;