import { motion } from "framer-motion";
import Success from "../../../../../../../assets/allBanks/plaids/plaids6.png";
import PlaidLogo from "../../../../../../../assets/allBanks/plaids/plaids2.svg";

const PlaidFinalConfirm = ({ handleAccount }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 50 }}
    >
      <div className="p-6 ">
        <div className="flex items-center justify-center">
          <div>
            <img src={PlaidLogo} alt="" />
          </div>
        </div>
        <div className="my-12">
          <div className="flex items-center justify-center w-full">
            <img
              src={Success}
              alt=""
              className="w-[13rem] h-[full] object-contain"
            />
          </div>
          <div className="-mt-10 space-y-2 text-center">
            <h1 className="text-[22px] font-extrabold text-customGray-900">
              Almost done!
            </h1>
            <p className=" text-customGray-400">
              Click Continue to complete linking
            </p>
          </div>
        </div>
        <button
          className="absolute mt-12 plaidButton bottom-7 left-2 customMiniTablet:left-6 w-[95%] customXlg:relative customXlg:bottom-0 customXlg:left-0 customXlg:w-full customXlg:mt-[9rem]"
          onClick={handleAccount}
        >
          Continue
        </button>
      </div>
    </motion.div>
  );
};

export default PlaidFinalConfirm;
