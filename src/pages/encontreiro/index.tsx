import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import EquipsCard from '../../components/EquipsCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import EncontreiroContext from '../../context/EncontreiroContext';

export default function Encontreiro() {
  const encontreiroContext = useContext(EncontreiroContext);
  const navigate = useNavigate();

  const { userData: {
    fullName, ejcRedTeams, ejcYellowTeams, ejcGreenTeams,
  } } = encontreiroContext;

  return (
    <>
      <Header />
      <main className="bg-gray-100 flex flex-col items-center min-h-[83.7vh] pb-10">
        <div className="w-[900px] max-sm:max-w-full py-7 max-sm:pl-4 flex">
          <h1 className="text-2xl font-bold">
            Boas-Vindas,
            {' '}
            {fullName.split(' ')[0]}
            .
          </h1>
        </div>
        <section
          className="p-6 w-[928px]
        max-sm:max-w-[90%] max-sm:mx-6 flex flex-col bg-white rounded-2xl border-2"
        >
          <h2 className="text-lg font-semibold mb-4">
            Você escolheu servir nas equipes:
          </h2>
          <div className="flex max-sm:flex-col gap-7">
            <EquipsCard
              equipColor="red"
              equips={ ejcRedTeams }
            />
            <EquipsCard
              equipColor="yellow"
              equips={ ejcYellowTeams }
            />
            <EquipsCard
              equipColor="green"
              equips={ ejcGreenTeams }
            />
          </div>
          <Button
            name="Atualizar Dados"
            className={ `self-start w-fit h-fit p-3 bg-orange-500 rounded-lg
            text-white font-sans font-semibold text-lg 
            my-10` }
            handleClick={ () => navigate('/atualizar-encontreiro') }
          />
        </section>

      </main>
      <Footer />
    </>
  );
}
