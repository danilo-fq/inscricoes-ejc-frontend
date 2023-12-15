export default function Footer() {
  return (
    <footer className="bg-zinc-700 py-3">
      <p className="text-center text-white text-sm">
        © 2023 Copyright EJC São Judas Tadeu. Desenvolvido por:
        {' '}
        <a className="hover:underline" href="https://github.com/danilo-fq" target="_blank" rel="noreferrer">
          Danilo Ferreira
        </a>
        {', '}
        <a className="hover:underline" href="https://github.com/paulovictor11" target="_blank" rel="noreferrer">Paulo Victor</a>
        {' e '}
        <a className="hover:underline" href="https://github.com/Vinicyus1" target="_blank" rel="noreferrer">Vinicius Ferreira</a>
        .
      </p>
    </footer>
  );
}
