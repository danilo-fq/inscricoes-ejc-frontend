import { useEffect } from 'react';

export default function SuccessInscription() {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://www.instagram.com/ejcsaojudastadeu/';
    }, 10000);

    return () => clearTimeout(redirectTimer);
  }, []);

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
