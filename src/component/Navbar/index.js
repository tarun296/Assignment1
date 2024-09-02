import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>           
            <NavMenu>
                <NavLink 
                  to="/"
                  activeStyle={{ color:'blue' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/about"
                  activeStyle={{ color: 'black' }}
                >
                    About
                </NavLink>
                <NavLink 
                  to="/destination"
                  activeStyle={{ color: 'black' }}
                >
                    Destination
                </NavLink>
                <NavLink 
                  to="/philippines Cruises"
                  activeStyle={{ color: 'black' }}
                >
                    philippines Cruises
                </NavLink>
                <NavLink 
                  to="/MiceandWedding"
                  activeStyle={{ color: 'black' }}
                >
                    MiceandWedding
                </NavLink>
                <NavLink 
                  to="/Ultra Luxary"
                  activeStyle={{ color: 'black' }}
                >
                   Ultra Luxary
                </NavLink>
                <NavLink 
                  to="/contact" 
                  activeStyle={{ color: 'black' }}
                >
                    Contact
                </NavLink>             
            </NavMenu>
           </Nav> 
        </>
    );
};
export default Navbar;