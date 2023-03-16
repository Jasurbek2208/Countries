import { useState } from "react";
import classnames from "classnames";

export default function MyButton() {
  const [ripple, setRipple] = useState<Boolean>(false);

  const handleButtonClick = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 1500);
  };


  <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md">
  Click me
  </button>
  const buttonClasses = classnames(
    "bg-[#525252] inline-block rounded bg-primary mt-4 px-6 pt-2 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out",
    {
      "hover:bg-[#262626] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]":
        !ripple,
      "focus:bg-[#262626] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0":
        !ripple,
      "active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]":
        !ripple,
    }
  );

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={handleButtonClick}
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      Button
    </button>
  );
}
