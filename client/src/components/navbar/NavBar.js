import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import styles from '../navbar/NavBar.module.css'

export function NavBar() {

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
                                    to="/Home/Ordenar"
                                    activeClassName={styles.active}
                                    className={styles.nav_links}
                                    >
                                    Ordenar
                                    </NavLink>
                                </li>
                                <li className={styles.nav_item}>
                                    <NavLink
                                    exact
                                    to="/Home/Filtrar"
                                    activeClassName={styles.active}
                                    className={styles.nav_links}
                                    >
                                    Filtrar
                                    </NavLink>
                                </li>
                                <li>
                                    <div className={styles.right}>
                                        <form>
                                              <div>
                                                <span className={styles.has_feedback}></span>
                                                <input type="text" className={styles.form_control} placeholder="Ingrese Nombre pais"></input>
                                               </div>
                                        </form>
                                    </div>
                                  
                                </li>
                                <li>
                                    <div>
                                      <button className={styles.btn}> Prev </button>
                                        <a className={styles.pages}>   Pages</a>
                                       <button className ={styles.btn}> Next </button>
                                    </div>
                                   
                                </li>
                         </ul>
                    </div>
            </nav>
          </>
        );
      }

  export default NavBar;