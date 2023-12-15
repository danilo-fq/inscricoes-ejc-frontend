import { useEffect } from 'react';

export default function SuccessInscription() {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://www.instagram.com/ejcsaojudastadeu/';
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-36 max-sm:text-center">
      <p className="text-4xl font-medium text-black">
        Página não encontrada!
        {' '}
        {':\'('}
      </p>
      <p className="mt-3 text-base">
        Em instantes você será redirecionado para nossa página no instagram
      </p>
    </div>
  );
}
