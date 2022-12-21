import React, { useState } from "react";
import { Nav, NavLink, NavMenu, Bars, Envelope, SideNav, SideNavItems, CloseNav, SideNavLink } from "./Navbar.styles";
import {AiOutlineClose} from "react-icons/ai"

const pages = ['Home', 'Resume']

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);


    return(
    <Nav>
        <NavLink to="/">
            <Envelope />  juandurdanet@gmail.com
            </NavLink>
        <Bars onClick={() => setToggleMenu(!toggleMenu)} />
        <NavMenu>
           {
            pages.slice(1).map((page, index)=>(
                <NavLink to={`/${page.toLowerCase()}`} key={index}>{page}</NavLink>
            ))
           }
           
        </NavMenu>


        {toggleMenu && 
        <SideNav>
            <div>
                <CloseNav onClick={() => setToggleMenu(!toggleMenu)}/>
            </div>
            <SideNavItems>
                {pages.map((page, index)=>(
                    <SideNavLink to={ `/${page.toLowerCase()}` } key={index}  onClick={() => setToggleMenu(!toggleMenu)}  >{page}</SideNavLink>
                ))}
            </SideNavItems>
        </SideNav>
            }

    </Nav>

)
};

export default Navbar;