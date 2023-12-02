import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import loginUserFormSchema from '../../schemas/loginUserFormSchema';
import Button from '../../components/Button';

type LoginUserData = Zod.infer<typeof loginUserFormSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserData>(
    {
      resolver: zodResolver(loginUserFormSchema),
    },
  );

  const loginUser = (data: any) => {
    console.log(data);

    // falta implementação do axios + rota de login
  };

  return (
    <>
      <Header />
      <main
        className="h-[83.8vh] bg-zinc-50 flex items-center justify-center flex-col gap-12"
      >
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[80px] h-[80px] mx-auto mb-9"
            src="/logo-ejc-sjt.png"
            alt=""
          />
          <p>
            Não tem uma conta ainda?
          </p>
          <Link
            className="text-red-500 hover:underline hover:text-red-600"
            to="/criar-conta"
          >
            Criar Conta
          </Link>
        </div>
        <form
          onSubmit={ handleSubmit(loginUser) }
          className="flex flex-col gap-6 items-start"
          method="post"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-base"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Digite seu e-mail"
              { ...register('email') }
              className="h-12 w-96 px-3 shadow-sm rounded-lg
               border-gray-300 border-2 focus:outline-gray-500"
            />
            {errors.email && (
              <span
                className="text-red-400 text-sm ml-3"
              >
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              { ...register('password') }
              className="h-12 w-96 px-3 shadow-sm rounded-lg
               border-gray-300 border-2 focus:outline-gray-500"
            />
            {errors.password && (
              <span
                className="text-red-400 text-sm ml-3"
              >
                {errors.password.message}
              </span>
            )}
          </div>

          <Button
            type="submit"
            name="Entrar"
            className={ `w-36 h-12 bg-red-500 rounded-lg
           text-white font-sans font-semibold text-lg` }
          />
        </form>
        {/* implementar aqui mensagem em caso de erro na tentativa de login */}
      </main>
      <Footer />
    </>
  );
}
