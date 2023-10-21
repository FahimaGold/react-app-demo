import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Journal from './components/pages/Travels'
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/hooks/useDarkMode';
import { darkTheme, lightTheme } from './components/styles/GlobalStyle';
import { GlobalStyles } from './components/styles/GlobalStyle';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light"? lightTheme: darkTheme;  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
     <GlobalStyles/>
   
      <Router>
      <Navbar toggleMenu={toggleMenu} isOpen={isMenuOpen}  theme={theme} toggleTheme={themeToggler} />
      <Routes>
        <Route path='/' exact element={<Home/>} ></Route>
        <Route path='/journal' exact element={<Journal/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
      </Routes>
      
      </Router>
      <Footer/>
   
    </>
    </ThemeProvider>
  );
}

export default App;
