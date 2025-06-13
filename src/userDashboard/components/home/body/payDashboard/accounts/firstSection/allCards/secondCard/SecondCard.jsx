import { useSelector } from "react-redux";
import {
  selectedCheckingAmount,
  selectedSavingAmount,
} from "../../../../../../../../redux/feature/transaction/transactionSlice";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { GeneralContext } from "../../../../../../../../context/generalValue/GeneralValueContext";
import Security from "../../../../../security/Security";
import { AnimatePresence } from "framer-motion";

const SecondCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const checkingAmount = useSelector(selectedCheckingAmount);
  const savingAmount = useSelector(selectedSavingAmount);
  const { checkingNav, savingNav } = useContext(GeneralContext);

  const numberCheckingStrings = checkingAmount.toLocaleString();
  const numberSavingStrings = savingAmount.toLocaleString();

  return (
    <>
      <div className="px-6 pt-4 pb-2 card2">
        <h4 className="mb-3 font-extrabold text-customGray-900">
          Transfer Between Your Citi Accounts
        </h4>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-t border-b border-customGray-1000 text-[10px] font-bold text-customGray-400 uppercase">
              <th className="py-4 pr-2 pl-0 text-start w-[42%]">
                Destination Account
              </th>
              <th className="py-4 pl-2 pr-0 text-end w-[25%]">Balamce</th>
              <th className="py-4 pl-2 pr-0 text-end w-[25%]">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm font-light border-b customMiniTablet:text-base border-customGray-1000 text-customGray-400">
              <td className="py-6 pr-2 pl-0 text-start w-[42%] ">
                Checking-{checkingNav}{" "}
                <span className="block text-[10px] text-customGray-200">
                  ****{checkingNav}
                </span>
              </td>
              <td className=" py-6 pl-2 pr-0 text-end w-[25%]">
                ${numberCheckingStrings}
              </td>
              <td className="py-6 pl-2 pr-0 text-end w-[25%]  ">
                <Link
                  onClick={() => setIsOpen(true)}
                  className="font-bold text-customBlue-500 hover:border-b-2 hover:text-customBlue-200 hover:border-customBlue-200"
                >
                  Transfer
                </Link>
              </td>
            </tr>
            <tr className="text-sm font-light text-customGray-400 customMiniTablet:text-base">
              <td className="py-6 pr-2 pl-0 text-start w-[42%]">
                Citi® Savings Account-{savingNav}{" "}
                <span className="block text-[10px] text-customGray-200 ">
                  ****{savingNav}
                </span>
              </td>
              <td className="py-6 pl-2 pr-0 text-end w-[25%]">
                ${numberSavingStrings}
              </td>
              <td className="py-6 pl-2 pr-0 text-end w-[25%] ">
                <Link
                  onClick={() => setIsOpen(true)}
                  className="font-bold text-customBlue-500 hover:border-b-2 hover:text-customBlue-200 hover:border-customBlue-200"
                >
                  Transfer
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <AnimatePresence>
          {isOpen && <Security cancel={setIsOpen} />}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SecondCard;
