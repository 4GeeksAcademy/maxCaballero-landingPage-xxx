import React, { useState } from "react";


const Contador = () => {
    const [contar, setContar] = useState(0);
    const Sumar = () => {
        setContar(contar + 1);
    };
    const Quitar = () => {
        setContar(contar - 1);
    };
    return (
        <div>
            
            <h5>
                Conteo = {contar}
            </h5>
            <button onClick={Sumar}>Like</button>
            <button onClick={Quitar}>No like</button>
        </div>
    )
}
export default Contador;