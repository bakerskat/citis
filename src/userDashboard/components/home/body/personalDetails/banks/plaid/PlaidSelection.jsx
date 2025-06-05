import { CgClose } from "react-icons/cg";
import PlaidLogo from "../../../../../../../assets/allBanks/plaids/plaids2.svg";
import clsx from "clsx";
import useCheckedItems from "../../../../../../hooks/useCheckedItems";
import PlaidLogo1 from "../../../../../../../assets/allBanks/plaids/plaids4.svg";
import { BsPiggyBank } from "react-icons/bs";
import { BiSolidCoinStack } from "react-icons/bi";
import { useContext, useState } from "react";
import PlaidFinalConfirm from "./PlaidFinalConfirm";
import { ExistContext } from "../../../../../../context/existPlan/ExistContext";

const PlaidSelection = ({
  bankName,
  selectedItems,
  handleSubmit,
  mainCancel,
  setExistPage,
  existPage,
}) => {
  const { selectedAccount, handleSelectedAccount } =
    useCheckedItems(selectedItems);
  const [finalConfirm, setFinalConfirm] = useState(false);
  const { setIsExternal } = useContext(ExistContext);

  const handleAccount = () => {
    handleSubmit({ bankName: selectedAccount.name });
    mainCancel(false);
    setIsExternal(false);
  };

  return (
    <>
      <div
        className={clsx("p-5", existPage && "hidden", finalConfirm && "hidden")}
      >
        <div className="flex items-center justify-between">
          <span></span>
          <div>
            <img src={PlaidLogo} alt="" />
          </div>
          <CgClose size={26} onClick={() => setExistPage(true)} />
        </div>

        <div className="flex">
          <div className="mt-6 ">
            <img
              src={PlaidLogo1}
              alt=""
              className="object-contain w-[3rem] h-full"
            />
          </div>
          <div className="relative">
            <div className="absolute bottom-0 flex items-center justify-center w-12 h-12 bg-white border rounded-full border-customGray-900 -left-1.5">
              <div className="relative flex text-customGray-1003">
                <BsPiggyBank className="" size={32} />

                <BiSolidCoinStack
                  className="absolute bottom-0 text-[#d2cd25] bg-white left-4 "
                  size={16}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-2 ">
          <h1 className="text-[22px] font-extrabold text-customGray-900">
            Select account
          </h1>
          <p className=" text-customGray-400">
            Plaid will only share data from the{" "}
            <span className="font-semibold text-customGray-900">
              {bankName}
            </span>{" "}
            account you select with Citi
          </p>
        </div>

        <div
          role="radiogroup"
          aria-label="Bank Accounts"
          className="flex flex-col mt-8 space-y-6"
        >
          {selectedItems.map((bank) => (
            <div
              key={bank.id}
              onClick={() => handleSelectedAccount(bank)}
              role="radio"
              aria-checked={selectedAccount.name === bank.name}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleSelectedAccount(bank);
                }
              }}
              className="flex items-center gap-3 "
            >
              <div className="border border-black rounded-full p-[2px] text-center mb-[1px]">
                <p
                  className={clsx(
                    "rounded-full w-[12px] h-[12px]",
                    selectedAccount.name === bank.name
                      ? "bg-customGray-900"
                      : ""
                  )}
                ></p>
              </div>
              <h2
                className={clsx(
                  selectedAccount.name === bank.name
                    ? "text-cug9bg-customGray-900 font-bold text-[19px] hover:underline"
                    : "text-customGray-400 hover:text-customGray-400 hover:underline  text-[19px]"
                )}
              >
                {bank.name}
              </h2>
            </div>
          ))}
        </div>
        <button
          className="absolute mt-10 plaidButton bottom-7 left-2 customMiniTablet:left-6 w-[95%] customXlg:relative customXlg:bottom-0 customXlg:left-0 customXlg:w-full customXlg:mt-[10rem]"
          onClick={() => setFinalConfirm(true)}
        >
          Continue
        </button>
      </div>
      {finalConfirm && <PlaidFinalConfirm handleAccount={handleAccount} />}
    </>
  );
};

export default PlaidSelection;
