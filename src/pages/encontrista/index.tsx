import { useEffect, useState } from 'react';

export default function Encontrista() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://www.instagram.com/ejcsaojudastadeu/';
    }, 10000);

    return () => clearTimeout(redirectTimer);
  }, []);

  if (isLoading) {
    return (
      <div
        className="flex flex-col justify-center items-center
        mt-36 max-sm:mt-24 max-sm:mx-3 max-sm:text-center"
      >
        <img
          src="./logo-ejc-sjt.png"
          className="animate-spin w-24 h-24 mb-6"
          alt=""
        />
        <p
          className="animate-bounce text-4xl
        max-sm:text-xl font-light text-black text-center"
        >
          Carregando...
        </p>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col justify-center items-center
    mt-36 max-sm:mt-24 max-sm:mx-3 max-sm:text-center"
    >
      <img src="./logo-ejc-sjt.png" className="w-24 h-24 mb-6" alt="" />
      <p className="text-4xl max-sm:text-xl font-light text-black text-center">
        As inscrições para vivênciar a primeira vez o EJC ainda{' '}
        <span className="font-medium">não estão abertas</span>!
      </p>
      <p className="text-2xl max-sm:text-lg font-normal text-center mt-8">
        Acompanhe nossa página do instagram para saber quando estarão abertas as
        inscrições! :)
      </p>
      <p className="mt-7 text-xl max-sm:text-base">
        Em instantes você será redirecionado para nossa página no instagram...
      </p>
    </div>
  );
}
