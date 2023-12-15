import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import SignUp from './pages/singUp';
import SuccessInscription from './pages/successInscription';
import NotFound from './pages/notFound';
// import Inscricoes from './pages/inscricoes';
// import Login from './pages/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/inscricoes-encontreiro" element={ <SignUp /> } />
      <Route path="/confirmacao-encontreiro" element={ <SuccessInscription /> } />
      { /* <Route path="/login" element={ <Login /> } /> */}
      { /* <Route path="/criar-conta" element={ <SignUp /> } /> */}
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
