import styled from "styled-components";

export const TarefaContainer = styled.li`
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin-top: 8px;
  border: 1px solid;
  border-color: #000;
  border-radius: 8px;
  padding: 4px;
`;

export const TarefaTexto = styled.span`
  text-decoration: ${({ concluida }) => (concluida ? "line-through" : "none")};
  list-style: none;
  flex: 2;
  text-align: center;
`;

export const TarefaBotao = styled.button`
  margin-left: 10px;
  cursor: pointer;
  background-color: #7e7e7e;
  border: 1px solid #555;
  border-radius: 4px;
  padding: 6px;
`;