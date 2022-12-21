import React from "react";
import { Wrapper } from "./Reference.styles";
import CustomLink from "../CustomLink";


const Reference = ({title, link, role, time}) => (
    <Wrapper>
            <CustomLink link={link} text={title} />
            <p><strong>{role}</strong></p>
            <p>{time}</p>
    </Wrapper>
) 

export default Reference;