import React from 'react';
import styles from '../page/Page.module.css'
import {Link} from 'react-router-dom';
//import Home from '../home/Home.js'

function Page() {
   
    return (
        <div className={styles.page}>
            <div className={styles.titulo}>
                <h1> Travel around the world</h1>
                 <div className={styles.wrapper}>
                      <Link to='/Home'>
                            <a className={styles.button} href="#">Hover me!</a>
                      </Link> 
                 </div>
                
            </div>
        </div>
        
      );
  }
  
  export default Page;