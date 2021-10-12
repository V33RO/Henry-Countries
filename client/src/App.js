import React,{useState} from "react";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import "./App.css";
import Home from '../src/components/home/Home'
import Page from '../src/components/page/Page'
import NavBar from "./components/navbar/NavBar";
import Ordenar from "./components/ordenamientos/Ordenar";
import Filtrar from "./components/ordenamientos/Filtrar";
import Countries from "./components/countries/Countries";
import Todos from "./components/todos/Todo";
import AddActivity from "./components/activity/AddActivity";
import TodoDetail from "./components/tododetail/TodoDetail"
import TodoSearch from "./components/todos/TodoSearch";
import Proximas from "./components/paginas/Proximas";
import Anteriores from "./components/paginas/Anteriores";


function App() {
  return (
    <div>
        <div className='App'>  
        <Router>
             <Route exact path='/' component ={Page}/>
             <Route path='/Home' component ={NavBar}/>
             <Route exact path='/Home' component={Countries}/>
             <Route exact path='/Home' component={Todos}/>
             <Route exact path='/Home/Filter/Search' component={TodoSearch}/>
             <Route exact path='/Home/Filter' component={Filtrar}/>
             <Route exact path='/Home/Countries/Filter/Todo' component={Ordenar}/>
             <Route exact path='/Home/Countries/:idPais' component={TodoDetail}/>
             <Route exact path='/Home/Countries/Paginas' component={Proximas}/>
             {/* <Route exact path='/Home/Countries/Paginas' component={Anteriores}/> */}
             <Route exact path='/Home/Countries/:idPais/addActivity' component={AddActivity}/>
        </Router>
        </div>
    </div>

  );
}

export default App;
