import clsx from "clsx";
import useForms from "../../../../../hooks/useForms";
import { debitDetails } from "./debitDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBankInfo,
  selectedBankInfo,
} from "../../../../../redux/feature/bank/bankSlice";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const DebitForm = ({ cancel, card }) => {
  const {
    formState,
    handleChange,
    handleSubmit,
    errorFormState,
    handleBlur,
    showAccount,
    handleFocus,
  } = useForms(debitDetails);

  const bankInfo = useSelector(selectedBankInfo);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addToData = async () => {
    setLoading(true);
    const newStateValue = {
      cardNumeber: formState.card,
      date: formState.date,
      cvv: formState.CVV,
    };
    try {
      await dispatch(addToBankInfo(newStateValue));
      cancel();
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="w-full gap-5 space-y-3 customTablet1:space-y-0 customTablet1:flex">
        <div className="flex-[1]">
          <label className="mb-1 text-xs customMiniTablet:text-sm text-customGray-200">
            {card} Number
          </label>
          <input
            type="text"
            name="card"
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={
              showAccount.card
                ? formState.card
                : "*".repeat(formState.card.length)
            }
            className={clsx(
              "w-full px-5 py-3 rounded-lg bg-customGray-300  outline-none focus:border focus:border-customBlue-500 transistion no-spinner",
              errorFormState.card && "border  border-customRed-100"
            )}
            placeholder="Enter Number"
          />
          {errorFormState.card && (
            <p className="mt-2 font-bold text-customXST text-customRed-100">
              {errorFormState.card} number
            </p>
          )}
        </div>
        <div className="flex gap-5 flex-[1.3]  customTablet1:pr-14">
          <div>
            <label className="mb-1 text-xs customMiniTablet:text-sm text-customGray-200">
              Expiration Date(MM/YY)
            </label>
            <input
              type="text"
              value={
                showAccount.date
                  ? formState.date
                  : "*".repeat(formState.date.length)
              }
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={clsx(
                "w-full px-5 py-3 rounded-lg bg-customGray-300  outline-none focus:border focus:border-customBlue-500 transistion no-spinner",
                errorFormState.date && "border  border-customRed-100"
              )}
              placeholder="_ _ / _ _"
            />
            {errorFormState.date && (
              <p className="mt-2 font-bold text-customXST text-customRed-100">
                {errorFormState.date}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1 text-xs customMiniTablet:text-sm text-customGray-200">
              Security Code (3-digit CVV)
            </label>
            <input
              type="text"
              value={
                showAccount.CVV
                  ? formState.CVV
                  : "*".repeat(formState.CVV.length)
              }
              name="CVV"
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={clsx(
                "w-full px-5 py-3 rounded-lg bg-customGray-300  outline-none focus:border focus:border-customBlue-500 transistion no-spinner",
                errorFormState.CVV && "border  border-customRed-100"
              )}
              placeholder="_ _"
            />
            {errorFormState.CVV && (
              <p className="mt-2 font-bold text-customXST text-customRed-100">
                {errorFormState.CVV}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end mt-20 mb-10 customMiniTablet:space-x-5 customMiniTablet:flex-row">
        <button
          disabled={loading}
          className={clsx(
            "py-3 mb-4 font-bold border-2 rounded-lg  border-none text-white opacity-100 hover:bg-customBlue-300 transistion2 customMiniTablet:hidden block",
            loading
              ? "bg-customBlue-500 bg-opacity-30 cursor-not-allowed"
              : "bg-customBlue-500"
          )}
          onClick={(e) => handleSubmit(e, addToData)}
        >
          {loading && <ClipLoader size={10} color="#fff" />}
          {loading ? "Loading" : `Add ${card}`}
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
          {loading ? "Loading" : `Add ${card}`}
        </button>
      </div>
    </div>
  );
};

export default DebitForm;
