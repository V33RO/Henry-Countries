import React, {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import styles from '../navbar/NavBar.module.css';
import { orderAZ, prev, next, orderZA, poblacionAS, poblacionDS, buscador, filtradoContinente,allcountries} from '../../actions/Index.js'


function NavBar(props){

        let pagina=Math.ceil(Math.random(25));
     
        useEffect( () => {props.show_countries(pagina)},[])

        let nextpagina=pagina;

        if(pagina<=25){
           nextpagina=pagina+1; 
        }else{
            nextpagina=pagina
        }
        
    
        let antpagina=pagina;
        if(antpagina>2){
            antpagina=pagina-1;
        }else{
            antpagina=pagina
        }

        console.log("pagina actual navbar",props)
        const [click, setClick] = React.useState(false);
        const handleClick = () => setClick(!click);

        return (
          <>
            <nav className={styles.navbar}>
                    <div className={styles.nav_container}>
                            <NavLink exact to="/" className={styles.nav_logo}>
                            Henry Countries
                            <i className={styles.fa_code}></i>
                            </NavLink>
                           <ul className={click ? styles.nav_menu_active : styles.nav_menu}>
                                <li className={styles.nav_item}>
                                    <NavLink
                                    exact
                                    to="/"
                                    activeClassName={styles.active}
                                    className={styles.nav_links}
                                    onClick={handleClick}>
                                    Landing
                                    </NavLink>
                                </li>
                                <li className={styles.nav_item}>
                                    <NavLink
                                    exact
                                    to="/Home/Filter"
                                    activeClassName={styles.active}
                                    className={styles.nav_links}
                                    >
                                    Ordenamientos
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink
                                    exact
                                    to="/Home/Filter/Search"
                                    activeClassName={styles.active}
                                    className={styles.nav_links}
                                    >
                                    <div className={styles.right}>
                                        <form>
                                              <div>
                                                <span className={styles.has_feedback}></span>
                                                <input 
                                                type="name" 
                                                name="search"
                                                className={styles.form_control}
                                                onChange={(data)=>{console.log(data.target.value);
                                                props.buscarPais(data.target.value)}} 
                                                placeholder="Ingrese Nombre pais"></input>
                                               </div>
                                        </form>
                                    </div>
                                    </NavLink>
                                </li>
                                {/* <li className={styles.nav_item}>
                                    <NavLink
                                    exact
                                    to="/Home"
                                    activeClassName={styles.active}
                                    className={styles.nav_links}
                                    >
                                    Prev
                                    </NavLink>
                                </li> */}
                                <li>
                 <div>
                    <button className={styles.btn}> Prev  </button>
                    <a className={styles.pages}>   Paginas </a>
                    <button class='boton'  className={styles.btn}> Next  </button>
                 </div>
             </li>
                         </ul>
                    </div>
            </nav>
          </>
        );
      }


    const mapStateToProps = (state) => {
        return {
           stateCountries: state.stateCountries,
           page:state.page,
           stateOrder: state.stateOrder
        }
    }
    
    const mapDispatchToProps = (dispatch) => {
      return {
        show_countries: (pagina) => dispatch(allcountries(pagina)),
        ordenarAZ: () => dispatch( orderAZ() ),
        ordenarZA: () => dispatch( orderZA() ),
        ordenarPobAS: () => dispatch( poblacionAS() ),
        ordenarPobDS: () => dispatch( poblacionDS() ),
        buscarPais: (data) => dispatch( buscador(data) ),
        filtradoPorRegion: (continente) => dispatch( filtradoContinente(continente) ),
        siguiente: (orden) => dispatch(next(orden)),
            anterior: (orden) => dispatch(prev(orden))
      }
    }

  export default connect(mapStateToProps,mapDispatchToProps)(NavBar);