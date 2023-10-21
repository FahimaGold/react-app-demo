import styled from "styled-components";
import px2vw from "../../Utils/px2vw";
import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    --text-color: ${({theme}) => (theme === lightTheme?'#808080':'#fff')};
    --nav-color: ${({ theme }) => (theme === lightTheme ? '#FFE6E6' : '#292626')};
    --a-color: ${({ theme }) => (theme === lightTheme ? '#808080' : '#fff')};
    

  
  }
  
  `

export const HeaderTitle = styled.h1`
  display: 'flex';
  marginRight: '10px';
  justify-content: center;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const H3Title = styled.h3`
  display: 'flex';
  marginRight: '10px';
  justify-content: center;
  font-size: 1rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
  


`;

export const PText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

/*** Implementing dark mode  ***/ 

export const lightTheme = {
  body: '#FFFFFF',
  text: '#363537',
 
}
export const darkTheme = {
  body: '#363537',
  text: '#FFFFFF',
  
}