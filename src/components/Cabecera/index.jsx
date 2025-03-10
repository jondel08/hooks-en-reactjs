import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import { GlobalContext } from "../../contex/GlobalContext";
import { useContext } from "react";


const HeaderEstilizado = styled.header`
   padding: 60px 0;
   display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }
`

const Cabecera = () => {
    const { setConsulta } = useContext(GlobalContext);
    return <HeaderEstilizado>
        <img src="img/logo.png" alt="Logo de Space App" />
        <CampoTexto
            setConsulta={setConsulta} />
    </HeaderEstilizado>
}

export default Cabecera