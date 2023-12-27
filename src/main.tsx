import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';
import EncontreiroProvider from './context/EncontreiroProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <EncontreiroProvider>
        <App />
      </EncontreiroProvider>
    </BrowserRouter>
  </StrictMode>,
);
