import { useFormContext } from 'react-hook-form';
import CheckboxText from './CheckboxText';
import ErrorFormMessage from './ErrorFormMessage';

type ContainerProps = {
  styleDiv?: React.HTMLAttributes<HTMLDivElement>['className'];
  team: string;
  contents: string[];

};

export default function CheckboxContainer({
  styleDiv = '',
  team,
  contents,
}: ContainerProps) {
  const { formState: { errors } } = useFormContext();

  const error = errors[team];

  const getError = () => error;

  return (
    <div className="flex flex-col">
      <ErrorFormMessage error={ getError() } />
      <div
        className={ `flex flex-col gap-5 w-80 ${styleDiv}` }
      >
        {contents.map((name) => (
          <CheckboxText
            key={ name }
            labelDescription={ name }
            inputName={ name }
            team={ team }
          />
        )) }
      </div>
    </div>
  );
}
