import { useCallback, useContext, useState } from "react";
import { secondSummaryDetails2 } from "./secondSummaryDetails";
import TransactionsCards from "./cards/TransactionsCards";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsChevronDown, BsChevronRight, BsChevronUp } from "react-icons/bs";
import { SlPencil } from "react-icons/sl";
import Transfer from "./cards/Transfer";
import bodySummary from "../../../../../../../assets/body/body-summary-img/bodySummary1.jpg";
import clsx from "clsx";
import Checkings from "./transactionHistory/checkings/Checkings";
import Savings from "./transactionHistory/savings/Savings";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import { GeneralContext } from "../../../../../../context/generalValue/GeneralValueContext";

const SecondSummary = () => {
  const { checkingNav, savingNav } = useContext(GeneralContext);
  const secondSummaryDetails1 = [
    {
      id: 1,
      label: `Checking-${checkingNav}`,
      path: "checking-accounts",
      body: <Checkings />,
    },
    {
      id: 2,
      label: `Citi® Savings Account-${savingNav}`,
      path: "savings-accounts",
      body: <Savings />,
    },
  ];
  const [selectedItems, setSelectedItems] = useState(secondSummaryDetails1[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectedItems = useCallback((selectedId) => {
    setSelectedItems(selectedId);
    setIsOpen(false);
  }, []);

  return (
    <>
      <div className="block gap-4 space-y-3 customXlg:flex customXlg:space-y-0">
        <div className="relative flex-1 card">
          <div className="p-4">
            <div className="items-center justify-between block space-y-3 customXlg:flex customXlg:space-y-0">
              <h3 className="font-bold text-customXST text-customGray-400">
                Recent Transactions
              </h3>
              <div className="relative">
                <button
                  onClick={() => setIsOpen((prevOpen) => !prevOpen)}
                  className={clsx(
                    "flex items-center justify-between px-5 py-3 font-bold bg-white border border-customGray-600 rounded-xl text-customBlue-500 text-customXST focus:ring-2 focus:ring-offset-1 focus:ring-customBlue-500 focus:ring-opacity-50 focus:bg-customBlue-400 w-full",
                    selectedItems.label === `Citi® Savings Account-${savingNav}`
                      ? "gap-1"
                      : "gap-9"
                  )}
                >
                  {selectedItems.label ===
                  `Citi® Savings Account-${savingNav}` ? (
                    <>
                      <div className="hidden customXlg:block">
                        Citi&reg; {selectedItems.label.slice(0, 13)}...
                      </div>
                      <div className="customXlg:hidden">
                        Citi&reg; {selectedItems.label}
                      </div>
                    </>
                  ) : (
                    selectedItems.label
                  )}
                  <span className="">
                    {isOpen ? (
                      <BsChevronUp size={28} />
                    ) : (
                      <BsChevronDown size={28} />
                    )}
                  </span>
                </button>

                <div className="absolute w-full space-y-3 bg-white rounded-lg shadow-lg top-full text-customXST">
                  {isOpen &&
                    secondSummaryDetails1.map((second) => (
                      <TransactionsCards
                        key={second.id}
                        second={second}
                        handleSelectedItems={handleSelectedItems}
                        selectedItems={selectedItems}
                      />
                    ))}
                </div>
              </div>
            </div>
            <TransactionHistory selectedItems={selectedItems} />
          </div>
          <Link
            to={`${selectedItems.path}#targetComponent`}
            className="flex items-center justify-between w-full py-3 pl-3 pr-5 customXlg:absolute customXlg:bottom-0 rounded-b-xl bg-customBlue-800 text-customBlue-500"
          >
            <div className="flex items-center gap-4">
              <AiOutlineBars size={21} />
              <p className="font-extrabold text-customBlue-300 text-customXST ">
                View All Transactions
              </p>
            </div>
            <BsChevronRight size={22} />
          </Link>
        </div>
        <div className="flex-1">
          <div className="space-y-4">
            <div className="hidden p-3 card customMiniTablet:block">
              <div className="flex items-center justify-between px-2 mt-2 mb-6 text-customBlue-500">
                <h3 className="font-extrabold text-customXST text-customGray-400">
                  I want to...
                </h3>
                <SlPencil size={16} />
              </div>
              <div className="grid grid-cols-2 gap-6 px-4">
                {secondSummaryDetails2.map((second) => (
                  <Transfer key={second.id} second={second} />
                ))}
              </div>
            </div>
            <div className=" card">
              <div className="block gap-4 pb-[0.1px] customMiniTablet:py-4 customMiniTablet:pl-4 customMiniTablet:pr-5 customMiniTablet:flex">
                <div className="customXlg:flex-[3] flex-[1] h-[150px] customMiniTablet:min-h-[250px]">
                  <img
                    src={bodySummary}
                    alt=""
                    className="rounded-t-xl object-cover object-[50%_0%] customMiniTablet:object-[32%_50%] w-full h-full align-middle customMiniTablet:rounded-xl"
                  />
                </div>
                <div className="text-center customMiniTablet:px-0 px-4  customMiniTablet:text-start flex-[3] customXlg:flex-[4] my-7  customMiniTablet:my-12 text-customGray-400">
                  <h3 className="my-4 font-extrabold ">See Offers For You!</h3>
                  <p className="leading-5 text-customXST">
                    We&apos;ve made viewing them quick and convenient. It only
                    takes a few clicks.
                  </p>
                  <div className="flex justify-center mt-4 customMiniTablet:block">
                    <button className="flex items-center gap-1 my-1 text-sm font-extrabold text-customBlue-500">
                      View Offers <BsChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSummary;
