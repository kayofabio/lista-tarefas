import { useState } from "react";
import { Formulario, Input, InputBotao } from "../styles/components/Formulario.styles";

function FormularioTarefa({adicionarTarefa}) {
    const [texto, setTexto] = useState("");

    function enviar(e) {
        e.preventDefault();
        adicionarTarefa(texto);
        setTexto("");
    }

    return (
        <Formulario onSubmit={enviar}>
            <Input
                type="text"
                placeholder="Digite a tarefa"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />

            <InputBotao type="submit">Adicionar</InputBotao>
        </Formulario>
    );
}

export default FormularioTarefa;