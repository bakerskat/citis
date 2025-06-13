import { useState } from "react";
import DropDownCard from "./DropDownCard";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import clsx from "clsx";

const DropDown = ({ options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelected = (id) => {
    setIsOpen(false);
    setSelected(id);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen((prevOpen) => !prevOpen)}
        className={clsx(
          "flex items-center text-base justify-between pl-4 pr-3 py-3 font-bold top-full bg-white border border-customGray-600 rounded-xl text-customBlue-500  focus:ring-2 focus:ring-offset-1 focus:ring-customBlue-500 focus:ring-opacity-50 focus:bg-customBlue-400 w-full ",
          selected === "all" ? "gap-12" : "gap-12"
        )}
      >
        {options.find((opt) => opt.value === selected)?.label}
        <span className="">
          {isOpen ? <BsChevronUp size={28} /> : <BsChevronDown size={28} />}
        </span>
      </button>

      <div className="absolute z-10 w-full space-y-3 text-base bg-white rounded-lg shadow-lg top-full">
        {isOpen &&
          options.map((opt) => (
            <DropDownCard
              key={opt.id}
              opt={opt}
              handleSelected={handleSelected}
              selected={selected}
            />
          ))}
      </div>
    </div>
  );
};

export default DropDown;
