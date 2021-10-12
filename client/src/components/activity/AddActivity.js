import React, {useState} from 'react';
import styles from '../activity/AddActivity.module.css'
import axios from 'axios';

function AddActivity (props){

    let name1 = props.location.search;
    let name=name1.substr(2);
    console.log('params',name)
    
    const [input,setInput] = useState({name:'',difficult:0,duration:'',season:'',countries:[name]});
    const [error,setError] = useState({difficult:'',season:''});
    
    const handlerChange = (event) => {
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
    }
    const handlerSubmit = async (evento) => {
        evento.preventDefault()
        let res = await axios.post(`http://localhost:3001/activities`,input);
        console.log('res :', res.data);
    }

    return(
        <div className={styles.page}>
            {console.log(props)}
            <form onSubmit={handlerSubmit} className={styles.container}>
                <h1>NEW ACTIVITY</h1>
                <label>Name of activity:
                    <input type='text' name='name' value={input.name} placeholder='Example: Sky' onChange={handlerChange}/>
                </label>
                <label>Difficult:
                    <input type='number' name='difficult' value={input.difficult} placeholder='5' onChange={ (evento) => { 
                        if(evento.target.value < 6 && evento.target.value > 0) {
                            handlerChange(evento)
                        }else{
                            setError({
                                ...error,
                                [evento.target.name]: 'Definir dificultad entre 1 y 5'
                            })
                        }
                    } } />
                </label>
                <label>Duration:
                    <input type='text' name='duration' value={input.duration} placeholder='Example:00:30:00' onChange={handlerChange}/>
                </label>
                <label>Season:
                    <input type='text' name='season'  value={input.season} placeholder='Example summer' onChange={ handlerChange }/>
                </label>
                <input type='submit' name='agregar' value='UPDATE ACTIVITY' />
            </form>
        </div>
    )
}



export default AddActivity;