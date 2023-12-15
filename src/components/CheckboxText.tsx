import { useFormContext } from 'react-hook-form';

type CheckboxTextProps = {
  labelDescription: string;
  inputName: string;
  team: string;
  styleLabel?: string;
  styleInput?: string;
};

export default function CheckboxText({
  labelDescription,
  inputName,
  team,
  styleLabel = '',
  styleInput = '',

}: CheckboxTextProps) {
  const { register } = useFormContext();
  return (
    <label
      htmlFor={ inputName }
      className={ `text-base font-medium flex items-center gap-2 ${styleLabel}` }
    >
      <input
        type="checkbox"
        id={ inputName }
        value={ inputName }
        { ...register(team) }
        className={ ` h-6 w-6 rounded-xl bg-gray-100
        border-gray-300 border-4 focus:outline-gray-500 ${styleInput}` }
      />
      {labelDescription}
    </label>
  );
}
