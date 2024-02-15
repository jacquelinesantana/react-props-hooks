import { useState } from "react";

function Contador(){
    //hook
    const [ valorx, setValorx] = useState(0);

    //valor aqui inicia com o valor ZERO
    /*
    constante do hook 
    inicia com valor, e pode sofrer alteração do valor com o setValor
    */
    function somaClique(){
        setValorx (valorx +1)
    }

    return(
        <div>
            <h1>Contador</h1>
            <p>O valor é: {valorx}</p>
            <button onClick={somaClique}>Adicionar 1</button>
        </div>

    )
}

export default Contador;