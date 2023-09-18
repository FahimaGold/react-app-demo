import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
  } from './NavBarElements';
  const Navbar = () => {
    return (
      <>
        <Nav>
          <Bars />
    
          <NavMenu>
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