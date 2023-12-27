import { createContext } from 'react';
import createEncontreiroFormSchema from '../schemas/createEncontreiroFormSchema';

export type CreateEncontreiroData = Zod.infer<typeof createEncontreiroFormSchema>;

type EncontreiroContextType = {
  userData: CreateEncontreiroData,
  changeEncontreiroData: (data: CreateEncontreiroData) => void;
};

const EncontreiroContext = createContext({} as EncontreiroContextType);

export default EncontreiroContext;
