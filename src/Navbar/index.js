import React from "react";
import { Content, Wrapper, Links } from "./Navbar.styles";

const Navbar = () => (
    <Wrapper>
        <Content>
            <p>juandurdanet@gmail.com</p>

        <Links>
            <a>Works</a>
            <a>Resume</a>
            <a>Services</a>
            <a>Contact</a>
        </Links>

        </Content>
    </Wrapper>

);

export default Navbar;