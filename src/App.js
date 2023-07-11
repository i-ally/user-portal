import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from "./components/Navbar"
import SignUp from './components/SignUp';

function App() {
  return (
  <>
  <Navbar/>
  <Routes>

  <Route path='/' element ={<Home />} />
  
  <Route path='/about' element ={<About />} />
  
  <Route path='/contact' element ={<Contact />} />
  
  <Route path='/login' element ={<Login />} />
  
  <Route path='/signUp' element ={<SignUp />} />
  
  </Routes>
  </>
  );
} 

export default App;
