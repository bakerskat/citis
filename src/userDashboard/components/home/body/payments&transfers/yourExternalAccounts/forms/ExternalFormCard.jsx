import { AiFillExclamationCircle } from "react-icons/ai";
import {
  amountActionBlur,
  amountActionChange,
} from "../../../../../../redux/feature/bankForm/bankFormSlice";
import ExternalSelector from "./ExternalSelector";
import { useContext, useState } from "react";
import ExternalPopUp from "./ExternalPopUp";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { LuCalendarDays } from "react-icons/lu";
import useFormateDate from "../../../../../../hooks/useFormateDate";
import useGoback from "../../../../../../hooks/useGoback";
import { frequency } from "../externalDetails";
import { ExistContext } from "../../../../../../context/existPlan/ExistContext";
import { useSelector } from "react-redux";
import { selectedTransferLoading } from "../../../../../../redux/feature/transfer/transferSlice";
import { ClipLoader } from "react-spinners";

const ExternalFormCard = ({
  dispatch,
  errorAmount,
  amount,
  handleSelectedAccount,
  wrappedRef,
  selectedAccount,
  isOpen,
  allSelectedAccount,
  bankError,
  isBankOpenTo,
  bankErrorTo,
  handleSelectedAccountTo,
  wrappedRefTo,
  selectedAccountTo,
  typeFrom,
  typeTO,
  isBankOpenFr,
  bankErrorFr,
  handleSelectedAccountFr,
  wrappedRefFr,
  selectedAccountFr,
  typeFr,
  handleSubmit,
  loading,
}) => {
  const { isExternal, setIsExternal } = useContext(ExistContext);
  const [recurring, setRecurring] = useState(false);
  let nowDate = new Date();
  let laterDate = new Date();
  if (recurring) {
    laterDate;
  } else if (!recurring) {
    laterDate.setDate(laterDate.getDate() + 3);
  }
  const allDate = laterDate.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    weekday: "long",
  });
  const { formateDate } = useFormateDate(laterDate);
  const { goBack } = useGoback(laterDate);

  const startFormateDate = formateDate(nowDate);
  const endFormateDate = formateDate(laterDate);

  return (
    <>
      <h1 className="text-[32px] font-light customTablet1:text-5xl mb-9 ">
        {recurring
          ? "Recurring Transfer Between Your Accounts"
          : "Transfer Between Your Accounts"}
      </h1>
      <div className="justify-between customTablet1:flex">
        <div className="mb-12 flex-[1] customTablet1:mb-0">
          <div className="flex flex-col items-center justify-center w-full customTablet1:block">
            <label className="text-sm customTablet1:text-lg">
              How much do you want to transfer?
            </label>
            <div className="flex justify-center w-full customMiniTablet:pl-20 customTablet1:pl-0 text-customBlue-1035">
              <p className="mt-2 text-3xl font-light ">$</p>
              <input
                type="text"
                placeholder="0.00"
                value={amount}
                name="amount"
                className="w-[200px] customTablet1:mr-10 customMiniTablet:w-[300px] customTablet1:w-full text-6xl  border-none outline-none font-extralight placeholder:font-extralight placeholder:text-customBlue-1035 bg-transparent"
                onChange={(e) =>
                  dispatch(
                    amountActionChange({
                      type: "exterForms",
                      valueInput: e.target.value,
                      emptyMessage:
                        "Please enter a dollar amount to proceed with this transfer.",
                    })
                  )
                }
                onBlur={(e) =>
                  dispatch(
                    amountActionBlur({
                      type: "exterForms",
                      valueInput: e.target.value,
                      emptyMessage:
                        "Please enter a dollar amount to proceed with this transfer.",
                    })
                  )
                }
              />
            </div>
            {errorAmount && (
              <div className="bg-customGray-1029 gap-1 pl-7 w-full  customTablet1:w-[359px] p flex  py-4 my-4 border-l-4 border-customRed-100 pr-20 text-customGray-1066 font-bold">
                <AiFillExclamationCircle
                  size={30}
                  className="-mt-1 text-customRed-100"
                />
                {errorAmount}
              </div>
            )}
            <div className="flex items-center gap-1 my-4">
              <span className="w-4 h-4 leading-[14px] text-center border rounded-full border-customBlue-1035 text-[10px] mb-1">
                ¡
              </span>
              <p className="text-xs font-medium customTablet1:text-base">
                Remaining Daily External Transfer Limits:
              </p>
            </div>
            <div className="w-full customTablet1:text-start text-center customTablet1:w-[228px]  customTablet1:text-sm text-xs text-customGray-1065 space-y-1 leading-6">
              <p className="">
                You have <span className="font-bold">$100,000.00</span>{" "}
                available for inbound transfers.
              </p>
              <p>
                You have <span className="font-bold">$25,000.00</span> available
                for outbound transfers.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-[1]">
          <div className="mb-6 space-y-11">
            <ExternalSelector
              wrappedRef={wrappedRef}
              dispatch={dispatch}
              selectedAccount={selectedAccount}
              isOpen={isOpen}
              bankError={bankError}
              allSelectedAccount={allSelectedAccount.filter(
                (allse) =>
                  allse?.id !== selectedAccountTo?.id &&
                  allse?.id !== selectedAccount?.id
              )}
              handleSelectedAccount={handleSelectedAccount}
              text="Transfer From"
              type={typeFrom}
            />
            <ExternalSelector
              wrappedRef={wrappedRefTo}
              dispatch={dispatch}
              selectedAccount={selectedAccountTo}
              isOpen={isBankOpenTo}
              bankError={bankErrorTo}
              allSelectedAccount={allSelectedAccount.filter(
                (allse) =>
                  allse?.id !== selectedAccount?.id &&
                  allse?.id !== selectedAccountTo?.id
              )}
              handleSelectedAccount={handleSelectedAccountTo}
              text="Transfer To"
              type={typeTO}
            />
          </div>
          <div className="mb-5">
            <p>
              Don&apos;t see your external account?{" "}
              <span
                className="font-medium underline text-customBlue-1035"
                onClick={() => setIsExternal(true)}
              >
                Add it here.
              </span>
            </p>
          </div>
          <div className="flex items-center mb-6 space-x-3">
            <div
              onClick={() => setRecurring((prevRec) => !prevRec)}
              className={clsx(
                "flex w-14 h-7 text-white rounded-full border items-center ",
                recurring
                  ? "bg-blue-600 justify-end"
                  : "bg-customGray-1068 justify-start"
              )}
            >
              <button className="w-1/2 h-full bg-white rounded-full "></button>
            </div>
            <p className="font-light">Set up a Recurring Transfer</p>
          </div>
          {recurring && (
            <div className="my-8">
              <ExternalSelector
                wrappedRef={wrappedRefFr}
                dispatch={dispatch}
                selectedAccount={selectedAccountFr}
                isOpen={isBankOpenFr}
                bankError={bankErrorFr}
                allSelectedAccount={frequency?.filter(
                  (freq) => freq?.id !== selectedAccountFr?.id
                )}
                handleSelectedAccount={handleSelectedAccountFr}
                text="Frequency"
                type={typeFr}
              />
            </div>
          )}

          <div>
            <div>
              <p className="text-xs">
                {recurring ? "First Transfer Date" : "Transfer Date"}
              </p>
              <div className="flex items-center justify-between px-5 py-3 mt-1 font-semibold border rounded-md mb-7 border-customGray-400">
                <h3>{allDate}</h3>
                <LuCalendarDays size={25} className="text-customBlue-500" />
              </div>
              {!recurring && (
                <p>
                  Estimated Deposit Date <span>{endFormateDate}</span>
                </p>
              )}
            </div>
          </div>
          <div className="items-center gap-5 pt-8 mb-10 customTablet1:flex">
            <button
              onClick={() =>
                handleSubmit(startFormateDate, endFormateDate, recurring)
              }
              className={clsx(
                "py-3 font-bold  rounded-lg  w-full  text-customGray-200 ",
                amount &&
                  (selectedAccount?.bankName || selectedAccount?.account) &&
                  (selectedAccountTo?.bankName || selectedAccountTo?.account)
                  ? "bg-customBlue-500 border-none text-white opacity-100 hover:bg-customBlue-300 transistion2 "
                  : "bg-customGray-200 bg-opacity-10",
                loading && "bg-opacity-35"
              )}
            >
              {loading && <ClipLoader size={10} color="#fff" />}

              {loading ? "Loading" : "Next"}
            </button>
            <p
              onClick={goBack}
              className="w-full py-5 text-center underline customTablet1:py-0 text-customBlue-500 hover:text-customBlue-700 customTablet1:text-start"
            >
              Cancel
            </p>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isExternal && (
          <ExternalPopUp cancel={setIsExternal} isExternal={isExternal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ExternalFormCard;
