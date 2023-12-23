import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import SignUp from './pages/singUp';
import SuccessInscription from './pages/successInscription';
import NotFound from './pages/notFound';
// import Encontreiro from './pages/encontreiro';
// import Home from './pages/home';
// import Inscricoes from './pages/inscricoes';
// import Login from './pages/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/inscricoes-encontreiro" replace /> } />
      <Route index path="/inscricoes-encontreiro" element={ <SignUp /> } />
      <Route path="/confirmacao-encontreiro" element={ <SuccessInscription /> } />
      {/* <Route path="/encontreiro" element={ <Encontreiro /> } /> */}
      { /* <Route path="/login" element={ <Login /> } /> */}
      { /* <Route path="/criar-conta" element={ <SignUp /> } /> */}
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
