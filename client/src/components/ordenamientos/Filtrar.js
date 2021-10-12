import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './Filtrar.module.css';
import {Link} from 'react-router-dom';
import { filtroContinente} from '../../actions/Index.js';

function Filtrar(props){
	let america="Americas";
	let africa='Africa';
	let asia='Asia';
	let europa='Europe';
	let oceania='Oceania'
    return (
     <div>  
		    	<li className={styles.dropdown}>
					<div>Filter</div>
						<div className={styles.dropdown_content}>
							<li><span>{"sorted by alphabet A to Z"}</span></li>
							<li><span>{"sorted by alphabet Z to A"}</span></li>
							<li><span >{"population ordered from smallest to largest"}</span></li>
							<li><span >{"population ordered from largest to smallest"}</span></li>
							<li><Link to='/Home/Countries/Filter/Todo?filtro=Americas'onClick={useEffect( () => {props.mostrarPaises(america)},[])}> <span>{"American"}</span> </Link></li>
							<li><Link to='/Home/Countries/Filter/Todo?filtro=Africa'onClick={useEffect( () => {props.mostrarPaises(africa)},[])}> <span>{"African"}</span> </Link></li>
							<li><Link to='/Home/Countries/Filter/Todo?filtro=Asia'onClick={useEffect( () => {props.mostrarPaises(asia)},[])}> <span >{"Asia"}</span> </Link></li>
							<li><Link to='/Home/Countries/Filter/Todo?filtro=Europe' onClick={useEffect( () => {props.mostrarPaises(europa)},[])}> <span >{"European"}</span> </Link></li>
							<li><Link to='/Home/Countries/Filter/Todo?filtro=Oceania'onClick={useEffect( () => {props.mostrarPaises(oceania)},[])}> <span >{"Oceanic"}</span> </Link></li>
							
						</div>
                </li>            
        </div>
      );
  }
  const mapStateToProps = (state) => {
    return {
	   stateFilter:state.stateFilter
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		mostrarPaises: (filtro) => dispatch( filtroContinente(filtro) )

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Filtrar);
