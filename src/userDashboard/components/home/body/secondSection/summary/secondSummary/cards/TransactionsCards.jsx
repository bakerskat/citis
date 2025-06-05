import clsx from "clsx";
import { GoCheck } from "react-icons/go";

const TransactionsCards = ({ second, handleSelectedItems, selectedItems }) => {
  const { label, id } = second;

  return (
    <>
      {label && (
        <button
          onClick={() => handleSelectedItems(second)}
          className={clsx(
            "flex justify-between w-full pt-5 pb-3 px-4  font-bold hover:bg-customBlue-400",
            selectedItems.id === id
              ? " gap-4 border-2 rounded-md border-customBlue-700 text-customBlue-500"
              : "text-customGray-400 font-normal"
          )}
        >
          {label}

          <span>{selectedItems.id === id && <GoCheck size={24} />}</span>
        </button>
      )}
    </>
  );
};

export default TransactionsCards;
