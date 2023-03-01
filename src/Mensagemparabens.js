import styled from "styled-components"; 

const Mensagem = styled.div`

font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #333333;
margin: 15px 35px;

h1 {
    font-weight: 700;
    margin-bottom: 5px;

}

`;


const Mensagemparabens = () => {

    return (
        <>
        <Mensagem data-test="finish-text">
            <h1>&#129395; Parabéns</h1>
            <p>Você não esqueceu de nenhum flashcard!</p>
        </Mensagem>
        </>
    )
}

export default Mensagemparabens