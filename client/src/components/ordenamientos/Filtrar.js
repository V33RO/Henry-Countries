import React from 'react';
import styles from './Ordenar.module.css';
import {Link} from 'react-router-dom';



function Filtrar() {
   
    return (
      

     <div>  
               <li className={styles.dropdown}>
					<span className={styles.dropbtn}>Filtrar</span>
					<div className={styles.dropdown_content}>
						<Link to='/home/Ordenar'> <span >{"America"}</span></Link>
						<Link to='/home/filter'> <span  >{"African"}</span> </Link>
						<Link to='/home/filter'> <span  >{"Asia"}</span> </Link>
						<Link to='/home/filter'> <span  >{"Europe"}</span> </Link>
						<Link to='/home/filter'> <span >{"Oceanic"}</span> </Link>
					</div>
				</li>
        </div>
      );
  }
  
  export default Filtrar;