import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
export const Nav = styled.nav`
  background: var(--nav-color);
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
export const NavLink = styled(Link)`
color:  var(--text-color);
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color: #000000;
}

@media screen and (max-width: 767px) {
  background: var(--nav-color);
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color:  #808080;
  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 767px) {
    margin-top: 10%;
    margin-left: 70%;
    width: 100%;
    height: 100%;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* Show the menu container when screen width is below 768px if isOpen is true */
    justifx-content: end;
    flex-direction: column;
    z-index: 20;
   
  }
`;
