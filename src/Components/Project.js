import React, {useState} from "react";
import { useParams } from "react-router";
import { projects } from "../projects";
import ProjectThumbnail from "./ProjectThumbnail";
import { ImageList, ImageListItem, Fade } from "@mui/material";
import { HeaderText } from "./Project.styles";
import { Modal } from "@mui/material";

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

            <HeaderText>
                <h1>{project.title}</h1>
            </HeaderText>

            <p>{project.description}</p>

            {
            project.images.length > 0 &&
                <>

                <h2>Image Gallery</h2>
                
                <ImageList sx={{ width: '100%', height: 500 }} rowHeight={164} variant="woven" cols={3} gap={8}>
                    {
                        project.images.map((image, index) =>(
                            <ImageListItem key={index} onClick={()=> handleModalOpen(image)}>
                                <img 
                                src={require(`../images/${project.title}/${image}`)}
                                loading='lazy'
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>

                {/* MODAL */}
            
                    {  
                    currentImage &&
                        <Modal
                        open={open}
                        onClose={handleModalClose}
                        closeAfterTransition
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
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


        </div>
    );


}

export default Project;