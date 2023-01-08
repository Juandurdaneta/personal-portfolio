import React from "react";
import { Wrapper, ImageContainer, Image, GridContainer } from "./Projects.styles";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2


const projectNames = ['Pygallery', 'Visionary', 'krypt']

const Projects = () =>(
    <Wrapper>
        <div>
            <h1>Latest <span className="underlined">Projects</span></h1>
            
            <GridContainer>
                <Grid2 container spacing={2}>
                {
                    projectNames.map((project, index)=>(
                        <Grid2 key={index} md={4} xs={12}>
                            <ImageContainer>
                                <Image src={require(`../images/${project}/cover.png`)} />
                            </ImageContainer>
                            <h2>{project}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac lacus et elit gravida venen</p>
                        </Grid2>
                    ))
                }

                </Grid2>
            </GridContainer>
        </div>
    </Wrapper>
);

export default Projects;