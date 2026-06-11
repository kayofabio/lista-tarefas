function TarefaItem({ tarefa, concluirTarefa, removerTarefa }) {
    return (
        <li>
            <span
                style={{ textDecoration: tarefa.concluida ? "line-through" : "none", color: tarefa.concluida ? "green" : "black" }}
            >
                {tarefa.texto}
            </span>
            <button
                onClick={() => concluirTarefa(tarefa.id)}
            >
                ✓
            </button>
            <button
                onClick={() => removerTarefa(tarefa.id)}
            >
                ✕
            </button>
        </li>
    );
}

export default TarefaItem;