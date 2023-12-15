import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import Inscricoes from './pages/inscricoes';
import NotFound from './pages/notFound';
import Login from './pages/login';
import SignUp from './pages/singUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/inscricoes" element={ <Inscricoes /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/criar-conta" element={ <SignUp /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
