import React ,{useState} from 'react';
import ReactDOM from 'react-dom';



const RandomPelis = ()=>{
  const peliculas = ["Inception", "500 Days of Summer", "Dark Shadows", "Volver al Futuro", "Batman", "Los Simpson"];	
 const [peli, SetPeli] = useState(peliculas[0])
  
  const changePeli = () => {
    const i = Math.floor(Math.random() * peliculas.length);
    const peliElegida = peliculas[i];
    SetPeli(peliElegida);
};
return[peli,changePeli];
};
const App = () =>{
  const [peli,changePeli]= RandomPelis();
  return (
    <div id="contain">
      <h1>La peli es : {peli}</h1>
      <button onClick={changePeli}>Cambia la peli</button>
    </div>
  );
};
  ReactDOM.render(<App />,document.getElementById('root'));
