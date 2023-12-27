import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SuccessInscription() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/encontreiro/1');
    }, 10000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center mt-24 max-sm:text-center">
      <img src="./logo-ejc-sjt.png" className="w-24 h-24 mb-6" alt="" />
      <p className="text-4xl font-medium text-green-600">
        Cadastro Efetuado com sucesso!
      </p>
      <p className="mt-5 text-base">
        Em instantes você será redirecionado para nosso perfil no instagram e
        receberá um email com a confirmação dos seus dados!
      </p>
    </div>
  );
}
