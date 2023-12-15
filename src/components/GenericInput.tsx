import { useFormContext } from 'react-hook-form';

import ErrorFormMessage from './ErrorFormMessage';

type InputProps = {
  labelDescription: string;
  styleLabel?: React.HTMLAttributes<HTMLLabelElement>['className'];
  styleInput?: React.HTMLAttributes<HTMLInputElement>['className'];
  inputType?: string;
  inputName: string;
  inputId?: string;
  placeHolder?: string;
  parentField?: string;
};

export default function GenericInput({
  labelDescription,
  styleLabel = 'text-base font-medium flex flex-col',
  styleInput = `h-12 w-[458px] max-sm:w-72 px-3 shadow-sm placeholder:font-normal
  rounded-lg border-gray-300 border-2 focus:outline-gray-500`,
  inputType = 'text',
  inputName,
  placeHolder = '',
  inputId = inputName,
  parentField = '',
}: InputProps) {
  const { register, formState: { errors } } = useFormContext();
  console.log('quem é inputName', inputName);

  const error = errors[parentField || inputName];

  const getError = () => {
    if (parentField && Array.isArray(error)) {
      const [, childFieldIndex, childFieldName] = inputName.split('.');

      if (error[Number(childFieldIndex)]) {
        return error[Number(childFieldIndex)][childFieldName];
      }
    }
    console.log('chega aqui no fim do getError? e quem é error', error);

    return error;
  };

  return (
    <label
      className={ styleLabel }
      htmlFor={ inputName }
    >
      {labelDescription}
      <input
        id={ inputId }
        { ...register(inputName) }
        type={ inputType }
        placeholder={ placeHolder }
        className={ styleInput }
      />
      <ErrorFormMessage error={ getError() } />
    </label>
  );
}
