import Header from "./components/Header";
import FormularioTarefa from "./components/FormularioTarefa";
import TarefaItem from "./components/TarefaItem";
import Filtros from "./components/Filtros";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/themes";
import { useState } from "react";
import { BotaoTema } from "./styles/components/BotaoTema.styles";

function App() {

  const [temaEscuro, setTemaEscuro] = useState(false);

  const [tarefas, setTarefas] = useState([]);

  const [filtro, setFiltro] = useState("todas");
  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === "ativas") return !tarefa.concluida;
    if (filtro === "concluidas") return tarefa.concluida;
    return true;
  });

  function adicionarTarefa(texto) {
    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false
    };

    setTarefas([...tarefas, novaTarefa]);
  }

  function concluirTarefa(id) {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  }

  return (
    <ThemeProvider theme={temaEscuro ? darkTheme : lightTheme}>
      <GlobalStyle />
      
      <BotaoTema onClick={() => setTemaEscuro((valorAtual) => !valorAtual)}>
        {temaEscuro ? "Modo Claro" : "Modo Escuro"}
      </BotaoTema>

      <Header titulo="Lista de Tarefas" subtitulo="Projeto React frontend" />

      <Filtros filtro={filtro} setFiltro={setFiltro} />

      <FormularioTarefa adicionarTarefa={adicionarTarefa} />

      <ul>
        {tarefasFiltradas.map((tarefa) => (
          <TarefaItem
            key={tarefa.id}
            tarefa={tarefa}
            concluirTarefa={concluirTarefa}
            removerTarefa={removerTarefa}
          />
        ))}
      </ul>
    </ThemeProvider>
  );
}

export default App;