import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const enlaces = ['Home','Contacto','Redes']

const App = () =>(
   <div>
      <Titulo titulo= "El titulo"/>
      <ul><Navegacion /></ul>
      <Titulo2 titulo2= "el titulo 2"
               imagen="https://via.placeholder.com/300x300/0000FF/000000/?text=La%20Imagen%20de%20React"
               parrafo="Fragmento de un escrito con unidad temática, que queda diferenciado del resto de fragmentos por un punto y aparte y generalmente también por llevar letra mayúscula inicial y un espacio en blanco en el margen izquierdo de alineación del texto principal de la primera línea."/>
      <Footer footer= "el footer"/>

    </div>
)

const Titulo = (props) =>(
  <header>    
  <h1>{props.titulo}</h1>
</header>
)
const Navegacion = () =>(
  enlaces.map((enlace,i)=><li key={i}><a href={"/" + enlace.replace(' ', '').toLocaleLowerCase()}>{enlace}</a></li>)
)
const Titulo2 = (props) =>(
  <main>
    <h2>{props.titulo2}</h2>
    
    <p>{props.parrafo}</p>
    
  </main>
) 
const Footer = (props) =>(
  <p><small>{props.footer}</small></p>
)

ReactDOM.render(<App />,document.getElementById('root'));
