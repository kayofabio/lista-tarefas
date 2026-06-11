import {useState} from "react";

function TarefaItem({ tarefa, concluirTarefa }) {
    return (
        <li>
            {tarefa.texto}
        </li>
    );
}

export default TarefaItem;