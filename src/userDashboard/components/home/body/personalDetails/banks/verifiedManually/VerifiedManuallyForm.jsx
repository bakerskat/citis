import { bankDetails, routineNumber } from "../bankDetails";
import clsx from "clsx";
import useForms from "../../../../../../hooks/useForms";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBankInfo,
  selectedBankInfo,
} from "../../../../../../redux/feature/bank/bankSlice";
import CheckedButton from "./CheckedButton";
import useCheckedItems from "../../../../../../hooks/useCheckedItems";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const VerifiedManuallyForm = ({ cancel, handleAllCancel }) => {
  const { selectedAccount, handleSelectedAccount } =
    useCheckedItems(bankDetails);
  const [loading, setLoading] = useState(false);
  const {
    formState,
    handleChange,
    handleSubmit,
    errorFormState,
    handleBlur,
    handleFocus,
    showAccount,
  } = useForms(routineNumber);
  const bankInfo = useSelector(selectedBankInfo);
  const dispatch = useDispatch();

  const addToData = async () => {
    setLoading(true);
    const newStateValue = {
      routing: formState.routing,
      account: formState.account,
      accountType: selectedAccount.name,
    };
    try {
      await dispatch(addToBankInfo(newStateValue));
      handleAllCancel();
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-3 ">
      <div className="items-center gap-6 space-y-4 customTablet1:flex customTablet1:space-y-0">
        <div className="flex-[1.3] pt-2 pb-4 bg-customBlue-1002 border-[3px] border-customGray-1001 px-5 rounded-xl customMiniTablet:w-[60%]">
          <div className="w-full space-y-4">
            <div className="flex gap-3">
              <span className="border-b-[3px] w-[70%] border-customGray-1001"></span>
              <p className="w-[30%] bg-white rounded-lg pt-2 px-2">$</p>
            </div>
            <div className="border-b-[3px] w-full border-customGray-1001"></div>
            <div className="flex gap-3">
              <span className="border-b-[3px] w-[70%] border-customGray-1001"></span>
              <span className="border-b-[3px] w-[70%] border-customGray-1001"></span>
            </div>
            <div className="flex justify-between">
              <div className="pr-3 space-x-4">
                <span className="font-bold">&quot;{formState.routing}</span>
                <span className="text-xs">
                  {"*".repeat(formState.account.length)}
                </span>
              </div>
              <span>2838&quot;</span>
            </div>
          </div>
        </div>
        <div className="flex-[2] space-y-16 ">
          <div className="space-y-3">
            <h3>Type of account</h3>
            <CheckedButton
              options={bankDetails}
              handleAccounts={handleSelectedAccount}
              selected={selectedAccount}
            />
          </div>
          <div className="w-full space-y-3 customTablet1:space-y-0 customTablet1:flex gap-7">
            <div>
              <label className="mb-1 text-sm text-customGray-200">
                Routing Number
              </label>
              <input
                type="text"
                placeholder="Enter Number"
                value={formState.routing}
                onChange={handleChange}
                onBlur={handleBlur}
                name="routing"
                className={clsx(
                  "w-full px-5 py-3 rounded-lg bg-customGray-300  outline-none focus:border focus:border-customBlue-500 transistion no-spinner",
                  errorFormState.routing && "border  border-customRed-100"
                )}
              />
              {errorFormState.routing && (
                <p className="mt-2 font-bold text-customXST text-customRed-100">
                  {errorFormState.routing} number
                </p>
              )}
            </div>
            <div>
              <label className="mb-1 text-sm text-customGray-200">
                Account Number
              </label>
              <input
                type="text"
                placeholder="Enter Number"
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                name="account"
                value={
                  showAccount.account
                    ? formState.account
                    : "*".repeat(formState.account.length)
                }
                className={clsx(
                  "w-full px-5 py-3 rounded-lg bg-customGray-300  outline-none focus:border focus:border-customBlue-500 transistion no-spinner",
                  errorFormState.account && "border  border-customRed-100"
                )}
              />
              {errorFormState.account && (
                <p className="mt-2 font-bold text-customXST text-customRed-100">
                  {errorFormState.account} number
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end mt-20 mb-10 customMiniTablet:space-x-5 customMiniTablet:flex-row">
        <button
          disabled={loading}
          className={clsx(
            "py-3 mb-4 font-bold border-2 rounded-lg bg-customBlue-500 border-none text-white opacity-100 hover:bg-customBlue-300 transistion2 customMiniTablet:hidden block",
            loading
              ? "bg-customBlue-500 bg-opacity-30 cursor-not-allowed"
              : "bg-customBlue-500"
          )}
          onClick={(e) => handleSubmit(e, addToData)}
        >
          {loading && <ClipLoader size={10} color="#fff" />}
          {loading ? "Loading" : `Add Account`}
        </button>
        <button
          className="mb-10 font-bold customMiniTablet:mb-0 text-customBlue-500"
          onClick={cancel}
        >
          Cancel
        </button>
        <button
          disabled={loading}
          className={clsx(
            "py-3 w-[28%] font-bold border-2 rounded-lg bg-customBlue-500 border-none text-white opacity-100 hover:bg-customBlue-300 transistion2 customMiniTablet:block hidden",
            loading
              ? "bg-customBlue-500 bg-opacity-30 cursor-not-allowed"
              : "bg-customBlue-500"
          )}
          onClick={(e) => handleSubmit(e, addToData)}
        >
          {loading && <ClipLoader size={10} color="#fff" />}
          {loading ? "Loading" : `Add Account`}
        </button>
      </div>
    </div>
  );
};

export default VerifiedManuallyForm;
