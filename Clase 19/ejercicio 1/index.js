import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const paises = [{pais:"Argentina",capital:"Buenos Aires",continente:"América"},{pais:"Francia",capital:"Paris",continente:"Europa"},{pais:"Colombia",capital:"Bogota",continente:"América"},{pais:"Peru",capital:"Lima",continente:"América"},{pais:"Italia",capital:"Roma",continente:"Europa"},{pais:"España",capital:"Madrid",continente:"Europa"},{pais:"Chile",capital:"Santiago",continente:"América"},{pais:"Mexico",capital:"Ciudad de Mexico",continente:"América"}]


const App = () =>(
  <div id="contain">
    <h1><America/></h1>
    <h1><Europa/></h1>
  </div>
)

//asigno a listado -> con filter, filtramos solo los que continente === "América", y mapeo el json
const Listado = () => paises.filter(pa => pa.continente === "América").map((pa, i) => (<tr key={i}><td>{pa.pais}</td><td>{pa.capital}</td></tr>))

const Listado2 = ()=>paises.filter(pa =>pa.continente ==="Europa").map((pa,i) => (<tr key={i}><td>{pa.pais}</td><td>{pa.capital}</td></tr>))

 
  const America = () => (
    <div id="containtable">
        <h1>Paises de America</h1>
        <table border="1">
        <thead >
          <tr>
            <th>
              Pais
            </th>
            <th>
              Capital
            </th>
          </tr>
        </thead>
        <tbody>
          <Listado/>
        </tbody>
        </table>
    </div>
  )
  const Europa = () => (
    <div id="containtable2">
     
        <h1>Paises de Europa</h1>
        <table border="1">
        <thead>
          <tr>
            <th>
              Pais
            </th>
            <th>
              Capital
            </th>
          </tr>
        </thead>
        <tbody>
          <Listado2/>
        </tbody>
        </table>
    </div>
  )




  ReactDOM.render(<App />,document.getElementById('root'));
