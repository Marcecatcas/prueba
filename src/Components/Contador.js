import React, {useState, Fragment} from 'react';
import Prueba from './Prueba';

const Contador = () => {
    const [number,setNumber] = useState(0);

    const [add, setAdd] = useState("");

const prueba = () =>{
    if (add ===""){
        setAdd(<div><Prueba/></div>)
    }
    
    
}
const aumentar = () =>{
    console.log("click")
    if(number === 0){
    setNumber(number + 1);
    }
    else if (number === 1){
        setNumber(number - 1);
    }
     
}
    
    return ( 
        <Fragment>
        <h3>Contador {number}</h3>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={prueba}>{prueba === '' ? "hola" : "adios"}</button>
        </Fragment>
     );
}
 
export default Contador;