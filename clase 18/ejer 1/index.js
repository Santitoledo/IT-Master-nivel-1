import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const menu = [
  { texto: "Home", link: "index.html"},
  { texto: "Contacto", link: "contacto.html"},
  { texto: "Nosotros", link: "about.html"}]


  const App = () =>(
    <div id="contein">
       <Titular titulo="el titulo"/>
       <nav><MenuNav/></nav>
       <Figure im1="https://via.placeholder.com/100/92c952" im2="https://via.placeholder.com/100/92c952" im3 ="https://via.placeholder.com/100/92c952" 
              imagen="hola"
              figur="imagenes"/>

    </div>
  )
  const Titular = (props) =>(
    <header>    
    <h1>{props.titulo}</h1>
  </header>
  )

  const MenuNav = () =>(
    menu.map((enlace,i)=><li key={i}><a href={"/" + enlace.link}> {enlace.texto}</a></li>)
    
  );
  const Figure = (props) =>(
    <figure>
    <img src={props.im1} alt={props.imagen}/>
    <img src={props.im1} alt={props.imagen}/>
    <img src={props.im1} alt={props.imagen}/> 
    <figcaption>{props.figur}</figcaption>
    </figure>

  )


  ReactDOM.render(<App />,document.getElementById('root'));
