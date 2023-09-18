import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Journal from './components/pages/Travels'
function App() {
  // const { isDarkMode, toggleTheme } = useState("");
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} ></Route>
        <Route path='/journal' exact element={<Journal/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
      </Routes>
      
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
