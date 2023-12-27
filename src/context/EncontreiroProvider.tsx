import { useState } from 'react';
import { encontreiroMock } from '../mocks/encontreiroData';
import EncontreiroContext, { CreateEncontreiroData } from './EncontreiroContext';

type EncontreiroProviderProps = {
  children: React.ReactNode;
};

export default function EncontreiroProvider({ children }: EncontreiroProviderProps) {
  const [
    encontreiroData,
    setEncontreiroData] = useState<CreateEncontreiroData>(encontreiroMock);

  function changeEncontreiroData(data: CreateEncontreiroData) {
    setEncontreiroData({ ...encontreiroData, ...data });
  }
  return (
    <EncontreiroContext.Provider
      value={
        { userData: encontreiroData, changeEncontreiroData }
        }
    >
      {children}
    </EncontreiroContext.Provider>
  );
}
