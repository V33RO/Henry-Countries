import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { allcountries, buscador, home, next, prev } from '../../actions/Index.js';
import styles from '../todos/Todos.module.css'
import Todo from '../todos/Todo.js';

function TodoSearch(props) {
    
    useEffect( () => {props.mostrarPaises()},[])
    const resultado= props.stateFilter.rows;
    console.log('props searchear',props)
    console.log('props searchear',resultado)
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
        mostrarPaises: () => dispatch( buscador() ),
        siguiente: (orden) => dispatch(next(orden)),
        anterior: (orden) => dispatch(prev(orden))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(TodoSearch);