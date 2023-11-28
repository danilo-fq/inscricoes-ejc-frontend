import { Link } from 'react-router-dom';

type ShowAllArrowProps = {
  name: string;
  link: string;
  textLink: string;
};

export default function ShowAllArrow({ name, link, textLink }: ShowAllArrowProps) {
  return (
    <div
      className="mx-16 max-sm:mx-5
        flex items-center justify-center max-sm:justify-around gap-5"
    >
      <p className="text-lg font-medium">{name}</p>
      <hr className="w-24 basis-[70%] max-sm:basis-[40%] bg-gray-300" />
      <Link className="flex justify-center items-center gap-2" to={ link }>
        <p className=" text-red-500 text-base font-medium align-middle">{textLink}</p>
        <img className="w-5 h-5" src="../src/assets/right-arrow.svg" alt="" />
      </Link>
    </div>
  );
}
