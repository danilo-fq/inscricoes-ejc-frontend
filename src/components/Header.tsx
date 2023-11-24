import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="mx-16 my-5 flex justify-between">
      <Link to="/"><img className="w-16 h-16" src="/logo-ejc-sjt.png" alt="" /></Link>

      <nav className="flex gap-7 justify-center items-center w-auto">
        <Link to="/inscricoes" className="text-lg font-medium">
          Inscrições
        </Link>
        <Button
          name="ENTRAR"
          handleClick={ () => navigate('/login') }
          className={ `w-36 h-12 bg-red-500 rounded-lg
           text-white font-sans font-semibold text-lg` }
        />
      </nav>
    </header>
  );
}
