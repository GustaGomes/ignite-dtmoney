import styled from 'styled-components'
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'

const Title = styled.h1`

`

export function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  );
}