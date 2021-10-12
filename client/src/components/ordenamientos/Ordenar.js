import styles from './Ordenar.module.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { allcountries, buscador, home, next, prev,filtroContinente} from '../../actions/Index.js';
import Todo from '../todos/Todo.js';


function Ordenar(props){

  let resul= props.location.search;
  const filtro=resul.substr(8);
  useEffect( () => {props.mostrarPaises(filtro)},[])
  let resultado=props.stateFilter;
  console.log('props filtro',resultado)
  
 if(resultado){
    return(
        <div>
            <div>
                {resultado.map( (pais,index) => 
                    <Todo name={pais.name} 
                          region={pais.subregion} 
                          flag={pais.image} 
                          id={pais.idPais}
                          key={index}/>
                )}
            </div>
        </div>
    )
}else{
    return(
        <div>
            <div>
              Falta datos busqueda
            </div>
        </div>
    )
}
 

};

  const mapStateToProps = (state) => {
        return {
        stateOrder: state.stateOrder,
        stateFilter: state.stateFilter
        }
   }
    const mapDispatchToProps = (dispatch) => {
        return {
            mostrarPaises: (filtro) => dispatch( filtroContinente(filtro) ),
        }
    }

export default connect( mapStateToProps, mapDispatchToProps )(Ordenar);