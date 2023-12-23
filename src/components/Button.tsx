import { ReactElement } from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  name: string | ReactElement;
  disabled?: boolean;
  className?: string;
  handleClick?: () => void;
};

export default function Button(
  { type = 'button', name, className = '',
    disabled = false, handleClick = () => {} } : ButtonProps,
) {
  return (
    <button
      type={ type }
      disabled={ disabled }
      className={ className }
      onClick={ handleClick }
    >
      { name }
    </button>
  );
}
