import { z } from 'zod';

const SELECT_ONE_OPTION = 'Selecione pelo menos uma das opções';

const selectObject = {
  value: z.string(),
  label: z.string().optional(),
  cidade: z.string().optional(),
};

const createEncontreiroFormSchema = z.object({
  fullName: z.string()
    .min(20, { message: 'O nome Completo é obrigatório' })
    .transform((name) => {
      return (name.trim()
        .split(' ')
        .map(
          (word) => word[0].toUpperCase()
            .concat(word.substring(1).toLowerCase()),
        ).join(' ')
      );
    }),
  email: z.string()
    .min(1, { message: 'O e-mail é obrigatório' })
    .email({ message: 'Formato de e-mail inválido' }),
  phoneNumber: z.string()
    .min(1, { message: 'O contato é obrigatório' })
    .min(11, { message: 'O número deve conter DDD e o nono dígito' }),
  dateOfBirth: z.coerce.date({
    required_error: 'Por favor, informe uma data',
    invalid_type_error: 'Formato de data inválido',
  })
    .min(
      new Date('1987-01-01'),
      { message: 'Você já ultrapassou a idade máximo permitida' },
    )
    .max(
      new Date('2007-01-01'),
      { message: 'Você ainda não tem a idade mínima permitida' },
    )
    .transform((date) => date.toLocaleDateString('pt-BR', { timeZone: 'UTC' })),
  gender: z.object(selectObject, {
    required_error: 'Selecione uma opção',
  }).transform((gender) => {
    return gender.value;
  }),
  profession: z.string()
    .min(1, { message: 'Por favor, informe a sua profissão' }),
  instagram: z.string()
    .min(1, { message: 'Digite o nome de usuário' }),
  whatsapp: z.string()
    .min(1, { message: 'Informe seu contato do whatsapp' }),
  church: z.object(selectObject, {
    required_error: 'Você deve informar a sua paróquia de origem',
  })
    .transform((church) => church.value),
  password: z.string()
    .min(1, { message: 'Por favor, cadastre uma senha' })
    .min(6, { message: 'Sua senha deve conter no mínimo 6 dígitos' }),
  confirmPassword: z.string(),
  zipCode: z.string()
    .min(8, { message: 'Informe o seu CEP' }),
  address: z.string()
    .min(1, { message: 'Informe o nome da sua Avenida, rua ou travessia' }),
  houseNumber: z.string().optional(),
  addressComplement: z.string(),
  neighborhood: z.string()
    .min(1, { message: 'Informe o bairro onde você reside' }),
  city: z.string()
    .min(1, { message: 'Informe o nome da cidade onde reside' }),
  isBatism: z.object(selectObject, {
    required_error: 'Informe se você é batizado',
  }).transform((info) => info.value),
  haveFirstCommunion: z.object(selectObject, {
    required_error: 'Informe se você tem primeira comunhão',
  }).transform((info) => info.value),
  isConfirmed: z.object(selectObject, {
    required_error: 'Informe se você é crismado',
  }).transform((info) => info.value),
  maritalStatus: z.object(selectObject, {
    required_error: 'Informe qual sua situação matrimonial',
  }).transform((info) => info.value),
  pastoral: z.object(selectObject)
    .optional()
    .transform((info) => {
      if (info) {
        return info.value;
      }
    }),
  anotherReligion: z.object(selectObject, {
    required_error: 'Informe se você frequenta outra religião',
  }).transform((info) => info.value),
  ejcYear: z.coerce.number()
    .min(1, { message: 'Informe o ano do seu primeiro encontro' })
    .min(1930, { message: 'Por favor insira um ano válido' })
    .max(2023, { message: 'Por favor insira um ano válido' }),
  ejcChurch: z.object(selectObject, {
    required_error: 'Informe a sua paróquia do seu primeiro EJC',
  })
    .transform((church) => church.value),
  musicalInstrument: z.array(z.object(selectObject), {
    required_error: SELECT_ONE_OPTION,
  }),
  ejcTeamParticipation: z.array(z.object(selectObject), {
    required_error: SELECT_ONE_OPTION,
  }),
  ejcTeamCoordination: z.array(z.object(selectObject), {
    required_error: SELECT_ONE_OPTION,
  }),
  ejcRedTeams: z.array(z.string(), {
    invalid_type_error: 'Selecione pelo menos 1 equipe da cor vermelha',
  })
    .min(1, { message: 'Selecione pelo menos 1 equipe da cor vermelha' }),
  ejcYellowTeams: z.array(z.string(), {
    invalid_type_error: 'Selecione pelo menos 1 equipe da cor amarela',
  })
    .min(1, { message: 'Selecione pelo menos 1 equipe da cor amarela' }),
  ejcGreenTeams: z.array(z.string(), {
    invalid_type_error: 'Selecione pelo menos 1 equipe da cor verde',
  })
    .min(1, { message: 'Selecione pelo menos 1 equipe da cor verde' }),
  shirtSize: z.object(selectObject, {
    required_error: 'Selecione o tamanho de camisa',
  })
    .transform((shirt) => shirt.value),
  lastEjcTeam: z.object(selectObject, {
    required_error: 'Selecione uma opção',
  })
    .transform((ejcTeam) => ejcTeam.value),
  badgeName: z.string().min(1, { message: 'Digite o nome que irá no seu crachá' }),
  foodRestriction: z.string().optional(),
  relationshipInfos: z.array(z.object({
    personName: z.string().min(1, { message: 'Nome da pessoa' }),
    relationshipDegree: z.string().min(1, { message: 'Campo importante' }),
    contact: z.string().min(1, { message: 'Contato da pessoa' }),
  })).optional(),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: 'Senhas não coincidem',
  path: ['confirmPassword'],
})
  .refine(({ ejcYear }) => {
    return new Date().getFullYear() - ejcYear >= 1;
  }, {
    message: `Você precisa esperar 1 ano
  após seu primeiro encontro para servir conosco`,
    path: ['ejcYear'],
  });

export default createEncontreiroFormSchema;
