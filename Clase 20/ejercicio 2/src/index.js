import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppBar1 from './AppBar.js';
import Header from './Header1.js';
import Navbar from './Nav1.js';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer.js';


const App = ()=>{
  return (
  <>
    <AppBar1/>
    <Header/>
    <Navbar/>
    <Footer/>
    
  </>
  )
}

  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));
