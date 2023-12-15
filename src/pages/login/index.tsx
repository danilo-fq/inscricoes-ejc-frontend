import { Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import loginEncontreiroFormSchema from '../../schemas/loginEncontreiroFormSchema';
import Button from '../../components/Button';
import GenericInput from '../../components/GenericInput';

type LoginUserData = Zod.infer<typeof loginEncontreiroFormSchema>;

export default function Login() {
  const methods = useForm<LoginUserData>({
    resolver: zodResolver(loginEncontreiroFormSchema),
    mode: 'onBlur',
  });

  const {
    handleSubmit,
  } = methods;

  const loginEncontreiro = (data: object) => {
    console.log(data);

    // falta implementação do axios + rota de login
  };

  return (
    <FormProvider { ...methods }>
      <Header />
      <main
        className="h-screen bg-zinc-50 flex flex-col items-center justify-center gap-12"
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
          onSubmit={ handleSubmit(loginEncontreiro) }
          className="flex flex-col gap-6 items-start"
          method="post"
        >
          <div className="flex flex-col gap-4 justify-center items-center">
            <GenericInput
              inputName="email"
              labelDescription="Email:"
              placeHolder="Digite seu e-mail"
              styleInput="h-12 w-96 max-sm:w-72 px-3 shadow-sm rounded-lg border-gray-300
              border-2 focus:outline-gray-500 placeholder:font-normal"
            />
            <GenericInput
              inputName="password"
              inputType="password"
              labelDescription="Senha:"
              placeHolder="Digite sua senha:"
              styleInput="h-12 w-96 max-sm:w-72 px-3 shadow-sm rounded-lg
              border-gray-300 border-2 focus:outline-gray-500 placeholder:font-normal"
            />
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
    </FormProvider>
  );
}
