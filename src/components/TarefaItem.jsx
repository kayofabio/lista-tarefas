import styled from "styled-components";
import { TarefaContainer, TarefaTexto, TarefaBotao } from "../styles/components/Tarefa.styles";

function TarefaItem({ tarefa, concluirTarefa, removerTarefa }) {
    return (
        <TarefaContainer>
            <TarefaTexto concluida={tarefa.concluida}>
                {tarefa.texto}
            </TarefaTexto>
            <TarefaBotao
                onClick={() => concluirTarefa(tarefa.id)}
            >
                ✓
            </TarefaBotao>
            <TarefaBotao
                onClick={() => removerTarefa(tarefa.id)}
            >
                ✕
            </TarefaBotao>
        </TarefaContainer>
    );
}

export default TarefaItem;