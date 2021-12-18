import React from "react";
import { Content, Wrapper } from "./Reference.styles";
import { CgArrowTopRight } from 'react-icons/cg';


const Reference = ({title, link, role, time}) => (
    <Wrapper>
        <Content>
            <a href={link}> <strong> {title}</strong> <CgArrowTopRight /> </a>
            <p><strong>{role}</strong></p>
            <p>{time}</p>
        </Content>
    </Wrapper>
) 

export default Reference;