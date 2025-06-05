import { useEffect, useState } from "react";
import { SlPrinter } from "react-icons/sl";
import Transactions from "./transactions/largeTransaction/Transactions";
import Schedule from "./schedule/Schedule";
import clsx from "clsx";
import MiniTransaction from "./transactions/miniTransaction/MiniTransaction";
import { useLocation } from "react-router-dom";

const ReceiptsTransaction = ({ context }) => {
  const transactionReceiptsDetails = [
    {
      id: 0,
      button: "Transactions",
      deatails: <Transactions context={context} />,
      miniDeatails: <MiniTransaction context={context} />,
      advance: "Advanced Search",
      icon: <SlPrinter size={19} />,
    },
    {
      id: 1,
      button: "Schedule",
      deatails: <Schedule />,
      miniDeatails: <Schedule />,
    },
  ];
  const [selectedItems, setSelectedItems] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // this part only runs if the url contains a hashTag
    if (location.hash) {
      // this variable get the id of a particular HTML syntax which is the id and locate the componet and the purposed of the substrings is to remove the hastag in the beginning
      const element = document.getElementById(location.hash.substring(1));
      // and if this is true now scroll to the particular place
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleSelectedItems = (id) => {
    setSelectedItems(id);
  };

  return (
    <div className="px-4 pt-4 pb-10 card" id="targetComponent">
      <div className="flex justify-between">
        <div className="flex justify-between w-full mb-4 customXlg:w-max customXlg:block customXlg:space-x-5 ">
          {transactionReceiptsDetails.map((transaction) => (
            <button
              key={transaction.id}
              onClick={() => handleSelectedItems(transaction.id)}
              className={clsx(
                "text-customXST2 text-customGray-400 pb-2 px-5 w-full customXlg:w-max",
                selectedItems === transaction.id
                  ? "font-bold border-b-4 border-customBlue-300 "
                  : "hover:font-bold transistion"
              )}
            >
              {transaction.button}
            </button>
          ))}
        </div>
        <div className="hidden gap-3 font-bold customXlg:flex text-customBlue-300 text-customXST2">
          <h3>
            {transactionReceiptsDetails[selectedItems].advance &&
              transactionReceiptsDetails[selectedItems].advance}
          </h3>
          <span
            className={
              transactionReceiptsDetails[selectedItems].advance &&
              "w-[1px] h-[18px] bg-customBlue-300"
            }
          ></span>
          <h3>View Last Statement</h3>
          <span
            className={
              transactionReceiptsDetails[selectedItems].advance &&
              "w-[1px] h-[18px] bg-customBlue-300"
            }
          ></span>
          {transactionReceiptsDetails[selectedItems].icon &&
            transactionReceiptsDetails[selectedItems].icon}
        </div>
      </div>

      <div className="hidden customXlg:block">
        {transactionReceiptsDetails &&
          transactionReceiptsDetails[selectedItems] &&
          transactionReceiptsDetails[selectedItems].deatails}
      </div>
      <div className="block customXlg:hidden">
        {transactionReceiptsDetails &&
          transactionReceiptsDetails[selectedItems] &&
          transactionReceiptsDetails[selectedItems].miniDeatails}
      </div>
    </div>
  );
};

export default ReceiptsTransaction;
