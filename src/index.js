import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeView from './views/Home.view';

const App = () => {
  return (
    <div>
      <h1>Olá Mundo!</h1>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HomeView />
  </React.StrictMode>,
  document.getElementById('root')
);
