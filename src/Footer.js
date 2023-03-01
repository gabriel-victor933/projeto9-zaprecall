import styled from "styled-components"

const Rodape = styled.footer`
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 70px;

    position: fixed;
    bottom: 0px;
    left: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333

`;

const Footer = ({qtd, respondidas}) => {

    return (
        <Rodape data-test="footer">{respondidas}/{qtd} CONCLUIDOS</Rodape>
    )
}

export default Footer