import styled from "styled-components";
import { FaRegEnvelope } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import {AiOutlineClose} from "react-icons/ai"


// NAVBAR STYLES 

export const Nav = styled.div`
    background: var(--white);
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const NavMenu = styled.div`
  display: flex;
  background: var(--white);

  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const NavLink = styled(Link)`
  color: var(--black);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: var(--black);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: var(--black);
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 30;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const Envelope = styled(FaRegEnvelope)`
  color: var(--black);
  margin-right: 20px;
`

// SIDENAV STYLES 

export const SideNav = styled.div`
  display: flex;
  height: 100%;
  position: fixed;
  right: 0;
  background: rgba( 234, 249, 250, 0.85 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  width: 70%;
  padding: 20px;
  margin: 0;
  z-index: 1;
  top: 0;
`;

export const CloseNav = styled(AiOutlineClose)`
  font-size: 27px;
  color: var(--black);
`

export const SideNavItems = styled.div`
  margin-top: 20px;
  text-align: right;
  width: 100%;

`;

export const SideNavLink = styled(Link)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  display: block;
  color: var(--black);
  margin: 12px auto;

  &.active {
    color: var(--black);
  }
`