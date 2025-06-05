import clsx from "clsx";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import { GeneralContext } from "../../../../../../context/generalValue/GeneralValueContext";

const RestrictArea = ({ cancel }) => {
  const { savingNav, checkingNav, accountMoney } = useContext(GeneralContext);
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
          "relative w-full  h-full  rounded-lg text-customGray-400  customMiniTablet:mt-8  customMiniTablet:w-[700px] px-3"
        )}
      >
        <span
          className="float-right px-4 py-5 cursor-pointer "
          onClick={() => cancel(false)}
        >
          <CgClose size={24} />
        </span>
        <div className="py-16 space-y-4">
          <h1 className="text-xl font-extrabold">
            Transfer Unavailable to Selected Account
          </h1>
          <p>
            We are currently unable to process incoming transfers to the
            selected{" "}
            <span className="font-semibold">
              Checking:{checkingNav} / Citi® Savings:{savingNav} account
            </span>{" "}
            at this time.
          </p>
          <p>
            To proceed with your transfer, please select an alternative eligible
            account. <br />
            Your linked{" "}
            <span className="font-semibold">{accountMoney} Account</span> is
            available and authorized to receive this transaction.
          </p>
          <div>
            <h1 className="mb-1 font-bold">Required Action</h1>
            <p>
              Return to the transfer setup screen and select your{" "}
              <span className="font-semibold">{accountMoney} Account</span> as
              the destination account to complete the transfer.
            </p>
          </div>
          <div className="px-5 py-4 border-l-8 rounded-tl-lg rounded-bl-lg bg-customGray-500 border-l-customRed-100">
            <p className="text-customGray-900">
              <span className="font-semibold">Note:</span> Funds routed to the
              alternate account will be automatically available for transfer to
              your primary account once received.
            </p>
          </div>
          <p className="text-sm text-customGray-100">
            We apologize for any inconvenience this may cause and appreciate
            your understanding.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RestrictArea;
