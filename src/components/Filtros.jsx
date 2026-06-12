import styled from "styled-components";
import { FiltroContainer, FiltroBotao } from "../styles/components/Filtros.styles";

function Filtros({filtro, setFiltro})  {
    return (
        <FiltroContainer>
            <FiltroBotao className="filtro" onClick={() => setFiltro("todas")} style={{ backgroundColor: filtro === "todas" ? "lightgray" : "white" }}>Todas</FiltroBotao>
            <FiltroBotao className="filtro" onClick={() => setFiltro("ativas")} style={{ backgroundColor: filtro === "ativas" ? "lightgray" : "white" }}>Ativas</FiltroBotao>
            <FiltroBotao className="filtro" onClick={() => setFiltro("concluidas")} style={{ backgroundColor: filtro === "concluidas" ? "lightgray" : "white" }}>Concluídas</FiltroBotao>
        </FiltroContainer>
    );
}

export default Filtros;