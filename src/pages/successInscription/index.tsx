import { useEffect } from 'react';

export default function SuccessInscription() {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://www.instagram.com/ejcsaojudastadeu/';
    }, 8000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-36">
      <p className="text-4xl font-medium text-green-600">
        Cadastro Efetuado com sucesso!
      </p>
      <p className="mt-3 text-base">
        Em instantes você receberá um email confirmando os seus dados!
      </p>
    </div>
  );
}
