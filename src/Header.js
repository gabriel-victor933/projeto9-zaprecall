import styled from "styled-components"
import logo from "./assets/imgs/logo.png"

const Logo = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 42px;
    margin-bottom: 40px
`;

const Imagem = styled.img`
    width: 52px;
    height: 60px;
    margin: 0px 5px;

`

const Title = styled.h1`
    color: white;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    letter-spacing: -0.012em;
    transform: rotate(0.58deg);
    margin: 0px 15px;
`;

const Header = () => {

    return (
        <Logo>
            <Imagem src={logo} ></Imagem>
            <Title>ZapRecall</Title> 
        </Logo>
    )
}

export default Header