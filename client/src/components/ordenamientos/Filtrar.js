import React from 'react';
import styles from './Filtrar.module.css';
import {Link} from 'react-router-dom';

function Filtrar() {
    return (
     <div>  
             <li className={styles.dropdown}>
				<span className={styles.dropbtn}>Filter</span>
					<div className={styles.dropdown_content}>
						<Link to='/home/filter'> <span>{"American"}</span> </Link>
						<Link to='/home/filter'> <span>{"African"}</span> </Link>
						<Link to='/home/filter'> <span >{"Asia"}</span> </Link>
						<Link to='/home/filter'> <span >{"European"}</span> </Link>
						<Link to='/home/filter'> <span >{"Oceanic"}</span> </Link>
					</div>
				</li>
        </div>
      );
  }
  
  export default Filtrar;