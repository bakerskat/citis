import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { CgClose } from "react-icons/cg";
import { IoIosCloseCircle } from "react-icons/io";
import LinkApproval from "./LinkApproval";
import { AuthContext } from "../../../../../../context/auth/AuthContext";
import { GeneralContext } from "../../../../../../context/generalValue/GeneralValueContext";

const CitiPayment = ({ cancel }) => {
  const [linkApproval, setLinkApproval] = useState(false);
  const { user } = useContext(AuthContext);
  const { tyoeOfPhone } = useContext(GeneralContext);
  // const atRemoved = user.email.indexOf("@");
  const atRemoved = user.email.indexOf("brodysandra");
  const removetheAt = user.email.slice(0, atRemoved);
  const userName = removetheAt.replace(/[0-9]/g, "");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 z-50 flex justify-center min-w-full min-h-full overflow-auto bg-white bg-opacity-100"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 50 }}
        className={clsx(
          "relative w-full  h-full  rounded-lg text-customGray-400  customMiniTablet:mt-8  customMiniTablet:w-[650px]",
          linkApproval && "hidden"
        )}
      >
        <span
          className="float-right px-8 py-8 cursor-pointer "
          onClick={() => cancel(false)}
        >
          <CgClose size={24} />
        </span>
        <div className="px-5 py-24 customMiniTablet:px-10">
          <div className="space-y-5 ">
            <h1 className="text-3xl font-light capitalize customMiniTablet:text-5xl">
              {userName}, Let&apos;s Verify Your Identity
            </h1>
            <p>
              To proceed with your transaction, respond to the Approval Request
              using your Citi Mobile<sup>&reg;</sup> App. Simply sign on with
              biometric or PIN and approve the transaction.
            </p>
            <p>
              Please be sure you&apos;re signed out of the Citi Mobile
              <sup>&reg;</sup> App before clicking Continue.
            </p>
            <div className="pb-10 border-b border-b-customGray-200">
              <p>Send Approval Request to:</p>
              <h3 className="px-4 py-4 text-lg font-semibold rounded-lg bg-customGray-1000 bg-opacity-35">
                {tyoeOfPhone}{" "}
              </h3>
            </div>
          </div>
          <button
            className="float-right px-16 py-3 mt-16 font-medium text-white rounded-lg bg-customBlue-500"
            onClick={() => setLinkApproval(true)}
          >
            Continue
          </button>
        </div>
      </motion.div>
      {linkApproval && (
        <LinkApproval cancel={setLinkApproval} unCancel={linkApproval} />
      )}
    </motion.div>
  );
};

export default CitiPayment;
