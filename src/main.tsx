import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
