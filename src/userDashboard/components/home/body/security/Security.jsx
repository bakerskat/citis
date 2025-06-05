import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { securityDetails } from "./securityDetails";
import clsx from "clsx";
import TransactionsCards from "../secondSection/summary/secondSummary/cards/TransactionsCards";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  messageAction,
  messageAction1,
  methodAction,
  resetActions,
  selectedIsOpen,
  selectedLoading,
  selectedMessage,
  selectedMethods,
  selectedShow,
  toggleAction,
} from "../../../../redux/feature/security/securitySlice";
import { useContext } from "react";
import { GeneralContext } from "../../../../context/generalValue/GeneralValueContext";

const Security = ({ cancel }) => {
  const { phoneNumber } = useContext(GeneralContext);
  const method = useSelector(selectedMethods);
  const show = useSelector(selectedShow);
  const loading = useSelector(selectedLoading);
  const message = useSelector(selectedMessage);
  const isOpen = useSelector(selectedIsOpen);
  const dispatch = useDispatch();

  const handleSelectedMethods = (id) => {
    dispatch(methodAction(id));
  };

  const handleMessage = () => {
    if (!show) return;
    dispatch(messageAction());

    setTimeout(() => {
      dispatch(messageAction1());
    }, 2000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed top-0 left-0 z-[9999] flex justify-center min-w-full min-h-full px-2 pt-5 overflow-auto bg-black bg-opacity-75 customTablet1:px-24 customXlg:px-[25rem]"
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 50 }}
          className="relative w-full h-full bg-white rounded-lg text-customGray-400"
        >
          <span
            onClick={() => {
              dispatch(resetActions());
              cancel(false);
            }}
            className="float-right p-4 cursor-pointer text-customBlue-300"
          >
            <CgClose size={20} />
          </span>
          <div className="p-5">
            <h1 className="text-[32px] font-light mb-2">
              Help Us Verify Your Identity
            </h1>
            <p className="mb-5 font-light">
              For the protection of your account, we want to send you a One-Time
              Identification Code and make sure it&apos;s really you.
            </p>
            <div className=" customMiniTablet:pr-[9rem]">
              <h3 className="mb-1 font-semibold">Choose a delivery method</h3>
              <div className="relative">
                <button
                  onClick={() => dispatch(toggleAction())}
                  className={clsx(
                    " flex items-center justify-between px-3 py-1 font-bold bg-white border border-customGray-600 rounded-xl text-customBlue-500 focus:ring-2 focus:ring-offset-1 focus:ring-customBlue-500 focus:ring-opacity-50 focus:bg-customBlue-400 w-full gap-3",
                    method.id === 1 && "text-customGray-200 italic font-light",
                    isOpen &&
                      method.id === 1 &&
                      "text-customBlue-200 italic font-light"
                  )}
                >
                  {method.labels || method.label}
                  <span className="">
                    {isOpen ? (
                      <BsChevronUp size={28} />
                    ) : (
                      <BsChevronDown size={28} />
                    )}
                  </span>
                </button>

                <div className="absolute w-full space-y-3 bg-white rounded-lg shadow-lg top-full ">
                  {isOpen &&
                    securityDetails.map((second) => (
                      <TransactionsCards
                        key={second.id}
                        second={second}
                        handleSelectedItems={handleSelectedMethods}
                        selectedItems={method}
                      />
                    ))}
                </div>
              </div>
            </div>
            <p className={clsx(show ? "block mt-2 font-light" : "hidden")}>
              Your number on file is{" "}
              <span className="font-bold">+1 {phoneNumber}.</span>
            </p>
            <p className="text-sm font-light mt-11">
              <span className="font-bold">Important: </span> By clicking
              Continue below i agree to receive a call, prerecorded message or
              text message from an automated dialing system at the number above
              to receive my Identification code. Normal cell phone charges may
              apply
            </p>
            <button
              className={clsx(
                "float-right px-14 py-3 my-5 font-bold rounded-lg  transistion2",
                show
                  ? "bg-customBlue-500 text-white hover:bg-customBlue-200 cursor-pointer"
                  : "bg-customGray-1000 opacity-50 text-customGray-200 cursor-not-allowed",
                loading &&
                  "bg-customGray-1000 opacity-50 text-customGray-200 cursor-not-allowed hover:bg-customGray-1000 "
              )}
              onClick={handleMessage}
            >
              {loading ? "Loading..." : "Continue"}
            </button>
            {message && (
              <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-white rounded-lg space-y-9">
                <div>
                  {method.label && (
                    <>
                      <span className="flex justify-center text-6xl mb-7 text-customBlue-500">
                        {method.icon()}
                      </span>
                      <p className="px-5 text-xl text-center">{method.body}</p>
                    </>
                  )}
                </div>
                <span
                  className="py-3 my-5 font-bold text-white rounded-lg cursor-pointer bg-customBlue-500 hover:bg-customBlue-200 px-14 transistion2"
                  onClick={() => {
                    setTimeout(() => {
                      dispatch(resetActions());
                    }, 1000);
                    cancel(false);
                  }}
                >
                  Cancel
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Security;
