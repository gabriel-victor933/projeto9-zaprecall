import styled from "styled-components";
import Header from "./Header";
import Questions from "./Questions"
import Footer from "./Footer"

const Pagina = styled.div`
  width: 100%;
  min-height: 667px;
  background-color: #FB6B6B;
  margin-bottom: 70px;
`;


function App() {
  return (
      <Pagina>
          <Header />
          <Questions />
          <Footer />
      </Pagina>
  )
}

export default App;
