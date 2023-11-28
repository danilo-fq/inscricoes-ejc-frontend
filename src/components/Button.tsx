import { ReactElement } from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  name: string | ReactElement;
  className?: string;
  handleClick: () => void;
};

export default function Button(
  { type = 'button', name, className = '', handleClick } : ButtonProps,
) {
  return (
    <button
      type={ type }
      className={ className }
      onClick={ handleClick }
    >
      { name }
    </button>
  );
}
