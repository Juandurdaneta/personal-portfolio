import React from "react";
import { Wrapper, WrapperHeader, ButtonLink, SmallerScreenButtonDisplay } from "./RecentProjects.styles";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";
import ProjectThumbnail from "../ProjectThumbnail"
import { projects } from "../../projects";


const RecentProjects = () => (
    <Wrapper>
            <WrapperHeader>
                <h1>Latest <span className="underlined">projects</span></h1>
                <Link to='/projects' style={{textDecoration:'none'}}>
                    <ButtonLink>See all projects</ButtonLink>
                </Link>
            </WrapperHeader>

            <Grid2 container spacing={2}>
                
                <Grid2 md={6} xs={12}>
                    <ProjectThumbnail title={projects[0].title} summary={projects[0].summary} />
                </Grid2>
                <Grid2 md={6} xs={12}>
                    <ProjectThumbnail title={projects[1].title} summary={projects[1].summary} />
                </Grid2>
                <Grid2 xs={12}>
                    <ProjectThumbnail title={projects[3].title} summary={projects[3].summary} />
                </Grid2>
                
            </Grid2>
            
            <SmallerScreenButtonDisplay>
                <Link to='/projects' style={{textDecoration:'none'}}>
                    <ButtonLink>See all projects</ButtonLink>
                </Link>
            </SmallerScreenButtonDisplay>

        
    </Wrapper>
);

export default RecentProjects;