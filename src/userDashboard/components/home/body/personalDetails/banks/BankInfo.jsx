import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import VerifyManually from "./verifiedManually/VerifyManually";
import Plaid from "./plaid/Plaid";
import DebitCardInfo from "../debitCard/DebitCardInfo";
import FullLoader from "../../../loading/FullLoader";

const BankInfo = ({ cancel, text, card, para }) => {
  const [isValid, setIsValid] = useState({
    loading: false,
    manually: false,
    externalAccount: false,
    isChecked: false,
  });

  const handleManually = () => {
    setIsValid((prev) => ({
      ...prev,
      manually: true,
    }));
  };

  const handleExternalAccount = () => {
    if (!isValid.isChecked) return;
    setIsValid((prev) => ({
      ...prev,
      loading: true,
    }));

    setTimeout(() => {
      setIsValid((prev) => ({
        ...prev,
        externalAccount: true,
        loading: false,
      }));
    }, 4000);
  };

  const handleAllCancel = () => {
    cancel(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={clsx(
          " fixed top-0 left-0 z-50 flex justify-center min-w-full min-h-full overflow-auto bg-opacity-60 bg-customGray-200 "
        )}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 50 }}
          className={clsx(
            "relative w-full h-full  bg-white rounded-lg text-customGray-400 mt-8 customMiniTablet:mx-16 customXlg:mx-64",
            isValid.manually ? "hidden" : "block",
            isValid.externalAccount ? "hidden" : "block"
          )}
        >
          <span
            onClick={handleAllCancel}
            className="float-right px-8 py-8 cursor-pointer text-customGray-100"
          >
            <IoIosCloseCircle size={32} />
          </span>
          <div className="pt-16 pb-10 space-y-10 font-light text-customGray-400">
            <div className="px-10 pb-12 space-y-10 border-b border-customGray-600">
              <h1 className="text-[21px] customMiniTablet:text-[42px] customMiniTablet:leading-[3.4rem]">
                {text}
              </h1>
              <p>{para}</p>
              <div className="flex space-x-3">
                <input
                  type="checkbox"
                  checked={isValid.isChecked}
                  onChange={() =>
                    setIsValid((prev) => ({
                      ...prev,
                      isChecked: !prev.isChecked,
                    }))
                  }
                  className="w-12 h-12 customMiniTablet:w-6 customMiniTablet:h-6 accent-blue-600"
                />
                <span className="mt-2.5 customMiniTablet:mt-0 text-customBlue-500">
                  By clicking &quot;Continue&quot;you agree to the Account
                  Verification Terms and Conditions
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-10 space-y-5 customMiniTablet:space-x-6 customMiniTablet:block customMiniTablet:space-y-0">
              <button
                className={clsx(
                  "py-3 font-bold border-2 rounded-lg  w-full customMiniTablet:w-[33%]  border-customGray-200 text-customGray-200",
                  isValid.isChecked
                    ? "bg-customBlue-500 border-none text-white opacity-100 hover:bg-customBlue-300 transistion2"
                    : "opacity-75"
                )}
                onClick={handleExternalAccount}
              >
                Continue
              </button>
              <span
                onClick={handleManually}
                className="font-bold text-customBlue-500"
              >
                Verify Manually
              </span>
            </div>
          </div>
        </motion.div>
        {isValid.manually &&
          (text ===
          "Connect Your Credit Card with Citi Instant Account Verification" ? (
            <DebitCardInfo cancel={cancel} card={card} />
          ) : (
            <VerifyManually
              cancel={() =>
                setIsValid((prev) => ({
                  ...prev,
                  manually: false,
                }))
              }
              handleAllCancel={handleAllCancel}
            />
          ))}
        {isValid.loading ? (
          <FullLoader />
        ) : (
          isValid.externalAccount && (
            <Plaid
              cancel={() =>
                setIsValid((prev) => ({
                  ...prev,
                  externalAccount: false,
                }))
              }
              mainCancel={cancel}
              setIsChecked={() =>
                setIsValid((prev) => ({
                  ...prev,
                  isChecked: false,
                }))
              }
            />
          )
        )}
      </motion.div>
    </>
  );
};

export default BankInfo;
