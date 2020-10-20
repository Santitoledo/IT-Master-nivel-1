import React from 'react';
import { Switch, Route} from 'react-router';
import { NavLink,Link  } from 'react-router-dom';
import './index.scss';


const navjson = [{ text: "Te besaré", link: "/" }, { text: "Hawai", link: "/about" }, { text: "La curiosidad, caramelo", link: "/otros" }];

const Navbar = () => {
    return (
        <nav>
          <ul>
            {navjson.map((item, i) =><li key={i}><NavLink to={item.link} exact  activeClassName="activa">{item.text}</NavLink></li>)}
          </ul>
        </nav> 
      )
    }

    const Nav1 = () => {
        return (
          <div className="App">
            
            <div id="multimedia">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wjrhZNXoSuk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/otros" component={Otros} />
              <Route path="*" component={Error404} />
            </Switch>
          </div>
        );  
    }

const Home = () => {
    return (
        <section>
        <h2>La kuppe</h2>
        </section>
    );
}    

const About = () => {
    return (
        <section>
        
        <iframe id="hawai" width="560" height="315" src="https://www.youtube.com/embed/44MY3Y6xP7s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </section>
    );
}

    
const Otros = () => {
    return (
      <section>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rKCoolsQ5cw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
      </section>
    );  
}

const Error404 = () => {
    return (
      <section>
        <h2>Página no encontrada</h2>     
        <p><Link to="/">Ir a la home</Link></p>   
      </section>
    );
  }

  export default Nav1;
