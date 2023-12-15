import { Link } from 'react-router-dom';

export default function EventCard() {
  return (
    <Link
      to="/"
      className="flex flex-col
      w-[400px] h-[400px] justify-center items-center rounded-lg border-gray-300 border-2"
    >
      <img className="self-start h-[350px]" src="/events/auto-natal.png" alt="" />
      <div className="h-[50px] flex items-center">
        <h3 className="text-lg text-center font-medium">VIII Auto de Natal</h3>
      </div>

    </Link>
  );
}
