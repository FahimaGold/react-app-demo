import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    
  } from './NavBarElements';
  const Navbar = (props) => {
    console.log(`checking isOpen ${props.isOpen}`);
    return (
      <>
        <Nav>
          <Bars onClick={props.toggleMenu} />
    
          <NavMenu  isOpen={props.isOpen}>
          <NavLink to='/' activestyle="true">
              Home
            </NavLink>
            <NavLink to='/journal' activestyle="true">
              Journal
            </NavLink>
            <NavLink to='/about' activestyle="true">
              About
            </NavLink>
          </NavMenu>

        </Nav>
      </>
    );
  };
    
  export default Navbar;