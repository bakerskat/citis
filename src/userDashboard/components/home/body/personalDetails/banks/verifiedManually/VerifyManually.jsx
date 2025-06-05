import clsx from "clsx";
import { motion } from "framer-motion";
import VerifiedManuallyForm from "./VerifiedManuallyForm";
import { useCallback } from "react";
import { CgClose } from "react-icons/cg";

const VerifyManually = ({ cancel, handleAllCancel }) => {
  const handleCancel = useCallback(() => {
    cancel(false);
  }, [cancel]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 50 }}
      className={clsx(
        "relative mt-3 customMiniTablet:mt-8  customMiniTablet:mx-16 h-full  customXlg:mx-[13.4rem] w-full  bg-white overflow-y-scroll  text-customGray-400"
      )}
    >
      <span
        onClick={handleCancel}
        className="float-right px-6 py-5 cursor-pointer text-customGray-100"
      >
        <CgClose size={24} />
      </span>
      <div className="h-[700px] customMiniTablet:h-full customMiniTablet:px-10 px-5 pb-10 space-y-3 font-light  pt-14 text-customGray-400">
        <h1 className="text-[21px] customMiniTablet:text-[42px] customMiniTablet:leading-[3.4rem]">
          Add Your Bank Accont
        </h1>
        <p>
          Please enter your bank accont and routine numbers manaully, or go back
          and{" "}
          <span
            className="underline hover:text-customBlue-700 text-customBlue-500"
            onClick={handleCancel}
          >
            link an external account
          </span>{" "}
          using your login information
        </p>
        <VerifiedManuallyForm
          cancel={handleCancel}
          handleAllCancel={handleAllCancel}
        />
      </div>
    </motion.div>
  );
};

export default VerifyManually;
