import React, {useState} from "react";


const Contador = () => {
    const [contar, setContar] = useState(0);
    const Incrementar = () => {
        setContar(contar + 1);
    };
    return(
        <div>
            <h5>
                Conteo = {contar};
            </h5>
            <btn>incrementar</btn>
        </div>
    )
},export default Contador;