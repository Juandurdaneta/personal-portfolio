import React from "react";
import { useParams } from "react-router";
import { projects } from "../projects";

const Project = () => {
    const { projectId } = useParams();

    const project = projects.filter(p => {
        return p.id == projectId;
    })[0]

    

    return(
        <h1>{project.title}</h1>
    );


}

export default Project;