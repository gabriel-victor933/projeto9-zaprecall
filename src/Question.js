import styled from "styled-components"
import seta from "./assets/imgs/seta_play.png"
import setaVirar from "./assets/imgs/seta_virar.png"
import iconeCerto from "./assets/imgs/icone_certo.png"
import iconeErro from "./assets/imgs/icone_erro.png"
import iconeQuase from "./assets/imgs/icone_quase.png"





const Fechada = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 15px;
    margin: 12.5px 0px;

    &:hover {
    background: rgb(249,249,249);
}
`;

const Pergunta = styled(Fechada)`
    height: 131px;
    align-items: flex-start;
`;

const Resposta = styled(Fechada)`
    flex-direction: column;
    min-height: 131px;
    align-items: center;
    padding: 10px 15px;
`;


const Texto = styled.p`
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
margin-bottom: 5px;
color: ${props => props.resultado === undefined || props.resultado === "nenhum" ? "#333333": 
                    props.resultado === "Zap!" ? "#2FBE34" : props.resultado === "Não lembrei"? "#FF3030":"#FF922E"};

text-decoration: ${props => props.resultado === undefined || props.resultado === "nenhum" ? "none" : "line-through"}
`;

const Imagem = styled.img`
        width: 20px;
        height: 23px;
        align-self: ${props => props.estado === "fechada" ? "center": "flex-end"}
`;

const Botoes = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 5px;
`;

const Botao = styled.button`
    width: 85.17px;
    height: 37.17px;
    background-color: ${props => props.tipo === "Zap!" ? "#2FBE34" : props.tipo === "Não lembrei"? "#FF3030":"#FF922E"};;
    border: none;
    color: white;
    border-radius: 5px;
`;

const Question = ({numero, pergunta, resposta, estado, resultado, alterarEstado, alterarResultado}) => {
    
        const arr = ["Não lembrei", "Quase Não lembrei","Zap!"];

        function alterarIcone(res){
            switch(res){
                case "nenhum": return seta;
                case arr[0]: return iconeErro;
                case arr[1]: return iconeQuase;
                case arr[2]: return iconeCerto;

                default: return

            }
        }

        function alterarDataTest(res){
            switch(res){
                case arr[0]: return "no-icon";
                case arr[1]: return "partial-icon";
                case arr[2]: return "zap-icon";

                default: return

            }
        }



        switch(estado){

            case "fechada": return (<Fechada data-test="flashcard">
                                    <Texto resultado={resultado} data-test="flashcard-text">Pergunta {numero}</Texto>
                                    {resultado === "nenhum" ? <Imagem src={seta} estado={estado} onClick={() => alterarEstado(numero-1)} data-test="play-btn" /> :
                                            <Imagem src={alterarIcone(resultado)} estado={estado} data-test={alterarDataTest(resultado)}/>}
                                    
                                    </Fechada>);

            case "pergunta": return (<Pergunta data-test="flashcard">
                                    <Texto data-test="flashcard-text">{pergunta}</Texto>
                                    <Imagem src={setaVirar} estado={estado} onClick={() => alterarEstado(numero-1)} data-test="turn-btn"/>
                                    </Pergunta>);

            case "resposta": return (<Resposta data-test="flashcard">
                                    <Texto data-test="flashcard-text">{resposta}</Texto>
                                    <Botoes>{arr.map((p,i) => <Botao key={p} data-test={i == 0 ? "no-btn" : i == 1 ? "partial-btn" : "zap-btn"} tipo={p} onClick={() => alterarResultado(numero-1,p)}>{p}</Botao>)}</Botoes>
                                    </Resposta>);

            default: return

        }
        
}

export default Question