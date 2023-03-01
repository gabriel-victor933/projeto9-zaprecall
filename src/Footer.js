import styled from "styled-components"
import iconeCerto from "./assets/imgs/icone_certo.png"
import iconeErro from "./assets/imgs/icone_erro.png"
import iconeQuase from "./assets/imgs/icone_quase.png"
import Mensagemparabens from "/Mensagemparabens"
import Mensagemputz from "/Mensagemputz"


const Rodape = styled.footer`
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    width: 100%;
    min-height: 70px;

    position: fixed;
    bottom: 0px;
    left: 0px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const Texto = styled.p`

font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 2px;
`;

const Fila = styled.div`

img {
        width: 23px;
        height: 23px;
        margin: 2px 2.5px 0px 2.5px;
    }


`;

function Footer({ qtd, respondidas, fila, fim }) {

    function alterarIcone(res){
        switch(res){

            case "Não lembrei": return iconeErro;
            case "Quase Não lembrei": return iconeQuase;
            case "Zap!": return iconeCerto;

            default: return

        }
    }


    if(fim){
        return (
            <Rodape data-test="footer">
                <div>
                    {fila.includes("Não lembrei") ? }
                </div>
                <Texto>{respondidas}/{qtd} CONCLUIDOS</Texto>
                <Fila>{fila.map((p,i) => <img key={i} src={alterarIcone(p)} />)}</Fila>
            </Rodape>
        );
    }  

    return (
        <Rodape data-test="footer">
            <Texto>{respondidas}/{qtd} CONCLUIDOS</Texto>
            <Fila>{fila.map((p,i) => <img key={i} src={alterarIcone(p)} />)}</Fila>
        </Rodape>
    );
}

export default Footer