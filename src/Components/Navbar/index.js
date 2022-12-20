import React, { useState } from "react";
import { Nav, NavLink, NavMenu, Bars, Envelope, SideNav, SideNavItems, CloseNav, SideNavLink } from "./Navbar.styles";
import {AiOutlineClose} from "react-icons/ai"

const pages = ['Works', 'Resume', 'Services', 'Contact']

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    console.log(toggleMenu);

    return(
    <Nav>
        <NavLink to="/">
            <Envelope />  juandurdanet@gmail.com
            </NavLink>
        <Bars onClick={() => setToggleMenu(!toggleMenu)} />
        <NavMenu>
            <NavLink to="/works">
                Works
            </NavLink>
            <NavLink to="/resume">
                Resume
            </NavLink>
            <NavLink to="/services">
                Services
            </NavLink>
            <NavLink to="/contact">
                Contact
            </NavLink>
           
        </NavMenu>


        {toggleMenu && 
        <SideNav>
            <div>
                <CloseNav onClick={() => setToggleMenu(!toggleMenu)}/>
            </div>
            <SideNavItems>
                {pages.map((page, index)=>(
                    <SideNavLink to={ `/${page}` } key={index}>{page}</SideNavLink>
                ))}
            </SideNavItems>
        </SideNav>
            }

    </Nav>

)
};

export default Navbar;