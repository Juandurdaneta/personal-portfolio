import React from "react";
import { Content, Wrapper, Links, Email, EmailIcon } from "./Navbar.styles";


const pages = ['Works', 'Resume', 'Services', 'Contact']

const Navbar = () => (
    <Wrapper>
        <Content>
            <Email>
               <p><EmailIcon /></p>
                <p> juandurdanet@gmail.com</p>
            </Email>

        <Links>
           {pages.map((page)=>(
               <a href="#">{page}</a>
               ))}
        </Links>

        </Content>
    </Wrapper>

);

export default Navbar;