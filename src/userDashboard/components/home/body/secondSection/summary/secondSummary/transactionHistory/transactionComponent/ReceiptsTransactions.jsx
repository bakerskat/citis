import { AiOutlineCalendar } from "react-icons/ai";
import useFormateDate from "../../../../../../../../hooks/useFormateDate";
import ReceiptsTransactionsCard from "./ReceiptsTransactionsCard";
import { useState } from "react";
import ReciptsChildren from "./ReciptsChildren";
import { AnimatePresence } from "framer-motion";
import useSelectedItems from "../../../../../../../../hooks/useSelectedItems";

const ReceiptsTransactions = ({ transactions }) => {
  const selectedPeriod = "30";
  const { cutOffDate } = useFormateDate(selectedPeriod);

  const filterChecking = transactions
    .filter((transac) => new Date(transac.date) >= cutOffDate)
    .slice()
    .reverse();

  const { index, isOpen, handleSelectedItems, setIndex, setIsOpen } =
    useSelectedItems(filterChecking);

  return (
    <div>
      {filterChecking.length > 0 ? (
        <>
          {filterChecking.map((filtering) => (
            <ReceiptsTransactionsCard
              key={filtering.id}
              filtering={filtering}
              handleIsOpen={handleSelectedItems}
            />
          ))}
          <div className="hidden customMiniTablet:flex  items-center justify-center my-8 customXlg:h-[200px]">
            <div className="font-light text-customXST text-customGray-200">
              <AiOutlineCalendar
                size={28}
                className="w-full mb-3 text-customBlue-500"
              />
              There are no other transactions within the last 30 days
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <ReciptsChildren
                selectedItems={filterChecking[index]}
                setIsClose={setIsOpen}
                totalLength={filterChecking.length}
                index={index}
                setIndex={setIndex}
              />
            )}
          </AnimatePresence>
        </>
      ) : (
        <div className="flex items-center justify-center my-8 customXlg:h-[250px]">
          <div className="font-light text-customXST text-customGray-200">
            <AiOutlineCalendar
              size={28}
              className="w-full mb-3 text-customBlue-500"
            />
            There are no transactions within the last 30 days
          </div>
        </div>
      )}
    </div>
  );
};

export default ReceiptsTransactions;
