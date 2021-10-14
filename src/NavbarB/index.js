import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import Logo from '../pages';
import { NavLink } from 'react-router-dom';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);


    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);


    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
          <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                {/*<NavLogo to='/' onClick={toggleHome}>
                    <img src={Logo} alt="" />
                </NavLogo>*/}
                <MobileIcon onClick={toggle}>
                   <FaBars />
                </MobileIcon>
                <NavMenu>

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/home" onClick={toggleHome} >Back to Home</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
          </Nav>  
          </IconContext.Provider>
        </>
    );
};

export default Navbar;

