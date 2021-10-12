import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styles from '../tododetail/TodoDetail.module.css';
import {Link} from 'react-router-dom';
import {getDetail} from '../../actions/Index.js';

function TodoDetail (props){

    useEffect(() => {props.obtenerDatos(idPais)},[])
    const {idPais} = props.match.params;
    console.log('props.match.params.idPais :', props.match.params.idPais);
    console.log("porps",props.stateCountries)
    const {name,capital,continent,subregion,area,population,image,activities}=props.stateCountries
if(name){
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.name}> {name.toUpperCase()} </h1>
                <div className={styles.box0}>
                    <div className={styles.box1}>
                        <h2> Capital: {capital.toUpperCase()} </h2>
                        <br></br>
                        <h3> Continente: {continent.toUpperCase()} </h3>
                        <br></br>
                        <h3> Sub-region: {subregion.toUpperCase()} </h3>
                        <br></br>
                        <h3> Area:{area.toUpperCase()} km² </h3>
                        <br></br>
                        <h3> Poblacion:  {population} </h3>
                    </div>
                    <img className={styles.imagen} src={image} />
                </div>
                {activities && 
                    <div className={styles.box2}>
                        <h2> TOURIST ACTIVITIES </h2>
                        {activities.map( act => {
                            return(
                                <div className={styles.box3}>
                                    <div>
                                        <h3>Name: {act.name}</h3>
                                        <h3>Season: {act.season}</h3>
                                    </div>
                                    <div>
                                        <h3>Duration: {act.duration}</h3>
                                        <h3>Difficult: {act.difficult}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
                <Link to={`/Home/Countries/${idPais}/addActivity?${name}`}><button className={styles.btn}>PRESS TO ADD ACTIVITY</button></Link>          
            </div>
        </div>
        
	);
}else{
   return(
       <div>No hay datos</div>
   )
}
}

const mapStateToProps = (state) => {
    return {
        stateCountries: state.stateCountries
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        obtenerDatos: (pais) => dispatch( getDetail(pais))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoDetail);