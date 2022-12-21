import React from "react";
import { CgArrowTopRight } from 'react-icons/cg';
import { StyledLink } from "./CustomLink.styles";

const CustomLink = ({text, link}) => (
    <StyledLink href={link}>
        <strong> {text} </strong> <CgArrowTopRight /> 
    </StyledLink>
);

export default CustomLink;