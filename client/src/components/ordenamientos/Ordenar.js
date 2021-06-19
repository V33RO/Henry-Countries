import React from 'react';
import styles from './Ordenar.module.css';
import {Link} from 'react-router-dom';



function Ordenar() {
   
    return (
     <div>  
               <li className={styles.dropdown}>
					<span className={styles.dropbtn}>Order</span>
					<div className={styles.dropdown_content}>
						<span>{"Order from A to Z"}</span>
						<span>{"Order from Z to A"}</span>
						<span>{"Lower to higher population"}</span>
						<span>{"Higher to lower Population"}</span>
					</div>
				</li>
        </div>
      );
  }
  
  export default Ordenar;