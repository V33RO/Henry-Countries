import React,{useState} from "react";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import "./App.css";
import Home from '../src/components/home/Home'
import Page from '../src/components/page/Page'
import NavBar from "./components/navbar/NavBar";
import Ordenar from "./components/ordenamientos/Ordenar";
import Filtrar from "./components/ordenamientos/Filtrar";

function App() {
  return (
    <div>
        <div className='App'>  
        <Router>
             <Route exact path='/' component ={Page}/>
             <Route path='/Home' component ={NavBar}/>
             <Route exact path='/Home' component ={Home}/>
             <Route exact path='/Home/Ordenar'  component={Ordenar}/>
             <Route exact path='/Home/Filtrar'  component={Filtrar}/>
        </Router>
        </div>
    </div>

  );
}

export default App;
