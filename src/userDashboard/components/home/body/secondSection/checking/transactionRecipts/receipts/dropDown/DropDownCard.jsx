import clsx from "clsx";
import { GoCheck } from "react-icons/go";

const DropDownCard = ({ opt, handleSelected, selected }) => {
  const { label, value, id } = opt;

  return (
    <>
      <button
        onClick={() => handleSelected(value)}
        className={clsx(
          "flex justify-between w-full pt-5 pb-3 px-4  font-bold hover:bg-customBlue-400",
          selected === value
            ? " gap-4 border-2 rounded-md border-customBlue-700 text-customBlue-500"
            : "text-customGray-400 font-normal"
        )}
      >
        {label}

        <span>{selected === value && <GoCheck size={24} />}</span>
      </button>
    </>
  );
};

export default DropDownCard;
