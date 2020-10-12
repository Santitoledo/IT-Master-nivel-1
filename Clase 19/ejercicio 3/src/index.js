import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const App =() =>{
  const peliculas = [
    {'titulo':'Inception','poster':'inception.jpg','year':'2010'},
    {'titulo':'Bloodshot','poster':'bloodshot.jpg','year':'2020'},
    {'titulo':'Watchmen: los vigilantes','poster':'watchmen.jpg','year':'2009'},
    {'titulo':'Unbreakable Kimmy Schmidt: Kimmy vs. the Reverend','poster':'unbrakable.jpg','year':'2020'},
    {'titulo':'Batman: el caballero de la noche asciende','poster':'batman.jpg','year':'2012'},
    {'titulo':'Guardians of the Galaxy Vol. 2','poster':'guardians2.jpg','year':'2017'},
    {'titulo':'El robo del siglo','poster':'robosg.jpg','year':'2020'},
    {'titulo':'Corazon Loco','poster':'robosg.jpg','year':'2020'},
    {'titulo':'Corazon Loco 2','poster':'robosg.jpg','year':'2020'},
    {'titulo':'Corazon Loco 3','poster':'robosg.jpg','year':'2020'}
    ]

const date = new Date();
const year1 = date.getFullYear();
// creo year2, me devuelve el valor del objeto string
const year2 = year1.toString();
// filtro las peliculas que sean iguales a year2 (2020) y mapeo el json con map, mostrando el titulo dentro del <li>
const actuales = peliculas.filter(peli=>peli.year === year2).map((peli,i)=><li key={i}>{peli.titulo} </li>)
return(
  <div id="contain">
    <h1>Las peliculas de este año son:</h1>
    <ul>{actuales}</ul>
  </div>
)

}
  ReactDOM.render(<App />,document.getElementById('root'));
