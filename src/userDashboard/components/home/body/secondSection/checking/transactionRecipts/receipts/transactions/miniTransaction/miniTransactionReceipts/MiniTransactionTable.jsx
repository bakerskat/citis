import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import MiniTransactionTableCard from "./MiniTransactionTableCard";
import clsx from "clsx";

const MiniTransactionTable = ({ context }) => {
  const [isOpen, setIsOpen] = useState([]);
  const { filterTransaction, formateStartDate, formateEndDate, formateDate } =
    context;

  const handleSelectedItems = (id) => {
    setIsOpen((prevOpen) =>
      prevOpen.includes(id)
        ? prevOpen.filter((prev) => prev !== id)
        : [...prevOpen, id]
    );
  };

  return (
    <>
      <div>
        {filterTransaction.length > 0 ? (
          <>
            <div>
              <h3 className="mt-6 mb-3 space-x-2 tracking-wide text-customGray-200">
                Results for : <span>{formateStartDate}</span> to
                <span>{formateEndDate}</span>
              </h3>
            </div>
            <div
              className={clsx(
                "w-full mb-4 ",
                filterTransaction.length >= 2 && "max-h-96 overflow-y-scroll"
              )}
            >
              {filterTransaction
                .slice()
                .reverse()
                .map((miniTransac) => (
                  <MiniTransactionTableCard
                    key={miniTransac.id}
                    miniTransac={miniTransac}
                    formateDate={formateDate}
                    handleSelectedItems={handleSelectedItems}
                    isOpen={isOpen}
                  />
                ))}
              <div className="w-full p-4 bg-customBlue-1000 text-customGray-400">
                <p>End Of Activity</p>
              </div>
            </div>
          </>
        ) : (
          <div className="my-10 font-light text-center text-customXST2 text-customGray-200">
            <AiOutlineCalendar
              size={48}
              className="w-full mb-4 text-customBlue-500"
            />
            We&apos;re sorry. No activity was found for the type of activity you
            selected
          </div>
        )}
      </div>
    </>
  );
};

export default MiniTransactionTable;
