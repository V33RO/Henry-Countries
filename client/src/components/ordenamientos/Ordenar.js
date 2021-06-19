import React from 'react';
import styles from './Ordenar.module.css';
import {Link} from 'react-router-dom';



function Ordenar() {
   
    return (
     <div> 
        <li className={styles.dropdown}>
					<span className={styles.dropbtn}>Filter</span>
						<div className={styles.dropdown_content}>
							<span>{"sorted by alphabet A to Z"}</span>
							<span>{"sorted by alphabet Z to A"}</span>
							<span >{"population ordered from smallest to largest"}</span>
							<span >{"population ordered from largest to smallest"}</span>
						</div>
        </li>
        </div>
      );
  }
  
  export default Ordenar;