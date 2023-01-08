import React from "react";
import { Wrapper, GridContainer } from "./Projects.styles";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import ProjectThumbnail from "./ProjectThumbnail";


const projectNames = ['Pygallery', 'Visionary', 'krypt']

const Projects = () =>(
    <Wrapper>
        <div>
            <h1>Latest <span className="underlined">Projects</span></h1>
            
            <GridContainer>
                <Grid2 container spacing={1.5}>
                {
                    projectNames.map((project, index)=>(
                        <Grid2 key={index} md={4} xs={12}>
                            <ProjectThumbnail title={project} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac lacus et elit gravida venen' />
                        </Grid2>
                    ))
                }
                </Grid2>
            </GridContainer>
        </div>
    </Wrapper>
);

export default Projects;