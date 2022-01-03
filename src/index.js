import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
  </React.StrictMode>,
  document.getElementById('root')
);
