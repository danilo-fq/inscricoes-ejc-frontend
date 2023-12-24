/* eslint-disable max-lines */
/* eslint-disable react/jsx-max-depth */
import {
  useForm,
  FormProvider,
  useWatch,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import GenericInput from '../../components/GenericInput';
import GenericSelect, { OptionType, OptionsType } from '../../components/GenericSelect';
import createEncontreiroFormSchema from '../../schemas/createEncontreiroFormSchema';
import paroquiasMock from '../../mocks/paroquias.json';
import habMusicaisMock from '../../mocks/habilidadesMusicais.json';
import ejcEquipesMock from '../../mocks/ejcEquipes.json';
import camisasMock from '../../mocks/tamanhoCamisa.json';
import CheckboxContainer from '../../components/CheckboxContainer';
import FieldArrayInputs from '../../components/FieldArrayInputs';

type CreateEncontreiroData = Zod.infer<typeof createEncontreiroFormSchema>;

export default function SignUp() {
  const [dynamicMusical, setDynamicMusical] = useState<OptionsType>(habMusicaisMock);
  const [dynamicTeams, setDynamicTeams] = useState<OptionsType>(ejcEquipesMock);
  const [dynamicCoordTeams, setDynamicCoordTeams] = useState<OptionsType>(ejcEquipesMock);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const methods = useForm<CreateEncontreiroData>({
    resolver: zodResolver(createEncontreiroFormSchema),
    mode: 'onBlur',
  });

  const {
    handleSubmit,
    setValue,
    control,
  } = methods;

  const checkInput = useWatch(
    { control, name: ['ejcTeamParticipation', 'ejcTeamCoordination'] },
  );

  const createEncontreiro = (data: CreateEncontreiroData) => {
    console.log('submit com sucesso', data);
    setIsLoading(true);

    navigate('/confirmacao-encontreiro');
  };

  const dynamicSelectChange = (
    selected: readonly OptionType[],
    inputName: 'musicalInstrument'
    | 'ejcTeamParticipation'
    | 'ejcTeamCoordination',
  ) => {
    const findValue = selected
      .filter((option) => option.value === 'Nenhuma');
    const isEmpty = findValue.length === 0;

    if (!isEmpty) {
      setValue(inputName, findValue);
    }

    switch (inputName) {
      case 'musicalInstrument':
        setDynamicMusical(isEmpty ? habMusicaisMock : []);
        break;
      case 'ejcTeamParticipation':
        setDynamicTeams(isEmpty ? ejcEquipesMock : []);
        break;
      case 'ejcTeamCoordination':
        setDynamicCoordTeams(isEmpty ? ejcEquipesMock : []);
        break;
      default:
        break;
    }
  };

  if (isLoading) {
    return (
      <div
        className="flex flex-col justify-center items-center
        mt-36 max-sm:mt-24 max-sm:mx-3 max-sm:text-center"
      >
        <img src="/logo-ejc-sjt.png" className="animate-spin w-24 h-24 mb-6" alt="" />
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
    <FormProvider { ...methods }>
      <Header />
      <form
        onSubmit={ handleSubmit(createEncontreiro) }
        className="h-fit bg-zinc-50 flex flex-col"
      >
        <section
          id="registration-section"
          className="p-10 max-sm:p-0 max-sm:py-10 flex max-sm:flex-col
          items-start max-sm:items-center gap-16 flex-wrap justify-center"
        >
          <div
            className="flex flex-col justify-center items-start max-sm:items-center
            flex-[0.2] max-sm:flex-1 ml-16 max-sm:ml-0"
          >
            <h2 className="text-2xl self-start mb-2 max-sm:self-center">
              Dados Cadastrais
            </h2>
            <p className="w-[330px] text-gray-500 max-sm:text-center">
              Use um e-mail permanente onde você possa receber informações
              extras.
            </p>
          </div>
          <div
            className="basis-96 max-sm:basis-auto flex-[0.8] max-sm:flex-1 flex
            max-sm:flex-col max-sm:items-center flex-wrap gap-6"
          >
            <GenericInput
              inputName="fullName"
              labelDescription="Nome Completo:"
              placeHolder="Digite seu nome completo"
            />
            <GenericInput
              inputName="email"
              labelDescription="E-mail:"
              placeHolder="Digite seu e-mail recorrente"
            />
            <GenericInput
              inputName="phoneNumber"
              labelDescription="Telefone:"
              placeHolder="Ex: (83) 9 9000-0000"
            />

            <GenericInput
              inputName="dateOfBirth"
              labelDescription="Data de Nascimento:"
              placeHolder="dd/mm/aaaa"
              inputType="date"
              styleInput="h-12 w-[458px] max-sm:w-72 px-3
                shadow-sm placeholder:font-normal
               text-gray-400 rounded-lg border-gray-300 border-2
               focus:outline-gray-500 focus:text-black font-normal"
            />

            <GenericSelect
              labelDescription="Sexo:"
              selectName="gender"
              placeHolder="Selecione uma opção"
              optionsSelect={ [
                { value: 'Feminino', label: 'Feminino' },
                { value: 'Masculino', label: 'Masculino' },
              ] }
              width="708"
            />

            <GenericInput
              inputName="profession"
              placeHolder="Qual sua profissão?"
              labelDescription="Profissão:"
            />

            <GenericInput
              inputName="instagram"
              placeHolder="Ex: ejcsaojudastadeu"
              labelDescription="Instagram:"
            />

            <GenericInput
              inputName="whatsapp"
              placeHolder="Ex: +558390000000"
              labelDescription="Whatsapp:"
            />

            <GenericSelect
              labelDescription="Paroquia de Origem:"
              selectName="church"
              placeHolder="Selecione uma opção"
              width="1080px"
              optionsSelect={ paroquiasMock }
              getOptionLabel={ (option) => {
                if (option.value === 'Outra') return option.value;
                return `${option.value} - ${option.cidade}`;
              } }
            />

            <div className="w-[402px] invisible max-sm:hidden" />

            <GenericInput
              inputName="password"
              labelDescription="Senha:"
              inputType="password"
            />

            <GenericInput
              inputName="confirmPassword"
              labelDescription="Confirmar Senha:"
              inputType="password"
            />
          </div>
          <hr className="rounded-lg h-[1.3px] w-full bg-zinc-200 " />
        </section>
        <section
          id="address-section"
          className="p-10 max-sm:p-0 max-sm:py-3 flex max-sm:flex-col
          items-start max-sm:items-center gap-16 flex-wrap justify-center"
        >
          <div
            className="flex flex-col justify-center items-start max-sm:items-center
          flex-[0.2] max-sm:flex-1 ml-16 max-sm:ml-0"
          >
            <h2 className="text-2xl self-start mb-2 max-sm:self-center">Endereço</h2>
            <p className="w-[330px] text-gray-500 max-sm:text-center">
              Coloque as informações correspondente onde você reside atualmente.
            </p>
          </div>
          <div
            className="basis-96 max-sm:basis-auto flex-[0.8] max-sm:flex-1 flex
            max-sm:flex-col max-sm:items-center flex-wrap gap-6"
          >
            <GenericInput inputName="zipCode" labelDescription="CEP:" />
            <GenericInput
              inputName="address"
              labelDescription="Avenida, rua ou travessia:"
            />
            <GenericInput inputName="houseNumber" labelDescription="Número:" />
            <GenericInput
              inputName="addressComplement"
              labelDescription="Complemento:"
            />
            <GenericInput inputName="neighborhood" labelDescription="Bairro:" />
            <GenericInput inputName="city" labelDescription="Cidade:" />
          </div>
          <hr className="rounded-lg h-[1.3px] w-full bg-zinc-200 " />
        </section>
        <section
          id="religious-section"
          className="p-10 max-sm:p-0 max-sm:py-3 flex max-sm:flex-col
          items-start max-sm:items-center gap-16 flex-wrap justify-center"
        >
          <div
            className="flex flex-col justify-center items-start max-sm:items-center
          flex-[0.2] max-sm:flex-1 ml-16 max-sm:ml-0"
          >
            <h2 className="text-2xl self-start mb-2 max-sm:self-center">
              Vivência Religiosa
            </h2>
            <p className="w-[330px] text-gray-500 max-sm:text-center">
              Compartilhe suas experiências e vivências religiosas.
            </p>
          </div>
          <div
            className="basis-96 max-sm:basis-auto flex-[0.8] max-sm:flex-1 flex
            max-sm:flex-col max-sm:items-center flex-wrap gap-6"
          >
            <GenericSelect
              labelDescription="É Batizado?"
              selectName="isBatism"
            />
            <GenericSelect
              labelDescription="Tem 1ª Comunhão?"
              selectName="haveFirstCommunion"
            />
            <GenericSelect
              labelDescription="É Crismado?"
              selectName="isConfirmed"
            />
            <GenericSelect
              labelDescription="Situação Matrimonial:"
              selectName="maritalStatus"
              optionsSelect={ [
                { value: 'Solteiro', label: 'Solteiro' },
                { value: 'Casado', label: 'Casado' },
                { value: 'União Estável', label: 'União Estável' },
                { value: 'Divorciado', label: 'Divorciado' },
                { value: 'Viúvo(a)', label: 'Viúvo(a)' },
              ] }
            />

            <GenericSelect
              labelDescription="Frequenta alguma pastoral ou grupo jovem?"
              selectName="pastoral"
            />
            <GenericSelect
              labelDescription="Frequenta outra religião?"
              selectName="anotherReligion"
            />
          </div>
          <hr className="rounded-lg h-[1.3px] w-full bg-zinc-200 " />
        </section>
        <section
          id="ejc-section"
          className="p-10 max-sm:p-0 max-sm:py-5 flex max-sm:flex-col
          items-start max-sm:items-center gap-16 flex-wrap justify-center"
        >
          <div
            className="flex flex-col justify-center items-start max-sm:items-center
          flex-[0.2] max-sm:flex-1 ml-16 max-sm:ml-0"
          >
            <h2 className="text-2xl self-start mb-2 max-sm:self-center">EJC</h2>
            <p className="w-[330px] text-red-500 max-sm:text-center">
              Isso não define a equipe que você irá servir, e sim para
              conhecermos seu perfil.
            </p>
          </div>
          <div
            className="basis-96 max-sm:basis-auto flex-[0.8] max-sm:flex-1 flex
            max-sm:flex-col max-sm:items-center flex-wrap gap-6"
          >
            <GenericInput
              inputName="ejcYear"
              inputType="number"
              labelDescription="Em que ano você fez EJC?"
              styleInput="w-[210px] h-12 px-3 shadow-sm placeholder:font-normal
              rounded-lg border-gray-300 border-2 focus:outline-gray-500"
            />
            <GenericSelect
              labelDescription="Qual paróquia do seu primeiro EJC:"
              selectName="ejcChurch"
              placeHolder="Selecione uma opção"
              width="1080px"
              optionsSelect={ paroquiasMock }
              getOptionLabel={ (option) => {
                if (option.value === 'Outra') return option.value;
                return `${option.value} - ${option.cidade}`;
              } }
            />
            <div className="w-[400px] invisible max-[1366px]:hidden" />
            <GenericSelect
              isMulti
              labelDescription="Você tem habilidades musicais?"
              selectName="musicalInstrument"
              optionsSelect={ dynamicMusical }
              onChangeSelect={ (selectedOptions) => {
                dynamicSelectChange(selectedOptions, 'musicalInstrument');
              } }
            />
            <div className="w-[400px] invisible max-[1366px]:hidden" />
            <GenericSelect
              isMulti
              labelDescription="Selecione as equipe que você já serviu:"
              selectName="ejcTeamParticipation"
              optionsSelect={ dynamicTeams }
              onChangeSelect={ (selectedOptions) => {
                dynamicSelectChange(selectedOptions, 'ejcTeamParticipation');
              } }
            />
            <GenericSelect
              isMulti
              labelDescription="Selecione as equipe que você já coordenou:"
              selectName="ejcTeamCoordination"
              optionsSelect={ dynamicCoordTeams }
              onChangeSelect={ (selectedOptions) => {
                dynamicSelectChange(selectedOptions, 'ejcTeamCoordination');
              } }
            />
            {checkInput[0]
            && checkInput[0].some((team) => team.value === 'Outra') && (
              <GenericInput
                inputName="otherEjcTeamParticipation"
                labelDescription="Outras Equipes que já serviu:"
                optionalElement={
                  <span
                    className="w-fit text-xs text-red-300"
                  >
                    Separe por vírgula
                  </span>
                }
                placeHolder="Ex: Anjos, Mibs, ..."
              />
            )}
            {checkInput[1]
            && checkInput[1].some((team) => team.value === 'Outra') && (
              <GenericInput
                inputName="otherEjcTeamCoordination"
                labelDescription="Outras Equipes que já coordenou:"
                optionalElement={
                  <p
                    className="text-xs text-red-300"
                  >
                    Separe por vírgula!
                  </p>
                }
                placeHolder="Ex: Anjos, Mibs, ..."
              />

            )}
          </div>
        </section>
        <section
          id="ejcTeams-section"
          className="p-10 max-sm:p-0 max-sm:py-10 flex max-sm:flex-col
          items-start max-sm:items-center gap-16 flex-wrap justify-center"
        >
          <div
            className="flex flex-col justify-center items-start max-sm:items-center
          flex-[0.2] max-sm:flex-1 ml-16 max-sm:ml-0"
          >
            <h2 className="text-2xl self-start mb-2 max-sm:self-center">Equipes</h2>
            <p className="w-[330px] text-gray-500 max-sm:text-center">
              Selecione pelo menos 1 equipe de cada cor.
            </p>
          </div>
          <div
            className="basis-96 max-sm:basis-auto flex-[0.8] max-sm:flex-1 flex
            max-sm:flex-col max-sm:items-center flex-wrap gap-6"
          >
            <CheckboxContainer
              team="ejcRedTeams"
              styleDiv="h-[340px] p-6
               bg-red-100 border-red-500 rounded-lg border-2"
              contents={ ['Cozinha', 'Minibox',
                'Ordem', 'Sementinha', 'Vigília'] }
            />
            <CheckboxContainer
              team="ejcYellowTeams"
              styleDiv="h-[340px] p-6
               bg-yellow-100 border-yellow-500 rounded-lg border-2"
              contents={ ['Bandinha', 'Correios',
                'Externa', 'Lanchinho', 'Liturgia', 'Som & Iluminação', 'Trânsito'] }
            />
            <CheckboxContainer
              team="ejcGreenTeams"
              styleDiv="h-[340px] p-6
               bg-green-100 border-green-500 rounded-lg border-2"
              contents={ ['Apresentadores', 'Boa Vontade', 'Círculos',
                'Imprensa', 'Recepção'] }
            />
          </div>
          <hr className="rounded-lg h-[1.3px] w-full bg-zinc-200 " />
        </section>
        <section
          id="more-information-section"
          className="p-10 max-sm:p-0 max-sm:py-3 flex max-sm:flex-col
          items-start max-sm:items-center gap-16 flex-wrap justify-center"
        >
          <div
            className="flex flex-col justify-center items-start max-sm:items-center
          flex-[0.2] max-sm:flex-1 ml-16 max-sm:ml-0"
          >
            <h2 className="text-2xl self-start mb-2 max-sm:self-center">
              Mais Informações
            </h2>
            <p className="w-[330px] text-gray-500 max-sm:text-center">
              Forneça detalhes adicionais para nos ajudar a conhecê-lo melhor.
            </p>
          </div>
          <div
            className="basis-96 max-sm:basis-auto flex-[0.8] max-sm:flex-1 flex
            max-sm:flex-col max-sm:items-center flex-wrap gap-6"
          >
            <GenericSelect
              labelDescription="Tamanho da Camisa:"
              selectName="shirtSize"
              placeHolder="Selecione uma opção"
              optionsSelect={ camisasMock }
              width="708"
              optionalElement={
                <span
                  className="text-xs ml-4 text-blue-500 hover:underline"
                >
                  <a
                    href="https://drive.google.com/file/d/1OU9lOAMp8iiWCSsQQF8tFY9iPIra-Gd3/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver Tamanhos
                  </a>
                </span>
              }
            />
            <GenericSelect
              labelDescription="Serviu no nosso último encontro?
              Em qual equipe?"
              selectName="lastEjcTeam"
              placeHolder="Selecione uma opção"
              optionsSelect={ ejcEquipesMock }
              width="708"
            />
            <GenericInput
              labelDescription="Nome do Crachá:"
              placeHolder="Ex: João das Neves"
              inputName="badgeName"
            />
            <GenericInput
              labelDescription="Possui restrição alimentar? Informe qual(ais)."
              placeHolder="Ex: Lactose, Frutos do mar, Glúten..."
              inputName="foodRestriction"
            />
            <GenericInput
              labelDescription="Possui filhos? Se sim, quantos?"
              inputType="number"
              placeHolder="Deixe em branco se você não tem filhos"
              inputName="children"
            />
            <div className="w-[570px] invisible max-sm:hidden" />
            <div>
              <FieldArrayInputs
                fatherFieldsName="relationshipInfos"
                fieldsDescription="Conhece alguém que irá servir conosco?"
                genericFields={ [
                  { fieldName: 'personName', fieldLabel: 'Nome', fieldType: 'text' },
                  { fieldName: 'relationshipDegree',
                    fieldLabel: 'Parentesco',
                    fieldType: 'text' },
                  { fieldName: 'contact', fieldLabel: 'Telefone', fieldType: 'text' },
                ] }
              />
            </div>
          </div>
        </section>

        <Button
          type="submit"
          name="FINALIZAR CADASTRO"
          className={ `w-fit h-fit p-3 bg-red-500 rounded-lg
           text-white font-sans font-semibold text-lg ml-10 
           max-sm:ml-0 mb-10 self-center` }
        />
      </form>
      <Footer />
    </FormProvider>
  );
}
