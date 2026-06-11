import { useState } from "react";

function FormularioTarefa({adicionarTarefa}) {
    const [texto, setTexto] = useState("");

    function enviar(e) {
        e.preventDefault();
        adicionarTarefa(texto);
        setTexto("");
    }

    return (
        <form onSubmit={enviar}>
            <input
                type="text"
                placeholder="Digite a tarefa"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />

            <button type="submit">Adicionar</button>
        </form>
    );
}

export default FormularioTarefa;