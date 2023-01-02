import React from "react";
import { ImageContainer, Wrapper, Image, WrapperHeader, ButtonLink, SmallerScreenButtonDisplay } from "./RecentProjects.styles";
import mainImageKrypt from "../../images/krypt/cover.png"
import mainImagePy from "../../images/Pygallery/cover.png"
import mainImageVis from "../../images/Visionary/1.png"
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

const RecentProjects = () => (
    <Wrapper>
            <WrapperHeader>
                <h1>Latest <span className="underlined">projects</span></h1>
                <ButtonLink>See all projects</ButtonLink>
            </WrapperHeader>

            <Grid2 container spacing={2}>
                
                <Grid2 md={6} xs={12}>
                    <ImageContainer>
                        <Image src={mainImagePy} />
                    </ImageContainer>
                    <h2>Pygallery</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac lacus et elit gravida venen</p>
                </Grid2>
                <Grid2 md={6} xs={12}>
                    <ImageContainer>
                        <Image src={mainImageKrypt} />
                    </ImageContainer>
                    <h2>Krypt</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac lacus et elit gravida venen</p>
                </Grid2>

                
            </Grid2>
            
            <SmallerScreenButtonDisplay>
                <ButtonLink>See all projects</ButtonLink>
            </SmallerScreenButtonDisplay>

        
    </Wrapper>
);

export default RecentProjects;