import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="mx-16 my-5 flex justify-between">
      <Link to="/"><img className="w-12" src="/logo-ejc-sjt.png" alt="" /></Link>

      <nav className="flex gap-7 justify-center items-center w-auto">
        <Link to="/inscricoes">Inscrições</Link>
        <button onClick={ () => { navigate('/login'); } }>ENTRAR</button>
      </nav>
    </header>
  );
}
