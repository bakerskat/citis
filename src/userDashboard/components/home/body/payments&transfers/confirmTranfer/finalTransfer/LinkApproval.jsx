import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../../../../../context/generalValue/GeneralValueContext";

const LinkApproval = ({ cancel, unCancel }) => {
  const [counts, setCounts] = useState(239);
  const { tyoeOfPhone } = useContext(GeneralContext);

  useEffect(() => {
    if (counts <= 0) {
      cancel(false);
      return;
    }
    const interval = setInterval(() => {
      setCounts((prevCounts) => prevCounts - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [counts, cancel]);

  const formateTimeUp = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const second = seconds % 60;

    const miniStrings = minutes <= 1 ? "minute" : "minutes";
    const secStrings = second <= 1 ? "second" : "seconds";

    return `${minutes} ${miniStrings} ${second} ${secStrings}`;
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 50 }}
      className={clsx(
        "relative w-full  h-full  rounded-lg text-customGray-400  customMiniTablet:mt-8  customMiniTablet:w-[650px]",
        unCancel ? "block" : "hidden"
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
          <h1 className="text-3xl font-light customMiniTablet:text-5xl">
            Approval Request Sent
          </h1>
          <p>
            We sent an Approval to{" "}
            <span className="font-bold">[{tyoeOfPhone}].</span> Use your
            biometric or PIN to sign on Citi Mobile<sup>&reg;</sup> App and
            confirm your identity. After you approve the transaction, return to
            this page and select Continue. <br />{" "}
            <span className="font-bold">Note:</span> If you did not receive an
            Approval Request, please sign off Citi Mobile
            <sup>&reg;</sup> App, then sign on again
          </p>
          <p>
            Your Approval Request will expire in{" "}
            <span className="font-bold">[{formateTimeUp(counts)}]</span>
          </p>
          <p className="underline text-customBlue-500">
            {" "}
            i didn&apos;t receive an Approval Request
          </p>
        </div>
        <button
          className="float-right mt-16 font-medium text-customBlue-500"
          onClick={() => cancel(false)}
        >
          Back
        </button>
      </div>
    </motion.div>
  );
};

export default LinkApproval;
