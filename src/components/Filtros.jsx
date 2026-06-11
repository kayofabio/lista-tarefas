function Filtros({filtro, setFiltro})  {
    return (
        <div>
            <button className="filtro" onClick={() => setFiltro("todas")} style={{ backgroundColor: filtro === "todas" ? "lightgray" : "white" }}>Todas</button>
            <button className="filtro" onClick={() => setFiltro("ativas")} style={{ backgroundColor: filtro === "ativas" ? "lightgray" : "white" }}>Ativas</button>
            <button className="filtro" onClick={() => setFiltro("concluidas")} style={{ backgroundColor: filtro === "concluidas" ? "lightgray" : "white" }}>Concluídas</button>
        </div>
    );
}

export default Filtros;