import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

type ErrorProps = {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};

export default function ErrorFormMessage({ error = undefined }: ErrorProps) {
  if (!error || !error.message) {
    return null;
  }

  return (
    <span
      className="text-red-400 text-sm ml-1 font-normal
      w-[210px] max-sm:max-w-[210px] h-10"
    >
      {`${error.message}`}
    </span>
  );
}
