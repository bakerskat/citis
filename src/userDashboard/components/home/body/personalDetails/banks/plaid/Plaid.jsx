import clsx from "clsx";
import { CgClose } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import headerImage from "../../../../../../../assets/allBanks/plaids/plaids.svg";
import { IoMdCheckmark } from "react-icons/io";
import { plaidRules } from "../bankDetails";
import { useCallback, useState } from "react";
import PlaidBanks from "./PlaidBanks";

const Plaid = ({ cancel, mainCancel, setIsChecked }) => {
  const [selectedBank, setSelectedBank] = useState(false);

  const handleBank = () => {
    setSelectedBank(true);
  };
  const handleCancel = useCallback(() => {
    cancel(false);
    setIsChecked(false);
  }, [cancel, setIsChecked]);

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 50 }}
        className={clsx(
          " h-screen customXlg:h-full bg-white rounded-lg text-customGray-400  customXlg:mx-[27.7rem] w-full customXlg:mt-2 overflow-y-scroll  "
        )}
      >
        <div className={clsx(selectedBank ? "hidden" : "block")}>
          <span
            onClick={handleCancel}
            className="float-right p-4 cursor-pointer text-customBlue-300"
          >
            <CgClose size={20} />
          </span>
          <div className="px-6 pt-16 pb-5">
            <div className="space-y-6 ">
              <div className="flex items-center justify-center ">
                <img src={headerImage} alt="" className="w-[230px] h-[90px]" />
              </div>
              <h2 className="text-xl text-center text-customGray-900">
                Citi uses <span className="font-bold">Plaid</span> to connect
                your account
              </h2>
              <div className="px-4 pt-5 pb-5 space-y-5 text-sm border text-customGray-900 border-customGray-1002 rounded-xl">
                {plaidRules.map((plaid) => {
                  const { id, title, info } = plaid;
                  return (
                    <div key={id} className="flex gap-2 ">
                      <IoMdCheckmark
                        className={clsx(
                          title === "Connect effortlessly"
                            ? "text-[25px]"
                            : "text-xl"
                        )}
                      />
                      <div>
                        <h2 className="mb-1 font-bold">{title}</h2>
                        <p className="text-customGray-1003">{info}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              onClick={handleBank}
              className="plaidButton w-[95%]  absolute bottom-5  left-2 customMiniTablet:left-6 mt-[3rem] mb-3 customXlg:relative customXlg:bottom-0 customXlg:left-0 customXlg:w-full"
            >
              Get Started
            </button>
          </div>
        </div>
        {selectedBank && (
          <AnimatePresence>
            <PlaidBanks
              handleCancel={handleCancel}
              mainCancel={mainCancel}
              setSelectedBank={setSelectedBank}
            />
          </AnimatePresence>
        )}
      </motion.div>
    </>
  );
};

export default Plaid;
