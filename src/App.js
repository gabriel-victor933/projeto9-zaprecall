import styled from "styled-components";
import Header from "./Header";
import Questions from "./Questions"
import Footer from "./Footer"
import { useState } from "react";
import cards from "./assets/constants/cards"


const Pagina = styled.div`
  width: 100%;
  min-height: 667px;
  background-color: #FB6B6B;
  margin-bottom: 70px;
`;


function App() {

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

function contarRespondidas(){

  let soma = 0;
  for(let i in perg){
    soma = perg[i].resultado != "nenhum" ? soma + 1 : soma;
  }
  return soma;
}



  return (
      <Pagina>
          <Header />
          <Questions perg={perg} alterarEstado={alterarEstado} alterarResultado={alterarResultado}/>
          <Footer qtd={perg.length} respondidas={contarRespondidas()}/>
      </Pagina>
  )
}

export default App;
