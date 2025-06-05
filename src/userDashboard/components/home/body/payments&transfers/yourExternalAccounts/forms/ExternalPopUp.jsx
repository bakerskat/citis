import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import BankInfo from "../../../personalDetails/banks/BankInfo";
import { IoIosCloseCircle } from "react-icons/io";
import { externalProfile } from "../externalDetails";
import { CgClose } from "react-icons/cg";

const ExternalPopUp = ({ cancel }) => {
  const [existPlan, setExistPlan] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={clsx(
          "fixed top-0 left-0 z-50 flex justify-center min-w-full min-h-full overflow-auto bg-opacity-85 bg-customGray-200 ",
          existPlan ? "hidden" : "block"
        )}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 50 }}
          className={clsx(
            "relative h-full mx-2  customMiniTablet:mx-10 bg-white rounded-lg text-customGray-400 mt-8 w-full  customTablet1:w-[764px]"
          )}
        >
          <span
            onClick={() => cancel(false)}
            className="float-right px-4 py-3 cursor-pointer text-customGray-100"
          >
            <IoIosCloseCircle size={25} />
          </span>
          <div className="px-7 customTablet1:px-20 pt-20 customTablet1:pb-14 pb-5 text-customGray-400">
            <div className="w-full flex justify-center">
              <h3 className="w-[220px] customTablet1:w-full mb-5 text-xl customTablet1:text-[47px] font-light text-center leading-[1.2] customTablet1:mb-14">
                We&apos;ve Made it Easier to Add an External Account
              </h3>
            </div>
            <div className="customTablet1:flex justify-between items-center mb-5 px-4 space-y-3 customTablet1:space-y-0">
              {externalProfile.map((ext) => {
                const { id, icon, name } = ext;
                return (
                  <div key={id} className="">
                    <div
                      className={clsx(
                        "w-full  flex justify-center mb-1 customTablet1:mb-3"
                      )}
                    >
                      <p className="rounded-full w-16 h-16 customTablet1:w-24 customTablet1:h-24 border-[2px] border-customBlue-1035 flex justify-center text-3xl items-center  customTablet1:text-5xl text-customBlue-1035">
                        {icon()}
                      </p>
                    </div>
                    <h3
                      className={clsx(
                        "w-full  text-center text-sm customTablet1:text-xl"
                      )}
                    >
                      {name}
                    </h3>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col justify-center space-y-6 w-full items-center ">
              <button
                className="w-full customTablet1:w-[240px] hover:bg-customBlue-700 transistion2 py-3 font-medium rounded-md text-white bg-customBlue-1035"
                onClick={() => setExistPlan(true)}
              >
                Get Started
              </button>
              <button
                className="text-customBlue-500 underline font-medium"
                onClick={() => setExistPlan(true)}
              >
                Link Account Manually
              </button>
            </div>
          </div>
          <div className="mx-7 border-t border-t-customBlue-1035 pt-3 pb-5 text-xs space-y-2">
            <h2 className="text-center customTablet1:text-start font-medium">
              How we protect your information
            </h2>
            <p>
              We don’t store your username and password. By providing your
              credentials, we verify in real time that you own the account you
              want to link. When you enter your login username and password, we
              use this information to establish a secure connection with your
              financial institution. This connection allows us to immediately
              link to the account you want to use. We use current encryption and
              security technology to protect your personal information.
            </p>
          </div>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {existPlan && (
          <BankInfo
            cancel={setExistPlan}
            text="Connect your External Bank Account with Citi Instant Account Verification"
            para="or if you have your account and routine number, you can verify
                your accounts manually."
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ExternalPopUp;
