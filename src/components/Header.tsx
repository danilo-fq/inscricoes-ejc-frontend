import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from './Button';

export default function Header() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="my-5 flex justify-around items-center w-full">
      <Link to="/">
        <img className="w-16 h-16 relative right-4" src="/logo-ejc-sjt.png" alt="" />
      </Link>

      <nav className="flex gap-7 justify-center items-center w-auto max-sm:hidden">
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
      <nav className="flex flex-col lg:hidden relative left-4">
        <Button
          handleClick={ () => setIsNavOpen((prevState) => !prevState) }
          className={ `w-10 h-10 rounded-lg 
            bg-red-500 space-y-1 flex flex-col justify-center items-center` }
          name={
            <>
              <span className="block w-5 h-[1.5px] bg-white text-center mx-0.5" />
              <span className="block w-5 h-0.5 bg-white text-center mx-0.5" />
              <span className="block w-5 h-0.5 bg-white text-center mx-0.5" />
            </>
          }
        />
      </nav>
      { isNavOpen && (
        <ul
          className="bg-white w-full
        absolute top-[100px] text-right pr-4 text-lg font-medium"
        >
          <li className="py-2">
            <Link to="/inscricoes">Inscrições</Link>
          </li>
          <li className="py-2">
            <Link to="/login">Entrar</Link>
          </li>
        </ul>
      )}
    </header>
  );
}
