import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from '@material-ui/core/Button';

const App = () => {
  const [password , Generar] = useState()

  const Generador = ()=>{
    const alfabeto = ['A','B','C','D','E','F','G','H','Y','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
    const pass = [];
    for (let i=0 ; i<=12; i++){
      pass.push(alfabeto[Math.ceil(Math.random()*alfabeto.length)])
    }
    Generar(pass);
  }
  return(
    <>
    <div id="contain">
       <div >
          <Button onClick={(Generador)} variant="contained" color="primary" id="caja">
            Generar password.
          </Button>
        </div> 
         {
       //  Verificamos si está seteado el array con una passwrod y mostramos solo si eso se cumple.
      password?<p>Nueva clave: <span>{password}</span></p>:null
     }
  
    </div>
    </>
  )
}

  ReactDOM.render(<App />,document.getElementById('root'));
