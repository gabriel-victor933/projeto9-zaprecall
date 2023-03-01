import styled from "styled-components";
import Header from "./Header";
import Questions from "./Questions"
import Footer from "./Footer"
import { useState } from "react";
import cards from "./assets/constants/cards"
import Boasvindas from "./Boasvindas"


const Pagina = styled.div`
  width: 100%;
  min-height: 667px;
  background-color: #FB6B6B;
  margin-bottom: ${props => props.inicio === false ? "0px" : "70px"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
`;


function App() {

  const [inicio, setInicio] = useState(false)

  const [perg, setPerg] = useState(cards.map(c => {
    return {...c,estado: "fechada", resultado: "nenhum"} 
}))

  const [fila,setFila] = useState([])

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
    let novaFila = [...fila,res]

    novoRes[index].resultado = res;

    setFila(novaFila)
    setPerg(novoRes)
    alterarEstado(index)
}


  if(inicio){
    return (
      <Pagina inicio={inicio}>
          <Header />
          <Questions perg={perg} alterarEstado={alterarEstado} alterarResultado={alterarResultado}/>
          <Footer qtd={perg.length} respondidas={fila.length} fila={fila} fim={perg.length == fila.length}/>
      </Pagina>
  )
  } else {
    return(
      <Pagina inicio={inicio}>
        <Boasvindas alterarTela={() => setInicio(true)}/>
      </Pagina>
      )
  }

  
}

export default App;
