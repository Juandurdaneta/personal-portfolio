import React from "react";
import { Nav, NavLink, NavMenu, Bars, Envelope } from "./Navbar.styles";


const pages = ['Works', 'Resume', 'Services', 'Contact']

const Navbar = () => (
    <Nav>
        <NavLink to="/" activeStyle>
            <Envelope />  juandurdanet@gmail.com
            </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/" activeStyle>
                Works
            </NavLink>
            <NavLink to="/" activeStyle>
                Resume
            </NavLink>
            <NavLink to="/" activeStyle>
                Services
            </NavLink>
            <NavLink to="/" activeStyle>
                Contact
            </NavLink>
           
        </NavMenu>
    </Nav>

);

export default Navbar;