import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Navbar/Header';
import { HashRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Allproducts from './components/allproducts/Allproducts';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Login from './components/forms/Login';
import Footer from './components/Navbar/Footer';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/allproducts' element={<Allproducts/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
    </div>
    </HashRouter>
  );
}

export default App;
