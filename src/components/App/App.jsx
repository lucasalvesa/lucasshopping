import React, { useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import AppContainer from '../AppContainer/AppContainer';
import { Wrapper, Container } from './App.styles';
import Checkbox from '../../shared/Checkbox/Checkbox';

function App() {
  const [alface, setAlface] = useState();
  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <div>
              Produtos disponíveis:{' '}
              <Checkbox
                value={alface}
                title='Alface'
                onClick={() => setAlface(!alface)}
              />
            </div>
          }
          middle={<div>Sua lista de compras</div>}
          right={<div>Estatísticas</div>}
        />
      </Container>
    </Wrapper>
  );
}

export default App;
