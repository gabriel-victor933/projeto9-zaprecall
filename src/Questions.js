import styled from "styled-components"
import Question from "./Question"
import cards from "./assets/constants/cards"
import { useState } from "react";

const Perguntas = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px;
`;

const Questions = () => {

    const [perg, setPerg] = useState(cards.map(c => {
        return {...c,estado: "fechada", resultado: "nenhum"} 
    }))

    function alterarEstado(index){

        let novaPerg = [...perg]

        switch(novaPerg[index].estado){
            case "fechada": novaPerg[index].estado = "pergunta"; break;
            case "pergunta": novaPerg[index].estado = "resposta"; break;
            case "resposta": novaPerg[index].estado = "fechada"; break;
        }

        setPerg(novaPerg)
        
    }

    function alterarResultado(index,res){

        let novoRes = [...perg]

        novoRes[index].resultado = res;

        setPerg(novoRes)

        alterarEstado(index)
    }

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