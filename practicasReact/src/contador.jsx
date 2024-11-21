import { useState } from "react";

export const Contador = () => {
    
    const [contador, setContador] = useState(0)
    
    const agregar = () => {
        setContador( contador + 1);
    }
    
    const quitar = () => {
        setContador(contador -1);
    }


    return (
        <>
            <h2>{contador}</h2>
            <button onClick={ agregar }>Sumar</button>
            <button onClick={ quitar }>Restar</button>
        </>
    )
}