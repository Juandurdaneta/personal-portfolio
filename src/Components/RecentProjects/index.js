import React from "react";
import { Wrapper, WrapperHeader, ButtonLink, SmallerScreenButtonDisplay } from "./RecentProjects.styles";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";
import ProjectThumbnail from "../ProjectThumbnail"
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
                    <ProjectThumbnail title={'Pygallery'} summary={'lorem ipsum'} />
                </Grid2>
                <Grid2 md={6} xs={12}>
                    <ProjectThumbnail title={'Krypt'} summary={'lorem ipsum'} />
                </Grid2>
                <Grid2 xs={12}>
                    <ProjectThumbnail title={'Visionary'} summary={'lorem ipsum'} />
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