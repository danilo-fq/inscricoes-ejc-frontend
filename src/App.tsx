import { Routes, Route } from 'react-router-dom';

import './App.css';
import SignUp from './pages/singUp';
import SuccessInscription from './pages/successInscription';
import NotFound from './pages/notFound';
import QuestionPage from './pages/QuestionPage';
import Encontrista from './pages/encontrista';
import Encontreiro from './pages/encontreiro';
import Login from './pages/login';
import UpdateEncontreiro from './pages/updateEncontreiro';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <QuestionPage /> } />
      <Route path="/inscricao-encontreiro" element={ <SignUp /> } />
      <Route path="/confirmacao-encontreiro" element={ <SuccessInscription /> } />
      <Route path="/inscricao-encontrista" element={ <Encontrista /> } />
      <Route path="/encontreiro/:id" element={ <Encontreiro /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/atualizar-encontreiro" element={ <UpdateEncontreiro /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
