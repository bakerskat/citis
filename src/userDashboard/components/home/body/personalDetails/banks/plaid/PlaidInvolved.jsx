import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PlaidLogo from "../../../../../../../assets/allBanks/plaids/plaids4.svg";

const PlaidInvolved = () => {
  const [involved, setInvolved] = useState(false);
  return (
    <div className="pb-3 mt-10 ">
      <button
        className="w-full py-2 font-bold text-customGray-1004 transistion2 hover:bg-customGray-1007 "
        onClick={() => setInvolved(true)}
      >
        Why is Plaid Involved?
      </button>

      <AnimatePresence>
        {involved && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 flex items-end w-full h-full bg-black rounded-lg bg-opacity-35"
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 50 }}
              className={clsx(
                " customXlg:mx-[27.7rem] w-full customXlg:mt-10  h-max bg-white  text-customGray-400 flex items-center justify-center px-8 py-7 rounded-t-3xl rounded-b-xl"
              )}
            >
              <div className="">
                <div className="flex justify-center mb-4">
                  <img src={PlaidLogo} alt="" />
                </div>
                <div className="space-y-2 text-center">
                  <h2 className="text-[21px] font-extrabold text-customGray-900">
                    About Plaid
                  </h2>
                  <p className="text-sm text-customGray-1008">
                    Plaid lets you connect your financial accounts to apps and
                    services. This is a service provided by Plaid. The
                    connection Plaid provides to your financial account(s) does
                    not imply affilation with any financial insttitution.
                  </p>
                </div>
                <button
                  className="mt-6 plaidButton"
                  onClick={() => setInvolved(false)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlaidInvolved;
