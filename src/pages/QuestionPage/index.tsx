import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import checkRedCircle from '../../assets/check-red-circle.svg';

export default function QuestionPage() {
  const [isCheckedEncontreiro, setIsCheckedEncontreiro] = useState(false);
  const [isCheckedEncontrista, setIsCheckedEncontrista] = useState(false);

  const navigate = useNavigate();

  const handleChangeEncontreiro = () => {
    if (!isCheckedEncontreiro) {
      setIsCheckedEncontreiro(true);
      setIsCheckedEncontrista(false);
    } else {
      setIsCheckedEncontreiro(false);
    }
  };

  const handleChangeEncontrista = () => {
    if (!isCheckedEncontrista) {
      setIsCheckedEncontrista(true);
      setIsCheckedEncontreiro(false);
    } else {
      setIsCheckedEncontrista(false);
    }
  };

  return (
    <main className="mt-36 max-sm:mt-16 flex flex-col items-center ">
      <img src="./logo-ejc-sjt.png" className="w-24 h-24 mb-9" alt="" />
      <div className="flex justify-center">
        <h1
          className="w-[1200px] max-sm:w-[90%] text-4xl
        max-sm:text-xl font-medium text-center"
        >
          Você já participou de algum Encontro de Jovens com Cristo (EJC) pela
          igreja católica anteriormente?
        </h1>
      </div>
      <div className="flex max-sm:flex-col max-sm:items-center gap-4 mt-14 mb-12">
        <label
          id="encontreiro-label"
          htmlFor="encontreiro"
          className={`w-[500px] max-sm:w-[340px]
          max-sm:max-h-[90px] h-[84px] max-sm:h-16 rounded-lg 
          ${isCheckedEncontreiro ? 'border-red-500' : 'border-gray-300'} 
          border-2 flex justify-between items-center 
          px-8 max-sm:px-5 text-2xl max-sm:text-base
          `}
        >
          Sim, sou um encontreiro
          <input
            type="checkbox"
            name="encontreiro"
            id="encontreiro"
            checked={isCheckedEncontreiro}
            onChange={handleChangeEncontreiro}
            className="invisible"
          />
          <div>
            {isCheckedEncontreiro ? <img src={checkRedCircle} alt="" /> : ''}
          </div>
        </label>
        <label
          id="encontrista-label"
          htmlFor="encontrista"
          className={`w-[500px] max-sm:w-[340px] h-fit rounded-lg 
          ${isCheckedEncontrista ? 'border-red-500' : 'border-gray-300'} 
          border-2 flex justify-between items-center 
          px-8 max-sm:px-5 py-3 text-xl max-sm:text-base
          `}
        >
          Não, esta será minha primeira
          <br />
          vez (serei encontrista)
          <div />
          <input
            type="checkbox"
            name="encontrista"
            id="encontrista"
            checked={isCheckedEncontrista}
            onChange={handleChangeEncontrista}
            className="invisible"
          />
          <div>
            {isCheckedEncontrista ? <img src={checkRedCircle} alt="" /> : ''}
          </div>
        </label>
      </div>
      <Button
        name="Continuar"
        disabled={!isCheckedEncontreiro && !isCheckedEncontrista}
        className="w-52 h-14 bg-red-500
         text-white font-semibold text-lg rounded-lg disabled:bg-gray-300"
        handleClick={() => {
          if (isCheckedEncontreiro) {
            navigate('/inscricao-encontreiro');
          } else {
            navigate('/inscricao-encontrista');
          }
        }}
      />
    </main>
  );
}
