
import{React, useContext}  from "react";
import { themeContext } from "../../ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth } from '@fortawesome/free-solid-svg-icons'

export function NavBar(){
    const { isDarkMode, toggleTheme } = useContext(themeContext);
    return (
        <nav className='nav--menu'>
             <FontAwesomeIcon icon={faEarth} size="2x" className='earth--icon'/>&nbsp;&nbsp;&nbsp;
             <p>My travel journal</p>
        </nav>
      );

}