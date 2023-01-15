import React, {useState} from "react";
import { useParams } from "react-router";
import { projects } from "../projects";
import ProjectThumbnail from "./ProjectThumbnail";
import { Fade, Button } from "@mui/material";
import { Modal } from "@mui/material";
import {  ImageItem, ImageListGrid, ImageListGridItem, ButtonLink, GithubLogo } from "./Project.styles";
import { AiFillGithub } from 'react-icons/ai'

const Project = () => {

    // GETTING PROJECT FROM PARAMS
    const { projectId } = useParams();

    const project = projects.filter(p => {
        return p.id == projectId;
    })[0]

    // MODAL FUNCTIONALITY

    const [open, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const handleModalOpen = (img) =>{
        setIsOpen(true);
        setCurrentImage(img);
        console.log(img);
    }

    const handleModalClose = () =>{
        setIsOpen(false);
        setCurrentImage('');
    }

    

    return(

        <div className='wrapper'>
            <ProjectThumbnail title={project.title} onlyThumb />

                <h1>{project.title}</h1>

            <p style={{whiteSpace: 'pre-line'}}>{project.description}</p>

            {
            project.images.length > 0 &&
                <>

                <h2>Image Gallery </h2>
                
                <ImageListGrid sx={{ width: '100%', height: 400, gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))!important', mb: 8,}} gap={8} >
                    {
                        project.images.map((image, index) =>(
                            <ImageListGridItem sx={{ height: '190px !important'}} key={index} onClick={()=> handleModalOpen(image)}>
                                <ImageItem 
                                src={require(`../images/${project.title}/${image}`)}
                                loading='lazy'
                                />
                            </ImageListGridItem>
                        ))
                    }
                </ImageListGrid>

                {/* MODAL */}
            
                    {  
                    currentImage &&
                        <Modal
                        open={open}
                        onClose={handleModalClose}
                        closeAfterTransition
                        style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}
                        
                        >
                            <Fade in={open} timeout={500} style={{outline: 0}}>
                                <img 
                                src={require(`../images/${project.title}/${currentImage}`)}
                                loading='lazy'
                                style={{ maxHeight: "90%", maxWidth: "90%" }}
                                />
                            </Fade>
                        </Modal>
                    }
                </>

            }

            {
                project.github_link && ( 
                    <ButtonLink href={project.github_link}> View Source code on  <GithubLogo size={24} /> </ButtonLink>
                )
            }
           

        </div>
    );


}

export default Project;