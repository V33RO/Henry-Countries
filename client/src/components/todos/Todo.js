import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../todos/Todos.module.css';


function Todos ({name,region,flag,id}){
   console.log("bandera",flag)
   //arreglar//
    return(
               <Link to={`/Home/Countries/${id}`}>
                   <div className={styles.todocontainer}>
                     <img className={styles.imgtodo} src={flag}/>
                     <div>
                     <p className={styles.name}>{name}</p>   
                     <p className={styles.subregion}>{region}</p>
                     </div>
                   </div>
               </Link>
    )
}

export default Todos;