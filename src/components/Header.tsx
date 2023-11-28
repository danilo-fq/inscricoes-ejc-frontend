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

  // return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <a href="/">
        <img src="https://designbygio.it/images/logo.png" alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={ () => setIsNavOpen((prev) => !prev) }
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
          </div>

          <div className={ isNavOpen ? 'showMenuNav' : 'hideMenuNav' }>
            {' '}
            // toggle class based on isNavOpen state
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={ () => setIsNavOpen(false) }
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>
        {`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}
      </style>
    </div>;
  // );
}
