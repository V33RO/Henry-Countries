import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styles from '../countries/Countries.module.css';
import {allcountries,next,prev,next1} from '../../actions/Index.js';
import Todo from '../todos/Todo.js';

function Countries (props){

    let numero=props.page;
    let [pagina,setPage]=React.useState(numero);

    useEffect( () => {props.show_countries(pagina)},[])
    const result = props.stateCountries.content;
    console.log("numero pagina actual",pagina)
    console.log('props todos countries',props)
    console.log('resultado',result)
    if(result){
    console.log('hay datos')

    return(
        
        <div className={styles.container}>
            {/* <input name='prev' onChange={()=>setPage(pagina+1)}>PREV {pagina}</input> */}
            <div className={styles.todoscontainer}>
                {result.map( (pais,index) => 
                     <Todo to={'/Home'}
                     name={pais.name} 
                     region={pais.subregion} 
                     flag={pais.image} 
                     id={pais.idPais} 
                     key={index}/>
                 )}
            </div>
        </div>
    )
    }else{
        const result = props.stateCountries.content;
        console.log(props.stateCountries)
        console.log('Volvio pedir',result)
        console.log('No datos')
        return(
        <div className={styles.container}>
            <div className={styles.container}>
              REFRESCAR PAGINA: NO HAY DATOS
            </div>
        </div>
        )}

}
const mapStateToProps = (state) => {
    return {
       stateCountries: state.stateCountries,
       stateOrder: state.stateOrder
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        show_countries: (pagina) => dispatch(allcountries(pagina)),
        sig1:(next1)=> dispatch(next1(next1)),
    }
}


export default connect( mapStateToProps, mapDispatchToProps )(Countries);
