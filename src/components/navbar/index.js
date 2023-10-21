import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    
  } from './NavBarElements';
  import Toggle from "../Toggler";
  const Navbar = (props) => {
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
         <Toggle theme={props.theme} toggleTheme={props.toggleTheme}></Toggle>
        </Nav>
      </>
    );
  };
    
  export default Navbar;