import { useFieldArray, useFormContext } from 'react-hook-form';
import GenericInput from './GenericInput';
import Button from './Button';

interface InputField {
  fieldName: string;
  fieldLabel: string;
  fieldType: string;
  fieldPlaceHolder?: string;
}

type FieldArrayInputsProps = {
  fieldsDescription: string;
  genericFields: InputField[];
  fatherFieldsName: string;
  styleLabel?: React.HTMLAttributes<HTMLLabelElement>['className'];
  styleInput?: React.HTMLAttributes<HTMLInputElement>['className'];
};

export default function FieldArrayInputs({
  fieldsDescription,
  genericFields,
  fatherFieldsName,
  styleLabel = 'text-base font-medium flex flex-col justify-between',
  styleInput = `h-12 w-48 px-3 shadow-sm placeholder:font-normal
  rounded-lg border-gray-300 border-2 focus:outline-gray-500`,
}: FieldArrayInputsProps) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: fatherFieldsName,
  });

  const addNewFields = () => {
    append({ personName: '', relationshipDegree: '', phoneNumber: '' });
  };

  const removeFields = (index: number) => {
    remove(index);
  };

  return (
    <div className="mt-5">
      <div className="flex flex-col justify-center items-start max-sm:items-center gap-1">
        <p className="text-lg font-medium flex flex-col">
          {fieldsDescription}
        </p>
        <Button
          name="Adicionar"
          type="button"
          className="text-lg rounded-lg border-green-600 bg-green-600
           text-white border-2 p-1 my-5"
          handleClick={ addNewFields }
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center min-h-[112px]">
        {fields.map((field, index) => (
          <div
            key={ field.id }
            className="flex items-center justify-center max-sm:gap-0 mx-3 my-3"
          >
            {genericFields.map((inputField) => (
              <GenericInput
                key={ `${inputField.fieldName}` }
                inputName={ `${fatherFieldsName}.${index}.${inputField.fieldName}` }
                inputId={ `${fatherFieldsName}.${index}.${inputField.fieldName}` }
                placeHolder={ inputField.fieldPlaceHolder }
                styleLabel={ `text-base font-medium flex flex-col ${styleLabel}` }
                styleInput={ `h-12 w-24 max-sm:max-w-[100px] px-3 shadow-sm 
                  placeholder:font-normal rounded-lg border-gray-300 border-2
                 focus:outline-gray-500 ${styleInput}` }
                labelDescription={ inputField.fieldLabel }
                parentField={ fatherFieldsName }
              />
            ))}
            <Button
              name="x"
              className="text-lg py-0.3 px-1 text-red-500 rounded-lg border-2
               border-red-500 self-start mt-7 ml-2"
              handleClick={ () => removeFields(index) }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
