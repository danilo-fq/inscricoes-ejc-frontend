import { z } from 'zod';

const loginUserFormSchema = z.object({
  email: z.string()
    .min(1, { message: 'O e-mail é obrigatório' })
    .email({ message: 'Formato de e-mail inválido' }),
  password: z.string()
    .min(1, { message: 'A senha é obrigatória' })
    .min(6, { message: 'A senha deve conter pelo menos 6 dígitos' }),
});

export default loginUserFormSchema;
