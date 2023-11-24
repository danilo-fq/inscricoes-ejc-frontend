type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  name: string;
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
