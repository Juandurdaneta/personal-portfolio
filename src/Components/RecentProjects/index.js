import React from "react";
import { ImageContainer, Wrapper, Image, WrapperHeader, ButtonLink, SmallerScreenButtonDisplay } from "./RecentProjects.styles";
import mainImageKrypt from "../../images/krypt/cover.png"
import mainImagePy from "../../images/Pygallery/cover.png"
import mainImageVis from "../../images/Visionary/cover.png"
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";

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

                <Grid2 xs={12}>
                    <ImageContainer>
                        <Image src={mainImageVis} />
                    </ImageContainer>
                    <h2>Visionary</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac lacus et elit gravida venen</p>
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