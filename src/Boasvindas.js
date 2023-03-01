import styled from "styled-components"
import logo from "./assets/imgs/logo.png"

const Imagem = styled.img`
    width: 136px;
    height: 161px;
`;

const Titulo = styled.h1`
font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.012em;
color: white;
margin: 30px 0px 0px 0px;
`;

const Botao = styled.button`
width: 246px;
height: 54px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #D70900;
background: #FFFFFF;
border: 1px solid #D70900;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin: 50px 0px 60px 0px;  
`;

const Boasvindas = ({alterarTela}) =>  {

    

    return (
        <>
        <Imagem src={logo} />
        <Titulo>ZapRecall</Titulo>
        <Botao onClick={alterarTela}>Iniciar Recall!</Botao>
        </>

    )
}

export default Boasvindas

