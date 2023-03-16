import { Link } from "react-router-dom";
import { Root2 } from "../../types/interface";

interface IButton {
  children: String;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  current: Root2;
}

export default function MyButton({ children, onClick, current }: IButton) {
  return (
    <Link to={`/country/${current?.name.common}`}>
      <button
        type="button"
        onClick={onClick}
        data-te-ripple-init
        data-te-ripple-color="light"
        className="bg-[#525252] inline-block rounded bg-primary mt-4 px-6 pt-2 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#ffffff] transition duration-150 ease-in-out"
      >
        {children}
      </button>
    </Link>
  );
}
