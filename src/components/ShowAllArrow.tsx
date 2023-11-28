import { Link } from 'react-router-dom';

type ShowAllArrowProps = {
  name: string;
  link: string;
  textLink: string;
};

export default function ShowAllArrow({ name, link, textLink }: ShowAllArrowProps) {
  return (
    <div className="mx-16 flex items-center justify-center gap-5">
      <p className="text-lg font-medium">{name}</p>
      <hr className="w-24 basis-[70%] bg-gray-300" />
      <Link className="flex gap-2" to={ link }>
        <p className=" text-red-500 text-lg font-medium">{textLink}</p>
        <img src="../src/assets/right-arrow.svg" alt="" />
      </Link>
    </div>
  );
}
