import { Routes, Route } from 'react-router-dom';

import './App.css';
import SignUp from './pages/singUp';
import SuccessInscription from './pages/successInscription';
import NotFound from './pages/notFound';
import QuestionPage from './pages/QuestionPage';
import Encontrista from './pages/encontrista';
// import Home from './pages/home';
// import Inscricoes from './pages/inscricoes';
// import Login from './pages/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <QuestionPage /> } />
      <Route index path="/inscricao-encontreiro" element={ <SignUp /> } />
      <Route path="/confirmacao-encontreiro" element={ <SuccessInscription /> } />
      <Route path="/inscricao-encontrista" element={ <Encontrista /> } />
      { /* <Route path="/login" element={ <Login /> } /> */}
      { /* <Route path="/criar-conta" element={ <SignUp /> } /> */}
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
