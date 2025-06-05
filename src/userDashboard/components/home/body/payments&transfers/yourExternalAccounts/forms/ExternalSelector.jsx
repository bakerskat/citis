import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { bankOpenAction } from "../../../../../../redux/feature/bankForm/bankFormSlice";
import ExternalFormObj from "./ExternalFormObj";
import clsx from "clsx";

const ExternalSelector = ({
  wrappedRef,
  dispatch,
  selectedAccount,
  isOpen,
  bankError,
  allSelectedAccount,
  handleSelectedAccount,
  text,
  type,
}) => {
  return (
    <>
      <div ref={wrappedRef} className="relative w-full text-customGray-1067">
        {isOpen && (
          <label className={clsx("absolute text-xs -top-4 transistion2")}>
            {text}
          </label>
        )}
        <button
          className={clsx(
            "flex items-center justify-between w-full px-5 py-3 font-medium  rounded-md text-start ",
            isOpen
              ? "border-customBlue-500 border"
              : "border-customGray-1006 border",

            selectedAccount ? "text-customGray-400 " : "",
            bankError ? "border-customRed-100 border" : ""
          )}
          onClick={() => dispatch(bankOpenAction(type))}
        >
          {selectedAccount
            ? selectedAccount.bankName ||
              (selectedAccount.account && (
                <div className="flex gap-2">
                  <h3>Bank Account: {selectedAccount.account.slice(-4)}</h3>
                  <p>({selectedAccount.accountType})</p>
                </div>
              ))
            : text}
          <span className="text-customBlue-500">
            {isOpen ? <BsChevronUp size={18} /> : <BsChevronDown size={18} />}
          </span>
        </button>

        <div className="relative">
          {isOpen && (
            <div className="absolute z-20 w-full py-3 bg-white rounded-md shadow-md top-full">
              {allSelectedAccount.map((all) => (
                <ExternalFormObj
                  key={all.id}
                  handleSelectedAccount={handleSelectedAccount}
                  all={all}
                />
              ))}
            </div>
          )}
        </div>
        {bankError && (
          <p className="mt-2 font-bold text-customXST text-customRed-100">
            {bankError}
          </p>
        )}
        {text === "Frequency" && selectedAccount && (
          <p className="my-6 text-xs">
            If this date ever occurs on a weekend or bank holiday, we&apos;ll
            process the transfer on the next buisness day.
          </p>
        )}
      </div>
    </>
  );
};

export default ExternalSelector;
