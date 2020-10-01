import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const enlaces = [`Posiciones`,`Fixture`,`Otras Ligas`, `Contacto`, `Acerca de`];
const equipos = [`Sportivo Glorias de Barracas`,`Deportivo Merlo Unido`,`Asociación Buenos Aires`, `Club Sociedad de Fomento`];

const App = () =>(
  <div>
    <Titulo titulo= "El titulo"
            imagen="https://via.placeholder.com/150x150/0000FF/808080/?text="/>
    <ul><Navegacion /></ul>
    <Main ></Main>
  </div>
)
const Titulo = (prosp) =>(
  <header>
    <h1>{prosp.titulo}</h1>
    <img src={props.imagen} alt={props.titulo2}></img>
  </header>
)
   
  const Navegacion = () =>(
    enlaces.map((enlace,i)=><li key={i}><a href={"/" + enlace.replace(' ', '').toLocaleLowerCase()}>{enlace}</a></li>)
  
)  
const Main = (props) =>(
  <main>
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Puesto</th>
        <th>Equipo</th>
        <th>Accion</th>
      </tr>
    </thead>
  </main>
)    
              
ReactDOM.render(<App />,document.getElementById('root'));
