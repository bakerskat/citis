import useIdleLogout from "../../userDashboard/hooks/useIdleLogout";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosCloseCircle } from "react-icons/io";

const PopUpCancel = () => {
  const { showWarning, cancelLogout, count, formatTime, handleLogout } =
    useIdleLogout();

  return (
    <>
      <AnimatePresence>
        {showWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 z-[9999] flex justify-center min-w-full min-h-full px-2 pt-5 overflow-auto bg-black bg-opacity-75 "
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 50 }}
              className="relative h-full bg-white  text-customGray-400 w-full  customTablet1:w-[750px]"
            >
              <span
                onClick={cancelLogout}
                className="float-right px-6 py-5 text-2xl cursor-pointer customMiniTablet:text-4xl text-customGray-200"
              >
                <IoIosCloseCircle />
              </span>
              <div className="px-4 py-16 customMiniTablet:px-10 text-customGray-400">
                <div className="space-y-5">
                  <h1 className="text-3xl font-light customMiniTablet:text-5xl">
                    Session Time-Out
                  </h1>
                  <p>
                    Due to inactivity, your session will expire in:{" "}
                    <strong className="font-extrabold">
                      {" "}
                      {formatTime(count)}
                    </strong>
                  </p>
                  <p>
                    If additional time is required, please click &quot;Continue
                    Session&quot;. To allow the session to end, click
                    &quot;End&quot;
                  </p>
                </div>
                <div className="flex items-center justify-end gap-5 mt-10 ">
                  <button
                    className="px-20 py-3 font-semibold text-white rounded-lg bg-customBlue-500"
                    onClick={cancelLogout}
                  >
                    Continue
                  </button>
                  <button
                    className=" text-customBlue-500"
                    onClick={handleLogout}
                  >
                    End
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PopUpCancel;
