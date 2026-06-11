import Header from "./components/Header";
import FormularioTarefa from "./components/FormularioTarefa";
import TarefaItem from "./components/TarefaItem";
import { useState } from "react";

function App() {

  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(texto) {
    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false
    };

    setTarefas([...tarefas, novaTarefa]);
    console.log(tarefas[0]);
  }

  function concluirTarefa(id) {
    setTarefas(tarefas.map(tarefa => {
      tarefa.id === id ? {...tarefa, concluida: !tarefa.concluida} : tarefa;
    }));
  }

  return (
    <>
      <Header titulo="Lista de Tarefas" subtitulo="Projeto React" />

      <FormularioTarefa adicionarTarefa={adicionarTarefa} />

      <ul>
        {tarefas.map((tarefa) => (
          <TarefaItem
            key={tarefa.id}
            tarefa={tarefa}
            concluirTarefa={concluirTarefa}
          />
        ))}
      </ul>
    </>
  );
}

export default App;