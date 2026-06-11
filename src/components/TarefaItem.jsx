import { useState } from "react";

function TarefaItem({ tarefa, concluirTarefa }) {
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
        </li>
    );
}

export default TarefaItem;