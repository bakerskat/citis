import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { formDetails } from "./formDetails";
import FormCard from "./FormCard";
import FormCard2 from "./FormCard2";
import FormCard3 from "./FormCard3";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
  accountOpenAction,
  amountActionBlur,
  amountActionChange,
  bankOpenAction,
} from "../../../../../redux/feature/bankForm/bankFormSlice";
import useGoback from "../../../../../hooks/useGoback";
import { selectedTransferLoading } from "../../../../../redux/feature/transfer/transferSlice";
import { ClipLoader } from "react-spinners";
import useExternalArrays from "../../../../../hooks/useExternalArrays";

const FormInput = ({
  handleSubmit,
  amount,
  isBankOpen,
  selectedAccount,
  isAccountOpen,
  handleSelectedAccount,
  bankInfo,
  allSelectedBankInfo,
  handleAllBankInfo,
  errorAmount,
  bankError,
  wrappRef,
}) => {
  const loading = useSelector(selectedTransferLoading);
  const { formDetails1 } = useExternalArrays();
  const dispatch = useDispatch();
  const { goBack } = useGoback();

  return (
    <div>
      <div className="customTablet1:pr-[24rem] pb-14 space-y-6">
        <div className="flex flex-col ">
          <label className="mb-[2px] text-sm text-customGray-200">Amount</label>
          <div
            className={clsx(
              "relative flex ",
              errorAmount && "border rounded-lg border-customRed-100"
            )}
          >
            <span className="text-center leading-[49px] w-[49px] h-[49px] text-customGray-200 bg-customGray-300 rounded-tl-lg rounded-bl-lg ">
              $
            </span>
            <input
              type="text"
              value={amount}
              name="amount"
              onBlur={(e) =>
                dispatch(
                  amountActionBlur({
                    type: "addForms",
                    valueInput: e.target.value,
                    emptyMessage: "Please enter an amount",
                  })
                )
              }
              onChange={(e) =>
                dispatch(
                  amountActionChange({
                    type: "addForms",
                    valueInput: e.target.value,
                    emptyMessage: "Please enter an amount",
                  })
                )
              }
              className={clsx(
                "w-full py-3 pr-5 rounded-tr-lg rounded-br-lg outline-none bg-customGray-300 no-spinner focus:border focus:border-customBlue-500 transistion",
                errorAmount && "focus:border-none"
              )}
              placeholder="0.00"
            />
          </div>
          {errorAmount && (
            <p className="mt-2 font-bold text-customXST text-customRed-100">
              {errorAmount}
            </p>
          )}
        </div>
        <div ref={wrappRef} className="relative">
          <h2 className="mb-[2px] text-sm text-customGray-200">From Account</h2>
          <div
            onClick={() => dispatch(bankOpenAction("main"))}
            className={clsx(
              "flex items-center justify-between w-full px-5 py-3 rounded-lg bg-customGray-300 text-customGray-200 transistion2 relative ",
              isBankOpen && "border  border-customBlue-500",
              bankError && "border border-customRed-100"
            )}
          >
            <h3>
              {allSelectedBankInfo
                ? allSelectedBankInfo.bankName ||
                  (allSelectedBankInfo.account && (
                    <div className="flex gap-2 text-sm customMiniTablet:text-base">
                      <h3>
                        Bank Account:
                        {allSelectedBankInfo.account.slice(-4)}
                      </h3>
                      <p>({allSelectedBankInfo.accountType})</p>
                    </div>
                  )) ||
                  (allSelectedBankInfo.cardNumeber && (
                    <h3 className="text-sm customMiniTablet:text-base">
                      Card:{allSelectedBankInfo.cardNumeber.slice(-4)}
                    </h3>
                  ))
                : "Select One"}
            </h3>

            <span className="text-customBlue-500">
              {isBankOpen ? (
                <BsChevronUp size={18} />
              ) : (
                <BsChevronDown size={18} />
              )}
            </span>
          </div>
          {bankError && (
            <p className="mt-2 font-bold text-customXST text-customRed-100">
              {bankError}
            </p>
          )}
          {isBankOpen && (
            <div className="absolute z-10 w-full space-y-3 rounded-lg shadow-lg top-[4.5rem] bg-customGray-300">
              {bankInfo
                ?.filter((formd) => formd?.id !== allSelectedBankInfo?.id)
                ?.map((formd) => {
                  return (
                    <FormCard3
                      key={formd.bankName}
                      formd={formd}
                      loading={loading}
                      handleAllBankInfo={handleAllBankInfo}
                    />
                  );
                })}
              {formDetails.map((formd) => {
                return <FormCard key={formd.id} formd={formd} />;
              })}
            </div>
          )}
        </div>
        <div className="relative ">
          <h2 className="mb-[2px] text-sm text-customGray-200">To Account</h2>
          <div
            className={clsx(
              "flex items-center justify-between w-full px-5 py-3 rounded-lg bg-customGray-300 text-customGray-200 transistion2 ",
              isAccountOpen && "border  border-customBlue-500"
            )}
            onClick={() => dispatch(accountOpenAction())}
          >
            {selectedAccount?.label}
            <span className="text-customBlue-500">
              {isAccountOpen ? (
                <BsChevronUp size={18} />
              ) : (
                <BsChevronDown size={18} />
              )}
            </span>
          </div>

          <div className="absolute z-10 w-full space-y-5 rounded-lg shadow-lg bg-customGray-300 top-full">
            {isAccountOpen &&
              formDetails1
                .filter((formsd) => formsd.id !== selectedAccount.id)
                .map((formd) => (
                  <FormCard2
                    key={formd.id}
                    formd={formd}
                    handleSelectedAccount={handleSelectedAccount}
                    selectedAccount={selectedAccount}
                  />
                ))}
          </div>
        </div>
        <div className="pt-10 space-x-6">
          <button
            disabled={loading}
            onClick={handleSubmit}
            className={clsx(
              "py-3 font-bold border-2 rounded-lg  w-[65%] customSm:w-[75%]  border-customGray-200 text-customGray-200",
              amount &&
                (allSelectedBankInfo?.bankName ||
                  allSelectedBankInfo?.account ||
                  allSelectedBankInfo?.cardNumeber)
                ? "bg-customBlue-500 border-none text-white opacity-100 hover:bg-customBlue-300 transistion2"
                : "opacity-75",
              loading ? " opacity-50 " : ""
            )}
          >
            {loading && <ClipLoader size={10} color="#fff" />}
            {loading ? " Processing..." : "Review Transfer"}
          </button>
          <span
            onClick={goBack}
            className="underline text-customBlue-500 hover:text-customBlue-700"
          >
            Cancel
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
