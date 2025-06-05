import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { IoIosCloseCircle } from "react-icons/io";
import DebitForm from "./DebitForm";
import clsx from "clsx";

const DebitCardInfo = ({ cancel, card }) => {
  const handleCancel = () => {
    cancel(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 z-50 flex justify-center min-w-full min-h-full overflow-auto bg-black bg-opacity-50 "
    >
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
          className="float-right px-8 py-8 cursor-pointer text-customGray-100"
        >
          <IoIosCloseCircle size={32} />
        </span>
        <div className="h-[700px] customMiniTablet:h-full customMiniTablet:px-10 px-5 pb-10 space-y-5 font-light  pt-14 text-customGray-400">
          <h1 className="text-[21px] customMiniTablet:text-[42px] customMiniTablet:leading-[3.4rem]">
            Fund with Your {card}
            {/* Fund with Your Debit Card */}
          </h1>
          <p>
            You can deposit up to $1,000 using your {card}. All we need are your
            card details.
            {/* You can deposit up to $1,000 using your debit card. All we need are
            your card details. */}
          </p>
          <DebitForm cancel={handleCancel} card={card} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DebitCardInfo;
