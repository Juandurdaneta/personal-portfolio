import React from "react";
import { Content, Wrapper, Links } from "./Navbar.styles";

const pages = ['Works', 'Resume', 'Services', 'Contact']

const Navbar = () => (
    <Wrapper>
        <Content>
            <p>juandurdanet@gmail.com</p>

        <Links>
           {pages.map((page)=>(
               <a href="#">{page}</a>
               ))}
        </Links>

        </Content>
    </Wrapper>

);

export default Navbar;