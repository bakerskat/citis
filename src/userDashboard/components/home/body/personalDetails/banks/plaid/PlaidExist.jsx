import clsx from "clsx";
import ExistLogo from "../../../../../../../assets/allBanks/plaids/plaids3.png";
import PlaidLogo from "../../../../../../../assets/allBanks/plaids/plaids2.svg";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

const PlaidExist = ({ handleCancel, existPage, setExistPage }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 50 }}
      className={clsx("p-5 ", existPage ? "block" : "hidden")}
    >
      <div className="flex items-center justify-between">
        <span></span>
        <div>
          <img src={PlaidLogo} alt="" />
        </div>
        <CgClose size={26} onClick={handleCancel} />
      </div>

      <div className={clsx("flex justify-center items-center pt-[7rem] ")}>
        <div className="w-full ">
          <div className="flex justify-center w-full h-full mb-6">
            <img src={ExistLogo} alt="" className="w-[106px] h-[64px]" />
          </div>
          <div className="mb-32 space-y-1 text-center">
            <h2 className="text-[22px] font-extrabold text-customGray-900">
              Are you sure?
            </h2>
            <p className="text-sm text-customGray-1003">
              Your progress will be lost if you exit.
            </p>
          </div>
          <div className="flex flex-col w-[95%]  space-y-2 absolute bottom-7 left-2 customMiniTablet:left-6  customXlg:relative customXlg:bottom-0 customXlg:left-0 customXlg:w-full">
            <button onClick={handleCancel} className=" plaidButton">
              Yes, exisit
            </button>
            <button
              onClick={() => setExistPage(false)}
              className="w-full py-4 text-base font-extrabold border rounded-lg text-customGray-1004 border-customGray-600 hover:border-customGray-1004 hover:bg-customGray-1002 transistion2"
            >
              No go back
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlaidExist;
