import styled from "styled-components";
import { HeaderContainer, Titulo, Subtitulo } from "../styles/components/Header.styles";

function Header({titulo, subtitulo}) {
  return (
    <HeaderContainer>
      <Titulo>{titulo}</Titulo>
      <Subtitulo>{subtitulo}</Subtitulo>
    </HeaderContainer>
  );
}

export default Header;