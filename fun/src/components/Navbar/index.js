import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MoblieIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'> Dolla </NavLogo>
                <MoblieIcon>
                    <FaBars />
                </MoblieIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="service">Service</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar
