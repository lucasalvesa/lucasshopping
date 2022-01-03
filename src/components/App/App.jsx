import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import AppContainer from '../AppContainer/AppContainer';
import { Wrapper, Container } from './App.styles';

function App() {
  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={<div>Produtos Disponíveis</div>}
          middle={<div>Sua Lista de Compras</div>}
          right={<div>Estatísticas</div>}
        />
      </Container>
    </Wrapper>
  );
}

export default App;
