import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App = () =>{
  const [azar, Tirar]= useState([]); 

    const Random = () =>{
      //creo el array dados para mostrar resultado pushiandolo.
      const dados = [];
      const dado1 = Math.ceil(Math.random()*6)
      dados.push(dado1)
      const dado2 = Math.ceil(Math.random()*6)
      dados.push(dado2)

      if(dado1 > dado2){dados.push('Gana el dado 1')}
      else if(dado1<dado2){dados.push('Gana el dado 2')}
      else{dados.push('han empatado')}
      Tirar (dados);
      }
return(
  
  <div id="contain">
    <header>
      
      <h1>Tirá los dados!!</h1>
      <button onClick={Random}>mezclar</button>
    </header>
    <div id="caja">
          <p>Dado 1: {azar[0]} - Dado 2: {azar[1]}</p>
          <p>Ganador: {azar[2]}</p>         
    </div>
  </div>
)
}

  ReactDOM.render(<App />,document.getElementById('root'));
