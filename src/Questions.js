import styled from "styled-components"
import Question from "./Question"
import { useState } from "react";


const Perguntas = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px;
`;

const Questions = ({perg, alterarEstado, alterarResultado}) => {

    

    return (
        <Perguntas>
            {perg.map((p,i) => <Question key={i} 
            numero={i+1} pergunta={p.question} 
            resposta={p.answer} estado={p.estado} 
            resultado={p.resultado} alterarEstado={alterarEstado} alterarResultado={alterarResultado}/>)}
        </Perguntas>
    )
}

export default Questions