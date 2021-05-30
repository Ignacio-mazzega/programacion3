import React from 'react';
import {useState} from 'react';

const Contador = () => {
    const[nombre, setNombre] = useState("Ignacio");
    const[contador, setContador] = useState(10);

    const decrementar = ()=>{
        setContador(contador - 1);
    }

    const cambiarNombre = ()=>{
        setNombre("Brian");
    }

    return (
        <>
        <h1>Primera aplicación con React</h1>
        <h2>Bienvenido: {nombre}</h2>
        <h2>Cantidad: {contador}</h2>
        <button onClick={() => setContador(contador + 1)} >+</button>
        <button onClick={decrementar} >-</button>
        <button onClick={cambiarNombre}>Cambiar nombre</button>
        </>
    );
}

export default Contador;